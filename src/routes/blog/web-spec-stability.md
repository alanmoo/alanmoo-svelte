---
layout: post
title: Web Spec Stability
permalink: /blog/web-spec-stability/
date: 2014-08-14
share: true
---

I was browsing Twitter the other day and I saw this tweet:

<blockquote class="twitter-tweet" lang="en"><p>W3C - scrape the internet. How many people are using box-sizing: border-box; anyway? &#10;&#10;<a href="https://twitter.com/hashtag/changethespec?src=hash">#changethespec</a></p>&mdash; Dale Sande (@anotheruiguy) <a href="https://twitter.com/anotheruiguy/statuses/494942808206082048">July 31, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I don't think this was a serious request, but it's something that made me contemplate the nature of what's awesome and yet sometimes a massive pain about developing for the web. While I do of course apply `box-sizing: border-box` to everything I do, I have to disagree with the idea that we should change the default behavior of a web spec, especially with regards to something as significant as layout. If you check out that [whole conversation](https://twitter.com/anotheruiguy/statuses/494942808206082048), Dale's argument is that 'when something becomes the de-facto way to build sites, why not make it the official way?' I think that this is a fine way to look at things if you can target specific versions of your client, ala iOS. What makes HTML and CSS awesome is that they're so incredibly backwards compatibile. Sure, we've depricated some things and removed `<blink>` from the browser entirely, but the fact that you can visit any site that was ever built and have it look almost exactly as the author intended is really cool. I know it might not seem like it, but changing the default behavior of `box-sizing` would dramatically change the way sites look. I think a lot of people would agree that universally changing the way an existing site renders by changing the rendering spec is out of the question. [Old web pages](http://www2.warnerbros.com/spacejam/movie/jam.htm) are like a time machine, and changing the spec like this would be like going back in time and killing a butterfly. Or something like that.