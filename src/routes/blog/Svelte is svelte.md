---
layout: post
title:  "Svelte is svelte"
permalink: /blog/svelte-is-svelte/
date: "2023-08-28"
share: true
---

Before I decided to simplify the navigation on this site, I was building it out and had the following markup:

```html
<input class="show-nav" type="checkbox" aria-label="Show navigation">
<div class="nav-links">...</div>
```

And the following styles to style it:
```css
.show-nav:checked .nav-links{
	display: block;
}
```

If you're thinking, "Wait, this won't work," you are correct. [Svelte](https://svelte.dev/) (well, maybe it was [SvelteKit](https://kit.svelte.dev/)) + VSCode also picked up on this, and showed a warning that this doesn't target anything!

![Screenshot 2023-06-25 at 1.05.36 PM.png](Screenshot%202023-06-25%20at%201.05.36%20PM.png#)

Adding a `+` selector fixed it since these are [sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) elements

```css
.show-nav:checked + .nav-links{
	display: block;
}
```


It's a small detail but a nice example of the benefits you get when working within your [framework's suggested workflow](Working%20with%20your%20framework.md#). 
Here's the same link, without a rename: [Working with your framework](Working%20with%20your%20framework.md#)

This is a link to another [published post](2015-in-review.md#)