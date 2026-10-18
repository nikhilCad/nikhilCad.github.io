---
title: 'NEAT Twin-Stick Shooter Agent'
date: 2026-10-18
slug:
tags: ["C++"]
category: blog 
summary:
description: 
cover:
  image: "/images/projects/neat-shooter.png"
  alt:
  caption: 
  relative: true
showtoc: true
draft: false
hideAuthor: true
---

<!-- SYNCED:BODY:START -->
 - Built a **NEAT (NeuroEvolution of Augmenting Topologies)** agent from scratch in **C++**, evolving both neural-network topology and weights without ML libraries or gradient descent to play a twin-stick space shooter.
 - Engineered a **41-feature real-time game-state representation** and self-growing neural architecture, improving score **52x** ($400 \rightarrow 20,800$) and survival time **18x** (15s $\rightarrow$ 278s) over 6,000 generations.
 - Designed a **parallelized experiment framework** for population-size sweeps and repeated trials across CPU threads, reducing a 4-repeat, 6,000-generation, population-80 sweep to **~12 minutes** wall-clock time.
 - Implemented **deterministic seed-based reproducibility** across simulation, mutation, crossover, and selection, alongside automated checkpoint/GIF recording, genome visualization, and input-sensitivity analysis across 1,000+ evolved genomes.
<!-- SYNCED:BODY:END -->
