<div class="blog">
  <slot></slot>
</div>

<style>
  .blog {
    max-width: 70ch;
    margin: 0 auto;
  }
  :global(p) {
    line-height: 1.5;
  }
</style>