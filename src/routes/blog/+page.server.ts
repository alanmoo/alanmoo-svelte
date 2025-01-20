import contentfulFetch from '$lib/utils/contentful-fetch'
import blogPostsQuery from '../../queries/blogPostsQuery';

export const prerender = true;

export async function load() {
  const { data } = await contentfulFetch(blogPostsQuery)
  const { items } = data.blogEntryCollection
  return {
    blogPosts: items.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }),
  }
}