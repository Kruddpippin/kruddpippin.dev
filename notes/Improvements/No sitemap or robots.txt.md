---
status: idea
area: seo
priority: medium
effort: S
created: 2026-08-28
---

# No sitemap.xml or robots.txt

`public/` has favicons, OG image, and a webmanifest, but no `robots.txt` or `sitemap.xml`. Past commits (`d889406`, `a30be88`) already added OG/Twitter cards, canonical link, `ProfessionalService` schema, and a prerendered build — the SEO groundwork is there, just missing the crawl-directive files.

## Why it matters

The site's only stated acquisition path per [[PRODUCT]] is "referral or social link" — no organic search channel. A sitemap won't create demand, but its absence is a free, zero-risk gap on a site that already invested in prerendering + structured data for crawlers.

## Fix

Add a static `robots.txt` (allow all, point to sitemap) and a small `sitemap.xml` listing the single route. Cheap since the site is effectively one page.
