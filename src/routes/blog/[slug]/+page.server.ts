import contentfulFetch from '$lib/utils/contentful-fetch'
import { blogQuery } from './blogQuery';
import type { PageServerLoad } from './$types';


export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  const { data } = await contentfulFetch(blogQuery(params.slug));
  return data;
}