<div class="blog">
	<slot />
</div>

<svelte:head>
	<title>Moo on the Web</title>
	<meta
		name="description"
		content="Web development, eng leadership, urban design, and tech thoughts"
	/>
</svelte:head>

<style>
	.blog {
		max-width: 70ch;
		margin: 0 auto;
	}

	:global(pre) {
		background: var(--theme-dark);
		color: var(--theme-light);
		max-width: 100vw;
		border: 1px solid var(--theme-brown);
		padding: 1em;
		white-space: pre-wrap;
	}

	:global(code) {
		color: var(--theme-light);
		background: var(--theme-dark);
		white-space: pre-wrap;
		padding: 0 0.5ch;
	}
</style>
