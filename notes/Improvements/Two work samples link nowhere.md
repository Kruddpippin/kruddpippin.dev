---
status: idea
area: work
priority: high
effort: S
created: 2026-08-28
---

# Two work samples link nowhere

In [config.js](../../src/data/config.js) (`projects`), **Sable Skincare** and **Northwind Studio** both have `live: "#"`. [Work.jsx](../../src/sections/Work.jsx) renders whatever's in `live` as the card's link.

## Why it matters

Per [[PRODUCT]], the visitor is actively comparing Precious against agencies and other freelancers and is looking for proof of speed and reliability before trusting him with money. A portfolio card that goes nowhere is the opposite of proof — it's the one thing on the page that can visibly under-deliver on the pitch.

## Fix

Either link both to a real deployed URL, or drop the "live" link affordance on those two cards specifically (e.g. render as plain text, no click target) rather than a dead `#`.
