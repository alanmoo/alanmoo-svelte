<script lang="ts">
	import type { Post } from './types';
	export let data: Post;
	let date = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', dateStyle: 'medium' }).format(
		new Date(data.meta.date)
	);
</script>

<li class="blog-post">
	<h2>
		<a href={data.path}>
			{data.meta.title}
		</a>
	</h2>
	<p class="post-summary">{data.meta.summary}</p>
</li>

<style>
	.blog-post {
		list-style: none;
	}
	.post-summary:empty {
		display: none;
	}
</style>
