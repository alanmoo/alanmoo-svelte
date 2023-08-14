<script lang="ts">
	let managementStart = new Date('May 8, 2017');
	let industryStart = new Date('February 13, 2012');
	let now = new Date();
	let managementTime = timeSpanFormatter(managementStart, now, true);
	let industryTime = timeSpanFormatter(industryStart, now, true);

	function timeSpanFormatter(start: Date, end: Date, asFraction: boolean = false) {
		let years = end.getFullYear() - start.getFullYear();
		let months = end.getMonth() - start.getMonth();
		if (months < 0) {
			months += 12;
		}

		if (asFraction) {
			return `${years}${months >= 6 ? '.5' : '+'} years`;
		} else {
			return `${years} years, ${months} months`;
		}
	}
</script>

<div class="resume">
	<div class="show-print">
		<small
			>Printed/PDF'ed from <a href="http://alanmooiman.com/resume">alanmooiman.com/resume</a></small
		>
	</div>
	<header>
		<h1>Alan Mooiman</h1>
		<h2>Engineering Manager</h2>
	</header>
	<!-- .name_title -->
	<div class="contact_info">
		<a class="email" href="mailto:hello@alanmooiman.com?subject=👋 Nice résumé"
			>hello@alanmooiman.com</a
		>
	</div>
	<!-- .contact_info -->
	<div class="content">
		<!-- <h3>Objective</h3>
    <p>To lead an engaged, productive, communicative team that outputs high quality projects and works together to help one another improve their skills while building the future.</p> -->
		<section>
			<h3>Skills/Experience</h3>
			<ul class="skills">
				<li>
					<span id="managementTime">{managementTime}</span> of cross-functional engineering leadership
				</li>
				<li><span id="industryTime">{industryTime}</span> of web development experience</li>
				<li>Previously: front-end developer comfortable with back-end work</li>
				<li>
					Operates at the intersection of the art of people leadership and the process of
					engineering management
				</li>
				<li>Focused on solving problems for the business over simply addressing symptoms</li>
				<li>Vision crafting, OKR setting, building alignment</li>
				<!-- <li>Familiar with Mac/iOS development</li> -->
				<li>
					React, GraphQL, Jest, Cypress, Next.JS, Gatsby, Contentful, NodeJS, CSS, Webpack, Docker,
					Travis, Datadog, CI/CD
				</li>
			</ul>
		</section>
		<section>
			<h2>Work Experience</h2>
			<div class="resume_item">
				<h3 class="organization"><a href="https://www.policygenius.com">Policygenius</a></h3>
				<div class="job_title">Engineering Manager</div>
				<div class="organization_dates">September 2021 - Present</div>
				<p>At Policygenius I manage two teams:</p>
				<p>
					Content/Lead Generation - responsible for the public <a href="https://policygenius.com"
						>policygenius.com</a
					>
					content site and consumer education in our funnels (four engineers)<br />
					Life Consumer - responsible for our life insurance sales funnel (five engineers)
				</p>
				<p>
					As a manager of multiple teams, I don't touch code very often, and if I do it's never on
					the critical path. My primary responsibilities include:
				</p>
				<ul>
					<li>
						Working with my teams to set and achieve technical goals every quarter based on the
						impact they will have on the business
					</li>
					<li>Partnering with Product Managers to identify leads for upcoming projects</li>
					<li>
						Aligning with the scrum lead for each team to ensure the teams are effective and meeting
						their goals
					</li>
					<li>
						Coaching individual contributors engineers in their continued growth through occasional
						code review or pairing, as well as providing feedback in 1:1s on how they can improve
					</li>
					<li>Coaching a rising manager on the above skills</li>
				</ul>

				<p>
					I guide my teams to prioritize the external user experience first, via performance
					(measured by Core Web Vitals/Lighthouse scores) and accessibility. Once we've planned to
					optimize for the user, then we can focus on internal users and then finally the developer
					experience to ensure we're being efficient.
				</p>

				<p>
					As the accountable engineer for our design system, I partner with design leads to ensure
					our component library is being built using functional components that are accessible and
					fast, while keeping an eye on where the web platform is heading in the future.
				</p>
				<p>Some accomplishments include:</p>
				<ul>
					<li>
						Due to architectrual changes my team spearheaded, Google now indexes new stories on the
						content site in one day rather than three.
					</li>
					<li>Total Blocking Time on the content site reduced by 50%</li>
					<li>
						After identifying a connection between funnel page speed and SEO, I led the charge on an
						engineering-wide culture shift to ensure we build for performance
					</li>
				</ul>

				<p>
					Tech stack: React, Contentful, Gatsby/Gatsby Cloud, GraphQL, SpeedCurve, DataDog RUM,
					Jest/React Testing Library, Cypress, BuildKite, Storybook
				</p>
			</div>
			<div class="resume_item">
				<h3 class="organization"><a href="https://squarefoot.com">SquareFoot</a></h3>
				<div class="job_title">Web Engineering Manager</div>
				<div class="organization_dates">February 2020 - September 2021</div>
				<p>
					SquareFoot is a commercial real estate brokerage. I led the team of 4 engineers resposible
					for the front-end of their client acquisition platform, which was used for showing
					listings to potential clients, onboarding them into our sales flow, and then facilitating
					the broker/client search experience.
				</p>
				<p>Some significant accomplishments include:</p>
				<ul>
					<li>
						Leading my team in working on the quarterly key result of improving mobile Lighthouse
						scores for key SEO pages from in the 20's to 70's
					</li>
					<li>
						Proposing and driving a major upgrade on the web application's foundation and
						development workflow, which had core dependencies many years out of date (e.g. Node.js
						v6 when v13 was the most recent). From there, I championed migrating the main SEO pages
						to Next.JS, resulting in Lighthouse scores in the 90's, and improved rankings on Google
						Search.
					</li>
					<li>
						Spearheaded a successful transition of the team project management workflow. This was
						driven by a need for better asynchronous communications on a distributed team and to
						reduce time spent in planning meetings, while ensuring predictable project delivery.
					</li>
				</ul>
				<p>Tech Stack: React, Webpack, Next.JS, GraphQL, AWS, Vercel</p>
			</div>
			<div class="resume_item">
				<h3 class="organization">
					<a href="https://foundation.mozilla.org">Mozilla Foundation</a>
				</h3>
				<div class="job_title">Engineering Manager</div>
				<div class="organization_dates">May 2017 - January 2020</div>
				<p>
					I led a team of 6 web and devops engineers across North America and Germany, building
					projects to support Mozilla's mission of improving internet health. I worked closely with
					the design manager, product manager, and digital director to improve the Foundation's main
					site at foundation.mozilla.org. The design and engineering teams also functioned as a
					service organization internally. I partnered with the leaders of other teams to identify
					the best way for us to address their needs while pushing forward on our team's internal
					road map. I worked with my team to identify workflow challenges, improve their skills, and
					foster best software development practices while keeping us moving forward. Finally, as
					both the engineering lead and most senior technical manager in the org, I ensured
					organizational technology decisions were made prudently with an eye on long term impact
					and cost.
				</p>
				<p>Tech Stack: Wagtail CMS, React, Django Rest Framework, Heroku</p>
				<div class="job_title">Front End Developer</div>
				<div class="organization_dates">September 2015 - May 2017</div>
				<!-- <p>
        Upon joining the team, I started working on the existing Webmaker Android app, a web-based app in a native wrapper that existed to empower users to create content on the web, instead of just consuming it. I also helped to create a UI framework for use across our web properties, and built out/enhanced a number of other sites like science.mozilla.org, foundation.mozilla.org, and the initial back-end work for mozillapulse.org as I learned Django.
      </p> -->
			</div>
			<div class="resume_item">
				<h3 class="organization">
					E*TRADE Financial - <span class="location">New York City</span>
				</h3>
				<div class="job_title">Front End Prototype Developer</div>
				<div class="organization_dates">October 2013 - August 2015</div>
				<!-- <p>
        In this role I:
        <ul>
          <li>Developed prototypes for the customer web app based on static comps</li>
          <li>Experimented with new web technologies to implement within the application</li>
          <li>Coordinated with the development team in California so that our prototypes were useful to them during production</li>
          <li>Developed a framework of various components to be integrated into a style guide for agencies and developers to reference.</li>
          <li>Collaborated with the iOS development and design teams to quickly integrate new technologies</li>
        </ul>
      </p> -->
			</div>
			<div class="resume_item hide-print">
				<h3 class="organization">
					Weill Cornell Medical College - <span class="location">New York City</span>
				</h3>
				<div class="job_title">UI Designer/Developer</div>
				<div class="organization_dates">February 2012 - October 2013</div>
				<ul>
					<!-- <li>Develop responsive Drupal theme for new base distribution, including a new responsive navigation pattern</li> -->
					<!-- <li>Add front end functionality to existing internal applications</li>
        <li>Played a strong role in the design process with guidance from art director</li>
        <li>Implemented designs by others in code to a high level of detail</li>
        <!-- <li>Skin various internal and 3rd party web applications</li> -->
					<!-- <li>Develop coding standards for the web design team</li>
        <li>Wrote CSS with support back to IE7 and Firefox 3.6</li>
        <!-- <li>Comment code so that future developers understand it</li> -->
				</ul>
			</div>
			<!-- <div class="resume_item">
      <h3 class="organization">Weill Cornell Medical College - <span class="location">New York City</span></h3>
<div class="job_title">Desktop Support Assistant</div>
      <div class="organization_dates">March 2011-February 2012</div>
      <ul>
        <li>Imaged new computers, added device information to asset management system</li>
        <li>Balanced workload of assigned connect cases and took support cases according to ability</li>
        <li>Documented all work performed</li>
      </ul>
    </div>
    <div class="resume_item">
      <h3 class="organization">Apple - <span class="location">Edison, NJ</span></h3>
<div class="job_title">Specialist/Creative</div>
      <div class="organization_dates">2006-2011</div>
      <ul>
        <li>Trained customers on a range of Apple hardware and software, from basic OS to Final Cut Pro and Motion</li>
        <li>Troubleshot, diagnosed, and repaired customer iPods and iPhones at Genius Bar</li>
      </ul>
    </div> -->
			<!-- 			<div class="resume_item">
      <h3 class="organization">Longtail Video - <span class="location">New York City</span></h3>
<div class="job_title">Design Intern</div>
      <div class="organization_dates">Summer 2009</div>
      <ul>
        <li>Unified CSS for a set of web pages to reduce amount of files needed</li>
        <li>Hand coded HTML e-mail blasts</li>
      </ul>
    </div> -->
		</section>
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
		max-width: 70ch;
	}
	.show-print {
		display: none;
	}
	@media print {
		.show-print {
			display: initial;
			font-size: 12px;
		}
	}
</style>
