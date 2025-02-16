<script lang="ts">
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import SvelteMarkdown from "svelte-markdown";
  import { blogQuery } from "./blogQuery";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  export let data;
  $: ({ title, date, unrenderedRichText, markdown } =
    data.blogEntryCollection.items[0] || "");
  $: articleId = data.blogEntryCollection.items[0].sys.id;
  let dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let ContentfulLivePreview: any;

  $: getContentfulProps = (fieldId: string) => {
    if (typeof ContentfulLivePreview !== "undefined") {
      return ContentfulLivePreview.getProps({
        entryId: articleId,
        fieldId,
      });
    }
    return {};
  };

  onMount(async () => {
    const previewToken = $page.url.searchParams.get("preview_token");
    if (previewToken) {
      const contentfulPreviewFetch = (
        await import("$lib/utils/contentful-preview-fetch")
      ).default;
      ContentfulLivePreview = (await import("@contentful/live-preview"))
        .ContentfulLivePreview;
      const locale = "en-US";
      ContentfulLivePreview.init({ locale, enableLiveUpdates: true });
      const previewData = await contentfulPreviewFetch(
        blogQuery($page.params.slug, true),
        previewToken,
      );
      data = previewData.data;
      ContentfulLivePreview.subscribe({
        data,
        locale,
        callback: (newData) => {
          data = newData;
        },
      });
    }
  });
</script>

<article data-contentful-asset-id={articleId}>
  <h1 {...getContentfulProps("title")}>
    {title}
  </h1>
  <p {...getContentfulProps("date")}>
    {dateFormat.format(new Date(date))}
  </p>
  {unrenderedRichText}
  {@html documentToHtmlString(unrenderedRichText)}
  <div {...getContentfulProps("markdown")}>
    <SvelteMarkdown source={markdown} />
  </div>
</article>

<style>
  article {
    max-width: 70ch;
    margin: 0 auto;
  }
</style>
