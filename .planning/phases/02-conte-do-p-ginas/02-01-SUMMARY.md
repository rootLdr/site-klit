---
phase: 02-conte-do-p-ginas
plan: 01
subsystem: conteudo-home
tags: [astro, home, hero, seguranca, data-module, esm-named-exports, tokens, responsivo, theming]

# Dependency graph
requires:
  - "01-02: tokens.css + primitivos Container/Section/Button/Card"
  - "01-03: BaseLayout.astro (Header/Footer/WhatsApp), 4 páginas usando o shell"
provides:
  - "src/data/solucoes.js — fonte única de verdade: 9 soluções + 3 pilares + helper (named ESM exports)"
  - "src/pages/index.astro — home parte 1: Hero (sem slider) + Segurança em destaque + tese econômica"
affects: [02-02-home-parte-2, 02-03-pagina-solucoes]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Módulo de dados em JS puro com NAMED ESM exports (solucoes, pilares, solucoesPorPilar, PILAR) — sem export default; importável por .astro"
    - "Home deriva os cards de Segurança do módulo (solucoesPorPilar) em vez de redigitar marcas inline — consistência garantida"
    - "Seção Segurança usa Section tone='dark' (fundo navy) com Cards claros por cima; acentos seguem var(--color-accent) e mudam com o tema"
    - "Hero estático (sem slider/JS); CTAs via primitivo Button; WhatsApp aponta para /contato com TODO(Fase 3)"

key-files:
  created:
    - src/data/solucoes.js
    - .planning/phases/02-conte-do-p-ginas/02-01-SUMMARY.md
  modified:
    - src/pages/index.astro

key-decisions:
  - "Contrato de export: named ESM (export const solucoes / export const pilares / export function solucoesPorPilar / export const PILAR). 02-02 e 02-03 importam '{ solucoes, pilares, solucoesPorPilar }'."
  - "Cada solução: { nome, slug, descritor, pilar, paragrafo }. `nome` = marca literal; `paragrafo` é o texto longo para /solucoes (sugerido, a validar)."
  - "Adicionado PILAR (objeto congelado de ids) para evitar strings mágicas nos consumidores; opcional de usar — filtrar por string crua continua válido."
  - "Seção Segurança em fundo escuro (tone='dark') para elevar o diferencial; descritores curtos no card, parágrafo longo fica reservado para a /solucoes (02-03)."

requirements-completed: [CNT-01, CNT-02, CNT-04, CNT-10]

# Metrics
duration: ~3min
completed: 2026-06-10
---

# Fase 02 Plano 01: Módulo de dados + Home parte 1 (Hero, Segurança, tese econômica) — Resumo

**Criado o módulo de dados compartilhado das 9 soluções / 3 pilares (named ESM exports, fonte única de verdade) e montadas as três primeiras seções da home sobre o shell da Fase 1: Hero estático sem slider (CNT-01), Segurança em destaque com Kofre/Sherlock/Eskudo derivados do módulo + prova Trend Micro/Cisco (CNT-02) e a tese econômica "Investimento inicial nulo" com a mensagem de mobilidade (CNT-04). Tudo via var(--token) — zero hex —, responsivo e temável nos 4 temas. Build estático passa e a home serve 200 com as 3 seções.**

## API exportada — `src/data/solucoes.js` (CONTRATO para 02-02 / 02-03)

Importação esperada pelos consumidores:

```js
import { solucoes, pilares, solucoesPorPilar, PILAR } from "../data/solucoes.js";
```

**Named ESM exports (NÃO há `export default`):**

| Export | Tipo | Forma |
| ------ | ---- | ----- |
| `solucoes` | `Array<Solucao>` (9 itens) | `{ nome, slug, descritor, pilar, paragrafo }` |
| `pilares` | `Array<Pilar>` (3 itens, ordem fixa) | `{ id, titulo, descricao }` |
| `solucoesPorPilar(pilarId)` | `function(string) => Array<Solucao>` | retorna as soluções daquele pilar (ordem preservada) |
| `PILAR` | objeto congelado | `{ SEGURANCA:"seguranca", INFRA_CLOUD:"infra-cloud", GESTAO_CONSULTORIA:"gestao-consultoria" }` |

**Shape de `Solucao`:**
- `nome` — marca **literal** (não alterar): Kofre, Sherlock, Eskudo, Lokar, Nuvem, Virtualiza, Konecte, Gesin, Konsulte.
- `slug` — kebab-case (ex.: `"kofre"`), útil para âncoras/links na /solucoes.
- `descritor` — frase curta funcional (1 linha) — usada nos cards.
- `pilar` — id do pilar (`"seguranca"` | `"infra-cloud"` | `"gestao-consultoria"`); casa com `pilares[].id` e com `PILAR.*`.
- `paragrafo` — 1 parágrafo curto (texto longo) **sugerido, a validar** — reservado para a página /solucoes (02-03).

**Shape de `Pilar`:** `id` (string), `titulo` (string exibível), `descricao` (string curta).

**Ordem de `pilares`:** Segurança → Infraestrutura & Cloud → Gestão & Consultoria.

**Distribuição (pilar → soluções):**
- `seguranca` → Kofre, Sherlock, Eskudo
- `infra-cloud` → Lokar, Nuvem, Virtualiza, Konecte
- `gestao-consultoria` → Gesin, Konsulte

**Como 02-02/02-03 devem consumir:**
- Grade de pilares na home / página /solucoes: iterar `pilares` e, para cada um, `solucoesPorPilar(p.id)` (ou `solucoes.filter(s => s.pilar === p.id)`).
- Cards de Segurança (já feito na home parte 1): `solucoesPorPilar(PILAR.SEGURANCA)`.
- Detalhe na /solucoes: usar `descritor` (subtítulo) + `paragrafo` (corpo).

> Marcas: literais e imutáveis. Descritores/parágrafos: sugeridos — a validar com o usuário (reconstruídos de `docs/current-site-analysis.md` §12; sem números/clientes inventados).

## Home parte 1 — seções montadas (`src/pages/index.astro`)

- **BaseLayout props:** `title="KLIT — Infraestrutura de TI gerenciada e segura"`, `description` de posicionamento pt-BR (SEO completo é Fase 3).
- **Seção 1 — Hero (`id="hero"`, CNT-01):** `Section` + `Container size="md"`. Eyebrow + `<h1>` e subheadline **exatas** dos content_facts. Dois CTAs via `Button`: primário "Falar no WhatsApp" e secundário "Conheça as soluções" → `/solucoes`. **Sem slider, sem JS de rotação.**
- **Seção 2 — Segurança em destaque (`id="seguranca"`, CNT-02):** `Section tone="dark"` (fundo navy). Título "Segurança de ponta a ponta" + subtítulo dado → uso → rede. 3 `Card` (um por solução de `solucoesPorPilar(PILAR.SEGURANCA)`), título = marca, corpo = descritor. Linha de prova citando **Trend Micro** e **Cisco** (texto, sem logo de terceiro).
- **Seção 3 — Tese econômica (`id="investimento"`, CNT-04):** `Section` + `Container size="md"`. Destaque "Investimento inicial nulo" (`<h2>`), parágrafo OPEX vs CAPEX / parceiro único, e a mensagem de mobilidade "Trabalhe de qualquer lugar, a qualquer momento." (Konecte). Sem números inventados.
- **Estilos:** bloco `<style>` escopado, **exclusivamente `var(--token)`** (zero hex). Grid de Segurança: 3 col → 2 col (≤900px) → 1 col (≤640px). Hero reduz tipografia no mobile.

## WhatsApp CTA — placeholder documentado (Fase 3)

- No Hero, o CTA "Falar no WhatsApp" aponta para **`/contato`** por ora.
- Comentário `{/* TODO(Fase 3): trocar href para wa.me quando o número de WhatsApp for fornecido. */}` acima do botão.
- O número real e o link `wa.me` são responsabilidade da Fase 3 (consistente com o placeholder do `WhatsAppButton` no Footer/FAB do 01-03).

## Verificação

- **Task 1 (automated):** `solucoes` tem 9 itens, todas as 9 marcas presentes, 3 pilares, `solucoesPorPilar` retorna Kofre/Sherlock/Eskudo — **OK**.
- **Zero hex:** `grep -niE "#[0-9a-f]{3,6}" src/pages/index.astro src/data/solucoes.js` → **vazio**.
- **Build:** `npx astro build` → 4 páginas geradas, sem erros.
- **Conteúdo no build (`dist/index.html`):** "investimento inicial nulo", Kofre, Sherlock, Eskudo, Trend Micro, Cisco, "Conheça as soluções" — todos presentes; **nenhum** `slider/swiper/carousel` no hero — **OK**.
- **Preview:** `astro preview` → `/` responde **200** e serve as âncoras `#hero`, `#seguranca`, `#investimento`.
- **Consistência das marcas:** os cards de Segurança são renderizados a partir do módulo de dados (não digitados inline).

## Task Commits

1. **Task 1: Módulo de dados das 9 soluções e 3 pilares** — `24dedd0` (feat)
2. **Task 2: Hero (sem slider) + Segurança em destaque + tese econômica** — `4c8e4c3` (feat)

## Deviations from Plan

### Auto-fixed / ajustes (Rule 2 — consistência/qualidade)

**1. [Rule 2] Export adicional `PILAR` (objeto congelado de ids)**
- **Found during:** Task 1.
- **Issue:** O plano define o contrato `solucoes` + `pilares` (+ helper opcional). Para evitar strings mágicas (`"seguranca"`) espalhadas pelos consumidores e reduzir risco de erro de digitação em 02-02/02-03, foi adicionado um named export `PILAR` com os ids canônicos.
- **Fix:** `export const PILAR = Object.freeze({ SEGURANCA, INFRA_CLOUD, GESTAO_CONSULTORIA })`. É **aditivo** e não quebra o contrato — `pilares`, `solucoes` e `solucoesPorPilar` permanecem exatamente como especificado; usar a string crua continua válido.
- **Files modified:** src/data/solucoes.js
- **Commit:** `24dedd0`

Fora isso, o plano foi executado como escrito. Decisão de design (não desvio do plano): a Seção de Segurança usa `Section tone="dark"` — permitido pelo plano ("pode usar tone padrão"), escolhido para elevar visualmente o diferencial; mantém-se 100% via tokens e temável.

**Total deviations:** 1 ajuste aditivo (Rule 2). Sem scope creep — pilares/parceiros/institucional ficaram fora (são do 02-02).

## Known Stubs

- **CTA WhatsApp** aponta para `/contato` com `// TODO(Fase 3)` — placeholder **documentado e intencional**; o número/link real é da Fase 3. Não bloqueia o objetivo do plano.
- **Descritores e `paragrafo`** das soluções são **sugeridos, a validar** com o usuário (origem: `docs/current-site-analysis.md` §12). Marcas são literais e definitivas. Não bloqueia: o conteúdo factual obrigatório (marcas, parceiros, posicionamento) está preservado.

Sem stubs que impeçam o objetivo (home parte 1 funcional, temável e responsiva).

## Self-Check: PASSED

- `src/data/solucoes.js` existe em disco; `src/pages/index.astro` modificado e em disco; `.planning/phases/02-conte-do-p-ginas/02-01-SUMMARY.md` criado.
- Commits no histórico: `24dedd0` (Task 1) e `4c8e4c3` (Task 2) — ambos presentes em `git log`.
- Build estático gera `dist/index.html` com todo o conteúdo obrigatório; preview responde 200.

---
*Phase: 02-conte-do-p-ginas*
*Completed: 2026-06-10*
