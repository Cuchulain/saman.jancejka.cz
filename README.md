# Jan Čejka — Šamanismus & Léčení

Osobní blog Jana Čejky o šamanismu, energetickém léčení a komunikaci s přírodou. Jan se věnuje léčitelství od svých 17 let (nar. 1971) a propojuje duchy přírodního světa s moderním myšlením.

**Web:** [jancejka.cz](https://jancejka.cz)

## Témata

- Šamanismus — praxe, tradice, obřady, cesty
- Léčení a uzdravování — energetická léčba, práce s tělem a duší
- Komunikace s přírodou — duchové přírody, elementy, rostliny, zvířata
- Harmonizace prostor — čištění energií, posvátná místa
- Síť světelných sloupů — energetická peer-to-peer síť sloupů vyzařujících léčení a lásku

## ✨ Funkce

- Minimalistický design zaměřený na čitelnost
- Plná podpora dark/light mode (třída `.dark` na `<html>`)
- Responzivní layout pro všechna zařízení
- Content Collections s typovým schématem (Zod)
- Podpora Markdown a MDX
- View Transitions (Astro ClientRouter)
- Tagovací systém s filtrací příspěvků
- SEO — meta tagy, Open Graph, JSON-LD
- RSS kanál (`/rss.xml`)
- Sitemap
- Vercel Analytics
- Self-hosted fonty Geist Sans & Mono

## 🚀 Vývoj

```bash
pnpm dev        # dev server → http://localhost:4321
pnpm build      # produkční build
pnpm preview    # náhled buildu
```

## 📁 Struktura projektu

```
public/
  fonts/             # Self-hosted Geist Sans + Mono (woff2)
  images/            # Obrázky příspěvků
src/
  content/
    posts/           # Příspěvky (.md / .mdx)
  components/        # Znovupoužitelné .astro komponenty
  layouts/
    BaseLayout.astro # SEO/head wrapper
    PostLayout.astro # Wrapper příspěvku (prev/next navigace)
  pages/
    index.astro      # Posledních 5 příspěvků
    journal.astro    # Všechny příspěvky s náhledy
    about.astro      # O autorovi
    posts/[slug].astro
    tags/[tag].astro
    rss.xml.js
  styles/
    global.css       # Tailwind v4 + CSS utility třídy (@layer components)
  utils/
    date.js
    optimizeImagePath.ts
  content.config.ts  # Schéma Content Collections
astro.config.mjs
```

## 📝 Přidání příspěvku

Vytvořit soubor `.md` nebo `.mdx` v `src/content/posts/`:

```md
---
title: Název příspěvku
date: 2025-11-22
excerpt: Krátký popis příspěvku
image: /images/nazev.jpg
tags: [šamanismus, léčení]
---

Obsah příspěvku...
```

> **Pozor:** `date` musí být YAML datum **bez uvozovek**, jinak `z.date()` vyhodí chybu parsování.

Obrázky umístit do `public/images/` a odkazovat jako `/images/nazev.jpg`.

### Doporučené tagy

```
šamanismus, léčení, uzdravování, příroda, duchové, elementy, harmonizace,
světelné-sloupy, síť-sloupů, meditace, rituály, energie, prostor, bydlení
```

## 🎨 Tailwind CSS v4

Konfigurace výhradně přes Vite plugin v `astro.config.mjs` — **žádný `tailwind.config.ts`**.  
Dark mode: `@variant dark (&:where(.dark, .dark *));` v `global.css`.

Utility třídy definované v `src/styles/global.css` (`@layer components`):  
`.btn-primary`, `.btn-secondary`, `.btn-sm`, `.btn-lg`, `.card`, `.tag`, `.nav-link`, `.feature-image`, `.container-sm/md/lg/xl`, `.post-nav-link`

## 🧩 Technologie

- [Astro 6](https://astro.build/) — statický výstup (`output: 'static'`)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — `@tailwindcss/vite`
- [MDX](https://mdxjs.com/) — `@astrojs/mdx`
- [date-fns 4](https://date-fns.org/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- [@vercel/analytics](https://vercel.com/analytics)

## 🚀 Nasazení

Web je nasazen na GitHub Pages s vlastní doménou (`CNAME: jancejka.cz`). Astro generuje statický výstup — lze nasadit na libovolnou statickou platformu (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
