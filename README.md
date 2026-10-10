# Amgalanbayar — Chinese Introduction Website

A static, responsive website built with plain HTML, CSS, and JavaScript. No React, no build step, and no dependencies.

## Run locally

1. Extract the ZIP archive.
2. Open `index.html` in a browser. For best local development, use VS Code with the Live Server extension.

## Deploy to Vercel (easy option)

1. Create a GitHub repository and upload all files in this folder, keeping `index.html`, `style.css`, `script.js`, and `assets/` at the repository root.
2. Go to https://vercel.com/new and import the repository.
3. In project settings, set **Framework Preset** to **Other**. Leave Build Command and Output Directory blank; this is a static site.
4. Click **Deploy**. Vercel will provide a public URL.

You can also deploy with Vercel CLI if you have Node.js installed:

```bash
npm install -g vercel
cd amka-static-site
vercel
```

## Edit the content

- Change Chinese/pinyin/English copy in `index.html`.
- Edit colors and responsive layout in `style.css`.
- Edit slide navigation and language toggle in `script.js`.
- Replace `assets/shanghai-hero.png` and `assets/family-anime.png` with your own images using the same filenames.

The English toggle switches the text marked with `data-zh` and `data-en`. Pinyin remains visible so it is easy to practice speaking.
