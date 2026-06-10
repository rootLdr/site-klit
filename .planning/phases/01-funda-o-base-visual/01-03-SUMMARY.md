---
phase: 01-funda-o-base-visual
plan: 03
subsystem: layout
tags: [astro, layout, header, footer, whatsapp, responsivo, hamburguer, anti-flash, theming]

# Dependency graph
requires:
  - "01-01: projeto Astro estático, 4 páginas placeholder, public/brand/ (favicon + logos)"
  - "01-02: tokens.css/global.css, primitivos Container/Section/Button/Card, ThemeSwitcher.astro"
provides:
  - "src/layouts/BaseLayout.astro — layout raiz (head/SEO placeholder/favicon/fontes, data-theme, anti-flash CANÔNICO, Header/slot/Footer/WhatsApp)"
  - "src/components/Header.astro — logo temático, nav com link ativo, ThemeSwitcher, menu mobile hambúrguer"
  - "src/components/Footer.astro — telefone 51 3022-3066 + endereço de Porto Alegre + nav repetida"
  - "src/components/WhatsAppButton.astro — FAB flutuante (wa.me placeholder documentado)"
  - "4 páginas usando BaseLayout (shell navegável, temável e responsivo)"
affects: [fase-2-conteudo, fase-3-seo]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "BaseLayout é o ponto ÚNICO do anti-flash (script is:inline no <head>); ThemeSwitcher não duplica mais"
    - "Header sticky com nav inline (desktop) que colapsa em hambúrguer abaixo de 768px (JS vanilla)"
    - "Logo do header acompanha o fundo: claro -> logo-horizontal.png (ocean); escuro -> logo-horizontal-branco.png"
    - "Footer em fundo navy usa logo branco; tokens novos --color-dark-border/--color-dark-text-muted evitam rgba inline"
    - "FAB do WhatsApp usa --color-accent (acompanha o tema) e fica fixo fora do fluxo (z-index 200)"

key-files:
  created:
    - src/layouts/BaseLayout.astro
    - src/components/Header.astro
    - src/components/Footer.astro
    - src/components/WhatsAppButton.astro
  modified:
    - src/components/ThemeSwitcher.astro
    - src/styles/global.css
    - src/styles/tokens.css
    - src/pages/index.astro
    - src/pages/solucoes.astro
    - src/pages/suporte.astro
    - src/pages/contato.astro

key-decisions:
  - "Anti-flash hoistado para o <head> do BaseLayout (ponto canônico) e REMOVIDO do ThemeSwitcher para evitar execução dupla"
  - "Breakpoint do menu mobile em 768px (hambúrguer < 768px; nav inline >= 769px); Footer adapta colunas em 768px e 480px"
  - "Tokens --color-dark-border/--color-dark-text-muted adicionados para manter o Footer 100% via tokens (sem rgba/opacity soltos nos componentes)"
  - "Logo header = ocean (fundo claro); Footer = branco (fundo navy). Swap claro/escuro documentado nos componentes, não automático"

requirements-completed: [FND-05, FND-06, FND-08]

# Metrics
duration: ~9min
completed: 2026-06-10
---

# Fase 01 Plano 03: Layout base responsivo (BaseLayout/Header/Footer/WhatsApp) — Resumo

**Shell completo do site KLIT aplicado às 4 páginas: BaseLayout com anti-flash canônico no `<head>`, Header sticky (logo temático + nav com link ativo + ThemeSwitcher + menu hambúrguer funcional), Footer navy com telefone 51 3022-3066 e endereço de Porto Alegre, e botão WhatsApp flutuante com placeholder documentado. Responsivo em mobile/tablet/desktop sem overflow horizontal; build estático passa.**

## Performance

- **Duration:** ~9 min
- **Completed:** 2026-06-10
- **Tasks:** 3
- **Files created/modified:** 11 (4 criados + 7 modificados)

## Accomplishments

- **BaseLayout.astro** — layout raiz: `<html lang="pt-BR" data-theme="ocean">`, `<head>` com `title`/`description` via props (SEO placeholder pt-BR — SEO real é Fase 3), `<link rel="icon" href="/brand/favicon.png">`, importação de `global.css` (tokens + Inter), e o **anti-flash `<script is:inline>` CANÔNICO** antes de qualquer render. `<body>` renderiza `Header` + `<slot/>` + `Footer` + `WhatsAppButton` (FND-05).
- **Header.astro** — logo do brand linkando para `/`, navegação (Início/Soluções/Suporte/Contato) com **link ativo** destacado via `Astro.url.pathname` (+ `aria-current="page"`), **ThemeSwitcher** no desktop e dentro do menu mobile, e **menu hambúrguer funcional** (< 768px) com `aria-expanded`/`aria-controls`, animação para "X", fecha ao clicar num link e por `Esc` (FND-06, FND-08).
- **Footer.astro** — fundo navy + logo branco, **telefone 51 3022-3066** (`tel:+555130223066`), **endereço completo** (Av. Doutor Nilo Peçanha 3238, 2º andar, Chácara das Pedras, Porto Alegre/RS, CEP 91330-001) e nav repetida (FND-05).
- **WhatsAppButton.astro** — FAB fixo no canto inferior direito, presente em todas as páginas via BaseLayout, `target="_blank"` + `rel="noopener noreferrer"`, `aria-label="Falar no WhatsApp"`, ícone SVG inline, cor `--color-accent` (acompanha o tema). Número **placeholder** `wa.me/55XXXXXXXXXXX` documentado (FND-05).
- **Anti-flash hoistado + duplicata removida** — o `<script is:inline>` saiu do `ThemeSwitcher.astro` (que manteve só a lógica client-side de clique/persistência/estado ativo) e virou canônico no `<head>` do BaseLayout. Confirmado no build: **1 só IIFE de anti-flash** em `dist/index.html` (FND-08).
- **4 páginas** reescritas para usar BaseLayout + `Section`/`Container` (h1 + parágrafo pt-BR de esqueleto), **removendo a nav inline manual** dos placeholders de 01-01.

## BaseLayout — props e estrutura

| Prop | Default | Uso |
| ---- | ------- | --- |
| `title` | `"KLIT — Tecnologia & Segurança"` | `<title>` da página |
| `description` | placeholder pt-BR | `<meta name="description">` |

Estrutura: `<html lang="pt-BR" data-theme="ocean">` → `<head>` (charset, viewport, title, description, favicon `/brand/favicon.png`, generator, **anti-flash is:inline**) → `<body>` (`<Header />`, `<main id="conteudo"><slot/></main>`, `<Footer />`, `<WhatsAppButton />`). Estilos/fonte chegam via `import "../styles/global.css"`.

## Breakpoints usados

| Largura | Comportamento |
| ------- | ------------- |
| `>= 769px` (desktop) | Nav inline + ThemeSwitcher visíveis no Header; painel mobile sempre oculto |
| `<= 768px` (tablet/mobile) | Nav inline e ThemeSwitcher desktop escondem; **botão hambúrguer aparece**; painel mobile com links + ThemeSwitcher |
| `<= 768px` (Footer) | Grid do Footer vira 2 colunas (brand ocupa a linha toda) |
| `<= 480px` (Footer/FAB) | Footer vira 1 coluna; FAB encolhe e aproxima da borda |

Guarda global anti-overflow: `overflow-x: hidden` em `html` e `body` (global.css) — sem barra horizontal em ~375 / ~768 / ~1280.

## Comportamento do menu mobile (hambúrguer)

- Botão `[data-menu-toggle]` com `aria-expanded` (false/true) e `aria-controls="mobile-menu"`.
- Clique alterna o atributo `hidden` do painel `[data-mobile-menu]`; as 3 barras animam para "X".
- Fecha ao **clicar em qualquer link** do painel (`[data-menu-link]`) e ao pressionar **Esc** (devolve o foco ao botão).
- `matchMedia("(min-width: 769px)")`: ao redimensionar para desktop, o menu fecha/limpa o estado.
- ThemeSwitcher acessível dentro do painel mobile (rótulo "Tema").

## Logo conforme o tema/fundo

- **Header (fundo claro `--color-surface`):** `/brand/logo-horizontal.png` (variante **ocean**, colorida).
- **Footer (fundo escuro navy):** `/brand/logo-horizontal-branco.png` (variante **branco**).
- O swap claro/escuro está **documentado em comentário** dentro de Header.astro e Footer.astro — **não é automático** nesta fase (se o header passar a ter fundo escuro no futuro, basta trocar a `src` para a versão branca).

## Placeholder do WhatsApp (para troca na Fase 3)

- **Arquivo:** `src/components/WhatsAppButton.astro`.
- **Constante:** `const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";` (com `// TODO(Fase 3)` e bloco de comentário proeminente acima).
- **Como trocar:** substituir `55XXXXXXXXXXX` pelo número real (formato `55` + DDD + número, só dígitos, ex.: `5551999999999`).
- **Nota:** o telefone **fixo** do site é `51 3022-3066` (no Footer) e **não é, necessariamente**, o número de WhatsApp — aguardando o celular comercial do usuário.

## Verificação manual (preview/dev)

- `npx astro build` passou: `dist/{index,solucoes,suporte,contato}` gerados (4 páginas).
- `npx astro preview` (smoke test): rotas `/`, `/solucoes`, `/suporte`, `/contato` retornam **200**.
- Built HTML confere: Header, Footer (telefone 51 3022-3066), WhatsApp `wa.me/55XXXXXXXXXXX`, `data-theme="ocean"`, **1 só** anti-flash IIFE, link ativo (`aria-current="page"` na home; `nav-link--active` em /solucoes), botão hambúrguer (`data-menu-toggle`, `aria-controls="mobile-menu"`), breakpoint 768px e `overflow-x:hidden` presentes no CSS de build.

## Task Commits

1. **Task 1: BaseLayout + anti-flash canônico no head + utilidades responsivas** — `9394873` (feat)
2. **Task 2: Header (nav+hambúrguer+ThemeSwitcher), Footer e WhatsApp flutuante** — `1c5e5c6` (feat)
3. **Task 3: aplica BaseLayout às 4 páginas (esqueleto responsivo)** — `51eb1bb` (feat)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Qualidade/consistência] Tokens para fundo escuro em vez de rgba inline**
- **Found during:** Task 2 (Footer)
- **Issue:** O Footer precisava de divisórias e texto suave sobre o fundo navy. Usar `rgba(255,255,255,...)` direto nos componentes contraria a regra "tokens only / sem hex hardcoded" do design system (01-02).
- **Fix:** Adicionados `--color-dark-border` e `--color-dark-text-muted` em `tokens.css`; o Footer passou a usar só tokens (sem rgba/opacity soltos no componente).
- **Files modified:** src/styles/tokens.css, src/components/Footer.astro
- **Committed in:** `1c5e5c6` (Task 2)

Fora isso, o plano foi executado como escrito (anti-flash hoistado + duplicata removida exatamente como pedido nas instruções).

**Total deviations:** 1 auto-fixed (Rule 2 — consistência com o design system). Sem scope creep.

## Known Stubs

As 4 páginas seguem como **esqueleto intencional** (h1 + parágrafo curto): o conteúdo real é da **Fase 2**, conforme o plano. O número de WhatsApp é um **placeholder documentado** a ser trocado na Fase 3. Ambos são esperados e não bloqueiam o objetivo deste plano (shell navegável/temável/responsivo).

## Self-Check: PASSED

Todos os 4 arquivos criados existem em disco (BaseLayout, Header, Footer, WhatsAppButton) + o SUMMARY, e os 3 commits de tarefa (`9394873`, `1c5e5c6`, `51eb1bb`) estão no histórico do git. Build estático gera as 4 páginas e o preview responde 200 em todas as rotas.

---
*Phase: 01-funda-o-base-visual*
*Completed: 2026-06-10*
