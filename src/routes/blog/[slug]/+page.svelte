<script lang="ts">
  // import contentfulPreviewFetch from "$lib/utils/contentful-preview-fetch.js";
  import { ContentfulLivePreview } from "@contentful/live-preview";
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import SvelteMarkdown from "svelte-markdown";

  import { onMount } from "svelte";
  import { page } from "$app/stores";

  export let data;
  export let { title, date, articleId, unrenderedRichText, markdown } = data;
  // let previewData = null;
  let dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  onMount(async () => {
    if ($page.url.searchParams.get("preview")) {
      ContentfulLivePreview.init({ locale: "en-US" });
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
