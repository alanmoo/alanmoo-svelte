---
title: Server actions and javascript-free form submission
slug: next-server-components
date: 2024-05-17
summary: How to clear a form when using Next.JS server actions
---

Recently, I've been working on a [project to surface roles at interesting companies](https://intentional-jobsearch.vercel.app/). I built it in Next.JS because it's been a while since I had some hands-on time with the framework, and I wanted to see where things are, especially regarding performance and server-side rendering. I'm playing around with server actions, which enable a refreshing revisit to the days before AJAX was a thing: form submission even when Javascript is disabled (or more likely, [when it fails](https://medium.com/@jason.godesky/when-javascript-fails-52eef47e90db)).

The key that enables this is something called [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) alongside a distinction between [server](https://nextjs.org/docs/app/building-your-application/rendering/server-components) and [client](https://nextjs.org/docs/app/building-your-application/rendering/client-components) components. One important thing to understand is the "use client" and "use server" directives that are (sometimes) required when creating components in this old-is-new world of SSR. I didn't quite have a grasp on this, so I went exploring to build out my understanding.

When building a site using the Next.JS [app router](https://nextjs.org/docs/app), `page.tsx` files are all server components by default. So I can have the following code in a page component and it works great:

```tsx
return (
	<form action={addCompany}>
		<label htmlFor="companyName">Company Name</label>
		<input
			type="text"
			name="companyName"
			id="companyName"
			placeholder="Enter company name"
			required
		/>
		<input type="submit" />
	</form>
);
```

There's no state here, and `addCompany` is a [server action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations). Submission happens server-side with a document-level POST if JS is disabled, then the page refreshes. If JS is enabled, it makes a fetch POST request, and the page updates on the client side. This is a great example of progressive enhancement (or graceful degradation, depending on your perspective) for situations when JS is unavailable.

The problem I ran into from here is that I want to clear the form on submission. This actually happens if JS is disabled since a full page reload takes place. But as [this conversation](https://github.com/vercel/next.js/discussions/58448) discusses, it's not as obvious what to do when the view gets a client-side update.

Looking at what's happening, I realized I needed to do some JS manipulation on this. Two approaches come to mind: `useState` and `useRef`. I played around with `useRef` a bit to see if I could call a `reset()` on the form, but I couldn't find a solution that felt correct. I was trying to work on it from a native browser API perspective, but I was already inside React, so it was a tug-of-war trying to break back out of it.

As I advanced to try leveraging state, I wanted to keep this as simple a use case as possible, so I moved only the `input` to a new component, leaving the form in the `page.tsx` file.

```tsx
'use client';

import { useState } from 'react';

export default function TextInput() {
	const [newCompanyName, setNewCompanyName] = useState('');

	return (
		<input
			value={newCompanyName}
			onChange={(e) => setNewCompanyName(e.target.value)}
			type="text"
			name="companyName"
			id="companyName"
			placeholder="Enter company name"
			required
		/>
	);
}
```

Note that since I'm using `useState`, I needed to mark this component as a client component with `"use client";` at the top, as the server is stateless and thus doesn't, you know, handle state changes. I didn't want to make the entire page a client component, as that would too broadly eliminate the benefits of server rendering. (Also, eslint became very upset with me when I tried, so I slowly backed away.)

My important realization here was that the client component still rendered just fine with JS disabled; it just didn't have interactivity. I could still submit the form and see similar behaviors as before: A JS fetch (POST) or HTML POST if javascript is disabled.

From here, understanding React came back to the table and I moved the state management back where it belongs: outside of the input component, and at the form level:

```tsx
const [newCompanyName, setNewCompanyName] = useState('');

return (
	<form action={addCompany}>
		<label htmlFor="companyName">Company Name</label>
		<input
			value={newCompanyName}
			onChange={(e) => setNewCompanyName(e.target.value)}
			type="text"
			name="companyName"
			id="companyName"
			placeholder="Enter company name"
			required
		/>
		<input type="submit" />
	</form>
);
```

And now, when we want to do something after the form has submitted?

It's as simple as a classic `onSubmit` handler! (Just don't shoot yourself in the foot and use `event.preventDefault` in it.)

```tsx
const [newCompanyName, setNewCompanyName] = useState('');

return (
	<form action={addCompany} onSubmit={() => setNewCompanyName('')}>
		<label htmlFor="companyName">Company Name</label>
		<input
			value={newCompanyName}
			onChange={(e) => setNewCompanyName(e.target.value)}
			type="text"
			name="companyName"
			id="companyName"
			placeholder="Enter company name"
			required
		/>
		<input type="submit" />
	</form>
);
```

Now, is this done? No, not at all. Right now, the form will clear state while the submission is taking place, leaving the user in UI limbo for a moment. I'll want to clarify to the user that something is happening behind the scenes and prepare for success, failure, and errors. But that's a more common pattern I'll leave to the reader (or maybe write up in another post as I play with the currently-experimental [useOptimistic](https://react.dev/reference/react/useOptimistic) hook).

# Takeaways

Here's what I've learned from this, please ping me on [Mastodon](https://xoxo.zone/alanmoo) if I've come to any sort of incomplete conclusion here:

- "Server components" is a bit misleading - you can pretend it means "universal" as it indicates a component can be rendered on both client and server
- "Client components" (indicated by `"use client"` at the top of the file) can be statically rendered at build time; they just indicate the server shouldn't try to run them as they rely on APIs that are only available to clients.
- Form `action` props can be handled in both client and server environments, depending on the user need (e.g. if JS is supported in the client)
- `onSubmit` still works after a client-side `action` is run; just remember not to call `event.preventDefault` or your action won't run.
