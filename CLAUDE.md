# CLAUDE.md — movecraft-design-system (open)

Context for Claude / agents working in this repo.

## What this is

The **open build** of the Movecraft design system — the *skin* that other
projects pull in and consume through CSS variables. It ships design tokens,
Google-hosted fonts, and a component library. No proprietary font files.

- **Public, MIT.** There is a private twin, `movecraft-design-system`, that
  uses licensed Outsiders/Battersea fonts — **never copy those font files or
  their base64 into this repo** (redistribution isn't licensed).
- Consumed by **`deck-framework-open`** (the slide engine) and by any Movecraft
  page. It hardcodes nothing itself beyond the token values.

## Files

| File | Role |
|------|------|
| `theme-movecraft.css` | **All design tokens** (`--paper`, `--ink`, `--accent`, `--gold`, `--font-title`, `--font-body`, spacing, `--status-*`) **+ the `:root.theme-dark` variant**. Swap/edit this to re-skin. |
| `fonts.css` | Web fonts via Google — **Newsreader** (display) + **Hanken Grotesk** (body). Overrides the two font tokens. |
| `fonts-cherry.css` | Alternate display — **Cherry Swash** (upright). Load *instead of* `fonts.css`. |
| `components.css` | Primitives — static: `.mv-btn/.mv-icon-btn/.mv-link/.mv-panel/.mv-callout/.mv-quote/.mv-tag/.mv-label`, cards/badges. Interactive: `.mv-segmented`, `.mv-slider/.mv-range`, `.mv-editor/.mv-dropzone`, `.mv-chip`. |
| `components.js` | Vanilla, auto-init behavior for the interactive primitives, opt in via `data-mv-*`. |
| `index.html` | Live specimen — serve and open. |

**Load order:** `theme-movecraft.css → fonts.css → components.css → your styles`.

## Conventions (follow these)

- **Build on tokens, never hardcode** colors or fonts — `color: var(--ink)`,
  `font-family: var(--font-title)`. That's what makes a re-skin one file.
- **Look:** warm cream paper, deep crimson accent, gold uppercase micro-labels
  (0.1–0.14em tracking), **sharp corners** (no radius except round icon
  buttons), **warm dashed rules**, fast 0.12–0.15s transitions, no shadows.
- **Dark mode** is a full token swap under `:root.theme-dark` (add
  `class="theme-dark"` to `<html>`). New styles on tokens theme for free.
- **Display font is treated as pre-slanted.** `fonts.css` serves *Newsreader
  italic* but registers it `font-style: normal`, so display elements render
  slanted **without** `font-style: italic`. Do **not** add `font-style: italic`
  to display text (it synthesises a second slant); pair with
  `font-synthesis: none`.

## Gotchas

- **Serve over http** — Google fonts / woff2 don't load over `file://`
  (`python3 -m http.server`).
- Adding an interactive component? Style in `components.css`, behavior in
  `components.js` (auto-inits on load; wire via a `data-mv-*` attribute).
- The slide-activated `.mv-card--bar` variant lives in `deck-framework-open`
  (its reveal is tied to slide activation), not here.
