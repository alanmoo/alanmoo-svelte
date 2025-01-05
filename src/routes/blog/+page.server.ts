import contentfulFetch from '$lib/utils/contentful-fetch'

export const prerender = true;

const query = `
{
  blogEntryCollection{
    items{
      title
      slug
      date
      summary
    }
  }
}
`

export async function load() {
  const { data } = await contentfulFetch(query)
  const { items } = data.blogEntryCollection
  return {
    blogPosts: items.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }),
  }
}