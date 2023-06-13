---
layout: post
title:  "Dropping support"
permalink: /blog/dropping-support/
---

I'm typing this on a plane back from my first trip to Europe, and while there I had an experience that I thought was worth sharing.

My wife and I were in Amsterdam, 1 hour before our overnight train ride to Copenhagen was scheduled to depart. I had purchased the tickets online using the German train company's site. We weren't sure where to go, so we went to the counter where you purchase the international train tickets and show the queue manager the pdf of the ticket on my phone. He looks at it confused for a moment and tells me it needs to be printed. He translates the first line of German on the ticket that states as much.

Shit.

I'm usually not the type to panic, but I came pretty close here. These were expensive tickets (we got the private sleeper cabin) and we knew the next night's were sold out (as we originally wanted to leave then). On top of this, my wife was...upset. I asked where I could print them out, he suggested the tourist information building outside the station. He also told me there was a coffee shop/internet cafe near it. I ran over but one was closed, the other didn't have a printer. And the people at the public transit office I went into suggested I go back in to city center to an internet cafe. I did not have time for that.

I run outside (still carrying my luggage, for some reason I didn't leave that with my wife.) As I scanned the buildings around the train station, a little nugget of information (life hack?) I once read popped into my head. I saw what looked like a hotel and ran over, asking the concierge if they had a business center with a printer, as I'd lost (shhh) my train ticket and needed to reprint it. She kindly pointed me to it.

At this point I should note that I have 2 email hosts- gMail and iCloud. So when I fired up the web browser, I had a minor heart attack. 

_Windows XP. Internet Explorer 6_.[1]

I knew right away iCloud didn't have a chance in hell at working. And I was pretty sure that Google only supported IE9 and up. But I headed over to gMail and prayed. I was greeted with a message suggesting I upgrade my browser, but amazingly, I was able to log in (with 2 factor authentication) and get a simplified interface that worked. And by some other miracle, the PDF attachment opened and I was able to print without a further snag.

## So?

I'm not sure if my experience here falls under the categorization of "Progressive Enhancement" or "Graceful Degredation", but there's a moral in here somewhere. I've been trying to think about what this means and how it relates to development and browser support. Do I think everyone should still support all of the old browsers? No, of course not. That would be insane. But we should consider how critical the functionality of the things we build might be to our users in a range of environments. Obviously, email is one of the core uses of the web. Every modern communication app gets tied back to it in some way. So having the most used email client in the world[2] work on as many clients as possible is certainly important functionality. It obviously doesn't need to have the fancy bells and whistles, but the core functionality is there. Now, does something like your online banking or your task manager need to work on all clients? Probaby not. But consider the use cases and build with progressive enhancement in mind, so that the lowest common denominator has the best chances of working.

I do have to wonder about gMail though- I'm betting that the core experience that I had was served up specifically for my browser, perhaps based on the front end that was in use around when gMail originally launched. If I had to guess, they probably just kept that code around because there's no sense in dropping old browsers if they can reliably serve up better experiences using device/feature detects.


[1]It might have been IE7. But it looked old.
[2]I have no idea if that's true. I'd wager it's at least accurate for the US.