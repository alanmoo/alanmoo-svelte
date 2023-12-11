<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	import '../../main.css';
</script>

<svelte:head>
	<meta
		name="description"
		content="Alan Mooiman is a software engineering leader and an advocate for an people first, accessible world, both online and offline"
	/>
</svelte:head>
<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		padding: 0 1.5em;
	}
</style>
