---
title: 'I made a neural network learn to dodge bullets, from scratch'
date: 2026-09-12T10:00:00+05:30
slug:
tags: ["C++", "Machine Learning", "NEAT", "Game Dev"]
category: blog
summary:
description:
cover:
  image: "/images/blog/shooter-neuroevolution/gen-6000.gif"
  alt:
  caption:
  relative: true
showtoc: true
draft: false
hideAuthor: true
---

I've wanted to implement NEAT (NeuroEvolution of Augmenting Topologies) from scratch for a while now. Every tutorial I found online just does `pip install neat-python` and calls `.evolve()`, and that felt like cheating myself out of actually understanding it. So I built a small twin-stick space shooter in C++ with raylib, and instead of playing it myself, I let a population of evolving neural networks play it for me.

No PyTorch, no gradient descent, no backprop. Just genomes, mutation, crossover and speciation, all hand rolled.

# The setup

The game itself is nothing fancy. You're a ship in the middle of the screen, enemies spawn and close in on you, you move and aim independently (twin stick, like Geometry Wars) and shoot them before they touch you.

The fun part is what's controlling the ship. Normally with a neural net you have to pick an architecture up front, how many hidden layers, how many neurons, and just hope you guessed right. NEAT does not do that. It starts with the dumbest possible network, every input wired straight to every output, zero hidden nodes, and grows structure over generations through mutation. A connection gets added here, a node gets spliced into an existing connection there, weights get nudged around. Whoever survives longer and scores more gets to pass on their genes. Do that for a few thousand generations and see what happens.

Here's generation 1. A completely random, untrained brain thrown straight into the game:

![Generation 1](/images/blog/shooter-neuroevolution/gen-1.gif)

It doesn't do anything on purpose. Twitches around, faces an enemy by accident once in a while, dies in about 15 seconds with a score of 400. About what you'd expect from a brain that has never seen the game before.

Here's generation 6000, same run:

![Generation 6000](/images/blog/shooter-neuroevolution/gen-6000.gif)

Quite a jump. It's tracking enemies, backing away from groups instead of walking into them, landing shots on purpose. That run survived 278 seconds and scored 20,800, about 50x the first generation, and nobody ever told it "aim at the enemy" or "don't just stand there." It worked all of that out on its own, purely because episodes where it did those things scored higher, generation after generation.

# What it's actually looking at

Every frame the network gets 41 numbers in: its own position, health, velocity, facing direction, distance to the nearest walls, and then position/health/velocity/closing speed for each of the 4 closest enemies, plus a couple of "how surrounded am I right now" signals. I also rotate enemy positions into the player's own facing direction before feeding them in, so "enemy ahead of my gun" and "enemy off to the side" mean the same thing regardless of which way the ship happens to be pointing. That one change made agents learn to aim noticeably faster.

It outputs 5 numbers: move x/y, aim x/y, and a shoot signal. That's the whole interface. Dodging, target picking, kiting, all of it is emergent, built up from a genome that started life as a handful of straight lines.

One thing that surprised me after running a full parameter sweep: I logged the average weight magnitude of every input across the final population, basically a rough "how much does the population actually care about this" number. The single most relied on input, by a decent margin, was the player's own x position. Not enemy distance, not health, not closing speed. Best guess is the map has left/right walls and the agents figured out that knowing where you are relative to them matters a lot for how much room you have to maneuver. I did not expect the network's own position to outrank "how close is the thing trying to kill me," but that's evolution for you, it optimizes for the actual objective, not for what I'd have guessed mattered.

Fitness climbing across the run (4 repeats, population 80, 6000 generations each):

![Fitness over generations](/images/blog/shooter-neuroevolution/fitness-graph.png)

Not a clean line up and to the right, there are stalls in there, and mutation rate ramps up automatically when fitness plateaus and comes back down once it improves again. But the trend is clearly upward.

And here's the fittest genome drawn out as a graph, 41 inputs on one side, 5 outputs on the other, and a tangle of hidden nodes in between that grew there on its own over the run:

![The fittest genome's network structure](/images/blog/shooter-neuroevolution/fittest-genome.png)

I did not design that hidden layer. It's just whatever structure kept winning.

# Things that bit me

A few things worth writing down for future me, since I will definitely forget these in six months.

**Speciation is the whole reason crossover doesn't wreck everything.** I did not fully get why NEAT bothers grouping genomes into species before breeding them, until I hit the reason myself: a brand new structural mutation is almost always worse than the current best genome, until its weights get tuned. If it has to compete head to head against a fully optimized genome right away, it just dies before it ever gets a chance. Species let similar genomes mostly breed among themselves, which buys a new bit of structure a few generations to catch up before it has to prove itself against everyone else.

I actually got bitten by a bug here. Genetic distance, the thing that decides which species a genome belongs to, was counting disabled connection genes as part of genome size. Disabled genes do nothing during gameplay, so counting them let crossover bloat the gene list, which crushed the distance metric toward zero once the list got past a normalization cutoff, which collapsed the whole population into a single species for an entire training run. Took me two separate sweeps before I noticed the species count graph was suspiciously flat at 1, and tracked it down to that one line.

**New nodes start with zero effect, on purpose.** When `MutateAddNode` splits a connection and drops a new hidden node in, its outgoing weight starts at exactly `0.0`. So the instant a new node shows up, it hasn't made the genome any better or worse, behavior is byte for byte identical to before the mutation. It only starts to matter once later weight mutations actually give it something to say. Small detail, but it's the difference between structural exploration being roughly free versus getting punished by the fitness function before it ever had a fair shot.

# What's next

The whole thing is deterministic given a seed, same seed and same code gives you the byte for byte same run regardless of thread count, which is the only reason I could actually track down the speciation bug above instead of chasing a heisenbug for a week. Next I want to try more enemy variety and see if the agents actually generalize or just overfit to the one enemy type they've seen so far. Will report back.

Code's up at [github.com/nikhilCad/shooter-neuroevolution](https://github.com/nikhilCad/shooter-neuroevolution) if you want to poke at it, run your own sweep, or just watch it train live.
