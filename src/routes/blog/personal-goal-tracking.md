---
title: Personal goal tracking
slug: personal-goal-tracking
date: 2024-05-19
summary: OKRs in Obsidian for personal development
---

I've never been a fan of new year's resolutions. I've heard the stats, and seen firsthand how hard it is to _just start_ doing something new. But I also know that improvement is a result of compounding incremental effort. If I want to improve myself, I need to act with some amount of intentionality. When I learned about the concept of goal setting via objectives and key results (OKRs) in my professional life, I started thinking about how I could better set goals in my personal life. Feeling inspired at the start of 2022, I looked back on the previous year and started planning some personal goals for the coming one. They were in broad categories like financial stability, physical fitness, relationships, personal development, leisure, career, and community involvement. Unsurprisingly, my first attempt at setting these goals went...just ok. I made some moves on them early on, but by halfway through the year, they were in the rearview mirror without a good way to assess progress.

For 2023, I took it a step further and made more of my goals measurable. Rather than "stay fit", I aimed to burn 8000 active calories/month, as measured by my Apple Watch workouts. I aimed to read a book a month, and journal 2x/week. This worked better, but I still lacked good tracking for most of them ("Attend six community advocacy events? I guess I'll comb through my calendar to see what I did in the last 12 months").

Heading into 2024, I knew that I wanted to make my goals more visible, which I'll get to in a moment. But I also knew that I needed to make them more forgiving. If I didn't burn 8000 calories in a given month, should I just give up on the goal? What if I get sick in February and can't work out? To mitigate this, I aimed for proper S.M.A.R.T. goals and looked at what I wanted out of the whole year based on intended frequency. For example, instead of "read one book each month," my goal for the year is "read 12 books". This gives me some wiggle room for the variance that happens in life while still being measurable.

The final pieces of the puzzle, though, have been twofold: keeping track of progress toward goals and making that progress (or lack thereof) visible.

## Thoughtful tooling + process = incremental improvement

Having spent the last 7-ish years leading engineering teams, I think a lot about process. It's a handy tool in planning and reducing technical debt, though the best process is nearly invisible. For example, I've helped teams reduce bugs by enabling strict lint and build configurations that encourage healthy patterns as they reduce instances of unhealthy ones. (While also ensuring there's alignment around what we want the end result of that process to be.)

Not all processes can be made invisible, though, so the next best approach is to make them easy enough that they don't _feel_ like a process. To make this happen, I've taken inspiration from my recent read of [Atomic Habits](https://jamesclear.com/atomic-habits) and built a workflow in [Obsidian](https://obsidian.md), a sort of IDE for life I've [written about before](https://alanmooiman.com/blog/how-I-use-obsidian-as-an-engineering-manager).

### Tracking

To track my goals, I'm leveraging three Obsidian plugins: [templater](https://github.com/SilentVoid13/Templater), [dataview](https://blacksmithgu.github.io/obsidian-dataview/), [charts](https://github.com/phibr0/obsidian-charts), and [periodic notes](https://github.com/liamcain/obsidian-periodic-notes). Periodic notes is an enhanced version of the daily notes plugin. It lets you create not just daily, but also weekly, monthly, quarterly, and yearly notes. You can have separate templates for each of them, so I've got two set up, for now: daily and weekly. I also created a yearly note for 2024, but haven't created a template.

In that 2024 note, I've laid out my goals at the top and have a section underneath to create some dataview variables, like the number of books I want to read in a year:

```md
# Goal units

BookGoal::12
```

Below that, I keep track of the books I've read. Note that I'm using a task list here because dataview doesn't seem to let you easily grab items from a non-task list.

```md
# Goal Tracking

## Books read

- [x] The City We Became
- [x] Horrorstör
- [x] Atomic Habits
```

Finally, I've got a dataview snippet that visualizes things.

```javascript
const data = dv.current();

function getChecklistItems(goal, heading) {
	let page = dv.page('2024'); //The page name
	let completed = page.file.tasks.filter((task) => task.section.subpath === heading).length;
	return completed;
}

let bookProgress = getChecklistItems([data.BookGoal], 'Books read');
const chartData = {
	type: 'bar',
	data: {
		datasets: [
			{
				data: [{ y: 'Books', x: bookProgress }]
			}
		]
	},

	options: {
		animation: false,
		plugins: { legend: { display: false } },
		scales: { x: { max: Number([data.BookGoal]) } },
		indexAxis: 'y'
	}
};
window.renderChart(chartData, this.container);
```

<img alt="A horizontal bar graph that shows I've read 3 books, with an x axis that goes to 12" src="/goal-tracking-books.png">
This is kind of useful, but it's missing some context. Let's make this bar represent a percent of the total goal and add a second one to show how far into the year we are:

```javascript
const data = dv.current();

// How far into the year are we
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

function getChecklistItems(goal, heading) {
	let page = dv.page('2024');
	let completed = page.file.tasks.filter((task) => task.section.subpath === heading).length;
	return (completed / goal) * 100;
}

let bookProgress = getChecklistItems([data.BookGoal], 'Books read');

const chartData = {
	type: 'bar',
	data: {
		datasets: [
			{
				data: [
					{ y: 'Books', x: bookProgress },
					{ y: 'Year', x: (day / 366) * 100 }
				]
			}
		]
	},

	options: {
		animation: false,
		scales: { x: { max: 100 } },
		plugins: { legend: { display: false } },
		indexAxis: 'y'
	}
};
window.renderChart(chartData, this.container);
```

Now this is more useful: You can see I'm a little behind in my reading goal for the year, though when I finish my current book in a few days, I'll be close to catching up. <img src="/goal-tracking-books-year.png" alt="A horizontal bar graph that shows I'm 25% of the way to my book goal and the year is about 38% complete">

But remember that calorie goal I had? That's not something that's going to work with a list. Instead, I keep track of calories burned for the day in a data property on each of my daily notes:

```markdown
active calories:
```

Back in my `2024` file, I can comb through my daily notes and create a running total of calories burned for the year (making sure to include `CaloriesGoal::96000`
in the file)

```javascript
const data = dv.current();

// How far into the year are we
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

let dailyNotes = dv.pages('"periodic/daily"').filter((page) => page.file.name.startsWith('2024'));
let totalCalories = dailyNotes
	.map((page) => {
		return page['active-calories'] || 0;
	})
	.values.reduce((acc, calories) => acc + (calories || 0), 0);
const calorieProgress = (totalCalories / [data.CaloriesGoal]) * 100;

function getChecklistItems(goal, heading) {
	let page = dv.page('2024');
	let completed = page.file.tasks.filter((task) => task.section.subpath === heading).length;
	return (completed / goal) * 100;
}

let bookProgress = getChecklistItems([data.BookGoal], 'Books read');
let cbProgress = getChecklistItems([data.CBGoal], 'CB Meetings');
let groupEventProgress = getChecklistItems([data.GroupEventGoal], 'Group events');
let advocacyEventProgress = getChecklistItems([data.AdvocacyGoal], 'Advocacy events');

const chartData = {
	type: 'bar',
	data: {
		datasets: [
			{
				data: [
					{ y: 'Books', x: bookProgress },
					{ y: 'Calories', x: calorieProgress },
					{ y: 'Year', x: (day / 365) * 100 }
				]
			}
		]
	},

	options: {
		animation: false,
		scales: { x: { max: 100 } },
		plugins: { legend: { display: false } },
		indexAxis: 'y'
	}
};
window.renderChart(chartData, this.container);
```

<img src="/goal-tracking-books-calories-year.png" alt="A horizontal bar graph as before, but with an additional bar for calories burned (which is below target)">

### Making it visible

This is all awesome, but as I mentioned above, none of this is useful if it isn't regularly visible. To do that, I've doubled down on periodic notes:

- Every weekly note shows my goal bar chart (using the embedded preview feature: `![[2024#Yearly Goal Progress]]`, which points to the heading above the chart)
- Right below that, I have a section for my week's goals. For example:

```markdown
![[2024#Yearly Goal Progress]]

## This week's goals

- [ ] Finish my current book
```

- And finally, at the top of my daily note template I have the current week's goals show up:

```markdown
![[<% tp.date.now("YYYY") + '-W' + tp.date.now("W") %>#This week's goals]]
```

This all requires some discipline on my part though, so I've used the advice of Atomic Habits and created two new habits in addition to my morning planning that leverages the daily note:

- When I get into bed at night, I add any goals accomplished to the appropriate list in the yearly note and capture my calories burned in the daily note (by cross-referencing workouts in my fitness app).
- On Monday mornings, I start my day with a weekly planning session.

This is all relatively new and even as I've been writing up this post I've thought of ways I can improve my workflow. But I'm happy with it for now, as every big change starts with a small one. Now if you'll excuse me, I've got to go for a run and do some reading.
