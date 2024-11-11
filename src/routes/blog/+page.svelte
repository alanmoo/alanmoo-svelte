<script lang="ts">
	import BlogPost from '$lib/components/blogPost.svelte';
	export let data;
</script>

<h1>Blog</h1>
<ul>
	{#each data.blogPosts as post}
		<!-- {post.title} -->
		<BlogPost data={post} />
	{/each}
</ul>
