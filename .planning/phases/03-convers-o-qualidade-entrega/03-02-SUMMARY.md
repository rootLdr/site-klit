---
phase: 03-convers-o-qualidade-entrega
plan: 02
subsystem: qualidade-seo-a11y-perf
tags: [astro, seo, open-graph, twitter-card, canonical, robots, a11y, skip-link, focus, performance, layout-shift, tokens, theming, responsivo]

# Dependency graph
requires:
  - "03-01: title/description reais ja passados pelas 4 paginas; whatsappUrl/CTAs/form (preservados, nao revertidos)"
  - "01-03: BaseLayout.astro (anti-flash is:inline, <main id=conteudo>, favicon) — estendido aqui"
  - "01-02: tokens.css (--color-primary/-contrast, --space-*, --radius-md, --shadow-md) para o skip-link sem hex"
  - "01-01..: astro.config.mjs com site: 'https://klit.com.br' (base do canonical/og:url)"
  - "global.css: :focus-visible global e .visually-hidden ja existentes (foco visivel reusado)"
provides:
  - "BaseLayout: SEO real por pagina — canonical + Open Graph (type/title/description/url/image/site_name/locale) + twitter:card=summary_large_image, via props (ogImage default /brand/ocean/horizontal-2048.png, ogType default website)"
  - "BaseLayout: skip-to-content link (#conteudo) escondido fora da tela, visivel no foco, so tokens"
  - "public/robots.txt — allow-all + Sitemap/Host (servido em /robots.txt)"
  - "Header: logo com loading=eager + width/height + decoding=async + alt=KLIT (sem layout shift)"
affects: [03-03]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "SEO por pagina centralizado no BaseLayout: canonical/og:url = new URL(Astro.url.pathname, Astro.site).href; og:image absoluto = new URL(ogImage, Astro.site).href. Cada pagina herda title/description nas tags OG/twitter sem repeticao."
    - "Open Graph com <meta property=og:...> e Twitter com <meta name=twitter:...> (distincao correta property vs name)."
    - "Skip-link via transform: translateY(-150%) (fora da tela) -> translateY(0) no :focus/:focus-visible; cor de fundo --color-primary / texto --color-primary-contrast (respeita os 4 temas, zero hex)."
    - "robots.txt como asset estatico em public/ (copiado intacto para dist/robots.txt no build); referencia de Sitemap/Host documentando a intencao mesmo sem sitemap gerado (decisao CONTEXT.md: pular @astrojs/sitemap)."
    - "Logo above-the-fold com loading=eager (header sticky) + width/height explicitos para reservar espaco e evitar CLS."

key-files:
  created:
    - public/robots.txt
    - .planning/phases/03-convers-o-qualidade-entrega/03-02-SUMMARY.md
  modified:
    - src/layouts/BaseLayout.astro
    - src/components/Header.astro

key-decisions:
  - "Sem @astrojs/sitemap (decisao pinada no CONTEXT.md): zero pacote novo => zero superficie de supply-chain (T-03-SC mitigado). O robots.txt referencia /sitemap.xml apenas como intencao documentada (inofensivo se ausente)."
  - "ogImage default = /brand/ocean/horizontal-2048.png (asset ja versionado, 39KB, variante colorida boa para share). Paginas podem variar via prop ogImage, mas o default ja serve as 4."
  - "Titles/descriptions das 4 paginas (entregues em 03-01) ja eram reais, distintos e factuais (sem inventar numeros/SLA), dentro do tamanho alvo => mantidos sem reescrever (evita churn desnecessario)."
  - "Reuso do :focus-visible global e .visually-hidden ja existentes em global.css; o skip-link usa estilo escopado proprio (translateY) em vez de duplicar utilitarios."
  - "Logo do Header: mantido <img> nativo com width/height/loading/decoding (CONTEXT.md aceita <img> ou astro:assets <Image>); <Image> nao era trivial aqui (logo em public/, nao em src/assets) => mantida a simplicidade."

metrics:
  duration: ~4 min
  completed: 2026-06-10
  tasks: 2
  files-touched: 4
---

# Phase 3 Plan 02: Qualidade — SEO básico, acessibilidade, performance Summary

**One-liner:** Eleva a qualidade do site com SEO real por página (canonical + Open Graph + twitter:card derivados de `Astro.url`/`Astro.site`), `public/robots.txt`, skip-to-content acessível e logo do Header sem layout shift — tudo com tokens (zero hex), preservando o anti-flash `is:inline` e os 4 temas.

## O que foi entregue

### Task 1 — SEO completo no BaseLayout + skip-to-content + robots.txt (ENT-04, ENT-05)
- **Props estendidas:** adicionados `ogImage` (default `/brand/ocean/horizontal-2048.png`) e `ogType` (default `"website"`), mantendo `title`/`description`.
- **Frontmatter:** `const canonical = new URL(Astro.url.pathname, Astro.site).href;` e `const ogImageAbs = new URL(ogImage, Astro.site).href;` (base `https://klit.com.br`).
- **`<head>` após a description:**
  - `<link rel="canonical" href={canonical} />`
  - **Open Graph:** `og:type` (=ogType), `og:title` (=title), `og:description` (=description), `og:url` (=canonical), `og:image` (=ogImageAbs), `og:site_name` ("KLIT"), `og:locale` ("pt_BR").
  - **Twitter:** `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image` (=ogImageAbs).
- **Skip-to-content:** `<a href="#conteudo" class="skip-link">Pular para o conteúdo</a>` como primeiro elemento focável do `<body>`, antes do `<Header />`. `<style>` escopado: escondido fora da tela (`transform: translateY(-150%)`) e visível no `:focus`/`:focus-visible` (`translateY(0)`), fundo `--color-primary` / texto `--color-primary-contrast`, `z-index:1000`. `<main id="conteudo">` já existia — não duplicado.
- **`public/robots.txt`:** `User-agent: * / Allow: / ` + `Sitemap: https://klit.com.br/sitemap.xml` + `Host: klit.com.br`. Sem `@astrojs/sitemap` (CONTEXT.md).
- **Preservado:** anti-flash `is:inline` canônico, favicon, `lang="pt-BR"`, `data-theme="ocean"`, Header/slot/Footer/WhatsAppButton.

### Task 2 — Titles/descriptions por página + um h1/página + alt + logo otimizado (ENT-04, ENT-05, ENT-06)
- **SEO por página:** as 4 páginas (entregues em 03-01) já passavam `title`/`description` reais, distintos e factuais (index/soluções/suporte/contato), dentro do tamanho alvo → **revisados e mantidos** (sem reescrever para evitar churn). Os defaults da prop `ogImage` servem as 4.
- **Acessibilidade:** confirmado **exatamente um `<h1>` por página** (Hero/Soluções/Suporte/Contato) — verificado no fonte e no HTML buildado. `alt="KLIT"` no logo do Header (Footer, de 03-01, mantido — só verificado no build). Foco visível pelo `:focus-visible` global + skip-link.
- **Performance do logo (ENT-06):** `<img>` do Header agora com `loading="eager"` (above-the-fold, header sticky) + `width="160"`/`height="44"` (reserva de espaço, evita CLS) + `decoding="async"` + `alt="KLIT"`. Lógica de troca claro/escuro e estilos intactos.
- **Responsividade:** guarda global `overflow-x: hidden` (html/body) em `global.css` já cobre 375/768/1280; nenhuma mudança de layout foi necessária.

## SEO renderizado (verificado no dist)

| Página | canonical / og:url |
| ------ | ------------------ |
| `/` | `https://klit.com.br/` |
| `/solucoes` | `https://klit.com.br/solucoes/` |
| `/contato` | `https://klit.com.br/contato/` |
| `/suporte` | `https://klit.com.br/suporte/` |

- `og:image` absoluto: `https://klit.com.br/brand/ocean/horizontal-2048.png` (todas).
- `twitter:card`: `summary_large_image` (todas).
- skip-link renderizado: `Pular para o conteúdo` (→ `#conteudo`).
- `<h1>` no HTML buildado: **1 por página** (index/soluções/contato/suporte).
- `dist/robots.txt` presente.

## Build

`npx astro build` → ✓ 4 páginas em ~0.9s. `dist/{index,contato/index,solucoes/index,suporte/index}.html` contêm `og:title`; `dist/robots.txt` existe. (`dist/` é gitignored.)

## Deviations from Plan

Nenhuma. Plano executado exatamente como escrito. Os titles/descriptions das 4 páginas já vinham reais e distintos de 03-01 (preservados conforme instrução de não reverter o trabalho anterior), então a Task 2 revisou-os e manteve, alterando de fato apenas o `<img>` do Header (perf). Nenhum hex introduzido; 4 temas e responsividade intactos.

## Authentication Gates

Nenhum.

## Known Stubs / Placeholders

Nenhum novo. O `Sitemap: https://klit.com.br/sitemap.xml` em `robots.txt` é uma referência de intenção documentada (sem sitemap gerado — decisão CONTEXT.md de não adicionar `@astrojs/sitemap`); é inofensivo e não bloqueia indexação. Placeholders de contato (whatsapp/email/formspreeId) seguem os de 03-01, fora do escopo deste plano.

## Threat Flags

Nenhuma superfície de segurança nova além do previsto no `<threat_model>`: meta OG/canonical expõem só dados públicos institucionais (T-03-04 accept); robots.txt é estático allow-all sem regras sensíveis (T-03-05 accept); **zero pacote novo** → sem supply-chain (T-03-SC mitigado).

## Self-Check: PASSED

- 2/2 arquivos criados confirmados em disco: `public/robots.txt`, `03-02-SUMMARY.md`.
- 2/2 arquivos modificados confirmados: `src/layouts/BaseLayout.astro`, `src/components/Header.astro`.
- 2/2 commits de tarefa confirmados no histórico: `8452d47` (Task 1), `842d6f7` (Task 2).
