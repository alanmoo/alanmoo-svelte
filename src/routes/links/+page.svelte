<script lang="ts">
  export let data;
</script>

<h1>Links</h1>
<ul>
  {#each data.items as link}
    <h2><a href={link.url}>{link.title}</a></h2>
    <p>{link.description}</p>
  {/each}
</ul>
