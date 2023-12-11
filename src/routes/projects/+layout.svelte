<svelte:head>
	<title>Moo on the Web</title>
	<meta name="description" content="Some personal projects I've worked on" />
</svelte:head>

<div class="project">
	<slot />
</div>

<style>
	.project {
		max-width: 70ch;
		margin: 0 auto;
	}
	:global(p) {
		line-height: 1.5;
	}
</style>
