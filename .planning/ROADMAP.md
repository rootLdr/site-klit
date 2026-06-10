# Roadmap: Site KLIT

## Overview

Construção de **um conceito** de site institucional moderno e premium para a KLIT, partindo do conteúdo do site atual e com **Segurança em destaque**. Organizado em **3 categorias (fases)**, cada uma subdividida em planos numerados (1.1, 1.2, 1.3 …): primeiro a fundação técnica e visual, depois o conteúdo e as páginas, e por fim conversão, qualidade e entrega. Site estático, responsivo, rodável localmente, com troca fácil de logos/imagens/textos via `assets-input/`.

## Phases

**Numeração:** 3 fases-categoria. Os planos dentro de cada fase seguem o padrão do usuário **N.1, N.2, N.3** (equivalente aos IDs GSD `0N-01`, `0N-02`, `0N-03`).

- [ ] **Fase 1: Fundação & Base Visual** — Scaffold, design system premium e layout base responsivo
- [ ] **Fase 2: Conteúdo & Páginas** — Home forte (Segurança em destaque) e páginas essenciais
- [ ] **Fase 3: Conversão, Qualidade & Entrega** — WhatsApp/formulário, polish, SEO, README

## Phase Details

### Phase 1: Fundação & Base Visual
**Goal**: Base técnica e visual pronta — projeto roda localmente, design system premium definido e layout base (header/footer/WhatsApp) responsivo, com pipeline lendo de `assets-input/`.
**Depends on**: Nothing (first phase)
**Requirements**: FND-01, FND-02, FND-03, FND-04, FND-05, FND-06, FND-07, FND-08
**Success Criteria** (o que deve ser VERDADE):
  1. `npm run dev` (ou equivalente) sobe o site localmente no navegador
  2. Trocar uma cor/tipografia em um arquivo de tokens muda o site inteiro
  3. Um **seletor de tema** alterna a cor primária (Ocean Blue / Navy / Sky / Soft Blue) com 1 clique, ao vivo
  4. Header, footer e botão WhatsApp aparecem e a página base se adapta a mobile/desktop
  5. Colocar um logo em `assets-input/logos/` o disponibiliza ao site
**Plans**: 3 plans

Plans:
- [x] 01-01 (**1.1**): Scaffold do site estático — stack leve, dev server, estrutura de pastas e pipeline de `assets-input/`
- [x] 01-02 (**1.2**): Design system premium — tokens via CSS custom properties (paleta KLIT, tipografia, espaçamento, grid) + **seletor de tema** (troca de cor primária em runtime) + componentes base (botão, card, seção, container)
- [x] 01-03 (**1.3**): Layout base — header com navegação, footer, botão WhatsApp flutuante e esqueleto responsivo das páginas

### Phase 2: Conteúdo & Páginas
**Goal**: Home premium completa com Segurança em destaque e páginas essenciais (Soluções, Suporte, Contato), usando conteúdo real do site atual reescrito sem typos.
**Depends on**: Phase 1
**Requirements**: CNT-01, CNT-02, CNT-03, CNT-04, CNT-05, CNT-06, CNT-07, CNT-08, CNT-09, CNT-10
**Success Criteria** (o que deve ser VERDADE):
  1. A home abre com hero de posicionamento fixo (sem slider) e Segurança em destaque
  2. As 9 soluções aparecem agrupadas em 3 pilares, com nomes de marca preservados
  3. Parceiros e bloco institucional (Missão/Visão/Valores) presentes, sem typos
  4. Páginas Soluções, Suporte e Contato existem e navegam pelo header
  5. Telefone e endereço reais (Porto Alegre) aparecem no Contato
**Plans**: 3 plans

Plans:
- [x] 02-01 (**2.1**): Home (parte 1) — hero premium + seção Segurança em destaque + tese econômica ("investimento inicial nulo")
- [x] 02-02 (**2.2**): Home (parte 2) — soluções em 3 pilares + faixa de parceiros + institucional (Missão/Visão/Valores)
- [x] 02-03 (**2.3**): Páginas essenciais — Soluções (detalhe das 9), Suporte (conteúdo real) e Contato

### Phase 3: Conversão, Qualidade & Entrega
**Goal**: Site convertendo (WhatsApp + formulário funcional), polido, responsivo, com SEO/acessibilidade básicos, build de produção e README de manutenção.
**Depends on**: Phase 2
**Requirements**: ENT-01, ENT-02, ENT-03, ENT-04, ENT-05, ENT-06, ENT-07, ENT-08
**Success Criteria** (o que deve ser VERDADE):
  1. Botão WhatsApp abre conversa real (`wa.me`) e o formulário envia (serviço externo)
  2. Site responsivo e sem quebras em mobile/tablet/desktop
  3. SEO básico presente (title, meta description, Open Graph, favicon) e imagens otimizadas
  4. `README.md` explica como rodar localmente, estrutura e onde colocar assets
  5. Build de produção gera e serve localmente
**Plans**: 3 plans

Plans:
- [x] 03-01 (**3.1**): Conversão — WhatsApp (`wa.me`) + formulário via serviço externo (ex.: Formspree) com validação + CTAs
- [ ] 03-02 (**3.2**): Qualidade — responsividade final, acessibilidade básica, SEO básico e performance/imagens
- [ ] 03-03 (**3.3**): Entrega — README de manutenção, build de produção e checagem de rodar localmente

## Progress

**Ordem de execução:** Fase 1 → Fase 2 → Fase 3 (paralelização dos planos independentes dentro de cada fase quando possível).

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Fundação & Base Visual | 3/3 | Complete   | 2026-06-10 |
| 2. Conteúdo & Páginas | 3/3 | Complete   | 2026-06-10 |
| 3. Conversão, Qualidade & Entrega | 1/3 | In Progress|  |

---
*Roadmap criado: 2026-06-10*
