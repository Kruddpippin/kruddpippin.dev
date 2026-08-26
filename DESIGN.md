---
name: SIGNAL LABS
description: Neutral-graphite freelance/agency portfolio with one coral accent — fast pages, proven by the site's own craft.
colors:
  bg-dark: "#0B0C0E"
  surface-dark: "#131519"
  surface2-dark: "#1B1E23"
  line-dark: "#262A31"
  ink-dark: "#F2F4F7"
  muted-dark: "#98A0AC"
  bg-light: "#F6F7F8"
  surface-light: "#FFFFFF"
  surface2-light: "#ECEEF1"
  line-light: "#DBDFE4"
  ink-light: "#14171B"
  muted-light: "#5B6470"
  accent-dark: "#E2683F"
  accent-dark-strong: "#C6551F"
  accent-light: "#B5461F"
  accent-light-strong: "#9A3A19"
  utility-dark: "#7C93B8"
  utility-light: "#4C6285"
  rust-dark: "#E5484D"
  rust-light: "#C22733"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
rounded:
  sm: "3px"
  md: "4px"
  pill: "30px"
  circle: "50%"
spacing:
  section: "clamp(80px, 10vw, 128px)"
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button-ghost:
    backgroundColor: "transparent"
    rounded: "{rounded.md}"
    padding: "12px 20px"
---

# Design System: SIGNAL LABS

## 1. Overview

**Creative North Star: "The Craftsman's Workbench"**

Signal Labs builds fast, fixed-price pages for people who've been burned by freelancers who go quiet. The site has to prove that promise through its own hand: precise, unmistakably made by someone paying attention, not assembled from a component library. A single coral accent, a heavy grotesk for display type, and a neutral graphite base that lets that accent actually read as *signal* rather than blending into a same-hue background.

This system explicitly rejects: tri-color gradients (text, buttons, borders, avatars), `background-clip: text` headlines, blurred glass navigation, uppercase-tracked mono "eyebrows" repeated above every section, fake browser-chrome dots on project thumbnails, identical rounded card grids used as the default answer for pricing/testimonials/process, and a warm-brown base that shares a hue family with the accent.

**Key Characteristics:**
- One committed accent (coral) on a **neutral graphite** base — warm-brown and coral together read as mud, not signal; the base is deliberately hue-neutral so the accent is the only saturated thing in the room
- Archivo, a heavy tight-tracked grotesk, for display headings against Inter for body: bold weight and negative letter-spacing carry personality instead of a serif
- A `--utility` cool blue-gray token carries mono labels, tags, and timeline/step markers — coral itself is reserved for interactive elements only (buttons, links, active states, badges)
- Sharp, near-flat corners (3-4px) on cards, buttons and inputs instead of soft rounded-SaaS shapes; full-pill reserved for tags/chips, true circles for avatars and step markers
- Each section gets its own structural idea (a split-grid hero with a real client screenshot, divider-row stats, an asymmetric editorial statement section, connected-rail process, an equal-grid testimonial row, a neutral contact section with coral reserved for the one button) instead of a repeating card template
- Flat by default; elevation only appears as a direct response to hover/focus

## 2. Colors

A neutral graphite base with one coral accent; both dark and light modes flip lightness the same way, never hue.

### Primary
- **Accent** (`#E2683F` dark / `#B5461F` light): the only accent color in the system, restricted to interactive/action elements — buttons, links, focus rings, active nav/FAQ states, the featured-pricing badge and border, and exactly two headline emphasis spots (see Typography). Never used for status dots, tags, or step numbers; those are `--utility`.
- **Accent-strong**: hover/active state for Accent.
- **Accent-ink**: text/icon color placed *on* Accent fills. Dark mode uses near-black ink on the brighter dark-mode coral; light mode uses white ink on the deeper, more saturated light-mode coral. The two modes need opposite ink because the two accent values sit at different lightness for contrast reasons — don't copy one theme's ink value into the other.

### Utility
- **Utility** (`#7C93B8` dark / `#4C6285` light): cool blue-gray for anything that needs to be *distinct* without competing with the accent — the availability-status dot, process step-number circles, timeline markers. This is also where the old "moss" success-green retired to; there is no green anywhere in the system.
- **Rust** (`#E5484D` dark / `#C22733` light): error states only. Deliberately a clear red, not orange, so it never reads as a duller version of the brand accent.

### Neutral
- **Bg** (`#0B0C0E` dark / `#F6F7F8` light): page background. Neutral graphite/off-white — no warm or cool cast that would share a hue family with the accent.
- **Surface / Surface-2**: card and raised-panel backgrounds, two steps.
- **Line / Line-strong**: hairline borders at rest / on hover (`line-strong` is `color-mix(line, text)`, not a separately hand-picked value).
- **Text / Text-mute**: primary and secondary text. Checked against their background for ≥4.5:1 contrast.

### Named Rules
**The Neutral Base Rule.** The page background and surfaces never carry the accent's hue. A base that leans warm-brown (or any hue near the accent) makes the accent read as mud instead of signal — this is *why* the base is graphite, not a stylistic default.

**The Interactive-Only Rule.** Accent color is restricted to things a user can act on: buttons, links, active/expanded states, and badges tied to those actions (the "Most popular" pricing tag). Ambient/informational UI (status dots, mono labels, timeline numbers) uses `--utility` or `--text-mute` instead. The one exception is the hero/statement headline emphasis span — a single, deliberate brand moment, not decoration.

**The No-Gradient Rule.** No `linear-gradient`/`radial-gradient` is ever applied to text, borders, or buttons. The one exception is a single soft single-hue radial glow behind the hero headline (`.hero-glow`), at low opacity, for depth — never a multi-color aurora.

## 3. Typography

**Display Font:** Archivo (grotesk, weights 600–900)
**Body Font:** Inter (weights 400–700)
**Label/Mono Font:** JetBrains Mono (weights 500–700)

All three are **self-hosted** variable-font files (`public/fonts/`), not loaded via a Google Fonts `@import` — `@import` is render-blocking and adds a full extra round-trip before the browser even discovers the font URLs. The Archivo file is preloaded in `index.html` since it's the hero headline's face.

A full type scale is defined as CSS custom properties (`--fs-display` through `--fs-mono`) rather than one-off pixel values per selector — see `src/styles/index.css`'s `:root` block for the exact clamp values.

### Tracking scale
Letter-spacing is keyed to size tier, not chosen per-element: `-0.02em` at display/h1 size, `-0.015em` at h2, `-0.01em` at h3 (24px), and `0` on anything rendered under 24px (card titles, nav wordmark, mono labels, body text). A single heavy grotesk at aggressive negative tracking collides glyphs at large sizes if this isn't held consistently.

### Hierarchy
- **Display** (`--fs-display`, weight 800, line-height 0.98, ls -0.02em): hero headline, set in a half-width column beside the hero photo.
- **H2** (`--fs-h2`, weight 800, line-height 1.05, ls -0.015em): section headings, stat numbers, the statement/contact headlines.
- **H3** (`--fs-h3`, weight 700-800, line-height 1.2, ls -0.01em): the pricing amount specifically — demoted from display-adjacent size so it stops competing with section headings, with the currency symbol split into its own 0.6em baseline-aligned span.
- **H4** ("card titles", `--fs-h4`, weight 700, line-height 1.3, ls 0): work titles, pricing plan names, process step titles.
- **Body** (`--fs-body`, 400, line-height 1.6): paragraph copy. Long-form body copy (FAQ answers, the statement paragraph, pricing descriptions, hero subcopy) is capped at `max-width: 68ch`; testimonial quotes at `46ch`.
- **Mono** (`--fs-mono`, 700, JetBrains Mono, ls 0.12em, uppercase, line-height 1.4): every small label in the system — section labels, the delivery-strip day markers, price tags, project tags, the statement kicker. One consistent tier instead of a scatter of 10-11.5px one-offs.

### Named Rules
**The Single Emphasis Rule.** A bold accent-colored span in the same grotesk (no italic, no serif substitution) is the one type-level emphasis device in the system. It appears in exactly two places — the hero headline's guarantee clause and the statement-section headline — and nowhere else.

## 4. Elevation

Flat by default. Nothing carries a resting shadow. Shadows appear only as a direct response to hover or focus, are neutral-toned (never colored/glowing), and stay under 16px of blur so they never pair with a 1px border into the "ghost card" look.

### Named Rules
**The Response-Only Rule.** If a shadow is visible on an element at rest, that's a bug. Elevation communicates state change, not decoration.

## 5. Components

### Buttons
- **Shape:** 4px radius, near-sharp by design; never pill-shaped except chips/tags.
- **Primary:** solid Accent fill, Accent-ink text. A plain background-color transition to Accent-strong plus a 3px lift on hover.
- **Ghost:** 1px `line-strong` outline, transparent fill, surface2 background on hover.
- **Nav CTA / text-links:** not filled buttons — plain text with a 1px underline and an accent-colored arrow icon.
- Base button styling lives on the bare `button` element selector (not `.root button`), so any class-based button style (`.btn-primary`, `.icon-btn`, `.faq-item`, `.email-copy`, floating action buttons) reliably wins the cascade. This was a real, long-standing bug: the old `.root button` reset had higher specificity than any single-class button rule and silently stripped every button's background/border/color.

### Chips / Tags
- **Style:** full-pill radius, 1px border, muted text; selected state (service picker) fills solid Accent with Accent-ink text.

### Cards / Containers
- **Corner Style:** 3–4px standard, sharp by design. Never past 4px except the intentional circle/pill exceptions (avatars, step markers, tags).
- **Shadow Strategy:** flat at rest; border-color shift on hover, not shadow, for most cards.

### Navigation
- **Style:** solid `bg` background with a 1px bottom border. Links are plain text that gain a 2px accent underline only when active. The mobile-menu panel is marked `inert` when closed so it drops out of the tab order at desktop widths instead of staying reachable off-screen.

### Hero (signature component)
An asymmetric split grid, not a centered hero: copy (status line, headline, delivery timeline, CTAs) fills the left column; a real screenshot of a shipped client project fills the right in a sharp-cornered panel with a thin rotated frame line — a real `<img>` with `fetchPriority="high"` and explicit width/height (it's the LCP candidate), not a CSS background-image. A full-width marquee strip (buyer-facing words, not developer jargon) closes the hero as its own grid row. The headline states the actual guarantee ("live in 72 hours, late and it's free"), not a generic design claim.

### Delivery Strip (signature component)
A static Day 0 → Day 3 timeline (Brief / Build / Polish / Ship) in the hero, sourced from the same `CONFIG.process` array the Process section renders — replaces what used to be a live countdown clock, which read as manufactured urgency since it counted down from a number nobody purchased.

### Section Head (signature component)
Every section title is set in Archivo, capped at a 640px container, no label or eyebrow above it by default.

### Work Grid (signature component)
Three-column grid of **16:10** project screenshots (not portrait) — a portrait crop was cutting hero headlines mid-word on the source screenshots. Real `<img loading="lazy">` elements (not CSS background-image, which can't be lazy-loaded or sized for CLS), desaturated at rest and brought to full saturation with a lift on hover. Each card is a 4-row grid (image / title / description / tags) so a two-line title doesn't misalign the tags row against its neighbors; tags sit left-aligned below the description.

### Process Rail (signature component)
The four-step process earns numbered markers (in `--utility`, not accent) — a connected horizontal rail rather than four identical bordered cards.

### Statement (signature component)
The About section reads as an asymmetric editorial statement: a narrow kicker column beside a wide column carrying one large headline (with the system's one other permitted accent emphasis) and a lead paragraph. Speaks as the business ("we"), not a named individual.

### Pricing (signature component)
Three comparable build tiers (Express / Full Site / Mobile App) sit in one row with `grid-auto-rows: 1fr` and `margin-top: auto` on each CTA, so every button lands flush at the bottom regardless of feature-list length. Care Plan (the recurring add-on, not a comparable tier) is a separate full-width strip below, not a fourth grid cell.

### Testimonials (signature component)
An equal 3-column grid, equal heights (`align-items: stretch`) — not a featured-quote-plus-two-narrow masonry, which left dead space beside the shorter cards.

### Contact (signature component)
A neutral section using the same `--bg`/`--surface`/`--text` tokens as the rest of the page, **not** a full-bleed accent band — that treatment failed contrast (dark ink on mid-tone coral, ~3:1) and was the largest instance of the coral-everywhere problem. Coral now appears only on the Send-message button. The left column carries email + WhatsApp (same `.email-copy`-styled row, same weight), socials, and the three trust points (moved here from the Statement section, filling what used to be dead space). A response-time line sits directly under the submit button, not just in the intro paragraph above the form.

## 6. Do's and Don'ts

### Do:
- **Do** use Accent as the single interactive color; reserve Utility for ambient/informational elements and Rust strictly for errors.
- **Do** keep shadows flat-at-rest and neutral-toned, appearing only on hover/focus.
- **Do** vary section structure — divider-row stats, a connected rail for process, an equal-grid testimonial row — rather than repeating one card template.
- **Do** use Archivo for anything that needs personality (headings, the pricing amount) and Inter for anything that needs to disappear (body copy, form labels, quotes).
- **Do** write button-styling selectors that beat the bare `button` reset (any single class already does; just don't reintroduce a higher-specificity reset like `.root button`).

### Don't:
- **Don't** use `linear-gradient`/`radial-gradient` on text, buttons, or borders.
- **Don't** blur the nav or any surface for a glassmorphism effect.
- **Don't** put an uppercase-tracked mono "eyebrow" above every section heading.
- **Don't** let the page background share a hue family with the accent — that's what made the old warm-brown base read as mud instead of signal.
- **Don't** round cards, buttons or inputs past 4px — full-pill is reserved for tags/chips only, true circles for avatars and step markers.
- **Don't** reuse the same card grid (equal-width, equal-height, icon+heading+text) for pricing, process, and testimonials — each has a distinct structure.
- **Don't** speak in first-person-singular ("I") anywhere the business is describing itself — this is a company voice ("we"), not a personal portfolio. The two legitimate exceptions are direct customer quotes (testimonials) and copy written from the *customer's* perspective (the "Do I own the code?" FAQ question, form placeholder text).
