# Phase 1 Context — Fundação & Base Visual

**Phase goal:** Base técnica e visual pronta — projeto roda localmente, design system premium com paleta KLIT trocável (seletor de tema), layout base responsivo (header/footer/WhatsApp), pipeline lendo de `assets-input/`.

## Decisões pinadas (NÃO reabrir no planejamento)

### Stack
- **Astro** (última versão estável) + **npm** (Node 22 disponível). Saída estática (`astro build` → `dist/`).
- **CSS vanilla com custom properties** (design tokens). **Sem Tailwind** — prioriza simplicidade e edição fácil pelo usuário depois.
- Sem TypeScript estrito obrigatório; manter simples. Sem backend/CMS/DB.
- Dev local: `npm install` + `npm run dev`. Build: `npm run build` + `npm run preview`.

### Design tokens / Paleta de marca (oficial)
Definir em um único arquivo de tokens (CSS custom properties em `:root`):
| Token | Hex |
|-------|-----|
| Ocean Blue (primária default) | `#005A91` |
| Navy Dark | `#1B3A5C` |
| Sky Blue (acento) | `#81D2F1` |
| Soft Blue | `#A3C5F1` |
| Preto (texto) | `#000000` |
| Branco | `#FFFFFF` |
Mais tokens de espaçamento, raio, sombra, tipografia. Tipografia sugerida: sans moderna (ex.: Inter ou Plus Jakarta Sans via @fontsource ou Google Fonts) — escolher 1.

### Seletor de tema (FND-08)
- Temas alternam a **cor primária** entre: `ocean` (default), `navy`, `sky`, `soft`.
- Implementar via atributo `data-theme` no `<html>` + CSS custom properties por tema.
- **Controle visível** (seletor/botões de cor) que alterna com **1 clique**, aplicado em runtime.
- Persistir escolha em `localStorage`; aplicar antes do paint para evitar flash.

### Pipeline de assets (`assets-input/`)
- Logos do usuário em `assets-input/logos/Novo Logo 2026/` (variantes por cor: Branco, Sky Blue, Ocean Blue, Navy Dark, Soft Blue, Preto; formatos horizontal/vertical/favicon/marca reduzida + vetor `01 VETOR ORIGINAL.svg`).
- Estratégia: um passo simples (script npm ou cópia documentada) leva os logos escolhidos de `assets-input/` para `public/brand/` (ou `src/assets/` com `astro:assets`). Favicon a partir do "Favicon PNG 48×48".
- Documentar claramente como trocar logo/imagem (onde colocar, qual comando rodar). **Não** espalhar assets fora do fluxo.
- Escolha de cor do logo no header deve acompanhar/combinar com o tema (ex.: logo Branco em fundos escuros).

### Componentes e estrutura (esqueleto)
- `src/layouts/BaseLayout.astro` — `<head>` (SEO básico placeholder, favicon, fontes), `data-theme`, slots.
- `src/components/`: `Header.astro` (nav: Home, Soluções, Suporte, Contato), `Footer.astro` (contato/endereço), `WhatsAppButton.astro` (flutuante), `ThemeSwitcher.astro`, e primitivos `Button.astro`, `Card.astro`, `Section.astro`, `Container.astro`.
- `src/pages/`: `index.astro` (home — só esqueleto nesta fase), `solucoes.astro`, `suporte.astro`, `contato.astro` (esqueletos navegáveis; conteúdo real é Fase 2).
- `src/styles/`: `tokens.css` (paleta + temas), `global.css` (reset, base, tipografia, utilidades).

### Responsividade
- Mobile-first. Breakpoints simples (ex.: 640 / 768 / 1024). Header com menu mobile (hamburguer) funcional.

## Pendências/placeholders desta fase
- **Número de WhatsApp:** telefone do site é fixo `51 3022-3066`. WhatsApp exige número (provável celular comercial) — usar placeholder `wa.me/55XXXXXXXXXXX` documentado até o usuário fornecer.
- Tipografia final a confirmar (escolher uma sensata agora).
- Conteúdo real das páginas é da Fase 2 — aqui só esqueleto.

## Requirements desta fase
FND-01 (rodar local), FND-02 (pipeline assets-input/), FND-03 (design system/tokens), FND-04 (componentes base), FND-05 (header/footer/WhatsApp), FND-06 (responsivo), FND-07 (troca fácil documentada), FND-08 (seletor de tema runtime).

## Success criteria (do ROADMAP)
1. `npm run dev` sobe o site no navegador.
2. Trocar um token muda o site inteiro.
3. Seletor de tema alterna a primária (Ocean/Navy/Sky/Soft) com 1 clique, ao vivo.
4. Header, footer e botão WhatsApp aparecem; base responsiva mobile/desktop.
5. Logo em `assets-input/logos/` fica disponível ao site.
