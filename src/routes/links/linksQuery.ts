const linksQuery = `
query{
  linkedArticleCollection(order:sys_publishedAt_DESC){
    items{
      sys{
        id
        publishedAt
      }
      title
      url
      description
    }
  }
}
`

export default linksQuery