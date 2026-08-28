---
status: idea
area: content
priority: medium
effort: M
created: 2026-08-28
---

# Testimonials lack proof

The three `testimonials` in [config.js](../../src/data/config.js) are first-name-plus-initial with a role, no company name, no link, no photo. [[DESIGN]]'s Testimonials section (equal 3-col grid) is well-built, but the content it displays is unverifiable by a skeptical reader.

## Why it matters

[[PRODUCT]]'s visitor is explicitly comparing Precious against agencies and is looking for proof of reliability before paying. An anonymous-feeling quote is weaker proof than it could be for free — same layout, more credible content.

## Fix

Where permission allows: add company/brand name, a link to the live project (ties into [[Two work samples link nowhere]] — several of these clients already have `live` URLs in `projects`), or a small avatar. Doesn't require a design change, just richer data in `config.js`.
