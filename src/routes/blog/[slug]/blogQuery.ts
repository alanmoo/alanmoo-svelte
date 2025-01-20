// This is a hack until I support .gql files
export const blogQuery = function (slug: string, preview: boolean = false) {
  return `
  {
  blogEntryCollection(where:{slug:"${slug}"} preview: ${preview}){
  __typename
  items{
  __typename
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
}