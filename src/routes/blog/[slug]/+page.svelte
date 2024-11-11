<script>
	export let data;
	const { title, date, content } = data;
	let dateFormat = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	console.log(data);
</script>

<article>
	<h1>{title}</h1>
	<p>{dateFormat.format(new Date(date))}</p>
	{content}
</article>

<style>
	article {
		max-width: 70ch;
		margin: 0 auto;
	}
</style>
