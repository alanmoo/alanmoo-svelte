<script lang="ts">
  export let data;
</script>

<li class="blog-post">
  <h2>
    <a href="blog/{data.slug}">
      {data.title}
    </a>
  </h2>
  <p class="post-summary">{data.summary}</p>
</li>

<style>
  .blog-post {
    list-style: none;
  }
  .post-summary:empty {
    display: none;
  }
</style>
