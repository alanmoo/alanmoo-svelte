import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/utils/contentful-fetch'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';



export async function load({ params, url }) {

  const query = `
{
  blogEntryCollection(where:{slug:"${params.slug}"} preview: ${url.searchParams.get('preview_token') ? true : false}){
  items{
    title
    date
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
  const renderedContent = documentToHtmlString(items[0].content.json)
  return {
    title: items[0].title,
    date: items[0].date,
    renderedContent: renderedContent,
  }
}