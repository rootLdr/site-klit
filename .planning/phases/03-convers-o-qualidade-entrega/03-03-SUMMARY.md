---
phase: 03-convers-o-qualidade-entrega
plan: 03
subsystem: entrega-documentacao
tags: [readme, documentacao, manutencao, build-producao, preview, entrega, astro, pt-br, assets-pipeline]

# Dependency graph
requires:
  - "03-01: src/data/site.js (contato/WhatsApp/Formspree centralizados) — documentado no README"
  - "03-02: public/robots.txt + SEO; build de 4 paginas validado — README confirma build/preview"
  - "02-01: src/data/solucoes.js (catalogo de solucoes) — referenciado na secao 'como trocar'"
  - "01-02: src/styles/tokens.css (4 temas via [data-theme], ThemeSwitcher/localStorage klit-theme)"
  - "FND-02: scripts/sync-assets.mjs (pipeline assets-input -> public/brand) — documentado"
provides:
  - "README.md na raiz (pt-BR): o que e, rodar (install/dev/build/preview), estrutura, assets, como trocar (logo/textos/solucoes/contato/temas), pendencias e acesso Windows"
  - "Validacao registrada de ENT-08: npm run build gera dist/ (4 paginas + robots.txt); npm run preview serve / com HTTP 200"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "README como fonte unica de manutencao: aponta para os arquivos editaveis reais (src/data/site.js, src/data/solucoes.js, src/styles/tokens.css, Header/Footer) — todos verificados em disco, nenhum comando/path inventado"
    - "Tabela de exports de src/data/site.js no README (telefone..formspreeEndpoint) marcando os derivados (whatsappUrl/formspreeEndpoint) como 'nao editar' e os placeholders (email/formspreeId) como 'a confirmar'"
    - "Secao de pendencias separa placeholders intencionais (WhatsApp/Formspree/email/horario) do comportamento esperado (form falha controlada ate colar formspreeId)"

key-files:
  created:
    - README.md
    - .planning/phases/03-convers-o-qualidade-entrega/03-03-SUMMARY.md
  modified: []

key-decisions:
  - "README escrito 100% a partir de fatos verificados em disco (package.json, astro.config.mjs, src/data/site.js, tokens.css, Header/Footer, sync-assets.mjs, .nvmrc, docs/windows-access.md) — zero comando/caminho inventado, conforme instrucao do plano."
  - "Acesso Windows: resumo curto no README (caminho Samba + SFTP) com link para docs/windows-access.md (fonte completa) em vez de duplicar o conteudo, evitando divergencia futura."
  - "ENT-08 validado por execucao real (build + preview com curl HTTP 200), nao por suposicao; nota de validacao registrada na propria secao de build do README."
  - "Task 2 nao tocou codigo de feature (apenas build/preview); dist/ e gitignored, logo nada novo a versionar alem do README."

metrics:
  duration: ~3 min
  completed: 2026-06-10
  tasks: 2
  files-touched: 1
---

# Phase 3 Plan 03: Entrega — README de manutenção + build de produção Summary

**One-liner:** Cria o `README.md` de manutenção na raiz (pt-BR) — rodar, estrutura, pipeline de assets, como trocar logo/textos/soluções/contato/temas e as pendências a confirmar — e valida por execução real que `npm run build` gera `dist/` (4 páginas + `robots.txt`) e `npm run preview` serve `/` com HTTP 200, fechando ENT-07 e ENT-08.

## O que foi entregue

### Task 1 — `README.md` de manutenção na raiz (ENT-07)
`README.md` criado em pt-BR (106 linhas não-vazias), escrito a partir de fatos verificados em disco. Seções:

1. **O que é o projeto** — site institucional estático da KLIT (MSP de TI, Segurança em destaque) em Astro, `output: 'static'`, sem backend/CMS.
2. **Requisitos** — Node.js 22 (`.nvmrc`) + npm; nota do `nvm use`.
3. **Como rodar localmente** — `npm install`, `npm run dev` (URL no terminal, padrão `:4321`, hot reload).
4. **Build de produção e preview** — `npm run build` (gera `dist/`) e `npm run preview`; explica saída estática e que `dist/` é gitignored; **nota de validação** do build.
5. **Estrutura de pastas** — árvore comentada (`src/{pages,components,layouts,data,styles}`, `public/brand`, `assets-input`, `scripts`, `docs`, `astro.config.mjs`, `package.json`).
6. **Onde colocar assets** — pipeline `assets-input/` + `npm run assets:sync` → `public/brand/` (idempotente); origem dos logos em `assets-input/logos/Novo Logo 2026/`.
7. **Como trocar** (subseções):
   - **Logo** — `assets-input/logos/` + sync; canônicos `public/brand/logo-horizontal.png` (Header) e `logo-horizontal-branco.png` (Footer), com os arquivos `.astro` que os referenciam.
   - **Textos** — `src/pages/{index,solucoes,suporte,contato}.astro`.
   - **Soluções** — `src/data/solucoes.js` (named ESM, fonte única do catálogo).
   - **Contato / WhatsApp / e-mail / Formspree** — `src/data/site.js` com **tabela** de exports (`telefone`, `telefoneTel`, `whatsapp`, `whatsappMsg`, `whatsappUrl`, `email`, `endereco`, `formspreeId`, `formspreeEndpoint`), marcando derivados e placeholders.
   - **Temas / cores** — `src/styles/tokens.css` (4 temas via `[data-theme]`: ocean/navy/sky/soft; `ThemeSwitcher` persiste em `localStorage` `klit-theme`); regra "zero hex hardcoded".
8. **Pendências / a confirmar** — os 4 placeholders: (1) confirmar se `555130223066` tem WhatsApp; (2) criar form no Formspree e colar `formspreeId` (com aviso de que o envio falha de forma controlada até lá — esperado); (3) e-mail oficial + horário; (4) logos de parceiros/imagens de hero (opcional).
9. **Como publicar** — hospedar `dist/` em host estático; ajustar `site` em `astro.config.mjs`.
10. **Acesso pelo Windows** — resumo (Samba `\\192.168.68.99\site-klit` + SFTP) com link para `docs/windows-access.md`.

### Task 2 — Validação do build de produção e preview (ENT-08)
- **`npx astro build`** → ✓ 4 páginas em ~880ms; `dist/{index,solucoes/index,contato/index,suporte/index}.html` + `dist/robots.txt` confirmados.
- **`npm run preview`** (background, smoke test): servidor sobe em `http://localhost:4321`; `curl -o /dev/null -w '%{http_code}' /` → **200**; servidor encerrado em seguida.
- Nenhum código de feature alterado (build/preview apenas). `dist/` e `.astro/` são gitignored — nada novo a versionar além do README.

## Validação ENT-08 (executada)

| Verificação | Resultado |
| ----------- | --------- |
| `npm run build` gera `dist/` | ✓ 4 page(s) built in 880ms |
| `dist/index.html` | ✓ presente |
| `dist/solucoes/index.html` | ✓ presente |
| `dist/contato/index.html` | ✓ presente |
| `dist/suporte/index.html` | ✓ presente |
| `dist/robots.txt` (de 03-02) | ✓ presente |
| `npm run preview` GET `/` | ✓ HTTP 200 |

## Verificação do README (Task 1)

`grep` de todos os termos-chave passou: `npm run dev`, `npm run build`, `npm run preview`, `assets:sync`, `src/data/site.js`, `src/data/solucoes.js`, `src/styles/tokens.css`, `formspreeId`. 106 linhas não-vazias (≥50 exigidas). Min-lines do must-have (≥60) também atendido.

## Deviations from Plan

Nenhuma. Plano executado exatamente como escrito. O build de produção passou (sem bloqueio a reportar) e o preview respondeu 200, satisfazendo a condição de aceite de ENT-08.

## Authentication Gates

Nenhum.

## Known Stubs / Placeholders

Nenhum novo introduzido por este plano. O README **documenta** (não cria) os placeholders herdados de 03-01 — `whatsapp` (confirmar), `email` e `formspreeId` em `src/data/site.js` —, que são intencionais (decisões pinadas no CONTEXT.md) e cuja resolução depende de ação do usuário. A seção "Pendências / a confirmar" do README é exatamente o registro dessas pendências para o usuário.

## Threat Flags

Nenhuma superfície de segurança nova. O README contém apenas instruções públicas; nenhum segredo/credencial (`formspreeId` é identificador público, não secreto — T-03-06 accept). Zero pacote novo instalado — apenas `npm run build`/`preview` com deps já auditadas (T-03-SC mitigado).

## Self-Check: PASSED

- 2/2 arquivos criados confirmados em disco: `README.md`, `03-03-SUMMARY.md`.
- 1/1 commit de tarefa confirmado no histórico: `5dd8292` (Task 1 — README).
- Build/preview validados por execução real (não suposição): build OK (4 páginas + robots.txt), preview `/` → HTTP 200.
