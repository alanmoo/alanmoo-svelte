export const parseBlog = function (data) {
  const { items } = data.blogEntryCollection;
  return {
    title: items[0].title as string,
    date: items[0].date,
    unrenderedRichText: items[0].content?.json,
    markdown: items[0].markdown,
    articleId: items[0].sys.id
  }
}