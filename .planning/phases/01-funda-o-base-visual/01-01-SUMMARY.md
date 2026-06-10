---
phase: 01-funda-o-base-visual
plan: 01
subsystem: infra
tags: [astro, static-site, npm, node22, assets-pipeline, css-vanilla]

# Dependency graph
requires: []
provides:
  - "Projeto Astro 6 estático rodável (`npm run dev` / `npm run build`)"
  - "Estrutura de pastas src/{pages,components,layouts,styles} + public/brand/"
  - "4 páginas placeholder navegáveis (/, /solucoes, /suporte, /contato)"
  - "Pipeline `npm run assets:sync` (assets-input/ -> public/brand/)"
  - "Logos canônicos: public/brand/favicon.png, logo-horizontal.png, logo-horizontal-branco.png, logo.svg"
  - "Subpastas por cor em public/brand/: ocean, navy, sky, soft, branco, preto"
affects: [01-02-design-system, 01-03-layout-base]

# Tech tracking
tech-stack:
  added: ["astro@6.4.6"]
  patterns:
    - "Saída estática (output: 'static'), sem SSR/adaptador"
    - "Assets versionados em public/brand/ gerados por script idempotente a partir de assets-input/"
    - "Slugs de cor (ocean/navy/sky/soft) alinhados aos data-theme do plano 01-02"

key-files:
  created:
    - package.json
    - astro.config.mjs
    - tsconfig.json
    - .nvmrc
    - scripts/sync-assets.mjs
    - public/brand/README.md
    - src/pages/index.astro
    - src/pages/solucoes.astro
    - src/pages/suporte.astro
    - src/pages/contato.astro
  modified:
    - .gitignore

key-decisions:
  - "Scaffold manual do Astro (em vez do create-astro interativo) para determinismo total no scaffold não-interativo"
  - "Astro 6.4.6 (última estável) em vez do 5.x sugerido no comentário do plano"
  - "favicon/logo default da variante ocean (primária); logo-horizontal-branco da variante Branco para fundos escuros"

patterns-established:
  - "Pipeline de assets: editar origem em assets-input/, nunca o destino public/brand/; rodar npm run assets:sync"
  - "Páginas placeholder com nav compartilhada para comprovar navegabilidade antes do BaseLayout (01-03)"

requirements-completed: [FND-01, FND-02, FND-07]

# Metrics
duration: ~6min
completed: 2026-06-10
---

# Fase 01 Plano 01: Scaffold do site Astro + pipeline de assets — Resumo

**Projeto Astro 6.4.6 estático rodável com `npm run dev`, 4 páginas placeholder navegáveis e pipeline `assets:sync` que leva os logos de `assets-input/` para `public/brand/` com nomes limpos e documentação de troca de logo.**

## Performance

- **Duration:** ~6 min
- **Completed:** 2026-06-10
- **Tasks:** 2
- **Files modified/created:** ~50 (config + 4 páginas + script + README + 34 assets sincronizados)

## Accomplishments

- Projeto Astro 6.4.6 inicializado na **raiz** do repo (sem subpasta), saída **estática** — `npm run dev` sobe em http://localhost:4321 e `npm run build` gera `dist/` com as 4 páginas (FND-01).
- Estrutura de pastas criada: `src/{pages,components,layouts,styles}` (com `.gitkeep`) e `public/brand/`.
- 4 páginas placeholder em pt-BR (`/`, `/solucoes`, `/suporte`, `/contato`), todas retornando HTTP 200 no dev e com nav cruzada navegável.
- `scripts/sync-assets.mjs` (Node ESM, sem deps externas, idempotente): copia 6 variantes × 5 formatos + vetor + 3 canônicos = **34 arquivos** para `public/brand/` (FND-02).
- `public/brand/README.md` documenta o fluxo de troca de logo: onde colocar, nomes esperados, comando a rodar, o que cada arquivo gerado representa, e aviso de "arquivos gerados" (FND-07).

## Stack / Versões exatas

| Item | Versão / Valor |
| ---- | -------------- |
| Astro | `6.4.6` (última estável) |
| Node | `22` (`.nvmrc` = 22; runtime v22.22.3) |
| npm | `10.9.8` |
| Saída | `output: 'static'` (sem SSR) |
| TypeScript | `astro/tsconfigs/base` (relaxado, opcional) |
| CSS | Vanilla (sem Tailwind) — tokens chegam no 01-02 |

## Estrutura de pastas final

```
site-klit/
├── astro.config.mjs        # output: 'static', site: https://klit.com.br
├── package.json            # scripts: dev/build/preview/assets:sync
├── package-lock.json
├── tsconfig.json
├── .nvmrc                  # 22
├── .gitignore             # node_modules, dist, .astro, .env (merge)
├── scripts/
│   └── sync-assets.mjs     # pipeline assets-input/ -> public/brand/
├── public/
│   └── brand/              # VERSIONADO (gerado por assets:sync)
│       ├── README.md
│       ├── favicon.png            # canônico (ocean)
│       ├── logo-horizontal.png    # canônico header fundo claro (ocean)
│       ├── logo-horizontal-branco.png  # canônico header fundo escuro (branco)
│       ├── logo.svg               # vetor (01 VETOR ORIGINAL.svg)
│       └── {ocean,navy,sky,soft,branco,preto}/
│           ├── favicon-48.png
│           ├── marca-512.png
│           ├── horizontal-1024.png
│           ├── horizontal-2048.png
│           └── vertical-1024.png
└── src/
    ├── pages/             # index, solucoes, suporte, contato (placeholders)
    ├── components/        # .gitkeep (preenchido em 01-02/01-03)
    ├── layouts/           # .gitkeep (BaseLayout vem em 01-03)
    └── styles/            # .gitkeep (tokens/global vêm em 01-02)
```

## Pipeline `assets:sync` — comando e mapeamento

**Comando:** `npm run assets:sync` (= `node scripts/sync-assets.mjs`)

**Origem:** `assets-input/logos/Novo Logo 2026/`

**Mapa de variante de cor → slug:**

| Pasta de origem (exata) | Slug |
| ----------------------- | ---- |
| `CLASSICA 02 • Ocean Blue - 005A91` | `ocean` |
| `Navy Dark - Hex 1B3A5C` | `navy` |
| `CLASSICA 01 • Sky Blue - Hex 81D2F1` | `sky` |
| `Soft Blue - Hex A3C5F1` | `soft` |
| `Branco` | `branco` |
| `Preto - Hex 000000` | `preto` |

**Mapa de arquivo de origem → nome de destino (por variante):**

| Origem | Destino |
| ------ | ------- |
| `Favicon PNG 48 × 48 px.png` | `favicon-48.png` |
| `Logo pequeno _ marca reduzida 512 × 512 px.png` | `marca-512.png` |
| `Logo principal horizontal - 1024px.png` | `horizontal-1024.png` |
| `Logo principal para alta resolução - 2048px.png` | `horizontal-2048.png` |
| `Logo vertical_quadrado 1024 × 1024 px.png` | `vertical-1024.png` |
| `01 VETOR ORIGINAL.svg` (raiz) | `logo.svg` |

## Arquivos gerados em public/brand/ (para 01-02 / 01-03 consumirem)

**Canônicos do site (use estes no BaseLayout/header do 01-03):**

- `public/brand/favicon.png` — favicon do site (variante ocean)
- `public/brand/logo-horizontal.png` — logo header em **fundos claros** (variante ocean)
- `public/brand/logo-horizontal-branco.png` — logo header em **fundos escuros** (variante branco)
- `public/brand/logo.svg` — vetor do logo

**Por cor (subpastas):** `ocean/`, `navy/`, `sky/`, `soft/`, `branco/`, `preto/` — cada uma com `favicon-48.png`, `marca-512.png`, `horizontal-1024.png`, `horizontal-2048.png`, `vertical-1024.png`. Os slugs `ocean/navy/sky/soft` casam com os `data-theme` do seletor de tema (01-02).

## Task Commits

1. **Task 1: Inicializar projeto Astro estático + estrutura + 4 páginas** — `3174790` (feat)
2. **Task 2: Pipeline assets:sync + logos em public/brand/ + README** — `f9590d3` (feat)

## Decisões Tomadas

- **Scaffold manual do Astro** em vez do `npm create astro` interativo: garante scaffold não-interativo determinístico no ambiente headless, sem prompts. Resultado idêntico ao template minimal.
- **Astro 6.4.6** (última estável real no registry) em vez do `^5.14.1` do comentário do plano — o plano pede "última versão estável" e o comentário do exemplo estava desatualizado.
- **Variante `ocean` como primária** para favicon e logo default; **`branco`** para o logo de fundo escuro — alinhado ao plano.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Versão do Astro ajustada de 5.x para 6.4.6**
- **Found during:** Task 1 (init do projeto)
- **Issue:** O comentário do plano sugeria `astro@^5.14.1`, mas a última estável no npm é `6.4.6`. O objetivo do plano/CONTEXT é "última versão estável".
- **Fix:** `package.json` pinado em `^6.4.6`; `npm install` e `astro build` validados.
- **Files modified:** package.json
- **Verification:** `npx astro --version` → v6.4.6; build gera as 4 páginas.
- **Committed in:** 3174790 (Task 1)

**2. [Rule 3 - Blocking] Scaffold manual em vez de create-astro interativo**
- **Found during:** Task 1
- **Issue:** O comando `npm create astro` sugerido tende a prompts interativos; ambiente é headless.
- **Fix:** Criados manualmente package.json/astro.config.mjs/tsconfig.json/páginas equivalentes ao template minimal; `npm install` gerou o lockfile.
- **Files modified:** package.json, astro.config.mjs, tsconfig.json, src/pages/*
- **Verification:** build estático OK; dev server responde 200 nas 4 rotas.
- **Committed in:** 3174790 (Task 1)

---

**Total deviations:** 2 auto-fixed (ambos Rule 3 - blocking).
**Impact on plan:** Nenhum scope creep — apenas adaptações para versão correta e execução não-interativa. Todos os critérios e verificações do plano foram atendidos.

## Issues Encountered

- Um erro `test: binary operator expected` apareceu numa cadeia de verificação `&&` no shell (artefato do proxy de CLI reescrevendo a linha), **não** um problema real de arquivo. Reexecutado com `[ -f ... ]` separados → `SYNC_OK`. Todos os arquivos confirmados via `find`.

## Known Stubs

As 4 páginas são placeholders intencionais (esqueleto navegável). Conteúdo real é da Fase 2 e o BaseLayout/header/footer/WhatsApp vêm no plano 01-03. Documentado em comentários Astro em cada página. Não bloqueia o objetivo deste plano (scaffold + pipeline).

## Next Phase Readiness

- **01-02 (design system):** pode criar `src/styles/tokens.css` e `global.css`; os slugs de cor `ocean/navy/sky/soft` já existem em `public/brand/` para casar com os `data-theme`.
- **01-03 (layout base):** consumir `public/brand/favicon.png`, `logo-horizontal.png` (claro) e `logo-horizontal-branco.png` (escuro) no BaseLayout/Header.
- Sem blockers técnicos. Número de WhatsApp segue pendente (placeholder no 01-03).

## Self-Check: PASSED

Todos os arquivos criados existem em disco (config, script, README, 4 páginas, assets canônicos, SUMMARY) e ambos os commits de tarefa (`3174790`, `f9590d3`) estão no histórico do git.

---
*Phase: 01-funda-o-base-visual*
*Completed: 2026-06-10*
