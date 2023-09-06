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

  :global(pre) {
    background: var(--theme-dark);
    color: var(--theme-light);
    max-width: 100vw;
    border: 1px solid var(--theme-brown);
    padding: 1em;
    text-wrap: wrap;
  }

  :global(code){
    color: var(--theme-light);
    background: var(--theme-dark);
  }


</style>