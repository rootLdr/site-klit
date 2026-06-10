---
phase: 02-conte-do-p-ginas
plan: 03
subsystem: paginas-essenciais
tags: [astro, solucoes, suporte, contato, formulario, data-module, tokens, responsivo, theming]

# Dependency graph
requires:
  - "02-01: src/data/solucoes.js (named ESM: solucoes, pilares, solucoesPorPilar, PILAR)"
  - "01-02: tokens.css + primitivos Container/Section/Button/Card"
  - "01-03: BaseLayout.astro (Header/Footer/WhatsApp)"
provides:
  - "src/pages/solucoes.astro — /solucoes: detalhe das 9 soluções nos 3 pilares (consome o módulo de dados)"
  - "src/pages/suporte.astro — /suporte real: canais (telefone/WhatsApp/e-mail) + bloco de acesso remoto reservado"
  - "src/pages/contato.astro — /contato: form UI + dados reais (telefone/endereço/WhatsApp)"
  - "src/components/ContatoForm.astro — formulário com validação HTML5 e action placeholder (envio = Fase 3)"
affects: [03-fase-3-envio-form-whatsapp-mapa-seo]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "/solucoes itera `pilares` e renderiza um Card por solução via `solucoesPorPilar(pilar.id)` — nenhuma marca digitada inline (consistência com a home)"
    - "Formulário com validação HTML5 NATIVA (required, type=email, type=tel) — sem JS; labels associados por for/id (a11y)"
    - "action=\"#\" como placeholder DOCUMENTADO; envio real (Formspree) e número wa.me reais ficam para a Fase 3 (ENT-02)"
    - "Bloco de acesso remoto em /suporte é puramente textual (placeholder) — NENHUM SDK/script de TeamViewer/AnyDesk embutido"
    - "/contato em grid de 2 colunas (form + dados) que colapsa para 1 coluna no mobile"

key-files:
  created:
    - src/components/ContatoForm.astro
    - .planning/phases/02-conte-do-p-ginas/02-03-SUMMARY.md
  modified:
    - src/pages/solucoes.astro
    - src/pages/suporte.astro
    - src/pages/contato.astro

key-decisions:
  - "Reuso total do módulo de dados de 02-01: /solucoes deriva as 9 marcas + descritor + paragrafo de src/data/solucoes.js (import nomeado { pilares, solucoesPorPilar }). Zero conteúdo de marca inline."
  - "Validação só com HTML5 nativo (required/type=email/type=tel) + :user-invalid no CSS — sem JS de validação, alinhado ao site estático. O envio funcional é Fase 3."
  - "WhatsApp em todas as páginas aponta para /contato com TODO(Fase 3) — consistente com o placeholder de 02-01/01-03; número/link wa.me real é Fase 3."
  - "Acesso remoto em /suporte: placeholder textual + badge 'Ferramentas a fornecer'; proibido embutir libs de terceiros nesta fase."

requirements-completed: [CNT-07, CNT-08, CNT-09, CNT-10]

# Metrics
duration: ~6min
completed: 2026-06-10
---

# Fase 02 Plano 03: Páginas essenciais (/solucoes, /suporte, /contato) — Resumo

**As três páginas internas deixaram de ser esqueletos e passaram a ter conteúdo real navegável pelo header. `/solucoes` (CNT-07) detalha as 9 soluções agrupadas nos 3 pilares, com as marcas preservadas (Kofre, Sherlock, Eskudo, Lokar, Nuvem, Virtualiza, Konecte, Gesin, Konsulte) — todas derivadas do módulo de dados de 02-01 (`pilares` + `solucoesPorPilar`), nada digitado inline — usando descritor + parágrafo por solução em Cards. `/suporte` (CNT-08) traz canais reais (telefone 51 3022-3066 como `tel:`, WhatsApp e e-mail placeholder a confirmar), um bloco de acesso remoto reservado (TeamViewer/AnyDesk "a fornecer", sem SDK de terceiro) e horário comercial sóbrio. `/contato` (CNT-09) tem um formulário (nome/e-mail/empresa/telefone/mensagem) com validação HTML5 nativa e `action="#"` como placeholder documentado (envio = Fase 3, ENT-02), ao lado dos dados reais: telefone, endereço completo de Porto Alegre (CEP 91330-001) e WhatsApp. Tudo via `var(--token)` — zero hex —, responsivo e temável nos 4 temas. Build estático passa com as 3 páginas geradas.**

## O que cada página contém

### /solucoes (CNT-07) — `src/pages/solucoes.astro`
- **BaseLayout** com `title="KLIT — Soluções"` + description de posicionamento (do dado à rede à nuvem).
- **Hero curto** (Section + Container md): eyebrow "Portfólio KLIT", `<h1>Soluções</h1>` e parágrafo de introdução citando os 3 pilares.
- **Um bloco por pilar** (iterando `pilares` na ordem do módulo): cada `<Section id={pilar.id}>` com `<h2>` = `pilar.titulo`, descrição do pilar e um grid de `<Card>` — um por solução de `solucoesPorPilar(pilar.id)`. Cada card: título = marca (`s.nome`), `descritor` (destaque) + `paragrafo` (corpo). **As 9 marcas vêm 100% do módulo de dados.**
- **CTA final** (Section tone="dark"): dois `Button` → `/contato` (WhatsApp com TODO Fase 3 + "Fale com a KLIT").
- Grid responsivo 3→2→1 col; estilos escopados só com `var(--token)`.

### /suporte (CNT-08) — `src/pages/suporte.astro`
- **BaseLayout** com `title="KLIT — Suporte"` + description.
- **Intro sóbrio**: ponto único de contato / Gesin, **sem SLA numérico inventado**.
- **Canais de atendimento** (Section tone="dark", 3 Cards):
  - **Telefone**: 51 3022-3066 como `tel:+555130223066`.
  - **WhatsApp**: `Button` → `/contato` (TODO Fase 3: wa.me).
  - **E-mail**: `mailto:contato@klit.com.br` com nota "E-mail a confirmar" (comentário `A CONFIRMAR`).
- **Acesso remoto** (bloco reservado): título "Acesso remoto", texto "em breve / a fornecer" e badge "Ferramentas a fornecer". **Nenhum SDK/script de TeamViewer/AnyDesk embutido** (apenas placeholder textual).
- **Horário de atendimento**: texto genérico ("horário comercial", comentário `A CONFIRMAR`).
- Grid responsivo; estilos só com `var(--token)`.

### /contato (CNT-09) — `src/pages/contato.astro` + `src/components/ContatoForm.astro`
- **BaseLayout** com `title="KLIT — Contato"` + description.
- **Intro** + **grid de 2 colunas** (colapsa para 1 col em ≤860px):
  - **Coluna 1 — `<ContatoForm />`**: `<form action="#" method="post">` com:
    - nome → `input[type=text][required]`
    - e-mail → `input[type=email][required]`
    - empresa → `input[type=text]` (opcional)
    - telefone → `input[type=tel]` (opcional, inputmode=tel)
    - mensagem → `textarea[required]`
    - botão submit (`Button type="submit"`) "Enviar mensagem".
    - Labels associados por `for`/`id` (a11y). `action="#"` = **placeholder documentado** (TODO Fase 3, ENT-02: integrar Formspree). Microcopy sem prazo numérico.
  - **Coluna 2 — dados reais**: telefone 51 3022-3066 (`tel:+555130223066`); botão WhatsApp (TODO Fase 3); endereço completo "Av. Doutor Nilo Peçanha 3238, 2º andar, Chácara das Pedras, Porto Alegre/RS, CEP 91330-001" em `<address>`. Mapa embed adiado para Fase 3.
- Estilos só com `var(--token)`; responsivo.

## Verificação

- **Build:** `npx astro build` → 4 páginas geradas, sem erros (em cada uma das 3 tasks).
- **Task 1 (/solucoes):** `dist/solucoes/index.html` contém as 9 marcas (Kofre, Sherlock, Eskudo, Lokar, Nuvem, Virtualiza, Konecte, Gesin, Konsulte) — **OK**.
- **Task 2 (/suporte):** `dist/suporte/index.html` contém "51 3022-3066", "Acesso remoto" e "WhatsApp"; verificação confirmou **nenhum script externo (`src=https://...`) e nenhuma referência a teamviewer.com/anydesk.com** — **OK**.
- **Task 3 (/contato):** `dist/contato/index.html` contém "91330-001", "51 3022-3066", "Nilo Peçanha", "WhatsApp", além de `name=`, `required` e `type="email"`; o `<form>` renderizado tem `action="#"` (placeholder) — **OK**.
- **Zero hex:** `grep -niE "#[0-9a-f]{3,6}" src/pages/{solucoes,suporte,contato}.astro src/components/ContatoForm.astro` → **vazio**.
- **Escopo respeitado:** `git status` confirma que `src/pages/index.astro` e `src/data/solucoes.js` **não** foram tocados (editados por outro plano/já prontos).
- **Consumo do módulo:** `/solucoes` importa `{ pilares, solucoesPorPilar }` de `../data/solucoes.js` — mesma taxonomia da home.

## Task Commits

1. **Task 1: /solucoes — 9 soluções nos 3 pilares** — `28ab295` (feat)
2. **Task 2: /suporte — canais reais + acesso remoto reservado** — `4ad8cdb` (feat)
3. **Task 3: ContatoForm + /contato com dados reais** — `2589e71` (feat)

## Deviations from Plan

Nenhum desvio funcional — o plano foi executado como escrito. Ajustes menores de qualidade (não alteram escopo nem conteúdo factual):

- **[Rule 2 — a11y/UX]** No `ContatoForm`, adicionados `autocomplete` (name/email/organization/tel), `inputmode="tel"` no telefone e a pseudo-classe CSS `:user-invalid` (feedback de erro só após interação, na cor de acento do tema). É aditivo, segue tokens e não promete prazo. Marcação de campos obrigatórios com `*` (aria-hidden) + texto explicativo.
- **Decisão de design (não desvio):** /solucoes e /suporte usam `Section tone="dark"` em um bloco (CTA / canais) para dar ritmo visual — permitido pelos primitivos, 100% via tokens e temável. /contato usa `surface-alt` no card de dados.

**Total:** 1 ajuste aditivo (Rule 2). Sem scope creep.

## Known Stubs (intencionais — resolvidos na Fase 3)

- **Envio do formulário (`action="#"`):** placeholder **documentado** (TODO Fase 3, ENT-02 → integrar Formspree). A UI/validação está completa; o envio real é da Fase 3. Não bloqueia o objetivo do plano (montar a UI/validação).
- **WhatsApp (`href="/contato"`):** em /solucoes, /suporte e /contato, o link aponta para /contato com TODO(Fase 3); número/link `wa.me` real é da Fase 3 (consistente com 02-01/01-03).
- **E-mail (`contato@klit.com.br`):** placeholder **a confirmar** com o usuário (marcado em comentário e em nota visível na página).
- **Horário de atendimento ("horário comercial"):** genérico, **a confirmar**; sem horário específico inventado.
- **Acesso remoto:** bloco reservado ("a fornecer"); ferramentas/links reais (TeamViewer/AnyDesk) serão fornecidos — sem SDK embutido por ora.
- **Descritores/parágrafos das soluções:** **sugeridos, a validar** (origem do módulo de dados de 02-01). Marcas são literais/definitivas.

Nenhum stub impede o objetivo: as 3 páginas existem, navegam pelo header, mostram o conteúdo factual obrigatório (marcas, telefone, endereço, canais) e são temáveis/responsivas. Os itens acima são, por design, escopo da Fase 3.

## Self-Check: PASSED

- `src/pages/solucoes.astro`, `src/pages/suporte.astro`, `src/pages/contato.astro` e `src/components/ContatoForm.astro` existem em disco (modificados/criado).
- Commits no histórico: `28ab295` (Task 1), `4ad8cdb` (Task 2), `2589e71` (Task 3) — todos presentes em `git log`.
- Build estático gera `dist/{solucoes,suporte,contato}/index.html` com todo o conteúdo obrigatório verificado; zero hex nos 4 arquivos.

---
*Phase: 02-conte-do-p-ginas*
*Completed: 2026-06-10*
