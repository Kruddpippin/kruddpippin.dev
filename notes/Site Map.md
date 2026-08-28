---
tags:
  - moc
---

# Site Map

Page sections top to bottom, mapped to source. One React SPA (`Portfolio.jsx`), server-rendered via `entry-server.jsx` + `scripts/prerender.mjs` at build time.

| Section | Component | Notes |
|---|---|---|
| Nav | [Nav.jsx](../src/sections/Nav.jsx) | inert mobile panel when closed |
| Hero | [Hero.jsx](../src/sections/Hero.jsx) | + [DeliveryStrip.jsx](../src/components/DeliveryStrip.jsx) |
| Stats | [Stats.jsx](../src/sections/Stats.jsx) | + [CountUp.jsx](../src/components/CountUp.jsx) |
| Work | [Work.jsx](../src/sections/Work.jsx) | 3-col grid, 16:10 screenshots |
| Process | [Process.jsx](../src/sections/Process.jsx) | connected rail, shares `CONFIG.process` with the hero delivery strip |
| Services (pricing) | [Services.jsx](../src/sections/Services.jsx) | 3 build tiers + Care Plan strip |
| About (statement) | [About.jsx](../src/sections/About.jsx) | asymmetric editorial layout |
| Testimonials | [Testimonials.jsx](../src/sections/Testimonials.jsx) | equal 3-col grid |
| FAQ | [Faq.jsx](../src/sections/Faq.jsx) | accordion, ARIA-wired |
| Contact | [Contact.jsx](../src/sections/Contact.jsx) | email/WhatsApp row, trust points, form |
| Footer | [Footer.jsx](../src/sections/Footer.jsx) | |

## Content & data

- [config.js](../src/data/config.js) — every string, price, stat, project, testimonial, FAQ lives here
- [send.js](../api/send.js) — contact form handler (Vercel function, Resend)

## System

- [index.css](../src/styles/index.css) — design tokens (`:root`), the canonical source for [[DESIGN]]'s color/type values
- [theme.js](../src/utils/theme.js) — light/dark mode logic
- [prerender.mjs](../scripts/prerender.mjs) — build-time SSR prerender
- [optimize-images.mjs](../scripts/optimize-images.mjs) — image pipeline

See [[DESIGN]] for the rules behind these, [[PRODUCT]] for who they're for.
