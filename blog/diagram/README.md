# Diagrams (SVG Flowcharts)

This folder contains **self-contained SVG flowcharts** used by the blog.

## Structure

- `blog/diagram/en/`: English diagrams
- `blog/diagram/zh/`: Chinese diagrams

## How to embed

### Option A: `<img>` (simplest)

```html
<img src="diagram/en/self-destruct-note-flow.svg" alt="Self-destructing note flow" loading="lazy">
```

### Option B: `<object>` (keeps selectable text)

```html
<object data="diagram/en/zero-width-encryption-flow.svg" type="image/svg+xml" aria-label="Zero-width encryption flow"></object>
```

## Notes

- Diagrams are **pure SVG** (no external assets, no scripts).
- Text is embedded for SEO/accessibility; provide a good `alt` or `aria-label` when embedding.

