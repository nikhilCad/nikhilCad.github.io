---
title: 'How I made C++ readable to type in Competitive programming'
date: 2024-04-24T23:58:56+05:30
slug:
tags: ["Codeforces"]
category: blog 
summary:
description: 
cover:
  image: "/images/blog/codeforces.png"
  alt:
  caption: 
  relative: true
showtoc: true
draft: false
hideAuthor: true
---

So I have started my competitive programming journey using Python instead of C++. And it was great! The one thing that I love the most about Python is how easily readable the code is. There are some great keywords like `in` and the beloved `for i in range(start,end,step)` whose value I did not realize until I started using C++. You start to appreciate the simplicity of `print` after writing your 5th `<<` in `cout`

# Why C++ though?

Because competitive contest problem setters focus more on C++, is the short answer. the long answer is that Python is slower than C++. but this gap is mostly not **normalized** for Python, which means the same logic in C++ might run flawlessly, but when you write the exact same logic in Python, it will give you TLE. I know this because this has happened way too often to me.

That is not to say it is impossible to use Python, this profile https://codeforces.com/profile/pajenegod mostly uses Python, and they are a Grandmaster on Codeforces. But its not that easy, they have to put in extra effort to know the ins and outs of the language

# So whats the solution?

Macros! Now I know that macros could have some very strange side-effects on your code and can lead to unexpected results. Read this excellent post on codeforces to get an idea - https://codeforces.com/blog/entry/100941. But the trade-off you gain in speed and readability is just too good to leave.

Here are some of my Macros I have accumulated from over the internet

Vectors are used WAY too commonly, but their methods are a little tedious to type.

```
typedef vector<int> vi;

typedef pair<int,int> pi;

#define F first

#define S second

#define PB push_back

#define MP make_pair
```

Let us implement the beautiful `in` keyword from Python in macros

`
#define vfind(ele, vi) ( find(vi.begin(), vi.end(), ele) != vi.end() )
`

What about the `range` keyword

```
#define REP(i,a,b) for (int i = a; i <= b; i++)

#define swap(x,y) { x = x + y; y = x - y; x = x - y; }
```

And a little helper for iterators

`
#define all(x) (x).begin(), (x).end()
`

And now my favourite and the one that I use the most

```
void log(){}

template<typename First, typename ...Rest>

void log(First && first, Rest && ...rest)
{
    std::cout << std::forward<First>(first) << " ";
    log(std::forward<Rest>(rest)...);
}
```

Now I can debug extremely easily

`
log(n, x, "String", 'c',1, 2.0)
`

This all might look trivial to you, but let me assure you that when you repeatedly type the same thing over and over and over again, you just start to think if only there was something you could do.

# Editor
I used to use VS Code with the setup shown in this video https://www.youtube.com/watch?v=h3uDCJ5mvgw

The problem? If you somehow get the code to run in a infinite loop, good luck trying to figure out something wrong. I also find the UI to be a little overwhelming(which is funny since I use VS Code at my internship) when all I want is simple text-editor-like UI for competitive programming. I do not want all the great features of VS Code to do a simple task of writing a CPP file and matching the test cases.

I dabbled around with `neovim` and the great `competitest` plugin here https://github.com/xeluxee/competitest.nvim , which honestly was amazing, it was fast both program-wise and functionality wise. Plus, you can use it on Termux! Codeforces on your tablet!

Another solution is https://codeforces.com/blog/entry/71673 This Editor is honestly life changing. You can define your template file so every new file you create will have that template. Plus it has a nice test cases view which is pretty good. And best of all this actually exits your code without wasting your 10 seconds in case of a infinite loop run. I will recommend this to you if you find neovim overwhelming.

That was about it, have a great day!