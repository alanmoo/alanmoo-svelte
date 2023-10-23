<script lang="ts">
	import Card from './card.svelte';

	export let company: String, title: String, tenure: String, description: String;
</script>

<a class="card" href="/resume#{company}">
	<h3 class="company">{company}</h3>
	<div class="job-title">{title}</div>
	<div class="tenure">{tenure}</div>
	<div class="description">{description}</div>
</a>

<style>
	.company {
		margin-bottom: 0.5em;
	}
	.job-title {
		font-weight: bold;
		margin: 0.5em 0;
	}
	.tenure {
		font-size: 1rem;
		font-style: italic;
		margin: 0.5em 0;
	}
	.description {
		font-size: 0.9rem;
	}
</style>
