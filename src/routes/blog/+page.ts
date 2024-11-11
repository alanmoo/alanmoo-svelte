import type { Post } from '$lib/components/types.js';

export const load = async ({ fetch, data },) => {
	const response = await fetch(`/api/posts`);
	const posts: Post[] = await response.json();
	return {
		posts,
		blogPosts: data.blogPosts
	};
};
