import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/utils/contentful-fetch'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';



export async function load({ params }) {
  const query = `
{
  blogEntryCollection(where:{slug:"${params.slug}"}){
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
  const response = await contentfulFetch(query)

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