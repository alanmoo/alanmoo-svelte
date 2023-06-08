<script lang="ts">

    let managementStart = new Date("May 8, 2017");
    let industryStart = new Date("February 13, 2012");
    let now = new Date();
    let managementTime = timeSpanFormatter(managementStart, now, true);
    let industryTime = timeSpanFormatter(industryStart, now, true);


  function timeSpanFormatter(start:Date, end:Date, asFraction:boolean = false){
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0){months += 12;}

    if(asFraction){
      return `${years}${months>=6?'.5':'+'} years`;
    } else {
      return `${years} years, ${months} months`;
    }
  }

</script>

<div class="resume">
  <div class="show-print"><small>See the latest at <a href="http://alanmooiman.com/resume">alanmooiman.com/resume</a></small></div>
  <header>
    <h1>Alan Mooiman</h1>
    <h2>UX focused Engineering Leader</h2>
  </header>
  <div class="contact_info">
    <a class="email" href="mailto:hello@alanmooiman.com?subject=👋 Nice résumé">hello@alanmooiman.com</a>
  </div> <!-- .contact_info -->
  <div class="content">
    <!-- <h3>Objective</h3>
    <p>To lead an engaged, productive, communicative team that outputs high quality projects and works together to help one another improve their skills while building the future.</p> -->
    <section>
      <h3>Skills/Experience</h3>
      <ul class="skills">
        <li ><span id="managementTime">{managementTime} years</span> of engineering management</li>
        <li ><span id="industryTime">{industryTime} years</span> of web development experience</li>
        <li>Previously: front-end developer comfortable with back-end work</li>
        <li>Design major in college</li>
        <li>Experienced in cross-functional engineering leadership</li>
        <li>Operates at the intersection of the art of people leadership and the process of engineering management</li>
        <li>Focused on solving problems over simply addressing symptoms</li>
        <li>Continually experiments to improve team operations</li>
        <!-- <li>Familiar with Mac/iOS development</li> -->
        <li>React, GraphQL, Jest, Cypress, Next.JS, NodeJS, CSS, Webpack, Docker, Travis, etc.</li>
      </ul>
    </section>
    <section>
    <h2>Work Experience</h2>
    <div class="resume_item">
      <h3 class="job_title">Engineering Manager</h3>
      <div class="organization"><a href="https://www.policygenius.com">Policygenius</a></div>
      <div class="organization_dates">September 2021 - Present</div>
      <p>
        Policygenius is America's leading online insurance marketplace. Our mission is to help people get insurance right by making it easy for them to understand their insurance options, compare quotes, and buy a policy, all in one place. 
      </p>
      <p>At Policygenius, I lead eight engineers across two web engineering teams: One is focused on our content site to improve organic growth via SEO and customer education, the other is responsible for our digital life insurance sales funnel.
      </p>
    </div>
    <div class="resume_item">
      <h3 class="job_title">Web Engineering Manager</h3>
      <div class="organization"><a href="https://squarefoot.com">SquareFoot</a></div>
      <div class="organization_dates">February 2020 - September 2021</div>
      <p>
        SquareFoot is a commercial real estate brokerage, focused on client acquisition via our web platform. I lead the team of 4 engineers resposible for the front-end of this platform, which is used for showing listings to potential clients, onboarding them into our sales flow, and then facilitating the broker/client search experience. It's a pre-rendered React application which connects to a GraphQL API. I work closely with the product manager, backend/infrastructure manager, head of engineering, marketing team, and the design team to deliver new features to the platform while reducing technical debt that accumulated as the platform was first being shaped.
      </p>
      <p>Some significant accomplishments include:</p>
        <ul>
          <li>I led work on the quarterly key result of improving mobile Lighthouse scores for key SEO pages from in the 20's to 70's</li>
          <li>I proposed and drove a major upgrade on the web application's foundation and development workflow, which had core dependencies many years out of date (e.g. Node.js v6 when v13 was the most recent). From there, I championed migrating the main SEO pages to Next.JS, resulting in Lighthouse scores in the 90's, and improved rankings on Google Search.</li>
          <li>I spearheaded a successful transition of the team project management workflow. This was driven by a need for better asynchronous communications on a distributed team and to reduce time spent in planning meetings, while ensuring predictable project delivery.</li>
        </ul>
    </div>
    <div class="resume_item">
      <h3 class="job_title">Engineering Manager</h3>
      <div class="organization"><a href="https://foundation.mozilla.org">Mozilla Foundation</a></div>
      <div class="organization_dates">May 2017 - January 2020</div>
      <p>
        I led a team of 6 web and devops engineers across North America and Germany, building projects to support Mozilla's mission of improving internet health. I worked closely with the design manager, product manager, and digital director to improve the Foundation's main site at foundation.mozilla.org. The design and engineering teams also functioned as a service organization internally. I partnered with the leaders of other teams to identify the best way for us to address their needs while pushing forward on our team's internal road map. This happened by asking not just "what are you trying to do?" but "what problem are you trying to solve?", a subtle but important distinction. I also worked with my team to identify workflow challenges, improve their skills, and foster best software development practices while keeping us moving forward. Finally, as both the engineering lead and most senior technical manager in the org, I ensured organizational technology decisions were made prudently with an eye on long term impact and cost.
      </p>
    </div>
    <div class="resume_item">
      <h3 class="job_title">Front End Developer</h3>
      <div class="organization"><a href="https://foundation.mozilla.org">Mozilla Foundation</a></div>
      <div class="organization_dates">September 2015 - May 2017</div>
      <!-- <p>
        Upon joining the team, I started working on the existing Webmaker Android app, a web-based app in a native wrapper that existed to empower users to create content on the web, instead of just consuming it. I also helped to create a UI framework for use across our web properties, and built out/enhanced a number of other sites like science.mozilla.org, foundation.mozilla.org, and the initial back-end work for mozillapulse.org as I learned Django.
      </p> -->
    </div>
    <div class="resume_item">
      <h3 class="job_title">Front End Prototype Developer</h3>
      <div class="organization">E*TRADE Financial - <span class="location">New York City</span></div>
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
      <h3 class="job_title">UI Designer/Developer</h3>
      <div class="organization">Weill Cornell Medical College - <span class="location">New York City</span></div>
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
      <h3 class="job_title">Desktop Support Assistant</h3>
      <div class="organization">Weill Cornell Medical College - <span class="location">New York City</span></div>
      <div class="organization_dates">March 2011-February 2012</div>
      <ul>
        <li>Imaged new computers, added device information to asset management system</li>
        <li>Balanced workload of assigned connect cases and took support cases according to ability</li>
        <li>Documented all work performed</li>
      </ul>
    </div>
    <div class="resume_item">
      <h3 class="job_title">Specialist/Creative</h3>
      <div class="organization">Apple - <span class="location">Edison, NJ</span></div>
      <div class="organization_dates">2006-2011</div>
      <ul>
        <li>Trained customers on a range of Apple hardware and software, from basic OS to Final Cut Pro and Motion</li>
        <li>Troubleshot, diagnosed, and repaired customer iPods and iPhones at Genius Bar</li>
      </ul>
    </div> -->
<!-- 			<div class="resume_item">
      <h3 class="job_title">Design Intern</h3>
      <div class="organization">Longtail Video - <span class="location">New York City</span></div>
      <div class="organization_dates">Summer 2009</div>
      <ul>
        <li>Unified CSS for a set of web pages to reduce amount of files needed</li>
        <li>Hand coded HTML e-mail blasts</li>
      </ul>
    </div> -->
    </section>
    <section>
      <h2>Significant Projects</h2>
      <div class="significant_project">
      <h3>Mozilla Donations platform</h3>
        <ul>
          <li>Facilitate relationship with external contractors hired to rebuild our donations platform, which brings in millions of dollars per year.</li>
          <li>Act as lead internal decision-maker for technology and implementation related details.</li>
          <li>Leverage organizational and technological familiarity to ensure donor pipeline is optimized and collecting the right data to analyze for future improvement, while adhering to mission-driven privacy practices.</li>
          <li>Coordinate with CRM lead to ensure data flows as expected</li>
        </ul>
      </div>
      <div class="significant_project">
        <h3>Mozilla Foundation site</h3>
        <ul>
          <li>Led a team of engineers to migrate <a href="https://foundation.mozilla.org">foundation.mozilla.org</a> from a partially static, partially CMS based site to one fully generated by a <a href="https://wagtail.io">Wagtail</a> instance</li>
          <li>Led team to significantly reduce challenges in reviewing/testing changes, improve deployment process, and modularize front-end</li>
          <li>Listened to the pulse of the organization to understand and direct feature development, meeting the needs of multiple stakeholders simultaneously</li>
          <li>Parlayed successful implementation into utilization of the platform for rapid build and deployment of <a href="https://mozillafestival.org">mozillafestival.org</a></li>
        </ul>
      </div>
      <div class="significant_project hide-print">
        <h3>E*Trade Portfolios Prototype</h3>
        <ul>
          <li>Leveraged MongoDB, Express, NodeJS, and AngularJS to build a highly functional prototype for the new heart of the E*TRADE web platform</li>
          <li>Worked in conjunction with teammate building trade ticket to create fully functional experience for user testing</li>
          <li>Used Express and Node to design and RESTful API that could be utilized by AngularJS client side framework</li>
          <li>Construct back end that integrates data from MongoDB and E*TRADE APIs to generate API responses</li>
        </ul>
      </div>
    </section>
    <section class="hide-print">
      <h3>Early Experience</h3>
      <p><strong>Weill Cornell Medical College</strong> <time datetime="2011-03-28T09:00">2011</time><span class="range-indicator">-</span><time datetime="2012-02-12T17:00">2012</time> Desktop Support Tech</p>
      <p><strong>Apple Retail</strong> <time datetime="2006-05-15T09:00">2006</time><span class="range-indicator">-</span><time datetime="2011-03-25T17:00">2011</time> Specialist, Visual Merchandiser, Creative</p>
    </section>
    <h2>Education</h2>
    <div class="resume_item">
      <div class="organization">
        <h3>Ramapo College of New Jersey</h3>
        <span class="location">Mahwah, NJ</span>
      </div>
      <ul>
        <li>Communications Major with a concentration in Design and Interactive Media, summa cum laude,  May 2010</li>
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

    <h2>References</h2>
    <ul>
      <li><a href="https://www.linkedin.com/in/vickeryj/">Joshua Vickery</a>, Principal Engineer, Namely (formerly CTO, SquareFoot)</li>
      <li><a href="https://www.linkedin.com/in/jessevondoom/">Jesse VonDoom</a>, Head of Product, Glitch</li>
      <li><a href="https://www.linkedin.com/in/simonwex/">Simon Wex</a>, Former Director of Software, Mozilla Foundation</li>
      <li><a href="https://www.linkedin.com/in/arnaud-jammaers-74a547/">Arnaud Jammaers</a>, Creative Director, E*Trade Financial (now at Mastercard)</li>
      <!-- <li><a href="https://www.linkedin.com/in/remydwd/">Dan Dickinson</a>, Associate Director of Web Communications, Weill Cornell Medical College</li> -->
      <!-- <li>Contact information available upon <a href="mailto:hello@alanmooiman.com?subject=References?">request</a></li> -->
    </ul>
  </div> <!-- .content -->
</div>

  <style>
    .resume{
      margin: 0 auto;
      max-width: 80ch;
    }
    .show-print {
      display: none;
    }
    @media print {
      .show-print{
        display: initial;
        font-size: 12px;
      }
    }
  </style>