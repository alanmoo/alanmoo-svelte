<script>
	import JobCard from '../lib/components/jobCard.svelte';
	let experiences = [
		{
			company: 'Policygenius',
			title: 'Engineering Manager ➡ Senior Engineering Manager',
			tenure: '2021-2023',
			description:
				'Engineering manager for content and top-of-funnel teams, as well as leading our component library development to be more performant'
		},
		{
			company: 'SquareFoot',
			title: 'Engineering Manager',
			tenure: 'Jan 2020-2021',
			description: 'A commercial real estate startup I joined with unfortunate timing'
		},
		{
			company: 'Mozilla Foundation',
			title: 'Engineer ➡ Engineering Manager',
			tenure: '2015-2020',
			description:
				'Transitioned from IC to EM in 2017, led 8 engineers primarily working on sites to further the non-profit mission'
		},
		{
			company: 'E*Trade Financial',
			title: 'Prototype Developer',
			tenure: '2013-2015',
			description:
				'Engineer embedded in design team to create prototypes that ultimately shortened production development cycles'
		}
	];
</script>

<div class="intro">
	<h1>👋 Hi, I'm:</h1>
	<ul>
		<li>An advocate for an people first, accessible world, both online and offline</li>
		<li>
			An experienced engineering leader passionate about empowering individuals on my teams to
			develop their skills while building performant, standards-compliant web applications.
		</li>
		<li>
			Inclined to ship and iterate rather than let perfect be the enemy of good (see: this site
			design)
		</li>
	</ul>
</div>

<section>
	<h2>Projects</h2>
	<div class="card-wrapper">
		<a class="card" href="/projects/vestaweather">
			<h3>Vestaweather</h3>
			<p>A weather application for Vestaboard</p>
		</a>
		<a class="card" href="/projects/sparkle-moose-lounge">
			<h3>Sparkle Moose Lounge</h3>
			<p>A home design project with some interesting constraints</p>
		</a>
	</div>
</section>

<section>
	<h2>Where I've worked</h2>
	<div class="card-wrapper">
		{#each experiences as experience}
			<JobCard {...experience} />
		{/each}
	</div>
</section>

<style>
	.card-wrapper {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}
	.card-wrapper > * {
		flex: 1;
	}

	a p {
		text-decoration: none;
	}

	.intro {
		max-width: 70ch;
		margin: 4vw auto;
		line-height: 1.5;
	}

	section {
		max-width: 100ch;
		margin: 4em auto 0;
	}
</style>
