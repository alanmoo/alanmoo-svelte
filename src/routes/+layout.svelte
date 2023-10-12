<script lang="ts">
  import Header from "$lib/components/header.svelte"
  import Footer from "$lib/components/footer.svelte"
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>
<Header></Header>
<main>
  <slot />
</main>
<Footer/>
<style>
  :global(body){
      background-color: var(--theme-light);
      font-family: var(--font-sanSerif);
      color: var(--theme-dark);
      font-display: optional;
  }
  :root{
    --theme-dark: hsl(195, 100%, 7%);
    --theme-brown: hsl(23, 85%, 62%);
    --theme-cyan: hsl(177, 72%, 21%);
    --theme-yellow: hsl(52, 100%, 66%);
    --theme-light: hsl(32, 100%, 97%);
    --font-sanSerif: 'Rubik', system-ui, Helvetica, sans-serif;
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
  :global(a:any-link){
    color: var(--theme-cyan);
  }
  main {
    padding: 0 1em;
  }
</style>