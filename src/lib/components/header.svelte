<header class="header">
  <a href="/" class="homepage-link">Alan Mooiman</a>
    <nav class="nav-links">
		<a href="/resume">Resume</a>
		<a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
	  </nav>
</header>

<style>
  @media print {
    .header {
      display: none;
    }
  }
  header { 
    color: var(--theme-dark);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: var(--font-sanSerif);
    padding: 2em 1em;
    max-width: 100ch;
    margin: 0 auto;
  }
  nav {
    gap: 1em;
    display: flex;
    flex-direction: column;
  }
  header a, header a:visited {
    color: var(--theme-dark);
    text-decoration: none;
  }
  .elsewhere {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 0.5em;
  }
  .homepage-link {
    margin-right: 2em;
    margin-bottom: 1em;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  .nav-links :any-link{
    color: var(--theme-dark);
  }
</style>