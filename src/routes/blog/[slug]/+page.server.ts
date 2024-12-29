import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/utils/contentful-fetch'


export async function load({ params, url }) {

  const query = `
{
  blogEntryCollection(where:{slug:"${params.slug}"} preview: ${url.searchParams.get('preview_token') ? true : false}){
  items{
    sys{
     id
    }
    title
    date
    markdown
    content{
      json
    }
  }
  }
}
`
  const response = await contentfulFetch(query, url.searchParams.get('preview_token') || undefined)

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    })
  }

  const { data } = await response.json()
  const { items } = data.blogEntryCollection

  return {
    title: items[0].title as string,
    date: items[0].date,
    unrenderedRichText: items[0].content?.json,
    markdown: items[0].markdown,
    articleId: items[0].sys.id
  }
}