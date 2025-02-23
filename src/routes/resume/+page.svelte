<script lang="ts">
  let managementStart = new Date("May 8, 2017");
  let industryStart = new Date("February 13, 2012");
  let now = new Date();
  let managementTime = timeSpanFormatter(managementStart, now, true);
  let industryTime = timeSpanFormatter(industryStart, now, true);

  function timeSpanFormatter(start: Date, end: Date, asFraction = false) {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0) {
      months += 12;
    }

    if (asFraction) {
      return `${years}${months >= 6 ? ".5" : "+"} years`;
    } else {
      return `${years} years, ${months} months`;
    }
  }
</script>

<div class="resume">
  <div class="show-print">
    <small
      >Printed/PDF'ed from <a href="http://alanmooiman.com/resume"
        >alanmooiman.com/resume</a
      ></small
    >
  </div>
  <header>
    <h1>Alan Mooiman, Engineering Leader in NYC</h1>
    <span class="contact_info">
      <a
        class="email"
        href="mailto:hello@alanmooiman.com?subject=👋 Nice résumé"
        >hello@alanmooiman.com</a
      >
    </span>
    <p>
      I am a product-minded engineering leader passionate about user experience,
      performance, and accessibility. I operate with a heavy focus on team
      effectiveness, partnering with product stakeholders to build systems and
      goals that reduce technical debt while continually delivering improvements
      for the business. As a result of working on distributed teams for a
      decade, I constantly advocate for improvements in organizational
      communication through synchronous and asynchronous channels. I leverage
      these improvements to create alignment and build support for the most
      impactful technical metrics to watch when building our solutions within
      the team and across the broader organization.
    </p>
  </header>
  <div class="content">
    <section class="metadata">
      <h2>TL;DR</h2>
      <p>
        <span id="industryTime">12+ years</span> in software engineering, primarily
        focused on UI and web
      </p>
      <p>
        <span id="managementTime">7+ years</span> of engineering leadership
      </p>
      <p>A proponent of leveraging the core web platform whenever possible</p>
      <p>
        Focused on leading teams to solve problems for the business via a
        generative, devOps-oriented culture
      </p>

      <h2>Ideal role</h2>
      <p>Hybrid in NYC, open to remote.</p>
      <p>Engineering Manager or Director</p>

      <h2>Leadership strengths</h2>
      <p>
        Team vision crafting, OKR setting, building alignment, team
        effectiveness, developer efficiency (DevEx)
      </p>
      <h2>Tech strengths</h2>
      <p>
        HTML, CSS, Javascript, web performance (Core Web Vitals, Lighthouse),
        React, Svelte, Gatsby, Next.js, GraphQL, Typescript, Node, Webpack,
        Contentful, Cypress, Jest, Buildkite, Datadog, Storybook, Wagtail,
        Django, Flask, Python, Vercel, Docker, AWS
      </p>
      <h2>Extracurriculars</h2>
      <h3>Conferences/Festivals</h3>
      <ul>
        <li><a href="https://cascadiajs.com/">CascadiaJS</a> (2015 speaker)</li>
        <li>
          <a href="https://xoxofest.com/">XOXO Festival</a> (2016, 2018, 2019, 2024)
        </li>
        <li><a href="https://perfnow.nl/">Performance.now</a> (2023, 2024)</li>
        <li><a href="https://leaddev.com/">Lead Dev</a> (2019, 2023)</li>
      </ul>
      <p>
        <a href="https://transalt.org/">Transportation Alternatives</a> member/activist
        since 2022
      </p>
      <p>
        <a href="https://ohny.org">Open House New York</a> member/volunteer since
        2019
      </p>
      <p>2+ year Duolingo Danish streak just because I'm commited to a bit</p>
      <h2>Personal Projects</h2>
      <h3><a href="https://lassojobs.lol/">Lasso Jobs</a></h3>
      <p>
        An in-progress (H1 2024) project to help surface and keep track of new
        jobs at companies you're interested in shortly after they go live.
      </p>

      <h3>
        <a href="https://github.com/alanmoo/vesta-weather">Vestaweather</a>
      </h3>
      <p>
        A weather app for the <a href="https://vestaboard.com">Vestaboard</a>.
        <a href="https://github.com/alanmoo/vesta-weather">Source code</a>
      </p>
    </section>
    <section class="roles">
      <h2>Work Experience</h2>
      <details open class="resume_item">
        <summary>
          <div class="summary">
            <h3 class="organization" id="Carta">
              <a href="https://www.carta.com">Carta</a>,
              <span class="job_title">Senior Engineering Manager</span>
            </h3>
            <span class="role_dates">July 2024-present</span>
          </div>
        </summary>
        <div class="company_size">Series G</div>
        <div class="team_size">
          <h5>Team</h5>
          <p>
            I lead the web presence engineering team as the most senior engineer
            in my reporting chain. This team is responsible for the public
            Carta.com content and marketing site. When I joined, it was saddled
            with technical debt. With a team of one FTE and one contractor, I've
            been very hands-on, acting as architect and individual contributor,
            aiming to productize the platform for better self-serve by internal
            stakeholders while making the case for more resources.
          </p>
          <h5>Overview</h5>
          <p>
            My first 6 months were spent understanding where we were, designing
            a vision of where we should go, and performing technical cleanups
            that were holding us back from getting there. I led the team and
            worked side-by-side to acheive the following:
          </p>
          <ul>
            <li>
              Implemented durable caching to mitigate potential downtime of CMS
              services for SSR pages, as well as reduce average TTFB by 500ms
            </li>
            <li>
              Added Cypress testing capabilities for CI based regression
              prevention, with new tests every time a regression (or clear
              regression risk) is identified
            </li>
            <li>
              Enabled Typescript, eliminated 705 errors (100% of non-strict mode
              errors) to reduce risk of future changes
            </li>
            <li>
              Reduced Sentry errors by 50%, ESLint by 75%, Svelte-Check by 26%
            </li>
            <li>
              Migrated the homepage to static generation for improved resiliency
              and performance
            </li>
            <li>
              Removed intricate custom router logic that hindered performance
              optimizations and blocked new feature development
            </li>
          </ul>
        </div>
      </details>
      <details open class="resume_item">
        <summary>
          <div class="summary">
            <h3 class="organization" id="Policygenius">
              <a href="https://www.policygenius.com">Policygenius</a>,
              <span class="job_title">Senior Engineering Manager</span>
            </h3>
            <span class="role_dates">September 2021-October 2023</span>
          </div>
        </summary>
        <div class="company_size">
          Series D > E > Acquired by <a href="https://zinnia.com">Zinnia</a>
        </div>
        <div class="team_size">
          <h5>Teams Lead (simultaneously)</h5>
          <ul>
            <li>Content/Lead Generation (4 engineers)</li>
            <li>Life Insurance Growth (5 engineers)</li>
            <li>
              Front-end platform/component library (cross-team initiative)
            </li>
          </ul>
        </div>
        <h5>Team effectiveness</h5>
        <ul>
          <li>
            Established Content team technical vision and quarterly OKRs for
            each team
          </li>
          <li>
            Stabilized foundation of team technology, which eventually allowed
            the team to shift focus. This was done by leading initiatives such
            as: reducing publishing times, eliminating linter warnings to reduce
            bugs, and migrating away from CSS-in-JS
          </li>
          <li>
            Shortened engineer feedback cycles by implementing preview
            applications and better local development best practices
          </li>
          <li>
            As a result of weekly 1:1 conversations with my reports, I regularly
            brought forth suggestions for team communication and process
            improvements
          </li>
          <li>
            Established technical vision and stewardship model for cross-team
            component library to ensure stability as a new business strategy was
            built on top of it
          </li>
          <li>
            After Policygenius was acquired, I was tasked with leading a newly
            formed team focused on an emergent business line. In a short time I
            established communication norms and project planning best practices
            based on those we had in place at Policygenius
          </li>
        </ul>
        <h5>Business impact</h5>
        <ul>
          <li>
            Leveraged aforementioned OKRs to drive performance improvements on
            the content site, resulting in Google indexing new articles in one
            day rather than three
            <ul>
              <li>
                Lighthouse scores (a signal used for search enginge ranking)
                moved from 40's to 80's
              </li>
              <li>Total Blocking Time on the content site reduced by 50%</li>
            </ul>
          </li>
          <li>
            Demonstrated the importance of performance improvement across
            applications for SEO, leading to an engineering organization culture
            shift and 3 additional teams creating performance related OKRs
          </li>
        </ul>
        <h5>People</h5>
        <ul>
          <li>Coached Senior SWE II into EM role</li>
          <li>
            Course corrected two under-performers, one of whom was later
            promoted
          </li>
          <li>
            Identified cross-team growth opportunities for two other engineers
            who each achieved two promotions over two years
          </li>
        </ul>
      </details>
      <details class="resume_item">
        <summary>
          <div class="summary">
            <h3 class="organization" id="SquareFoot">
              <a href="https://squarefoot.com">SquareFoot</a>,
              <span class="job_title">Web Engineering Manager</span>
            </h3>
            <span class="role_dates">February 2020 - September 2021</span>
          </div>
        </summary>
        <div class="company_size">Series B</div>
        <div class="team_size">
          <h5>Team</h5>
          Frontend product (4 engineers)
        </div>
        <h5>Impact</h5>
        <ul>
          <li>
            Established quarterly OKRs including improvement of mobile
            Lighthouse scores for key SEO pages, improving from scores in 20's
            to 70's, resulting in company's excellent SEO staying in place after
            Core Web Vitals became a ranking factor in June 2021
          </li>
          <li>
            Proposed and drove a major upgrade on the web application's
            foundation and development workflow, which had core dependencies
            many years out of date (e.g. Node.js v6 when v13 was the most
            recent).
          </li>
          <li>
            Championed migrating main SEO pages to Next.JS, resulting in
            Lighthouse scores in the 90's, and improved rankings on Google
            Search.
          </li>
          <li>
            Spearheaded a successful transition of the team project management
            workflow. This was driven by a need for better asynchronous
            communications on a distributed team and to reduce time spent in
            planning meetings, while ensuring predictable project delivery.
          </li>
        </ul>
      </details>
      <details open class="resume_item">
        <summary>
          <div class="summary">
            <h3 class="organization" id="Mozilla Foundation">
              <a href="https://foundation.mozilla.org">Mozilla Foundation</a>,
              <span class="job_title">Engineering Manager</span>
            </h3>
            <span class="role_dates">May 2017 - January 2020</span>
          </div>
        </summary>
        <div class="team_size">
          <h5>Teams</h5>
          <ul>
            <li>Product (5 engineers)</li>
            <li>Platform (2 engineers)</li>
          </ul>
        </div>
        <h5>Impact</h5>
        <ul>
          <li>
            Regularly wore a product hat, listening to the needs of stakeholders
            to determine what problems engineering could solve ourselves
          </li>
          <li>
            Recognized significant disconnect between capabilities of the
            organization's CMS and what was needed from it; After building
            support to move to an alternativem, I led the project in a
            successful migration to a platform that is still used today.
          </li>
          <li>
            Led the team's development of <a
              href="https://privacynotincluded.org"
              target="_blank">*Privacy Not Included</a
            >, which has gone on to become a recurring conversation point on the
            internet and forced companies to respond publicly to its research
          </li>
          <li>
            Facilitated relationships between internal support and external
            contractors hired to rebuild the donation platform, which brings in
            millions per year. Successfully launched and held up reliably during
            its first December fundraising push.
          </li>
        </ul>
      </details>
      <details>
        <summary>
          <div class="summary">
            <h3 class="organization">
              <a href="https://foundation.mozilla.org">Mozilla Foundation</a>,
              <span class="job_title">Front End Developer</span>
            </h3>
            <span class="role_dates">September 2015 - May 2017</span>
          </div>
        </summary>
        <p>
          Upon joining the team, I started working on the existing Webmaker
          Android app, a web-based app in a native wrapper that existed to
          empower users to create content on the web instead of just consuming
          it. I also helped to create a UI framework for use across our web
          properties and built out/enhanced a number of other sites like
          science.mozilla.org, foundation.mozilla.org, and the initial back-end
          work for mozillapulse.org as I learned Django.
        </p>
      </details>
      <details>
        <summary>
          <div class="summary">
            <h3 class="organization" id="E*Trade Financial">
              <a href="https://etrade.com">E*TRADE Financial</a>,
              <span class="job_title">Front End Prototype Developer</span>
            </h3>
            <span class="role_dates">October 2013 - August 2015</span>
          </div>
        </summary>
        <ul>
          <li>
            Developed prototypes for the customer web app based on static comps
          </li>
          <li>
            Experimented with new web technologies to implement within the
            application
          </li>
          <li>
            Coordinated with the development team in California so that our
            prototypes were helpful to them during production
          </li>
          <li>
            Developed a framework of various components to be integrated into a
            style guide for agencies and developers to reference.
          </li>
          <li>
            Collaborated with the iOS development and design teams to quickly
            integrate new technologies
          </li>
        </ul>
      </details>
      <summary>
        <div class="summary">
          <h3 class="organization">
            <a href="https://weill.cornell.edu/"
              >Weill Cornell Medical College</a
            >,
            <span class="job_title">UI Designer/Developer</span>
          </h3>
          <span class="role_dates">February 2012 - October 2013</span>
        </div>
      </summary>
      <!-- <div class="resume_item">
      <h3 class="job_title">Desktop Support Assistant</h3>
      <span class="organization">Weill Cornell Medical College - <span class="location">New York City</span></span>
      <span class="organization">March 2011-February 2012</span>
      <ul>
        <li>Imaged new computers, added device information to asset management system</li>
        <li>Balanced workload of assigned connect cases and took support cases according to ability</li>
        <li>Documented all work performed</li>
      </ul>
    </div>
    <div class="resume_item">
      <h3 class="job_title">Specialist/Creative</h3>
      <span class="organization">Apple - <span class="location">Edison, NJ</span></span>
      <span class="organization">2006-2011</span>
      <ul>
        <li>Trained customers on a range of Apple hardware and software, from basic OS to Final Cut Pro and Motion</li>
        <li>Troubleshot, diagnosed, and repaired customer iPods and iPhones at Genius Bar</li>
      </ul>
    </div> -->
      <!-- 			<div class="resume_item">
      <h3 class="job_title">Design Intern</h3>
      <span class="organization">Longtail Video - <span class="location">New York City</span></span>
      <span class="organization">Summer 2009</span>
      <ul>
        <li>Unified CSS for a set of web pages to reduce amount of files needed</li>
        <li>Hand coded HTML e-mail blasts</li>
      </ul>
    </div> -->
    </section>
    <!--
		<section>
			<h2>Significant Projects</h2>
			<div class="significant-project">
				<h3>Policygenius Content Site Improvements</h3>
				<p>
					Upon joining Policygenius to lead the Content Engineering team, I realized that the most
					clear element of my team's contributions toward business goals that fell entirely under
					our control was visitors' experience as measured via Core Web Vitals. These are known to
					have an impact on SEO, so I began coach my team in their regular product-driven work to
					improve performance wherever possible. Over the course of a year, we:
				</p>
				<ul>
					<li>
						Created a vision for the team going forward, from which we built our technical plan
					</li>
					<li>
						Started collecting data on site performance with and without 3rd party scripts to
						monitor for changes under our control
					</li>
					<li>
						Migrated to Gatsby Cloud so that we could have efficient single-page content updates
						rather than a homespun approach that caused React to thrash on render and slow down site
						indexing
					</li>
					<li>
						Reduced TBT by over 50% with the continued migration of CSS-in-JS components to use CSS
						Modules
					</li>
					<li>
						Began improving performance of applications beyond the content site after the
						realization that non-indexed pages still have an influence on SEO
					</li>
				</ul>
			</div>
			<div class="significant-project">
				<h3>SquareFoot Next.JS migration</h3>
				<ul>
					<li>
						Recognized an opportunity to improve web performance, increase developer effectiveness,
						and wrangle technical debt by moving from bespoke webpack configuration to standard
						Next.JS config
					</li>
					<li>
						Led the team in improving lighthouse scores from 20's to 70's, right as Google Page
						Experience search algorithm update went live
					</li>
					<li>
						Improved team's ability to work with a product manager on another continent via review
						applications
					</li>
				</ul>
			</div>
			<div class="significant_project">
				<h3>Mozilla Donations platform</h3>
				<ul>
					<li>
						Facilitated relationship with external contractors hired to rebuild our donations
						platform, which brings in millions of dollars per year.
					</li>
					<li>
						Acted as lead internal decision-maker for technology and implementation related details.
					</li>
					<li>
						Leveraged organizational and technological familiarity to ensure donor pipeline is
						optimized and collecting the right data to analyze for future improvement, while
						adhering to mission-driven privacy practices.
					</li>
					<li>Coordinated with CRM lead to ensure data flows as expected</li>
				</ul>
			</div>
			<div class="significant_project">
				<h3>Mozilla Foundation site</h3>
				<ul>
					<li>
						Led a team of engineers to migrate <a href="https://foundation.mozilla.org"
							>foundation.mozilla.org</a
						>
						from a partially static, partially CMS based site to one fully generated by a
						<a href="https://wagtail.io">Wagtail</a> instance
					</li>
					<li>
						Led team to significantly reduce challenges in reviewing/testing changes, improve
						deployment process, and modularize front-end
					</li>
					<li>
						Listened to the pulse of the organization to understand and direct feature development,
						meeting the needs of multiple stakeholders simultaneously
					</li>
					<li>
						Parlayed successful implementation into utilization of the platform for rapid build and
						deployment of <a href="https://mozillafestival.org">mozillafestival.org</a>
					</li>
				</ul>
			</div>
			<div class="significant_project hide-print">
				<h3>E*Trade Portfolios Prototype</h3>
				<ul>
					<li>
						Leveraged MongoDB, Express, NodeJS, and AngularJS to build a highly functional prototype
						for the new heart of the E*TRADE web platform
					</li>
					<li>
						Worked in conjunction with teammate building trade ticket to create fully functional
						experience for user testing
					</li>
					<li>
						Used Express and Node to design and RESTful API that could be utilized by AngularJS
						client side framework
					</li>
					<li>
						Construct back end that integrates data from MongoDB and E*TRADE APIs to generate API
						responses
					</li>
				</ul>
			</div>
		</section>
		<section class="hide-print">
			<h3>Early Experience</h3>
			<p>
				<strong>Weill Cornell Medical College</strong>
				<time datetime="2011-03-28T09:00">2011</time><span class="range-indicator">-</span><time
					datetime="2012-02-12T17:00">2012</time
				> Desktop Support Tech
			</p>
			<p>
				<strong>Apple Retail</strong> <time datetime="2006-05-15T09:00">2006</time><span
					class="range-indicator">-</span
				><time datetime="2011-03-25T17:00">2011</time> Specialist, Visual Merchandiser, Creative
			</p>
		</section>
		<section class="hide-print">
			<h2>Education</h2>
			<div class="resume_item">
				<div class="organization">
					<h3>Ramapo College of New Jersey</h3>
					<span class="location">Mahwah, NJ</span>
				</div>
				<ul>
					<li>
						Communications Major with a concentration in Design and Interactive Media, summa cum
						laude, May 2010
					</li>
					<li>Minor in Computer Science</li>
				</ul>
			</div>
			<div class="resume_item hide-print">
				<div class="organization">
					<h3>Middlesex County Academy for Science, Mathematics and Engineering Technology</h3>
					<span class="location">Edison, NJ</span>
				</div>
				<ul>
					<li>4 years of Electrical and Computer Engineering</li>
					<li>Graduated Salutatorian</li>
				</ul>
			</div>
		</section>

		<h2>References</h2>
		<p>Available upon request</p>
	-->
    <!-- <ul>
      <li><a href="https://www.linkedin.com/in/vickeryj/">Joshua Vickery</a>, Principal Engineer, Namely (formerly CTO, SquareFoot)</li>
      <li><a href="https://www.linkedin.com/in/jessevondoom/">Jesse VonDoom</a>, Head of Product, Glitch</li>
      <li><a href="https://www.linkedin.com/in/simonwex/">Simon Wex</a>, Former Director of Software, Mozilla Foundation</li>
      <li><a href="https://www.linkedin.com/in/arnaud-jammaers-74a547/">Arnaud Jammaers</a>, Creative Director, E*Trade Financial (now at Mastercard)</li>
      <li><a href="https://www.linkedin.com/in/remydwd/">Dan Dickinson</a>, Associate Director of Web Communications, Weill Cornell Medical College</li>
      <li>Contact information available upon <a href="mailto:hello@alanmooiman.com?subject=References?">request</a></li>
    </ul> -->
  </div>
  <!-- .content -->
</div>

<style>
  .resume {
    margin: 0 auto;
    max-width: 110ch;
  }
  .resume_item {
    break-inside: avoid;
  }
  .content {
    gap: 1em 2em;
  }
  @media (min-width: 600px) {
    .content {
      display: grid;
      grid-template-areas: "jobs jobs jobs meta";
      grid-template-columns: 1fr 1fr 1fr minmax(300px, 1fr);
    }
  }
  .metadata {
    grid-area: meta;
  }
  .roles {
    grid-area: jobs;
    max-width: 60ch;
  }
  .show-print {
    display: none;
  }
  .job_title {
    display: inline;
  }

  .role_dates {
    margin: 0 0 0.5em;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
  }
  summary {
    list-style-position: outside;
  }

  /* Safari Fixes */
  details summary {
    position: relative;
  }
  details summary::-webkit-details-marker {
    position: absolute;
    left: -1em;
    top: 1.5em;
  }
  /* End Safari Fixes */

  .organization {
    position: sticky;
    top: 0;
    background-color: var(--background-color);
    padding: 0.5em 0;
    margin: 0.5em 0.5em 0 0;
  }

  section > h2 {
    margin-bottom: 0;
  }

  h4:has(+ ul) {
    margin-bottom: 0;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    margin: 0.5em 0;
  }
  ul {
    margin: 0.5em 0;
    padding-left: 1em;
  }
  ul ul {
    margin: 0;
  }

  @media print {
    :root {
      font-size: 12px;
    }
    .resume {
      max-width: initial;
    }
    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.33em;
      margin-top: 0;
    }
    h3 {
      font-size: 1.25em;
    }
    .show-print {
      display: block;
      float: right;
    }
    section:last-child {
      margin-bottom: 0;
    }
    .content {
      grid-template-areas: "jobs jobs jobs meta";
      grid-template-columns: 1fr 1fr 1fr 230px;
    }
    summary::marker {
      display: none;
      visibility: hidden;
      content: "";
    }
  }
</style>
