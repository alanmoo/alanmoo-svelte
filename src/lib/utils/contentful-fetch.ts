import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$env/static/private'

const contentfulFetch = async (query: string, token = CONTENTFUL_ACCESS_TOKEN) => {
  const url = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ query }),
  })

  return response
}

export default contentfulFetch