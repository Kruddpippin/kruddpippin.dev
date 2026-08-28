---
status: idea
area: ops
priority: low
effort: S
created: 2026-08-28
---

# Contact form has no spam guard

[send.js](../../api/send.js) accepts any POST with `name`/`email`/`message` and forwards straight to Resend — no honeypot field, no rate limiting, no CAPTCHA.

## Why it matters

Low urgency at current traffic, but it's a public, unauthenticated endpoint that sends email on every hit. Cheap to harden now versus firefighting a spam flood later once the site gets more inbound links.

## Fix

Add a hidden honeypot field (reject if filled) and a basic per-IP rate limit. Skip CAPTCHA unless spam actually shows up — it adds friction to the real conversion path.
