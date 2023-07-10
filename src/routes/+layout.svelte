<script lang="ts">
  import Header from "$lib/components/header.svelte"
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>
<Header></Header>
<main>
  <slot />
</main>
<footer>
  <ul class="elsewhere">
    <li><a href="https://xoxo.zone/@Alanmoo"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><title>Mastodon</title><path d="M7.5 22a5.5 5.5 0 10-4.764-2.75l-.461 2.475 2.475-.46A5.474 5.474 0 007.5 22z" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.282 17.898A7.946 7.946 0 0018 16.93l3.6.67-.67-3.6A8 8 0 106.083 8.849" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
    <li><a href="https://github.com/alanmoo"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><title>Github</title><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
    <li><a href="https://www.instagram.com/alanmoo/"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><title>Instagram</title><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="currentColor" stroke-width="2.3"></path><path d="M17.5 6.51l.01-.011" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
    <li><a href="https://linkedin.com/in/amooiman"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
  </ul>
  <p>Made with <a href="https://kit.svelte.dev/">SvelteKit</a></p>
</footer>

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
    --theme-cyan: hsl(177, 72%, 31%);
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

  /* TODO: Make the content vertically center itself */
  footer {
      background: var(--theme-cyan);
      color: var(--theme-light);
      min-height: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem auto 0;
  }

  footer a:any-link, footer a:-webkit-any-link {
    color: inherit;
  }

  .elsewhere {
    list-style: none;
    display: flex;
    gap: 1rem;
    color: var(--theme-light);
    padding-left: 0;
  }

</style>