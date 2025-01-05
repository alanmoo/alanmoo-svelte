<script lang="ts">
  import { ContentfulLivePreview } from "@contentful/live-preview";
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import SvelteMarkdown from "svelte-markdown";
  import contentfulPreviewFetch from "$lib/utils/contentful-preview-fetch";
  import { blogQuery } from "./blogQuery";

  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { parseBlog } from "./parseData";

  export let data;
  $: ({ title, date, articleId, unrenderedRichText, markdown } = data);
  let dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  onMount(async () => {
    const previewToken = $page.url.searchParams.get("preview_token");
    if (previewToken) {
      ContentfulLivePreview.init({ locale: "en-US" });
      const previewData = await contentfulPreviewFetch(
        blogQuery($page.params.slug, true),
        previewToken,
      );
      data = parseBlog(previewData.data);
    }
  });
</script>

<article data-contentful-asset-id={articleId}>
  <h1
    {...ContentfulLivePreview.getProps({
      entryId: articleId,
      fieldId: "title",
    })}
  >
    {title}
  </h1>
  <p
    {...ContentfulLivePreview.getProps({
      entryId: articleId,
      fieldId: "date",
    })}
  >
    {dateFormat.format(new Date(date))}
  </p>
  {@html documentToHtmlString(unrenderedRichText)}
  <div
    {...ContentfulLivePreview.getProps({
      entryId: articleId,
      fieldId: "markdown",
    })}
  >
    <SvelteMarkdown source={markdown} />
  </div>
</article>

<style>
  article {
    max-width: 70ch;
    margin: 0 auto;
  }
</style>
