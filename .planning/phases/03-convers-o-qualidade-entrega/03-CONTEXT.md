# Phase 3 Context — Conversão, Qualidade & Entrega

**Phase goal:** Site convertendo (WhatsApp real + formulário Formspree funcional), polido, responsivo, com SEO/acessibilidade básicos, performance, build de produção e README de manutenção.

## Base (Fases 1–2, reutilizar)
- Astro estático; BaseLayout (props title/description), Header/Footer/WhatsAppButton/ThemeSwitcher, primitivos (Container/Section/Button/Card), tokens (4 temas), Inter.
- Páginas: `/` (home completa), `/solucoes`, `/suporte`, `/contato` (com `ContatoForm.astro`).
- Módulo de dados `src/data/solucoes.js`. **Regra:** zero hex hardcoded; tudo temável e responsivo.

## Decisões pinadas (NÃO reabrir)

### WhatsApp (ENT-01)
- Número: **51 3022-3066** → link **`https://wa.me/555130223066`** (Brasil +55, DDD 51).
- Mensagem pré-preenchida sugerida: `?text=Olá! Vim pelo site da KLIT e gostaria de falar com um especialista.`
- Aplicar em: `WhatsAppButton.astro` (FAB flutuante, hoje placeholder) e nos CTAs "Falar no WhatsApp" da home/contato/suporte (hoje apontam para `/contato`).
- ⚠️ Documentar no README/docs: confirmar se **555130223066 tem WhatsApp** (é o telefone fixo); se a KLIT tiver um celular/WhatsApp comercial dedicado, trocar lá (1 lugar: definir como constante única, ex.: `src/data/site.js` com `whatsapp`, `telefone`, `email`, `endereco`).

### Formulário (ENT-02) — Formspree
- Integração **Formspree**: `POST` para `https://formspree.io/f/SEU_FORM_ID` (placeholder claramente documentado para o usuário criar o form e colar o ID — em `src/data/site.js` ou env).
- Envio via **fetch/AJAX** com estados de **carregando / sucesso / erro** inline (sem sair da página); fallback: `method="POST"` nativo funciona mesmo sem JS.
- Campos: nome, e-mail (type=email), empresa, telefone (type=tel), mensagem. Mantê-los `required` onde fizer sentido. Incluir **honeypot** anti-spam (campo `_gotcha` oculto do Formspree). `_subject` opcional.
- Mensagem de sucesso/erro acessível (aria-live). Sem backend próprio.

### Dados centralizados (refactor leve, ENT-07)
- Criar **`src/data/site.js`** (named exports) com a verdade única de contato: `telefone` ("51 3022-3066" / tel `+555130223066`), `whatsapp` (`555130223066`), `whatsappMsg`, `email` (placeholder a confirmar), `endereco` (Av. Doutor Nilo Peçanha 3238, 2º andar, Chácara das Pedras, Porto Alegre/RS, CEP 91330-001), `formspreeId` (placeholder).
- Refatorar Footer/Contato/Suporte/WhatsAppButton para consumir `site.js` (sem duplicar). Não quebrar o que já funciona.

### SEO básico (ENT-04)
- Em `BaseLayout`: garantir `<title>` e `<meta name="description">` por página (já há props — passar valores reais por página). Adicionar **Open Graph** (og:title, og:description, og:type=website, og:url, og:image apontando para um logo do brand, ex. `/brand/og.png` ou `/brand/horizontal-2048`), `<meta name="twitter:card">`, `<link rel="canonical">`. Favicon já existe. Definir títulos/descrições reais para as 4 páginas.
- `public/robots.txt` simples (allow all) + opcional `sitemap` (se trivial via `@astrojs/sitemap`; senão pular — manter simples). `lang="pt-BR"` já ok.

### Acessibilidade básica (ENT-05)
- Hierarquia de headings correta (um `<h1>` por página), `alt` em todas as imagens (logos), foco visível, navegação por teclado (menu mobile, switcher, form), `aria-live` no resultado do form, contraste adequado (validar tokens — texto sobre primária/dark). Adicionar **skip-to-content** link no BaseLayout. Estados de foco em links/botões.

### Performance (ENT-06)
- Otimizar imagens: usar `astro:assets` `<Image>` para o logo do Header (ou `width/height` + `loading`/`decoding`) evitando layout shift; logos pesados → servir tamanho adequado. Sem fontes/recursos desnecessários. Build estático já é leve.

### Entrega (ENT-07, ENT-08)
- **README.md** na raiz (pt-BR): o que é o projeto, **como rodar** (`npm install`, `npm run dev`, `npm run build`, `npm run preview`), **estrutura** de pastas, **onde colocar assets** (`assets-input/` + `npm run assets:sync`), **como trocar**: logo, textos, soluções (`src/data/solucoes.js`), contato/WhatsApp/Formspree (`src/data/site.js`), temas/cores (`src/styles/tokens.css`). Observações (placeholder WhatsApp/Formspree a confirmar).
- **Build de produção** (`npm run build`) gera `dist/` e `npm run preview` serve localmente (ENT-08).

## Pendências/placeholders (do usuário, documentar no README)
- Confirmar WhatsApp real (se 555130223066 não tiver WhatsApp).
- Criar form no Formspree e colar `formspreeId`.
- E-mail oficial e horário de atendimento.
- Logos oficiais dos parceiros e imagens de hero (opcional).

## Requirements
ENT-01 (WhatsApp), ENT-02 (form Formspree), ENT-03 (CTAs), ENT-04 (SEO/OG), ENT-05 (a11y), ENT-06 (performance), ENT-07 (README), ENT-08 (build prod).
