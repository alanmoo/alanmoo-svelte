import contentfulFetch from '$lib/utils/contentful-fetch'
import { blogQuery } from './blogQuery';

export const prerender = true;

export async function load({ params }) {
  const { data } = await contentfulFetch(blogQuery(params.slug));
  return data;
}