---
name: KRUDDPIPPIN
description: Warm, editorial freelance/agency portfolio — fast pages, made by a person, not a template.
colors:
  bg-dark: "oklch(16% 0.014 45)"
  surface-dark: "oklch(21% 0.017 45)"
  surface2-dark: "oklch(26% 0.02 45)"
  ink-dark: "oklch(95% 0.012 60)"
  muted-dark: "oklch(72% 0.02 50)"
  bg-light: "oklch(98% 0.005 60)"
  surface-light: "oklch(100% 0 0)"
  surface2-light: "oklch(95% 0.011 50)"
  ink-light: "oklch(22% 0.02 50)"
  muted-light: "oklch(43% 0.025 50)"
  clay: "oklch(65% 0.16 38)"
  clay-deep: "oklch(58% 0.17 35)"
  moss: "oklch(74% 0.1 152)"
  rust: "oklch(65% 0.19 27)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 7.4vw, 4.875rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 700
rounded:
  sm: "8px"
  md: "12px"
  lg: "14px"
  xl: "18px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "46px"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.clay-deep}"
  button-ghost:
    backgroundColor: "transparent"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
---

# Design System: KRUDDPIPPIN

## 1. Overview

**Creative North Star: "The Craftsman's Workbench"**

Precious builds fast, fixed-price pages for people who've been burned by freelancers who go quiet. The site has to prove that promise through its own hand: warm, precise, a little literary, unmistakably made by one person paying attention — not assembled from a component library. Where the old build reached for the default AI-agency vocabulary (violet-coral-mint gradients on everything, glass nav, pill eyebrows, identical bordered card grids), this system replaces every one of those reflexes with a single committed warm accent, a serif/sans pairing with real contrast, and layouts that vary section to section the way a person's actual choices would.

This system explicitly rejects: tri-color gradients (text, buttons, borders, avatars), `background-clip: text` headlines, blurred glass navigation, uppercase-tracked mono "eyebrows" repeated above every section, fake browser-chrome dots on project thumbnails, and identical rounded card grids used as the default answer for pricing, testimonials, and process.

**Key Characteristics:**
- One committed accent (clay/terracotta) — no gradients anywhere, ever
- Fraunces serif for display headings against Inter for body: a real contrast pairing, not two similar grotesques
- Each section gets its own structural idea (divider-row stats, connected-rail process, featured-quote testimonials) instead of a repeating card template
- Warm near-black in dark mode, true off-white (not cream) in light mode
- Flat by default; elevation only appears as a direct response to hover/focus

## 2. Colors

A single warm, saturated accent carries the brand; everything else is warm-tinted neutral.

### Primary
- **Clay** (oklch(65% 0.16 38) dark / oklch(55% 0.17 36) light): the only accent color in the system. Buttons, links, focus rings, the brand dot, selected states. Used deliberately, never doubled up with a second competing hue.
- **Clay Deep** (oklch(58% 0.17 35) dark / oklch(48% 0.18 33) light): hover/active state for Clay.

### Secondary
- **Moss** (oklch(74% 0.1 152) dark / oklch(48% 0.1 152) light): success and "included" signals — checkmarks, the availability dot, confirmation text. Never used decoratively.
- **Rust** (oklch(65% 0.19 27) dark / oklch(50% 0.19 27) light): error states only.

### Neutral
- **Warm Charcoal** (oklch(16% 0.014 45)): dark-mode body background. Warm-tinted near-black, not purple-black.
- **Warm Surface** (oklch(21% 0.017 45) / oklch(26% 0.02 45)): dark-mode card and raised-panel backgrounds, two steps.
- **True Paper** (oklch(98% 0.005 60)): light-mode body background — genuinely low-chroma off-white, not the saturated cream/sand AI default.
- **Ink** (oklch(95% 0.012 60) dark / oklch(22% 0.02 50) light): primary text.
- **Muted Ink** (oklch(72% 0.02 50) dark / oklch(43% 0.025 50) light): secondary text, labels, captions. Always checked against its background for ≥4.5:1 contrast.

### Named Rules
**The One Accent Rule.** Clay is the only saturated color that ever appears twice in the same view. If a second saturated hue shows up, it's Moss or Rust and it is always tied to a specific semantic meaning (success, error) — never decorative.

**The No-Gradient Rule.** No `linear-gradient`/`radial-gradient` is ever applied to text, borders, or buttons. The one exception is a single soft single-hue radial glow behind the hero headline (`.hero-glow`), at low opacity, for depth — never a multi-color aurora.

## 3. Typography

**Display Font:** Fraunces (serif, optical-size variable, weights 400–700)
**Body Font:** Inter (weights 400–700)
**Label/Mono Font:** JetBrains Mono (weights 500–700)

**Character:** A warm literary serif against a clean technical grotesque — the contrast pairing this system is built on. Fraunces carries personality and craft into every heading; Inter stays out of the way in body copy; JetBrains Mono is reserved for genuinely technical or numeric moments (the countdown clock, tags, prices' cents-like details) rather than decorating every section as a tracked eyebrow.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 7.4vw, 4.875rem)`, line-height 1.04, letter-spacing -0.025em): hero headline only. The `em` child (italic, Clay) is the one permitted emphasis device — used once, on the hero's key phrase, never as a repeating pattern.
- **Headline** (600, `clamp(1.75rem, 4.2vw, 2.625rem)`, line-height 1.1): section h2s.
- **Title** (600, 19–22px): card/component headings (work titles, pricing plan names, FAQ questions).
- **Body** (400, 15–16px, line-height 1.6): paragraph copy, max 65–75ch measure via `max-width: 40–44ch` on lead/section text.
- **Label** (700, 11–13px, JetBrains Mono): tags, day markers, countdown digits, prices' fine print. Not used for section eyebrows — that reflex has been removed entirely.

### Named Rules
**The Single Emphasis Rule.** Italic Fraunces in Clay is the one type-level emphasis device in the whole system. It appears once, in the hero. It is not reused as a section-wide "gradient text" substitute.

## 4. Elevation

Flat by default. Nothing carries a resting shadow. Shadows appear only as a direct response to hover or focus, are neutral-toned (never colored/glowing), and stay under 16px of blur so they never pair with a 1px border into the "ghost card" look.

### Shadow Vocabulary
- **hover-lift** (`box-shadow: 0 12px 24px -12px var(--shadow)`): work thumbnails and the back-to-top button on hover. `--shadow` is a neutral warm-black/dark-warm-gray, never accent-tinted.
- **panel** (`box-shadow: 0 24px 48px -20px var(--shadow)`): the chat window only — the one floating panel in the system.

### Named Rules
**The Response-Only Rule.** If a shadow is visible on an element at rest, that's a bug. Elevation communicates state change, not decoration.

## 5. Components

### Buttons
- **Shape:** 9px radius, never pill-shaped except chips/tags.
- **Primary:** solid Clay fill, white text, `11px 20px` padding. No shimmer sweep, no gradient — a plain background-color transition to Clay Deep plus a 2px lift on hover.
- **Ghost:** 1px `border2` outline, transparent fill, surface2 background on hover.

### Chips / Tags
- **Style:** 6–8px radius, 1px border, muted text; selected state (service picker) fills solid Clay with white text — no gradient fill.

### Cards / Containers
- **Corner Style:** 12–14px standard, 18px only for the largest containers (contact panel). Never 24px+.
- **Background:** `surface` / `surface2` two-step system; the featured pricing card uses `color-mix(in oklch, var(--accent) 6%, var(--surface))` plus a solid Clay border instead of a gradient border-box trick.
- **Shadow Strategy:** flat at rest (see Elevation); border-color shift on hover, not shadow, for most cards.
- **Border:** 1px `border` at rest, `border2` on hover/focus.
- **Internal Padding:** 22–30px depending on density.

### Inputs / Fields
- **Style:** 1px `border`, 9px radius, `bg` fill.
- **Focus:** border shifts to Clay plus a 3px `color-mix(in oklch, var(--accent) 18%, transparent)` ring — soft, not a heavy colored glow.

### Navigation
- **Style:** solid `bg` background with a 1px bottom border. No backdrop blur / glass effect. Links are plain text that gain a `surface2` pill background only when active.

### Section Head (signature component)
Every section title is set in Fraunces, no label or eyebrow above it by default. Where a section benefits from a lead-in sentence (optional `lead` prop), it's a plain sentence in muted body copy, not a mono-tracked kicker — and it's used selectively, not as a uniform site-wide pattern.

### Process Rail (signature component)
The four-step process is a real ordered sequence, so it earns numbered markers — rendered as a connected horizontal rail (numbered circles on a hairline) rather than four identical bordered cards. This is the one place numbers are used, because the order is actually meaningful information.

### Testimonials (signature component)
One quote is featured large (Fraunces serif, 22px) spanning two rows in a 1.3fr/1fr grid; the remaining quotes sit smaller beside it. Breaks the identical-card-wall reflex by giving the strongest quote more weight.

## 6. Do's and Don'ts

### Do:
- **Do** use Clay as the single accent color; reserve Moss/Rust strictly for success/error semantics.
- **Do** keep shadows flat-at-rest and neutral-toned, appearing only on hover/focus and staying under 16px blur.
- **Do** vary section structure — divider-row stats, a connected rail for process, an asymmetric testimonial layout — rather than repeating one card template.
- **Do** use Fraunces for anything that needs personality (headings, prices, quotes) and Inter for anything that needs to disappear (body copy, form labels).
- **Do** check muted text against its background; if it's close to 4.5:1, move it toward ink.

### Don't:
- **Don't** use `linear-gradient`/`radial-gradient` on text, buttons, or borders — this was the single biggest tell in the previous build (violet/coral/mint everywhere).
- **Don't** blur the nav or any surface for a glassmorphism effect.
- **Don't** put an uppercase-tracked mono "eyebrow" above every section heading — this repeated identically on all seven sections in the old build and is exactly the AI-generation tell it looks like.
- **Don't** draw fake browser-chrome dots on project thumbnails.
- **Don't** pair a 1px border with a ≥16px-blur shadow on the same element ("ghost card").
- **Don't** round cards past 18px, or buttons past a pill shape used only for tags.
- **Don't** reuse the same card grid (equal-width, equal-height, icon+heading+text) for pricing, process, and testimonials — each of those now has a distinct structure.
