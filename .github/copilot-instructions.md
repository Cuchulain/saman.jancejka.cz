# Blog — Project Guidelines

Osobní český blog o šamanismu, léčení a práci s energií. Autor se věnuje léčitelství od svých 17 let (nar. 1971) a propojuje duchy přírodního světa s moderním myšlením.

**Jazyk obsahu:** veškerý obsah blogu (příspěvky, popisky, tagy) je **česky**.

## Témata blogu

- **Šamanismus** — praxe, tradice, obřady, cesty
- **Léčení a uzdravování** — energetická léčba, práce s tělem a duší
- **Komunikace s přírodou** — duchové přírody, elementy, rostliny, zvířata
- **Harmonizace prostor** — čištění energií, feng shui, posvátná místa
- **Síť světelných sloupů** — energetická peer-to-peer síť sloupů, které vyzařují uzdravení, lásku, pohodu, porozumění, bezpečí, hojnost a sounáležitost; každý sloup má samoregulační a replikační schopnosti; práce se mapuje v telefonu

Technický základ je Astro blog s Tailwind CSS v4, TypeScript, MDX a dark mode podporou.

**Původní blog autora:** https://jancejka.cz — slouží jako zdroj témat, textů a kontextu pro obsah tohoto blogu.

## Build & Development

```bash
pnpm dev        # dev server → http://localhost:4321
pnpm build      # produkční build
pnpm preview    # náhled buildu
```

Žádné testy nejsou nakonfigurovány.

## Architecture

```
src/
  content/posts/     # Markdown/MDX příspěvky (Content Collections)
  pages/             # Astro stránky — index, journal, posts/[slug], tags/[tag], rss.xml, about
  layouts/           # BaseLayout (SEO/head), PostLayout (post wrapper)
  components/        # Znovupoužitelné .astro komponenty
  styles/global.css  # Tailwind v4 + CSS utility třídy
  utils/             # Pomocné funkce (date.js, optimizeImagePath.ts)
public/
  images/            # Obrázky příspěvků (servírovány bez Astro optimalizace)
  fonts/             # Self-hosted Geist Sans + Mono (woff2, variable)
```

**Klíčové stránky:**
- `index.astro` — posledních 5 příspěvků bez náhledů (`<PostList>`)
- `journal.astro` — všechny příspěvky s náhledy (`<PostListWithThumbnails>`)
- `posts/[slug].astro` — dynamická stránka příspěvku; `params.slug` == `entry.id` (název souboru bez přípony)
- `tags/[tag].astro` — filtrace příspěvků dle tagu

## Content Schema

```ts
// src/content.config.ts — kolekce "posts"
title:   string        // ✅ povinné
date:    z.date()      // ✅ povinné — YAML datum BEZ uvozovek
excerpt: string        // ✅ povinné
image:   string        // optional — cesta v public/images/ (např. /images/foo.jpg)
tags:    string[]      // optional — výchozí []
```

**Gotcha:** `date` musí být YAML datum bez uvozovek (`date: 2025-11-22`), jinak `z.date()` vyhodí chybu parsování.

### Doporučené tagy

Konzistentní tagy pro tento blog (v češtině, kebab-case pro soubory):

```
šamanismus, léčení, uzdravování, příroda, duchové, elementy, harmonizace,
světelné-sloupy, síť-sloupů, meditace, rituály, energie, prostor, bydlení
```

## Naming Conventions

| Typ | Konvence | Příklad |
|-----|----------|---------|
| Stránky | kebab-case | `journal.astro`, `404.astro` |
| Komponenty & Layouty | PascalCase | `PostCard.astro`, `BaseLayout.astro` |
| Utility soubory | camelCase | `date.js`, `optimizeImagePath.ts` |
| Soubory příspěvků | kebab-case | `my-new-post.md` |
| CSS utility třídy | kebab-case | `.btn-primary`, `.tag`, `.nav-link` |

## Styling — Tailwind CSS v4

- Konfiguruje se výhradně přes Vite plugin (`@tailwindcss/vite`) v `astro.config.mjs` — **žádný `tailwind.config.ts`**
- Importovat přes `@import "tailwindcss"` (ne legacy `@tailwind` direktivy)
- Dark mode: třída `.dark` na `<html>` — definováno jako `@variant dark (&:where(.dark, .dark *));` v `global.css`

Utility CSS třídy jsou definovány v `src/styles/global.css` (`@layer components`):
`.btn-primary`, `.btn-secondary`, `.btn-sm`, `.btn-lg`, `.card`, `.tag`, `.nav-link`, `.feature-image`, `.container-sm/md/lg/xl`, `.post-nav-link`

## Dark Mode

Přepínání řízeno přes `localStorage.theme` + `prefers-color-scheme`. Init script (`is:inline`) v `BaseLayout.astro` přidává/odebírá třídu `.dark` na `document.documentElement` — spouští se i po View Transitions (`astro:after-swap`).

## Images

- Obrázky příspěvků: umístit do `public/images/`, odkazovat jako `/images/nazev.jpg`
- Feature image v `PostLayout.astro` renderována jako `<img>` (ne `<Image />`), Astro pipeline je **neoptimalizuje**
- `optimizeImagePath()` je stub — pouze vrací vstupní cestu

## BaseLayout Props

```ts
title: string           // povinné — "{title} | Brook"
description?: string
image?: string          // OG image; výchozí: /og-image.png
type?: 'website' | 'article'
publishedDate?: Date
modifiedDate?: Date
author?: string
```

## PostLayout Props

```ts
frontmatter: { title, date, tags, image, excerpt }
prevPost: { url, title } | null
nextPost: { url, title } | null
```
