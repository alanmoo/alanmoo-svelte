<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
  import "../main.css";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    padding: 0 1.5em;
    max-width: 100ch;
    margin: 0 auto;
  }
</style>
