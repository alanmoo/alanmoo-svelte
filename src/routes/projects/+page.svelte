<script>
	export let data;
	let dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' });
</script>

<h1>Projects</h1>

<ul>
	{#each data.projects as project}
		<li>
			<h2>
				<a href={project.path}>
					{project.meta.title}
				</a>
			</h2>
			<time>{dateFormat.format(new Date(project.meta.date))}</time>
		</li>
	{/each}
</ul>
