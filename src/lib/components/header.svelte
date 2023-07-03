<header class="header">
  <a href="/">Alan Mooiman</a>
  <input class="show-nav" type="checkbox" id="nav" aria-label="Show navigation"><label for="nav"><svg width="1em" height="1em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></label>
  <div class="nav-links">
    <nav>
		<a href="/resume">Resume</a>
		<a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
	  </nav>
    <ul class="elsewhere">
      <li><a href="https://xoxo.zone/@Alanmoo"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><title>Mastodon</title><path d="M7.5 22a5.5 5.5 0 10-4.764-2.75l-.461 2.475 2.475-.46A5.474 5.474 0 007.5 22z" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.282 17.898A7.946 7.946 0 0018 16.93l3.6.67-.67-3.6A8 8 0 106.083 8.849" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
      <li><a href="https://github.com/alanmoo"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><title>Github</title><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
      <li><a href="https://www.instagram.com/alanmoo/"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><title>Instagram</title><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#000000" stroke-width="2.3"></path><path d="M17.5 6.51l.01-.011" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
      <li><a href="https://linkedin.com/in/amooiman"><svg width="2em" height="2em" stroke-width="2.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>
    </ul>
  </div>
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
    padding: 2em 0;
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

  .nav-links {
    display: none;
  }
  #nav{
    visibility: hidden;
  }
  
  @media screen and (max-width: 500px){
    label[for="nav"]{
      transition: transform 0.5s; 
    }
  .show-nav:checked + label {
    transform: rotate(450deg);
    z-index: 1;
  }
  .show-nav:checked ~ .nav-links{
    transform: translateY(0);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1em;
    position: static;
    background: var(--theme-cyan);
    width: 100%;
    transition: transform .5s;
    transform: translateY(-250%);
  }
  .nav-links :any-link{
    color: var(--theme-light);
  }
}
  @media screen and (min-width: 500px){
    nav {
      flex-direction: row;
    }
    #nav, label[for="nav"] {
      display: none;
    }
    .show-nav ~ .nav-links {
      position: initial;
      width: initial;
      display: flex;
      background: inherit;
      gap: 1em;
    }
    .nav-links :any-link {
      color: var(--theme-dark);
    }
  }
</style>