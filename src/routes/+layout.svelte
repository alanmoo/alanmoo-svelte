<script lang="ts">
  import Header from "$lib/components/header.svelte"
</script>
<Header></Header>
<main>
  <slot />
</main>
<footer>
  <p>Made with <a href="https://svelte.dev/">Svelte</a></p>
</footer>

<style>
  :global(body){
      background-color: var(--theme-light);
      font-family: Rubik, serif;
      color: var(--theme-dark);
      font-display: optional;
  }
  :root{
    --theme-dark: hsl(195, 100%, 7%);
    --theme-brown: hsl(23, 85%, 62%);
    --theme-cyan: hsl(177, 72%, 31%);
    --theme-yellow: hsl(52, 100%, 66%);
    --theme-light: hsl(32, 100%, 97%);
    /* --font-sanSerif: 'Rubik', "san-serif"; */
  }
  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--font-sanSerif);
  }
  :global(body){
    margin: 0;
  }
  :global(img){
    max-width: 100%;
  }
  main {
    padding: 0 1em;
  }

  /* TODO: Make the content vertically center itself */
  footer {
      background: var(--theme-cyan);
      color: var(--theme-light);
      min-height: 4rem;
      justify-content: center;
      display: flex;
      margin: 2rem auto 0;
  }

  footer a:any-link, footer a:-webkit-any-link {
    color: inherit;
  }

</style>