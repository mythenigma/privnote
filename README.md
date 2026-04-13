# Privnote.chat (site source)

一个以 **“一次性阅读/自毁”** 为核心的隐私便签与加密展示站点源码：提供生成加密便签链接、零宽字符/二进制文本加密、以及解密工具，并包含一套面向用户的说明页与博客内容。

This repository contains the source for a privacy-focused “burn-after-reading” notes site, including link-based notes, zero‑width/binary text encryption, a decrypt tool, documentation pages, and blog articles.

## What this project is

- **Self-destructing notes (link-based)**: generate a shareable link for a note, designed to be destroyed after being read (and/or by time).
- **Zero-width character encryption**: hide a message inside normal-looking text using zero‑width characters.
- **Binary format encoding**: present/encode notes in a binary-like representation for sharing.
- **Decrypt tool**: decode zero‑width/binary formatted messages back into plain text.
- **Docs & blog**: `/read` contains help/guide pages; `/blog` contains articles and diagrams.

> Notes: some “self-destruct link” workflows typically require server-side storage/deletion. This repo focuses primarily on the **site pages and client UI**; if you deploy it, make sure any server endpoints it references exist and are secured.

## Repository structure

- **`index.html`**: home / generate-link UI
- **`encryption.html`**: zero-width & binary text encryption UI
- **`decrypt.html`**: decrypt UI
- **`read/`**: user guides, FAQs, and supporting pages
- **`blog/`**: blog posts + images/diagrams
- **`style.css`**, **`translate.js`**: shared styling + i18n helpers
- **`_redirects`**, **`_headers`**: deploy hints for static hosting platforms (e.g., Pages/Workers style routing & headers)

## Run locally (static preview)

You can preview the site with any static file server.

### Option A: Python

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/`.

### Option B: Node.js

```bash
npx serve .
```

## Deployment

This project is well-suited for static hosting (GitHub Pages / Cloudflare Pages / Netlify / Vercel static output).

- Keep `_redirects` and `_headers` if your host supports them.
- Verify absolute links (some pages use `https://privnote.chat/...` hard-coded URLs).

## Security & disclaimer

- This repository is **not** a formal security product and has not been audited.
- Do not claim “end-to-end encryption” unless you have a verified threat model and audited implementation.
- If you add/enable server-side note storage, treat it as sensitive data:
  - encrypt at rest
  - minimize logs
  - implement strict deletion semantics
  - protect against enumeration/brute force

## Contributing

Issues and PRs are welcome:

- copy/UX improvements (especially mobile)
- i18n translations
- accessibility improvements
- consistency across footers, dates, and metadata

