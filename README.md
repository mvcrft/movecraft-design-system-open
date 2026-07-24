# Movecraft Design System (open)

A small, swappable design system — tokens, fonts, and components — behind
[Movecraft](https://www.movecraft.com). Warm cream paper, deep crimson accent,
editorial gold micro-labels, sharp corners, warm dashed rules, light + dark.

This is the **open build**: it uses Google-hosted fonts, so it's free to use
and re-skin with no proprietary font files. (Movecraft's branded sites use a
licensed display/body pairing; those font files aren't included here.)

## Files

| File | Role |
|------|------|
| `theme-movecraft.css` | All design tokens (`--paper`, `--ink`, `--accent`, `--gold`, `--font-title`, `--font-body`, spacing, status colors) **+ the `:root.theme-dark` variant**. Swap this to re-skin. |
| `fonts.css` | Web fonts via Google Fonts — **Newsreader** (display) + **Hanken Grotesk** (body). |
| `fonts-cherry.css` | Alternate display — **Cherry Swash** (upright slab). Load instead of `fonts.css`. |
| `components.css` | Reusable primitives — static: `.mv-btn`, `.mv-icon-btn`, `.mv-link`, `.mv-panel`, `.mv-callout`, `.mv-quote`, `.mv-tag`, `.mv-label`, cards/badges. Interactive: `.mv-segmented`/`.mv-seg-btn`, `.mv-slider`/`.mv-range`, `.mv-editor` (+ `.mv-dropzone`), `.mv-chip`. |
| `components.js` | Optional behavior for the interactive primitives (segmented toggle, slider fill + readout, dismissible editor, selectable chips). Vanilla, auto-init, opt in via `data-mv-*`. |
| `index.html` | Live specimen — tokens, type, and every component. Serve and open. |

## Use it

```html
<link rel="stylesheet" href="movecraft-design-system-open/theme-movecraft.css">
<link rel="stylesheet" href="movecraft-design-system-open/fonts.css">
<link rel="stylesheet" href="movecraft-design-system-open/components.css">
<script src="movecraft-design-system-open/components.js"></script>
```
Build everything on the tokens (`color: var(--ink)`, `font-family:
var(--font-title)`, …) so it themes for free. **Dark mode** is a full token
swap — add `class="theme-dark"` to `<html>`.

Serve over http (Chrome blocks web fonts over `file://`):
```
python3 -m http.server 8790     # then open http://localhost:8790/
```

## Fonts

**Newsreader** (display) and **Hanken Grotesk** (body) are served from Google
Fonts under the SIL Open Font License. Newsreader is served *italic* but
registered `font-style: normal`, so the display slants everywhere `--font-title`
is used with no per-element styling. Swap `fonts.css` → `fonts-cherry.css` for
the upright Cherry Swash display instead.

## License

Code (CSS/JS) © Colin Evoy Sebestyen — MIT (see `LICENSE`).
Fonts are provided by Google Fonts under their own (OFL) licenses.
