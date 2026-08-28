---
status: idea
area: ops
priority: medium
effort: S
created: 2026-08-28
---

# Dead Calendly config

`CONFIG.calendly` in [config.js](../../src/data/config.js) is `"#"` and, per a repo-wide search, isn't referenced by any component — no button or link actually reads it. It's dead config.

## Why it matters

[[PRODUCT]] names "book a call" as one of the two conversion actions (the other is "send a brief"), but there's currently no booking flow anywhere on the page — only email, WhatsApp, and the contact form. Either the booking path was intentionally dropped in favor of WhatsApp/email, or it's a gap.

## Fix

Decide: if calls aren't part of the funnel anymore, delete the field. If they are, wire a real Calendly (or equivalent) link into the Contact section alongside email/WhatsApp.
