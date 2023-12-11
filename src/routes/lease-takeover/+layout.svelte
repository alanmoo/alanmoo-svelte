<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	import '../../main.css';
</script>

<svelte:head>
	<title>Rent stabilized lease takeover!</title>
	<meta name="description" content="Rent stabilized 1BR for rent in Crown Heights, Jan 1" />
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
