<script>
	export let data;
	const { title, date, renderedContent } = data;
	let dateFormat = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<article>
	<h1>{title}</h1>
	<p>{dateFormat.format(new Date(date))}</p>
	{@html renderedContent}
</article>

<style>
	article {
		max-width: 70ch;
		margin: 0 auto;
	}
</style>
