---
title: Shifting layout bug in a SvelteKit project
slug: svelte-shifting-layout
date: 2023-10-23
summary: One of those simple fixes once it's found, maybe this will help someone else.
tags: bugfix
---

While working on this site, I noticed a strange bug on the homepage. The page layout would shift slightly when I'd hover on a card component (but not return unless the page is refreshed), as shown in the following video:

![A screen capture demonstrating the layout shifting as I hover over a link](/Svelte-shift-on-hover.gif)

I explored a bit, disabling all the card component CSS I could find, but it would still happen. Digging into the browser dev tools, I noticed that the `line-height` was changing for the `p` elements inside the cards. When I looked at where the new line height was coming from, it turned out it was from a style inside the _blog post_ component, which is the target of the card link. It turned out I had the following style in the blog post component, a result of designing the site as I built it while learning Svelte.

```
  :global(p, li) {
    line-height: 1.5;
  }
```

This was getting pulled in on hover because, as I then realized, I was using Svelte's [preload data](https://kit.svelte.dev/docs/link-options#data-sveltekit-preload-data) attribute set to `hover` on the body of the page. I wanted to keep that, so I moved the `line-height` style to the global CSS file it just so happened I'd recently created, since this is exactly the kind of style that I believe should be defined once globally for base element types, in conjunction with your font stack.