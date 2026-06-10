---
phase: 03-convers-o-qualidade-entrega
plan: 01
subsystem: conversao-contato
tags: [astro, whatsapp, formspree, formulario, data-module, contato, aria-live, honeypot, tokens, responsivo, theming]

# Dependency graph
requires:
  - "02-03: ContatoForm.astro (UI + validação HTML5, action placeholder), páginas contato/solucoes/suporte"
  - "02-01: src/data/solucoes.js (padrão de named ESM exports replicado em site.js)"
  - "01-03: BaseLayout.astro (monta Header/Footer/WhatsAppButton)"
  - "01-02: tokens.css + primitivo Button (renderiza <a> com ...rest → aceita target/rel)"
provides:
  - "src/data/site.js — fonte única de contato (9 named ESM exports): telefone, telefoneTel, whatsapp, whatsappMsg, whatsappUrl, email, endereco, formspreeId, formspreeEndpoint"
  - "src/components/WhatsAppButton.astro — FAB apontando para wa.me real (whatsappUrl) com mensagem pré-preenchida"
  - "src/components/Footer.astro — telefone/endereço consumidos de site.js (sem duplicar)"
  - "src/components/ContatoForm.astro — envio real via Formspree (fetch/AJAX), estados aria-live, fallback POST nativo, honeypot _gotcha"
  - "CTAs 'Falar no WhatsApp' das 4 páginas (index/contato/solucoes/suporte) apontando para wa.me/555130223066"
affects: [03-02, 03-03]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Fonte única de contato em src/data/site.js (named ESM, sem export default) — espelha o padrão de src/data/solucoes.js; trocar número/email/formspreeId em 1 lugar propaga para todo o site (ENT-07)"
    - "whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMsg)}` — link pronto com mensagem; consumido por FAB e CTAs"
    - "Formspree via HTTP puro (sem SDK): form com action={formspreeEndpoint} method=POST (fallback sem JS) + <script> de progressive enhancement que faz fetch com Accept: application/json"
    - "Estados de envio numa região <p role=status aria-live=polite hidden> com data-state=loading|success|error estilizado só por tokens (--color-primary sucesso, --color-accent erro)"
    - "Honeypot _gotcha posicionado fora da tela (left:-9999px) em vez de display:none + aria-hidden + tabindex=-1 (anti-spam que bots preenchem)"
    - "Button primitivo aceita target/rel via ...rest → CTAs abrem WhatsApp em nova aba (target=_blank rel=noopener noreferrer)"

key-files:
  created:
    - src/data/site.js
    - .planning/phases/03-convers-o-qualidade-entrega/03-01-SUMMARY.md
  modified:
    - src/components/WhatsAppButton.astro
    - src/components/Footer.astro
    - src/components/ContatoForm.astro
    - src/pages/index.astro
    - src/pages/contato.astro
    - src/pages/solucoes.astro
    - src/pages/suporte.astro

key-decisions:
  - "Centralização total do contato em src/data/site.js: FAB, Footer, ContatoForm e os CTAs das 4 páginas importam dali. Trocar o número de WhatsApp ou o ID do Formspree é edição de 1 linha."
  - "Formspree por HTTP puro (sem dependência nova): zero superfície de supply-chain adicional. Fallback POST nativo garante envio mesmo sem JS; o <script> é só progressive enhancement."
  - "Honeypot _gotcha via posicionamento fora da tela (não display:none, que alguns bots ignoram) — mitiga T-03-01 (spam) sem CAPTCHA."
  - "555130223066 (telefone fixo 51 3022-3066) é reusado como WhatsApp; documentado em site.js que é PRECISO CONFIRMAR se tem WhatsApp ativo (decisão pinada no CONTEXT.md)."
  - "email (contato@klit.com.br) e formspreeId (SEU_FORM_ID) ficam como placeholders comentados — NÃO inventar e-mail/horário definitivos."

metrics:
  duration: ~3 min
  completed: 2026-06-10
  tasks: 3
  files-touched: 8
---

# Phase 3 Plan 01: Conversão — WhatsApp real + formulário Formspree funcional Summary

**One-liner:** Centraliza todo o contato em `src/data/site.js` (named ESM) e liga a conversão: FAB e CTAs abrem `wa.me/555130223066` com mensagem pré-preenchida, e o formulário envia via Formspree (fetch/AJAX) com estados aria-live, fallback POST nativo e honeypot anti-spam.

## O que foi entregue

### Task 1 — `src/data/site.js` (fonte única) + FAB + Footer
- **Criado `src/data/site.js`** com 9 named ESM exports (sem `export default`), valores pinados do CONTEXT.md.
- **WhatsAppButton.astro:** removida a constante local `WHATSAPP_URL = "wa.me/55XXXXXXXXXXX"` (placeholder fictício); passa a `import { whatsappUrl }` e usar `href={whatsappUrl}`. Mantidos target/rel/aria-label/ícone/estilos.
- **Footer.astro:** telefone (`tel:${telefoneTel}` / `{telefone}`) e `<address>` montado a partir de `endereco.*`, importados de site.js. Layout/tokens intactos.

### Task 2 — Formulário Formspree funcional (`ContatoForm.astro`)
- `<form action={formspreeEndpoint} method="POST">` (substituiu `action="#"`) → **fallback nativo sem JS**.
- **Honeypot `_gotcha`** oculto fora da tela (`left:-9999px`) + `aria-hidden`/`tabindex=-1`/`autocomplete=off`; `_subject` para o e-mail recebido.
- **Região de status** `<p role="status" aria-live="polite" hidden>` com `data-state=loading|success|error`.
- **`<script>` de progressive enhancement:** intercepta o submit, valida com `checkValidity()`, desabilita o botão, faz `fetch(form.action, { method:'POST', body:new FormData(form), headers:{ Accept:'application/json' } })`; em `response.ok` limpa o form e mostra sucesso, em erro/catch orienta ligar/WhatsApp; reabilita o botão no `finally`.
- Estados estilizados só com tokens (`--color-primary` sucesso, `--color-accent` erro). Zero hex.

### Task 3 — CTAs 'Falar no WhatsApp' das 4 páginas
- `index.astro` (CTA do hero + CTA final dark), `contato.astro` (coluna de dados), `solucoes.astro` (CTA final), `suporte.astro` (card WhatsApp): trocados de `href="/contato"` para `href={whatsappUrl}` + `target="_blank" rel="noopener noreferrer"`.
- Removidos os comentários `TODO(Fase 3)` de WhatsApp e atualizado o header de `suporte.astro`.
- Navegação interna legítima preservada (Conheça as soluções → /solucoes; Ir para Contato / Fale com a KLIT → /contato).

## API de `src/data/site.js`

```js
import { whatsappUrl, telefone, telefoneTel, endereco,
         formspreeEndpoint, email } from "../data/site.js";
```

| Export | Tipo | Valor / forma | Uso |
| ------ | ---- | ------------- | --- |
| `telefone` | string | `"51 3022-3066"` | exibição (Footer) |
| `telefoneTel` | string | `"+555130223066"` | href `tel:` (Footer) |
| `whatsapp` | string | `"555130223066"` | só dígitos; **único ponto a trocar** se o WhatsApp for outro número |
| `whatsappMsg` | string | `"Olá! Vim pelo site da KLIT e gostaria de falar com um especialista."` | texto pré-preenchido |
| `whatsappUrl` | string | `https://wa.me/555130223066?text=...` (msg codificada) | FAB + 4 CTAs |
| `email` | string | `"contato@klit.com.br"` | **placeholder — a confirmar** |
| `endereco` | object | `{ logradouro, bairro, cidade, cep }` (Porto Alegre) | Footer |
| `formspreeId` | string | `"SEU_FORM_ID"` | **placeholder — usuário cola o ID** |
| `formspreeEndpoint` | string | `https://formspree.io/f/SEU_FORM_ID` | action + fetch do form |

## WhatsApp — onde foi ligado

| Ponto | Arquivo | Antes | Agora |
| ----- | ------- | ----- | ----- |
| FAB flutuante (todas as páginas) | WhatsAppButton.astro | `wa.me/55XXXXXXXXXXX` | `whatsappUrl` |
| Hero CTA | index.astro | `/contato` | `whatsappUrl` (_blank) |
| CTA final dark | index.astro | `/contato` | `whatsappUrl` (_blank) |
| Coluna de dados | contato.astro | `/contato` | `whatsappUrl` (_blank) |
| CTA final | solucoes.astro | `/contato` | `whatsappUrl` (_blank) |
| Card WhatsApp | suporte.astro | `/contato` | `whatsappUrl` (_blank) |

Build confirma: `wa.me/555130223066` presente em index (3×: FAB+2 CTAs), contato/solucoes/suporte (2× cada: FAB+1 CTA), com `?text=` codificado.

## Comportamento do formulário Formspree

1. **Sem JS:** o `<form>` envia POST nativo direto ao `formspreeEndpoint` (Formspree aceita).
2. **Com JS:** submit interceptado → valida required nativos → "Enviando..." (aria-live) → `fetch` POST com `Accept: application/json` → sucesso (limpa form + mensagem) ou erro (orienta telefone/WhatsApp), sem recarregar.
3. **Spam:** envios com `_gotcha` preenchido são descartados pelo Formspree.
4. **Estado atual:** enquanto `formspreeId === "SEU_FORM_ID"`, o envio retorna erro tratado — **esperado** até o usuário criar o form e colar o ID (documentado em site.js; README virá em 03-03).

## Build

`npx astro build` → ✓ 4 páginas (`/`, `/contato`, `/solucoes`, `/suporte`) em ~0.95s. `dist/` é gitignored (não versionado).

## Deviations from Plan

Nenhuma. Plano executado exatamente como escrito. (Bônus dentro do escopo do plano: além dos pontos listados nas tasks, o comentário-cabeçalho de `suporte.astro` foi atualizado para refletir que o WhatsApp agora é real — coerente com "remover TODOs residuais".)

## Authentication Gates

Nenhum.

## Known Stubs / Placeholders (do usuário — a documentar no README 03-03)

| Placeholder | Local | Ação do usuário |
| ----------- | ----- | --------------- |
| `whatsapp = "555130223066"` | src/data/site.js | **Confirmar** se o fixo 51 3022-3066 tem WhatsApp; se houver celular dedicado, trocar 1 linha. |
| `email = "contato@klit.com.br"` | src/data/site.js | Confirmar e-mail oficial. |
| `formspreeId = "SEU_FORM_ID"` | src/data/site.js | Criar form em formspree.io e colar o ID (ativa o envio). |

São placeholders **intencionais e documentados** (decisões pinadas no CONTEXT.md: não inventar e-mail/horário; confirmar WhatsApp). Não bloqueiam a meta do plano — a infraestrutura de conversão está pronta e funciona assim que os valores forem confirmados; a documentação para o usuário é o plano 03-03 (README).

## Threat Flags

Nenhuma superfície de segurança nova além da já prevista no `<threat_model>` do plano (navegador→Formspree via HTTPS, mitigado por honeypot; sem pacotes novos → sem supply-chain).

## Self-Check: PASSED

- 9/9 arquivos confirmados em disco (site.js, SUMMARY, FAB, Footer, ContatoForm, 4 páginas).
- 3/3 commits confirmados no histórico: ebb0fda, f764fe9, 98000e2.
