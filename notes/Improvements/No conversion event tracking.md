---
status: idea
area: analytics
priority: medium
effort: M
created: 2026-08-28
---

# No conversion event tracking

`@vercel/analytics` is installed but only tracks page views by default. There's no event tracking on the three actual conversion actions: WhatsApp click, email click (commit `f49f87b` made this open mail compose directly), and contact form submit.

## Why it matters

Without per-channel conversion events there's no way to answer the question that actually matters for the business: which of "WhatsApp vs. email vs. form" is where visitors actually convert. Every future change to [[DESIGN]]'s Contact section is currently a guess.

## Fix

Add `track()` calls from `@vercel/analytics` (or equivalent) on the WhatsApp link, the email row, and successful form submission in [Contact.jsx](../../src/sections/Contact.jsx). Small change, high signal value.
