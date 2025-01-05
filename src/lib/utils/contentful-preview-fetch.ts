import { error } from '@sveltejs/kit'
import { PUBLIC_CONTENTFUL_SPACE_ID } from '$env/static/public'

const contentfulPreviewFetch = async (query: string, token: string) => {
  const url = 'https://graphql.contentful.com/content/v1/spaces/' + PUBLIC_CONTENTFUL_SPACE_ID
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    })
  }
  const json = await response.json()
  return json;
}

export default contentfulPreviewFetch