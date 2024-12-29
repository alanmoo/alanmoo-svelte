const contentfulPreviewFetch = async (query: string, token: string) => {
  const url = 'https://graphql.contentful.com/content/v1/spaces/' + `v5487e8hadqf`

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

export default contentfulPreviewFetch