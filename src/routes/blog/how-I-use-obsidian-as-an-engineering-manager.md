---
layout: post
title:  "How I use Obsidian as an Engineering Manager"
permalink: /blog/obsidian-as-an-EM/
date: "2023-09-05"
---

There's a lot of context switching required as an engineering manager. I was feeling this intensely as I got into performance review season this year, which is why the [Lead Dev](https://leaddev.com/) mailing list caught my eye when it featured an article about [essential tools for software engineering managers](https://leaddev.com/tech/essential-tools-software-engineering-managers). The article mentioned [Obsidian](https://obsidian.md) and [Roam](https://roamresearch.com/), which successfully nerd-sniped me for a weekend as I explored my options for Personal Knowledge Management (PKM) tools. I ultimately landed on Obsidian, and have made some broad strokes in terms of setup that I'm reasonably happy with.

I've talked with enough people about this that I figure I should share out my approach so that it might help others.
## Goals
As with any project, it was useful to have a few goals up front about what I wanted out of my note system.

- Keep track of what's going on across two teams that report to me (projects, sentiment on timely topics, etc)
- Make reviews easier (Lattice is great for capture, but not as great for reflection)
- Maintain a conversational to-do list (I already did this with Omnifocus tags, but there was too much friction in creating/discovering topics)
- Capture my own wins

With these in mind, here’s how I’m using Obsidian for work in September 2023:
## Plugins

The key plugins I’m using are:
- Dataview
- Templater
- QuickAdd

## Theme
I use the [Things theme](https://github.com/colineckert/obsidian-things), primarily because of the extra checkbox styles that come with it. I'll talk about how I use those below when I cover meeting notes

## Folders
After a few wasted hours of organizing *all* my notes into folders, I realized it was generally the wrong approach, and that [maps of content](https://medium.com/@nickmilo22/in-what-ways-can-we-form-useful-relationships-between-notes-9b9ec46973c6) would be better for my personal notes. That being said, folders can still be a very useful tool for distinct types of notes. I put all work related notes into a top level folder for the company. This is most useful for filtering later on, so that I can exclude it when I’m doing non-work knowledge management. Inside that folder, I’ve got a few more, which I’ll go into detail on later:

- People
- Projects
- Meeting notes
- 1-1s

## Daily note

I’m using a lightly modified version of [Dann Berg’s](https://dannb.org/blog/2022/obsidian-daily-note-template/) daily note template. It’s not perfect for me yet, but it gets the job done. Notice the Templater tags that get run when I create the note.

~~~
---
created: <% tp.file.creation_date() %>
---

tags:: [[+Daily Notes]]

# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

<< [[<% fileDate = moment(tp.file.title, 'YYYY-MM-DD-dddd').subtract(1, 'd').format('YYYY-MM-DD-dddd') %>|Yesterday]] | [[<% fileDate = moment(tp.file.title, 'YYYY-MM-DD-dddd').add(1, 'd').format('YYYY-MM-DD-dddd') %>|Tomorrow]] >>


# 📝 Scratch pad

- <% tp.file.cursor() %>

# 💬 Meetings

---

# 🆕 Notes created today

```dataview

List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc

```

# 🕰️ Notes last touched today

```dataview

List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc

```
~~~

Key things to note: `Meetings` is a header that looks like it's still used for capturing notes during the day, but I've been experimenting with individual notes per meeting lately, so the metadata can be a bit more useful. I try to remember to [embed](https://help.obsidian.md/Linking+notes+and+files/Embedding+files) the notes directly in that section once they're created, like `![[2023-09-05 Sprint Kickoff]]` so I can scan a day's daily note and see everything that happened.

## Meeting notes

```
attendees:: [[person1]],[[person2]]

## Summary


## Log


## Takeaways

```

The title of the note is `{date} {Meeting title}`, and this is my newest template so it's certainly going to get reworked, but most of the value comes not from the template itself, but the format I use for capture. The idea here is that I capture everything in the `Log` and then move takeaways afterwards, and create a summary for future reference. I'm honestly still working on this, as my partner brought me to an interesting realization recently: of all the things I learned in school, "how to take effective notes" was never actually covered.

There are a few conventions I'm trying to stick to as I capture meeting notes (and really any notes).

When something comes up that I need to do, I use the standard markdown checkbox:

`- [ ] Remember to review the security audit`

If that task involves talking to someone else, I put a link to their note in the task:

`- [ ] [[@Alice]] Let's dig into that blocker you mentioned`

If I want to capture a win by someone (including myself!), I'll use that syntax from the Things theme, which shows a little cake after the markdown is rendered:

`- [w] [[@Brianne]] handled today's incident smoothly`

If a task is a piece of critical feedback, once I've delivered it I'll update the original note with a similar syntax:

`-[!] [[@Casey]] In meetings like this one, when you talk too much it makes people disengage. Aim to speak no more than 1/n of the meeting time, where n is the number of attendees`

## People notes

Inside the `people` folder, I've got a note for each person I work with, in any capacity. If they come up in conversation, I create a note for them. The one weird trick I picked up in scouring the web was to start each name with an ampersand,  (`@Alice`). This comes in handy not just for note autocomplete, but also for task filtering.

Here's the template I use for `people` notes

```
Role::
Location::

### Open topics
```dataview
TASK WHERE contains(text, this.file.name) WHERE status = " "
SORT file.ctime DESC
\```
```

I reuse this dataview query in 1:1 notes, but this gives me an ever-available list of topics I need to talk to the current person about for quick reference. In addition, for direct reports I have two more similar dataview queries, changing the status to `w` or `!`, so I can reference back to wins and feedback to see how they've progressed over time.
## Projects
Inside the project directory, I keep a list of any project that a direct report (or myself) is leading. I've configured the QuickAdd plugin to allow me to create a new project note in the proper directory, and then automatically ask me for a project lead so that if I discover a new project in the middle of a conversation, I can capture it without breaking flow.

```
---
start: <% moment().format("YYYY-MM-DD") %>
lead: <%* const dv = app.plugins.plugins.dataview.api; const func = (item) => `${item.file.name}`; const person = (await tp.system.suggester(func, dv.pages('"Policygenius/People"'), false, "Project lead")).file.name; tR += `"[[${person}]]"` %>
status: In progress, Delivered, Dropped
---

# Summary


```
I know this data exists in far too many spreadsheets, Airtables, and Jira boards, but most of those tools are focused on looking forward, not back. Some light grooming of these help me keep a historical record of what's useful for me to remember later on. Having a specific file for each note also helps me refer to them consistently as they're talked about in various meetings, at which point I can use backlinks to see patterns. 

I've also got a top level `Project List` file that's useful for quick reference (and grooming my data):

```
# In progress
```dataview
table lead
FROM "Policygenius/Projects" WHERE !status OR status ="In Progress"
SORT lead asc
\```

# Completed
```dataview
table lead 
FROM "Policygenius/Projects" WHERE status = "Delivered"
SORT file.ctime asc
\```
```

## 1:1s
I use QuickAdd to create 1:1 notes as well, leveraging the loosely structured data I've described above to give me a quick refresher of what's worth talking about in a 1:1. The biggest challenge with this is that I like having a shared agenda in 1:1s, so I still try to have a running  Google doc or Lattice meeting with people which I paste into and copy out of before and after the meeting.
```
---
attendees: <%* const dv = app.plugins.plugins.dataview.api; const func = (item) => `${item.file.name}`; const person = (await tp.system.suggester(func, dv.pages('"Policygenius/People"'), false, "Project lead")).file.name; tR += `"[[${person}]]"` %>
---
### Current Projects
```dataview
list
FROM "Policygenius/Projects" WHERE lead=this.attendees
SORT lead asc
\```

### Topics


```dataview
TASK WHERE contains(outlinks, this.attendees) WHERE status = " "
SORT file.ctime DESC
\```

```


## Overview Note

Finally, I've got an overview note that I reference every day to make sure I'm not just throwing tasks into the abyss and that I'm working toward my high-level goals. It's ever-evolving and not entirely sharable, but the outline looks like this:

```
[[Project List]]

## Open (async) tasks
```dataview
TASK From "Policygenius" or "daily" 
WHERE status = " " AND !contains(text, "@") SORT file.mtime asc
\```

# Current Priorities
(Personal top-line priorities here, to keep top-of-mind)

## Blockers for me/my team

# Secondary priorities

## Areas of team improvement
(Challenges that seem to be reoccurring)

## Areas of self-improvement

## My open projects
```dataview
List from "Policygenius/Projects" WHERE lead = [[@Alan]]
\```

## My career
[[Policygenius Brag sheet]]
```


And that's everything! Well, until I inevitably make a change tomorrow. The thing I love about Obsidian is that it's a system that I can make work for me without having to fight it much. If you've got questions or take anything here and make improvements for your own workflow, let me know on [Mastodon](https://xoxo.zone/@alanmoo)!