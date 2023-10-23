import type { PostMeta } from '$lib/components/types';

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: PostMeta };
			const postPath = path.slice(11, -3);

			const meta: PostMeta = {
				title: metadata.title,
				date: metadata.date,
				summary: metadata.summary || ''
			};

			return {
				meta,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchMarkdownProjects = async () => {
	const allPostFiles = import.meta.glob('/src/routes/projects/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]: [string, () => Promise<any>]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);
			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
