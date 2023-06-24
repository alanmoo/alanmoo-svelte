<script>
  export let data
  </script>
  
  <h1>Projects</h1>
    
  <ul>
    {#each data.projects as project}
      <li>
        <h2>
          <a href={project.path}>
            {project.meta.title}
          </a>
        </h2>
        <time>{project.meta.date}</time>
      </li>
    {/each}
  </ul>