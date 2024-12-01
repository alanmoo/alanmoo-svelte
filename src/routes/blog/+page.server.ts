import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/utils/contentful-fetch'

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
  const response = await contentfulFetch(query)

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    })
  }

  const { data } = await response.json()
  const { items } = data.blogEntryCollection

  return {
    blogPosts: items.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        date: post.date,
        summary: post.summary,

      }
    }),
  }
}