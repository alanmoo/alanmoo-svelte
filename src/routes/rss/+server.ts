import type { RequestHandler } from './$types';
import blogPostsQuery from '../../queries/blogPostsQuery';
import contentfulFetch from '$lib/utils/contentful-fetch';

export const GET: RequestHandler = async () => {
  const { data } = await contentfulFetch(blogPostsQuery)
  const { items } = data.blogEntryCollection
  const blogPosts = items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const feedItems = blogPosts.map(post => {
    return `
    <item>
      <guid>https://alanmooiman.com/blog/${post.slug}</guid>
      <title>${post.title}</title>
      <link>https://alanmooiman.com/blog/${post.slug}</link>
      <description><![CDATA[${post.summary}<br/><br/>Read more on the site...]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
  }).join('');

  let res = {
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=86400, stale-while-revalidate=86400'
    },
    body: `
    <?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
          <atom:link href="http://alanmooiman.com.com/rss" rel="self" type="application/rss+xml" />
          <title>Moo on the Web</title>
          <link>https://alanmooiman.com</link>
          <description>Alan Mooiman's blog</description>${feedItems}
        </channel>
      </rss>`
  };

  return new Response(res.body, { headers: res.headers });
}