---
title: Svelte is svelte
slug: svelte-is-svelte
date: 2023-08-28
summary: I've started using SvelteKit to build this site and there are some nice features it brings by default.
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

If you're thinking, "Wait, this won't work," (because the `input` element is self-closing) you are correct. [Svelte](https://svelte.dev/) (well, maybe it was [SvelteKit](https://kit.svelte.dev/)) + VSCode also picked up on this, and showed a warning that this doesn't target anything!

![A screenshot of VSCode with the above code showing a warning that reads `Unused CSS Selector '.show-nav:checked .nav-links'`](/Svelte%20CSS%20linting.png)

Adding a `+` selector fixed it since these are [sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) elements

```css
.show-nav:checked + .nav-links{
	display: block;
}
```

It's a small detail but a nice example of the benefits you get when working within your framework's suggested workflow.
