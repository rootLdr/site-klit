---
phase: 02-conte-do-p-ginas
plan: 02
subsystem: conteudo-home
tags: [astro, home, pilares, parceiros, institucional, cta, data-module, tokens, responsivo, theming]

# Dependency graph
requires:
  - "02-01: src/data/solucoes.js (named ESM: solucoes/pilares/solucoesPorPilar/PILAR) + index.astro parte 1 (hero/segurança/tese)"
  - "01-02: tokens.css + primitivos Container/Section/Button/Card"
  - "01-03: BaseLayout.astro (Header/Footer/WhatsApp)"
provides:
  - "src/pages/index.astro — home COMPLETA: parte 1 (02-01) + 4 seções finais (pilares/9, parceiros/8, institucional, CTA final)"
affects: [02-verificacao]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Seção de pilares itera `pilares` do módulo e, por pilar, `solucoesPorPilar(pilar.id)` — as 9 marcas vêm 100% do módulo de dados (nada redigitado inline)"
    - "Parceiros como chips textuais estilizados só com tokens (pill --radius-full + --color-surface-alt) — SEM logos de terceiros (TODO documentado)"
    - "CTA final em Section tone='dark'; botão secundário recebe override de contraste via --color-dark-text para legibilidade sobre fundo navy"
    - "Grids responsivos: pilar usa auto-fit minmax(240px) → 1col no mobile; institucional 2col → 1col; chips e valores em flex-wrap"

key-files:
  created:
    - .planning/phases/02-conte-do-p-ginas/02-02-SUMMARY.md
  modified:
    - src/pages/index.astro

key-decisions:
  - "Seções ANEXADAS após a tese econômica (02-01 intacto): hero → segurança → tese → pilares → parceiros → institucional → CTA final. Ordem confirmada no dist/index.html."
  - "Import nomeado ampliado para { solucoes, pilares, solucoesPorPilar, PILAR } (02-01 já importava solucoesPorPilar/PILAR; adicionados solucoes/pilares)."
  - "Parceiros e valores definidos como arrays locais no frontmatter e iterados (consistência e fácil manutenção); marcas de solução continuam vindo só do módulo."
  - "CTA WhatsApp aponta para /contato com TODO(Fase 3) — número/link wa.me real é da Fase 3 (consistente com 02-01 e o WhatsAppButton do shell)."

requirements-completed: [CNT-03, CNT-05, CNT-06, CNT-10]

# Metrics
duration: ~3min
completed: 2026-06-10
---

# Fase 02 Plano 02: Home parte 2 (pilares, parceiros, institucional, CTA final) — Resumo

**Anexadas as quatro seções finais à home, completando a narrativa sobre o que 02-01 montou (hero/segurança/tese): (1) "Soluções para toda a sua TI" (CNT-03) com as 9 marcas agrupadas nos 3 pilares, iteradas direto do módulo de dados (`pilares` + `solucoesPorPilar`) para garantir consistência; (2) "Tecnologias e parceiros" (CNT-05) com os 8 parceiros (VMware, Trend Micro, Microsoft, Cisco, SolarWinds, Google, Azure, AWS) como chips textuais elegantes — sem baixar logos de terceiros; (3) o bloco institucional (CNT-06) com Missão/Visão/Valores reescritos SEM os typos do site antigo (Visão = "Ser referência nacional nos segmentos em que atua."); e (4) o CTA final em `Section tone="dark"` com WhatsApp/Contato e o telefone 51 3022-3066 (link `tel:`). Tudo via `var(--token)` — zero hex —, responsivo e temável nos 4 temas. Build estático passa e o `dist/index.html` serve as 7 seções na ordem correta.**

## Seções acrescentadas (`src/pages/index.astro`)

Ordem final da home (confirmada por índice no `dist/index.html`): `#hero` → `#seguranca` → `#investimento` → `#solucoes` → `#parceiros` → `#sobre` → CTA final (dark).

- **Seção 4 — Soluções em 3 pilares (`id="solucoes"`, CNT-03):** `Section` + `Container`. Título "Soluções para toda a sua TI". Itera os 3 `pilares` na ordem do módulo (Segurança → Infraestrutura & Cloud → Gestão & Consultoria); para cada pilar exibe `titulo` + `descricao` e um grid de `Card` (`as="article"`, título = marca, corpo = `descritor`) por solução, via `solucoesPorPilar(pilar.id)`. **As 9 marcas vêm 100% do módulo — nada inline.** Botão "Ver todas as soluções" → `/solucoes` (variant secondary).
- **Seção 5 — Parceiros (`id="parceiros"`, CNT-05):** `Section` + `Container`. Título "Tecnologias e parceiros". Os 8 parceiros (array local no frontmatter) renderizados como chips estilizados (pill com `--radius-full`, `--color-surface-alt`, borda/sombra de token). **Sem imagens de terceiros** — comentário `// TODO: logos oficiais a fornecer pelo usuário (não baixar logos de terceiros)`.
- **Seção 6 — Institucional (`id="sobre"`, CNT-06):** `Section` + `Container`. Título "A KLIT". Missão e Visão em dois `Card`; Valores como lista dos 5 itens (Cliente satisfeito · Ética · Inovação · Sustentabilidade · Lucratividade) com marcador via `::before` (token). Copy EXATA dos content_facts, reescrita sem typos.
- **Seção 7 — CTA final + contato rápido:** `Section tone="dark"` (navy). Headline "Vamos cuidar da TI da sua empresa?", dois `Button` ("Falar no WhatsApp" e "Ir para Contato" → `/contato`) e o telefone **51 3022-3066** como `tel:+555130223066`. Botão secundário recebe override de contraste (`--color-dark-text`) para legibilidade sobre fundo escuro.

## Conteúdo / typos

- **9 marcas presentes no build:** Kofre, Sherlock, Eskudo (pilar Segurança — já na parte 1 e também na grade de pilares), Lokar, Nuvem, Virtualiza, Konecte (Infra & Cloud), Gesin, Konsulte (Gestão & Consultoria).
- **8 parceiros presentes:** VMware, Trend Micro, Microsoft, Cisco, SolarWinds, Google, Azure, AWS.
- **Institucional sem typos:** "Ser referência nacional…" (acento correto). Verificado que **nenhum** dos typos do site antigo aparece no `dist/index.html`: `Outsoursing`, `Tecnico`, `referencia` (com `\b...\b`) → ausentes.
- **Contato:** telefone 51 3022-3066 + link `tel:+555130223066`.

## Verificação

- **Zero hex:** `grep -nE '#[0-9a-f]{3,6}' src/pages/index.astro` → vazio (OK).
- **Build:** `npx astro build` → 4 páginas geradas, sem erros (em ambos os commits).
- **Task 1 (automated):** `dist/index.html` contém Lokar/Nuvem/Virtualiza/Konecte/Gesin/Konsulte + VMware/SolarWinds/Microsoft/Azure/AWS — **OK**.
- **Task 2 (automated):** contém "Ser referência nacional", "Cliente satisfeito", "Sustentabilidade", "51 3022-3066"; nenhum typo (Outsoursing/Tecnico/referencia) — **OK**.
- **Ordem das seções:** índices crescentes de `#hero` → `#sobre` no `dist/index.html` — **OK** (hero/segurança/tese de 02-01 intactos).
- **Telefone:** `tel:+555130223066` presente — **OK**.

## Task Commits

1. **Task 1: Pilares (9 soluções) + faixa de parceiros** — `9287c0e` (feat)
2. **Task 2: Institucional (Missão/Visão/Valores) + CTA final** — `c21d016` (feat)

## Deviations from Plan

Nenhum desvio funcional — plano executado exatamente como escrito.

Nota de processo (não é desvio de escopo): como as duas tarefas modificam o MESMO arquivo (`src/pages/index.astro`), o histórico atômico por tarefa foi obtido escrevendo a versão completa, comitando o estado da Task 1 (pilares + parceiros) e depois restaurando o estado completo para comitar a Task 2 (institucional + CTA). Resultado idêntico ao de escrever incrementalmente; nenhuma seção de 02-01 foi alterada.

## Escopo respeitado (concorrência)

- Modificado SOMENTE `src/pages/index.astro` (+ esta SUMMARY). As páginas `solucoes/suporte/contato` NÃO foram tocadas — pertencem a planos concorrentes. (Há mudanças não rastreadas em `src/pages/contato.astro` e `src/components/ContatoForm.astro` de outro plano; deixadas intactas e fora dos meus commits, que stageiam apenas `index.astro` individualmente.)

## Known Stubs

- **CTA WhatsApp** aponta para `/contato` com `TODO(Fase 3)` — placeholder documentado e intencional; o número/link `wa.me` real é da Fase 3. Não bloqueia o objetivo do plano.
- **Logos de parceiros** ausentes por opção (chips textuais + TODO) — o usuário fornecerá os logos oficiais; não baixar logos de terceiros. Não bloqueia: os 8 nomes estão presentes (CNT-05/CNT-10 atendidos).
- **Descritores das soluções** continuam sugeridos/a validar (origem 02-01); marcas são literais e definitivas.

Sem stubs que impeçam o objetivo (home completa, temável e responsiva).

## Self-Check: PASSED

- `src/pages/index.astro` modificado e em disco (690 linhas; contém "Ser referência nacional").
- `.planning/phases/02-conte-do-p-ginas/02-02-SUMMARY.md` criado.
- Commits no histórico: `9287c0e` (Task 1) e `c21d016` (Task 2) — ambos presentes em `git log`.
- `dist/index.html` contém as 9 marcas, os 8 parceiros, o institucional sem typos e o telefone; seções na ordem correta.

---
*Phase: 02-conte-do-p-ginas*
*Completed: 2026-06-10*
