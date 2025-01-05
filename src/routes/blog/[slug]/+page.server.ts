import contentfulFetch from '$lib/utils/contentful-fetch'
import { parseBlog } from './parseData'
import { blogQuery } from './blogQuery';

export const prerender = true;

export async function load({ params }) {
  const { data } = await contentfulFetch(blogQuery(params.slug));
  return parseBlog(data);
}