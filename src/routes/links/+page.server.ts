import contentfulFetch from '$lib/utils/contentful-fetch'
import linksQuery from './linksQuery';

export const prerender = true;

export async function load() {
  const { data } = await contentfulFetch(linksQuery)
  const { items } = data.linkedArticleCollection
  return {
    items
  }
}