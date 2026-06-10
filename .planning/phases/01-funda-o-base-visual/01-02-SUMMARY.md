---
phase: 01-funda-o-base-visual
plan: 02
subsystem: design-system
tags: [css-vanilla, design-tokens, theming, data-theme, fontsource, inter, astro-components]

# Dependency graph
requires:
  - "01-01: projeto Astro estático + src/styles/ e src/components/ vazios"
provides:
  - "src/styles/tokens.css — paleta KLIT + tokens semânticos + espaço/raio/sombra/tipografia + 4 temas via [data-theme]"
  - "src/styles/global.css — reset moderno + Inter (@fontsource) + tipografia base via tokens"
  - "Primitivos reutilizáveis: Container, Section, Button, Card (.astro, só tokens)"
  - "ThemeSwitcher.astro — troca a cor primária ao vivo (ocean/navy/sky/soft), persiste em localStorage, anti-flash is:inline"
affects: [01-03-layout-base, fase-2-conteudo]

# Tech tracking
tech-stack:
  added: ["@fontsource/inter@^5.2.8"]
  patterns:
    - "Design tokens em CSS custom properties; único arquivo (tokens.css) é a fonte de verdade — editar 1 valor muda o site todo (FND-03)"
    - "Temas trocam APENAS --color-primary (e --color-accent/contrast) via [data-theme] no <html>"
    - "Componentes .astro com <style> escopado usando exclusivamente var(--token) — zero hex hardcoded"
    - "ThemeSwitcher: anti-flash <script is:inline> + lógica client-side em <script> module; persistência localStorage"

key-files:
  created:
    - src/styles/tokens.css
    - src/styles/global.css
    - src/components/Container.astro
    - src/components/Section.astro
    - src/components/Button.astro
    - src/components/Card.astro
    - src/components/ThemeSwitcher.astro
  modified:
    - package.json
    - package-lock.json

key-decisions:
  - "Fonte: Inter via @fontsource (self-hosted, pesos 400/500/600/700) — leve e moderna, importada em global.css"
  - "ThemeSwitcher swatches usam var(--color-ocean/navy/sky/soft) como background (injetado via --swatch inline-style) — NENHUM hex no componente, conforme plano revisado"
  - "Temas sky e soft (claros) recebem --color-primary-contrast: navy para manter contraste de texto sobre a primária"
  - "Anti-flash mantido DENTRO do ThemeSwitcher neste plano; hoisting para o <head> do BaseLayout é responsabilidade do 01-03"

requirements-completed: [FND-03, FND-04, FND-08]

# Metrics
duration: ~4min
completed: 2026-06-10
---

# Fase 01 Plano 02: Design system (tokens + temas), primitivos e ThemeSwitcher — Resumo

**Design system premium da KLIT por tokens em CSS custom properties (paleta + 4 temas trocáveis via data-theme), Inter via @fontsource, 4 primitivos .astro sem hex hardcoded, e ThemeSwitcher que troca a cor primária ao vivo com persistência em localStorage e anti-flash.**

## Performance

- **Duration:** ~4 min
- **Completed:** 2026-06-10
- **Tasks:** 3
- **Files created/modified:** 9 (2 estilos + 5 componentes + package.json/lock)

## Fonte escolhida

**Inter** (`@fontsource/inter@^5.2.8`), self-hosted via @fontsource. Importada em `global.css` apenas nos pesos usados: 400 (regular), 500 (medium), 600 (semibold), 700 (bold). `--font-sans` = `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` (fallback de sistema para reduzir FOUT).

## Tokens semânticos disponíveis (src/styles/tokens.css)

A paleta de marca (`--color-ocean #005A91`, `--color-navy #1B3A5C`, `--color-sky #81D2F1`, `--color-soft #A3C5F1`, `--color-black`, `--color-white` + cinzas derivados) é o **único** lugar com hex. Componentes/global usam só os semânticos abaixo:

**Cores semânticas:**
- `--color-primary` (default = ocean; trocado pelos temas)
- `--color-primary-contrast` (texto sobre a primária)
- `--color-accent`
- `--color-text`, `--color-text-muted`
- `--color-bg`, `--color-surface`, `--color-surface-alt`
- `--color-border`, `--color-muted`
- `--color-dark-bg` (navy), `--color-dark-text` (para Section tone="dark")

**Espaçamento:** `--space-1`..`--space-9` (4px → 96px)
**Raios:** `--radius-sm/md/lg/full`
**Sombras:** `--shadow-sm/md/lg` (sutis, tom premium)
**Tipografia:** `--font-sans`; `--font-size-xs..4xl`; `--line-tight/snug/base`; `--font-weight-regular/medium/semibold/bold`
**Layout:** `--container-sm/md/lg` (720/960/1200px), `--container-pad`
**Transições:** `--transition-fast/base`

**Temas (data-theme no `<html>`):** cada bloco sobrescreve só `--color-primary` (+ accent/contrast):
- `ocean` (default) → primary = ocean, accent = sky
- `navy` → primary = navy, accent = sky
- `sky` → primary = sky, accent = ocean, contrast = navy
- `soft` → primary = soft, accent = ocean, contrast = navy

## Primitivos e API (props)

| Componente | Props | Comportamento |
| ---------- | ----- | ------------- |
| **Container.astro** | `size?: "sm"\|"md"\|"lg"` (default `lg`), `as?` (tag, default `div`) | Largura máxima centralizada + padding lateral responsivo; aceita `<slot/>`. |
| **Section.astro** | `tone?: "default"\|"dark"` (default `default`), `id?` | `<section>` com respiro vertical generoso (`--space-8`/`-7` em mobile); `dark` usa fundo navy + texto claro; aceita `<slot/>`. |
| **Button.astro** | `variant?: "primary"\|"secondary"\|"ghost"` (default `primary`), `href?`, `type?` (default `button`), `...rest` | Renderiza `<a>` se houver `href`, senão `<button>`. `primary` usa `var(--color-primary)` → **muda de cor automaticamente** ao trocar o tema. Hover/focus/active e estado disabled acessíveis. |
| **Card.astro** | `title?: string`, `as?` (tag, default `div`) | Superfície com `--color-surface`/`--color-border`/`--radius-lg`/`--shadow-sm` e padding; título opcional como `<h3>`; aceita `<slot/>`. |

Todos com `<style>` escopado usando **apenas** `var(--token)` — verificado: zero hex hardcoded em qualquer um dos 4.

## ThemeSwitcher — comportamento

- **Visível:** grupo (`role="group"`) de **4 swatches** (`<button>`), um por tema. O background de cada swatch usa o **token da paleta** correspondente — `var(--color-ocean/navy/sky/soft)` injetado via inline-style `--swatch` — **sem hex hardcoded** no componente.
- **1 clique:** seta `data-theme` no `<html>` → `--color-primary` muda ao vivo via `tokens.css`; atualiza `aria-pressed` do swatch ativo.
- **Persistência:** salva em `localStorage` na chave **`klit-theme`** e reaplica ao montar.
- **Anti-flash:** `<script is:inline>` (inline, sem module/defer) lê `localStorage` e aplica `data-theme` antes do paint; valida contra a lista [ocean, navy, sky, soft] e cai para `ocean` em erro/ausência.
- **Acessibilidade:** `aria-label` por swatch (ex.: "Tema Ocean Blue"), `aria-pressed` marcando o ativo, foco por teclado visível (`:focus-visible` global).

## Build

`npx astro build` passa — 4 páginas geradas, sem erros. Os primitivos e o ThemeSwitcher compilam (ainda não importados por páginas; serão consumidos pelo Header/BaseLayout no 01-03).

## Recomendação para o 01-03 (hoist do anti-flash)

O snippet `<script is:inline>` anti-flash hoje vive **dentro** do `ThemeSwitcher.astro`, deixando o componente funcional por si só. No **01-03**, ao montar o ThemeSwitcher no Header e criar o `BaseLayout.astro`:
1. Mover/duplicar o snippet inline para o **`<head>` do BaseLayout** (antes de qualquer CSS/render) para garantir **zero flash em todas as páginas**.
2. Remover então o `<script is:inline>` duplicado de dentro do ThemeSwitcher (a lógica client-side `<script>` de troca/persistência permanece no componente).
3. Definir `data-theme="ocean"` como atributo inicial no `<html>` do BaseLayout para o estado SSR antes do JS rodar.

## Task Commits

1. **Task 1: Tokens, temas e estilos globais (Inter)** — `6c180a1` (feat)
2. **Task 2: Primitivos Container/Section/Button/Card** — `adf7dc9` (feat)
3. **Task 3: ThemeSwitcher runtime + persistência + anti-flash** — `400f500` (feat)

## Deviations from Plan

Nenhuma. O plano foi executado exatamente como escrito, incluindo a regra reforçada de que os swatches do ThemeSwitcher usam tokens da paleta como background (sem hex) e de que o anti-flash permanece no componente neste estágio (hoisting fica para o 01-03).

## Known Stubs

Nenhum stub funcional. Os primitivos e o ThemeSwitcher ainda não são renderizados por nenhuma página (consumo é do 01-03/Fase 2) — isso é intencional e parte do plano, não um stub que bloqueie o objetivo. A verificação visual ao vivo do seletor será confirmada quando o 01-03 montar o ThemeSwitcher no Header.

## Self-Check: PASSED

Todos os 7 arquivos criados existem em disco (tokens.css, global.css, 5 componentes .astro) + o SUMMARY, e os 3 commits de tarefa (`6c180a1`, `adf7dc9`, `400f500`) estão no histórico do git.

---
*Phase: 01-funda-o-base-visual*
*Completed: 2026-06-10*
