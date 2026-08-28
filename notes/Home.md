---
tags:
  - moc
---

# Signal Labs — Vault Home

Planning and tracking notes for the [[PRODUCT|Signal Labs]] site, layered on top of the existing [[PRODUCT]] and [[DESIGN]] docs. The whole repo is the vault, so those two root docs are regular notes here — link to them with `[[PRODUCT]]` / `[[DESIGN]]` from anywhere.

## Reference

- [[PRODUCT]] — who the site is for, brand personality, anti-references, design principles
- [[DESIGN]] — the design system: color, type, components, do's and don'ts
- [[Site Map]] — every section mapped to its source file

## Backlog

> [!tip] Improvements board
> Grouped by status. Open [[Improvements.base]] directly for the full table, filters, and the by-area view.

![[Improvements.base]]

## Conventions

New backlog items go in `notes/Improvements/` as one note per idea, with this frontmatter:

```yaml
---
status: idea       # idea | planned | in-progress | shipped | wontfix
area: hero          # hero | work | pricing | testimonials | contact | seo | analytics | content | ops | perf | a11y
priority: medium    # high | medium | low
effort: S           # S | M | L
created: 2026-08-28
---
```

Body: what's wrong or missing, why it matters (tie back to [[PRODUCT]]'s principles or the buyer's decision process), and the fix. Once shipped, flip `status: shipped` and note the commit — don't delete the note, it's the changelog.
