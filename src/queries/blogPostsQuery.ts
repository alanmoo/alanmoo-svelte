const blogPostsQuery = `
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

export default blogPostsQuery