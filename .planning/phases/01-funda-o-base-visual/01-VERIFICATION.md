---
phase: 01-funda-o-base-visual
verified: 2026-06-10T22:40:00Z
status: human_needed
score: 5/5 must-haves verified
overrides_applied: 0
deferred:
  - truth: "Botão WhatsApp abre conversa REAL (wa.me com número real)"
    addressed_in: "Phase 3"
    evidence: "ROADMAP Fase 3 SC1: 'Botão WhatsApp abre conversa real (wa.me) e o formulário envia' / REQ ENT-01. CONTEXT.md fixa o placeholder wa.me/55XXXXXXXXXXX como aceito para a Fase 1 até o usuário fornecer o número."
  - truth: "SEO real (title/description/OG/favicon definitivos)"
    addressed_in: "Phase 3"
    evidence: "ROADMAP Fase 3 SC3: 'SEO básico presente (title, meta description, Open Graph, favicon)' / REQ ENT-04. BaseLayout traz title/description placeholder explicitamente marcado 'SEO real é Fase 3'."
human_verification:
  - test: "Abrir o site (npm run dev → http://localhost:4321) e clicar nos 4 swatches do ThemeSwitcher (ocean/navy/sky/soft) no header."
    expected: "A cor primária do site (links, link ativo, botões primary) muda AO VIVO a cada clique, sem reload. Recarregar a página mantém o último tema escolhido (persistência localStorage 'klit-theme'), sem flash de cor (anti-flash)."
    why_human: "Mudança visual de cor em runtime e ausência de flash no paint não são verificáveis por grep — exigem observação visual ao vivo. O código (data-theme + tokens + anti-flash no head) está presente e correto, mas a percepção visual precisa de olho humano."
  - test: "Reduzir a largura da janela abaixo de 768px (ou abrir no celular) em cada uma das 4 páginas."
    expected: "A nav inline some e aparece o botão hambúrguer; clicar abre o painel mobile com os links + ThemeSwitcher; clicar num link ou pressionar Esc fecha. Nenhuma barra de rolagem horizontal em ~375px / ~768px / ~1280px."
    why_human: "Comportamento responsivo, animação do hambúrguer para 'X' e ausência de overflow horizontal real exigem teste visual/interativo no navegador. CSS (media query 768px, overflow-x:hidden) e JS (toggle/Esc/matchMedia) estão no build, mas a percepção é humana."
  - test: "Conferir o logo do header (fundo claro) e do footer (fundo navy) carregando corretamente, e o favicon na aba do navegador."
    expected: "Header mostra o logo ocean colorido; footer mostra o logo branco; favicon aparece na aba. Imagens nítidas, sem quebra (404)."
    why_human: "Renderização visual de imagens e nitidez do logo/favicon não são confirmáveis por grep — os arquivos existem em public/brand/ e os <img>/<link> apontam para eles, mas o resultado visual precisa de inspeção humana."
---

# Phase 1: Fundação & Base Visual — Relatório de Verificação

**Phase Goal:** Base técnica e visual pronta — projeto roda localmente, design system premium definido e layout base (header/footer/WhatsApp) responsivo, com pipeline lendo de `assets-input/`.
**Verified:** 2026-06-10T22:40:00Z
**Status:** human_needed
**Re-verification:** No — initial verification

## Veredito Geral

**PASS WITH GAPS** — no sentido GSD: **5/5 critérios de sucesso atendidos no código real e no build**, **0 BLOCKER**, **0 SHOULD-FIX**. O status final é `human_needed` porque 3 verificações são intrinsecamente visuais/interativas (troca de tema ao vivo, responsividade/hambúrguer, render de logos) e não podem ser confirmadas só por grep/build — exigem um olhar humano rápido no navegador. As únicas "pendências" remanescentes (número real de WhatsApp e SEO definitivo) são **deferidas explicitamente para a Fase 3** pelo ROADMAP/CONTEXT, não gaps da Fase 1.

## Goal Achievement

### Critérios de Sucesso (Observable Truths)

| #   | Critério (ROADMAP)                                                                 | Status      | Evidência |
| --- | --------------------------------------------------------------------------------- | ----------- | --------- |
| 1   | `npm run dev`/build sobe o site e serve as 4 páginas                               | ✓ VERIFIED  | `npx astro build` exit 0, gera `dist/{index,solucoes,suporte,contato}` (4 páginas). `npm run dev` → todas as 4 rotas retornam **HTTP 200** (`/`, `/solucoes`, `/suporte`, `/contato`). Astro 6.4.6 / Node v22.22.3. |
| 2   | Trocar um token em `tokens.css` muda o site inteiro (tokens em todo lugar, sem hex hardcoded em componentes) | ✓ VERIFIED  | `tokens.css` é a **única** fonte de hex (11 ocorrências, todas na paleta de marca). Scan em `src/components/`, `src/layouts/`, `src/pages/`, `global.css`: **ZERO hex hardcoded** — tudo via `var(--token)`. Blocos `[data-theme]` compilados no CSS do build. |
| 3   | ThemeSwitcher: 4 swatches, 1 clique seta data-theme ao vivo, persiste em localStorage 'klit-theme', anti-flash único no `<head>` | ✓ VERIFIED  | 4 swatches (ocean/navy/sky/soft) renderizados; clique → `setAttribute('data-theme')` ao vivo; `localStorage.setItem('klit-theme', …)`; anti-flash IIFE **único** no `<head>` (`var THEME_KEY="klit-theme"` aparece **1×** por página). As 2 ocorrências de `klit-theme` no HTML são (a) o anti-flash do head e (b) o módulo client-side do ThemeSwitcher — **não** é duplicação de anti-flash. |
| 4   | Header (nav + link ativo + hambúrguer <768px) + Footer (51 3022-3066 + Porto Alegre) + WhatsApp flutuante em todas as páginas via BaseLayout; responsivo sem overflow | ✓ VERIFIED  | Todas as 4 páginas (build) contêm: `site-header__nav`, `51 3022-3066` + `tel:+555130223066`, `whatsapp-fab`, `aria-current="page"` (link ativo), `data-menu-toggle`/`aria-controls="mobile-menu"`. Endereço Porto Alegre (`Chácara das Pedras, Porto Alegre/RS`). Media query `768px` e `overflow-x:hidden` no CSS do build. |
| 5   | Logo colocado em `assets-input/logos/` chega ao site (assets:sync → public/brand/) | ✓ VERIFIED  | `npm run assets:sync` exit 0, copia 34 arquivos. **Teste end-to-end:** logo NOVO colocado na origem `assets-input/…/Ocean Blue/Favicon…png` → após sync, `public/brand/favicon.png` ficou com **md5 idêntico** (`ba732a36…`) ao arquivo recém-colocado. Pipeline genuinamente propaga. |

**Score:** 5/5 critérios verificados

### Itens Deferidos

Itens ainda não definitivos, porém **explicitamente endereçados em fases posteriores** (não são gaps da Fase 1).

| # | Item | Endereçado em | Evidência |
|---|------|---------------|-----------|
| 1 | Número real de WhatsApp (`wa.me` real em vez do placeholder) | Phase 3 | ROADMAP Fase 3 SC1 + ENT-01. CONTEXT.md fixa `wa.me/55XXXXXXXXXXX` como placeholder aceito na Fase 1. |
| 2 | SEO definitivo (title/description/OG/favicon finais) | Phase 3 | ROADMAP Fase 3 SC3 + ENT-04. BaseLayout marca title/description como "SEO real é Fase 3". |

### Required Artifacts

| Artefato | Esperado | Status | Detalhes |
| -------- | -------- | ------ | -------- |
| `package.json` | scripts dev/build/preview/assets:sync, astro + @fontsource/inter | ✓ VERIFIED | Todos os 6 scripts presentes; deps `astro@^6.4.6`, `@fontsource/inter@^5.2.8`. |
| `astro.config.mjs` / `tsconfig.json` / `.nvmrc` | scaffold estático Node 22 | ✓ VERIFIED | output static; `.nvmrc`=22; build OK. |
| `scripts/sync-assets.mjs` | pipeline assets-input→public/brand idempotente | ✓ VERIFIED | Node ESM sem deps; mapeia 6 variantes×5 formatos + vetor + 3 canônicos; idempotente; exit 0. |
| `src/styles/tokens.css` | paleta + semânticos + espaço/raio/sombra/tipografia + 4 temas | ✓ VERIFIED | Única fonte de hex; 4 blocos `[data-theme]` trocam só `--color-primary`/accent/contrast. |
| `src/styles/global.css` | reset + Inter (@fontsource) + tipografia via tokens + overflow-x guard | ✓ VERIFIED | Importa tokens + Inter 400/500/600/700; `overflow-x:hidden` em html/body; só tokens. |
| `src/components/{Container,Section,Button,Card}.astro` | primitivos só com tokens | ✓ VERIFIED | 4 primitivos; zero hex; Button primary segue `--color-primary` (muda com tema). |
| `src/components/ThemeSwitcher.astro` | 4 swatches, troca ao vivo, persistência, sem hex | ✓ VERIFIED | swatches via `var(--color-*)` injetado em `--swatch`; client-side de clique/persistência. |
| `src/layouts/BaseLayout.astro` | head/SEO placeholder/favicon/anti-flash + Header/slot/Footer/WhatsApp | ✓ VERIFIED | `<html lang=pt-BR data-theme=ocean>`; anti-flash canônico único; monta os 4 blocos. |
| `src/components/Header.astro` | logo + nav + link ativo + ThemeSwitcher + hambúrguer | ✓ VERIFIED | nav 4 itens; `isActive()` via pathname; hambúrguer <768px; Esc/matchMedia. |
| `src/components/Footer.astro` | telefone + endereço Porto Alegre + nav | ✓ VERIFIED | `51 3022-3066`, endereço completo, logo branco, fundo navy via tokens. |
| `src/components/WhatsAppButton.astro` | FAB flutuante wa.me placeholder | ✓ VERIFIED (placeholder deferido p/ Fase 3) | FAB fixo z-200, `--color-accent`, `target=_blank rel=noopener`; URL placeholder documentado. |
| `src/pages/{index,solucoes,suporte,contato}.astro` | 4 páginas usando BaseLayout | ✓ VERIFIED | Esqueleto pt-BR (h1+parágrafo) dentro de BaseLayout+Section+Container. |
| `public/brand/*` | favicon/logos canônicos + subpastas por cor | ✓ VERIFIED | 34 arquivos: 4 canônicos + 6 cores × 5 formatos; gerados por assets:sync. |
| `public/brand/README.md` | documenta troca de logo (FND-07) | ✓ VERIFIED | Passo-a-passo: onde colocar, nomes esperados, comando, o que cada gerado é. |

### Key Link Verification

| De | Para | Via | Status | Detalhes |
| -- | ---- | --- | ------ | -------- |
| BaseLayout | Header/Footer/WhatsAppButton | `import` + render no `<body>` | ✓ WIRED | Importados e renderizados; aparecem nas 4 páginas do build. |
| 4 páginas | BaseLayout | `import BaseLayout` + `<BaseLayout>` wrapper | ✓ WIRED | Todas as 4 páginas envolvem conteúdo no BaseLayout. |
| Header | ThemeSwitcher | `import ThemeSwitcher` (desktop + mobile) | ✓ WIRED | 2 instâncias por página (10 marcadores de swatch no HTML). |
| ThemeSwitcher / anti-flash | tokens.css | `data-theme` no `<html>` → blocos `[data-theme]` | ✓ WIRED | Blocos `[data-theme]` compilados no CSS do build; JS seta o atributo. |
| componentes/global | tokens.css | `var(--token)` | ✓ WIRED | Zero hex fora de tokens.css; editar token propaga. |
| BaseLayout/Header/Footer | public/brand/* | `<link rel=icon>` / `<img src>` | ✓ WIRED | favicon.png, logo-horizontal.png, logo-horizontal-branco.png referenciados e presentes em disco. |
| assets:sync | public/brand/ | `node scripts/sync-assets.mjs` | ✓ WIRED | Exit 0; teste md5 prova que novo logo na origem chega ao destino. |

### Data-Flow Trace (Level 4)

| Artefato | Variável/dado | Origem | Produz dado real | Status |
| -------- | ------------- | ------ | ---------------- | ------ |
| ThemeSwitcher | tema ativo | `localStorage 'klit-theme'` + `data-theme` no html | Sim (estado real, persiste) | ✓ FLOWING |
| Header/Footer logo | `src` da `<img>` | `public/brand/*.png` gerados por assets:sync | Sim (arquivos reais em disco) | ✓ FLOWING |
| Footer contato | telefone/endereço | constantes estáticas (dado factual real da KLIT) | Sim (dado real, não vazio) | ✓ FLOWING |
| WhatsAppButton href | `WHATSAPP_URL` | placeholder `wa.me/55XXXXXXXXXXX` | Placeholder (real = Fase 3) | ⚠️ STATIC (deferido p/ Fase 3, aceito no CONTEXT) |

### Behavioral Spot-Checks

| Comportamento | Comando | Resultado | Status |
| ------------- | ------- | --------- | ------ |
| Build serve 4 páginas | `npx astro build` | exit 0, 4 páginas em dist/ | ✓ PASS |
| Dev server serve 4 rotas | `npm run dev` + curl | `/`, `/solucoes`, `/suporte`, `/contato` → HTTP 200 | ✓ PASS |
| Pipeline assets sincroniza | `npm run assets:sync` | exit 0, 34 arquivos | ✓ PASS |
| Novo logo chega ao site | placa logo → sync → md5 do destino | md5 idêntico ao logo colocado | ✓ PASS |
| Anti-flash único no head | `grep var THEME_KEY index.html` | 1 ocorrência por página | ✓ PASS |
| Sem hex hardcoded fora de tokens | grep hex em src/ (exceto tokens.css) | 0 ocorrências | ✓ PASS |
| Troca de tema visual ao vivo | — | precisa de navegador | ? SKIP → human |
| Responsividade/hambúrguer sem overflow | — | precisa de navegador | ? SKIP → human |

### Probe Execution

Nenhum probe convencional (`scripts/*/tests/probe-*.sh`) declarado ou presente nesta fase — fase de scaffold/visual sem framework de probes. Verificação feita via `astro build`, `astro dev` + curl e teste md5 do pipeline (acima).

### Requirements Coverage

| Requisito | Plano | Descrição | Status | Evidência |
| --------- | ----- | --------- | ------ | -------- |
| FND-01 | 01-01 | Site estático roda localmente com um comando | ✓ SATISFIED | `npm run dev` → 4 rotas HTTP 200; build OK. |
| FND-02 | 01-01 | Pipeline consome de `assets-input/` e disponibiliza ao site | ✓ SATISFIED | assets:sync exit 0; teste md5 end-to-end. |
| FND-03 | 01-02 | Design system via tokens trocáveis (cores/tipo/espaço/grid) | ✓ SATISFIED | tokens.css única fonte; zero hex fora; build aplica. |
| FND-04 | 01-02 | Componentes base (botão, card, seção, container) | ✓ SATISFIED | 4 primitivos só com tokens; compilam. |
| FND-05 | 01-03 | Header + footer + WhatsApp em todas as páginas | ✓ SATISFIED | Presentes nas 4 páginas do build via BaseLayout. |
| FND-06 | 01-03 | Estrutura 100% responsiva (mobile/tablet/desktop) | ? NEEDS HUMAN | CSS (768px, overflow-x:hidden) e JS no build; percepção visual = humano. |
| FND-07 | 01-01 | Troca fácil de logo/textos/imagens documentada | ✓ SATISFIED | public/brand/README.md passo-a-passo; pipeline idempotente. |
| FND-08 | 01-02/03 | Seletor de tema troca primária (4 opções) 1 clique runtime | ? NEEDS HUMAN | Código presente e correto (data-theme/localStorage/anti-flash); troca visual ao vivo = humano. |

Sem requisitos órfãos: REQUIREMENTS.md mapeia FND-01..08 para a Fase 1 e todos foram reivindicados pelos 3 planos.

### Anti-Patterns Found

| Arquivo | Linha | Padrão | Severidade | Impacto |
| ------- | ----- | ------ | ---------- | ------- |
| `src/components/WhatsAppButton.astro` | 24 | `// TODO(Fase 3)` (placeholder wa.me) | ℹ️ Info (NICE-TO-HAVE) | Marcador WARNING-level (TODO, não TBD/FIXME/XXX → não é BLOCKER). Referencia Fase 3, não issue formal. Placeholder de WhatsApp é **deferido explicitamente** pelo ROADMAP/CONTEXT para a Fase 3 (ENT-01). Não bloqueia o objetivo da Fase 1. Sugestão NICE-TO-HAVE: ao implementar, anexar nº de issue/PR ao marcador para auditabilidade. |

Nenhum BLOCKER (TBD/FIXME/XXX) encontrado. Nenhum `return null`/`=> {}`/"coming soon"/"not implemented" nos componentes. Os "placeholder" remanescentes são comentários de doc de SEO (também deferidos p/ Fase 3).

### Human Verification Required

#### 1. Troca de tema ao vivo + persistência + anti-flash
**Teste:** Abrir o site (`npm run dev` → http://localhost:4321) e clicar nos 4 swatches do ThemeSwitcher (ocean/navy/sky/soft) no header. Recarregar a página.
**Esperado:** A cor primária (links, link ativo, botões primary, FAB) muda **ao vivo** a cada clique sem reload; recarregar mantém o último tema (localStorage `klit-theme`) **sem flash** de cor.
**Por que humano:** Mudança visual de cor em runtime e ausência de flash no paint exigem observação visual — o código está presente e correto, mas a percepção é humana.

#### 2. Responsividade e menu hambúrguer (<768px) sem overflow
**Teste:** Reduzir a janela abaixo de 768px (ou abrir no celular) nas 4 páginas; abrir/fechar o hambúrguer (clique, clique num link, Esc).
**Esperado:** Nav inline some e surge o hambúrguer; painel mobile abre com links + ThemeSwitcher; fecha por link/Esc; sem barra horizontal em ~375/768/1280px.
**Por que humano:** Comportamento responsivo, animação para "X" e ausência real de overflow exigem teste interativo no navegador.

#### 3. Render dos logos (header/footer) e favicon
**Teste:** Conferir o logo do header (ocean colorido), o logo do footer (branco sobre navy) e o favicon na aba.
**Esperado:** Imagens nítidas, sem 404, contraste correto com o fundo.
**Por que humano:** Render visual de imagens não é confirmável por grep — os arquivos existem e os `<img>`/`<link>` apontam para eles, mas a aparência precisa de inspeção.

### Gaps Summary

**Não há gaps bloqueantes (MUST-FIX) nem SHOULD-FIX.** Todos os 5 critérios de sucesso e os 8 requisitos FND estão atendidos no código real e confirmados pelo build/dev/pipeline. O objetivo da Fase 1 — base técnica e visual pronta, design system premium, layout base responsável, pipeline de assets — **foi alcançado**.

O status é `human_needed` apenas porque 3 verificações (troca de tema ao vivo, responsividade/hambúrguer, render de logos/favicon) são por natureza visuais/interativas e merecem um smoke test humano rápido no navegador — o código que as habilita está 100% presente e correto.

**NICE-TO-HAVE (não bloqueia):**
- Ao trocar o placeholder do WhatsApp na Fase 3, anexar referência de issue/PR ao `// TODO(Fase 3)` para auditabilidade formal do marcador.

**Deferido para a Fase 3 (não é gap da Fase 1):** número real de WhatsApp (ENT-01) e SEO definitivo/OG (ENT-04) — ambos explicitamente fora do escopo da Fase 1 pelo ROADMAP e CONTEXT.

---

*Verified: 2026-06-10T22:40:00Z*
*Verifier: Claude (gsd-verifier)*
