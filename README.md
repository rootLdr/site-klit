# Site KLIT

Site institucional **estático** da **KLIT** — provedor de TI gerenciada (MSP) com **Segurança** em destaque. Construído com [Astro](https://astro.build) (saída estática, `output: 'static'`), sem backend e sem CMS: o conteúdo vive em arquivos `.astro` e em pequenos módulos de dados (`src/data/`). O resultado do build é HTML/CSS/JS puro, hospedável em qualquer host estático.

---

## Requisitos

- **Node.js 22** (ver `.nvmrc`) — compatível com Astro 6.
- **npm** (vem com o Node).

```bash
nvm use        # respeita o .nvmrc (Node 22); opcional se já estiver no 22
```

---

## Como rodar localmente

```bash
npm install     # instala as dependências (1ª vez ou após mudar package.json)
npm run dev     # sobe o servidor de desenvolvimento do Astro
```

O `npm run dev` imprime a URL local no terminal (por padrão `http://localhost:4321`). Abra-a no navegador; as alterações em `src/` recarregam automaticamente.

---

## Build de produção e preview

```bash
npm run build     # gera a pasta dist/ (HTML estático pré-renderizado das 4 páginas)
npm run preview   # serve a dist/ localmente, igual produção (smoke test antes de publicar)
```

- A saída é **100% estática** (`output: 'static'` em `astro.config.mjs`): a pasta `dist/` contém `index.html`, `solucoes/index.html`, `contato/index.html`, `suporte/index.html` e `robots.txt`.
- `dist/` **não é versionada** (está no `.gitignore`) — é um artefato gerado.

> **Build de produção validado:** `npm run build` foi executado e gera `dist/` com as 4 páginas (`/`, `/solucoes`, `/contato`, `/suporte`) + `dist/robots.txt`; `npm run preview` serve `/` com HTTP 200. (Resultado da validação registrado no SUMMARY do plano 03-03.)

---

## Estrutura de pastas

```
site-klit/
├── src/
│   ├── pages/        # uma página por rota: index, solucoes, suporte, contato (.astro)
│   ├── components/   # Header, Footer, WhatsAppButton, ThemeSwitcher, ContatoForm,
│   │                 # e primitivos (Container, Section, Button, Card)
│   ├── layouts/      # BaseLayout.astro (head/SEO, Header+Footer, skip-link)
│   ├── data/         # dados centralizados: site.js (contato) e solucoes.js (catálogo)
│   └── styles/       # tokens.css (temas/cores) e global.css (reset/base)
├── public/
│   └── brand/        # logos e imagens FINAIS servidas pelo site (GERADAS pelo sync)
├── assets-input/     # ENTRADA de assets brutos (logos, imagens, refs, docs)
├── scripts/          # sync-assets.mjs (pipeline assets-input → public/brand)
├── docs/             # documentação auxiliar (ex.: windows-access.md)
├── astro.config.mjs  # config do Astro (site/domínio, output static)
└── package.json      # scripts npm e dependências
```

---

## Onde colocar assets

Os assets têm um **pipeline idempotente**: você coloca os arquivos brutos em `assets-input/` e roda o sync, que copia/renomeia para `public/brand/` (a pasta que o site realmente usa).

```bash
npm run assets:sync   # consome assets-input/logos/... → public/brand/ (renomeia para nomes limpos)
```

- **Entrada (você edita aqui):** `assets-input/` — subpastas `logos/`, `images/`, `references/`, `docs/`.
- **Saída (gerada — não edite à mão):** `public/brand/` — logos canônicos do site e variantes por tema.
- O script é **idempotente**: rodar duas vezes não duplica nem quebra (sobrescreve em cópia).

> Os logos da KLIT 2026 ficam em `assets-input/logos/Novo Logo 2026/`. Após trocar/adicionar arquivos lá, rode `npm run assets:sync`.

---

## Como trocar (manutenção)

### Trocar o **logo**

1. Coloque o novo logo em `assets-input/logos/` (ex.: dentro de `Novo Logo 2026/`).
2. Rode `npm run assets:sync` → os arquivos vão para `public/brand/` com nomes limpos.
3. Os arquivos canônicos consumidos pelo site são:
   - **Header (logo colorido):** `public/brand/logo-horizontal.png` — referenciado em `src/components/Header.astro`.
   - **Footer (logo branco, fundo escuro):** `public/brand/logo-horizontal-branco.png` — referenciado em `src/components/Footer.astro`.
   - **Favicon:** `public/brand/favicon.png`.

   Se mudar os nomes dos arquivos, atualize o `src=` no `Header.astro` e no `Footer.astro`.

### Trocar **textos** das páginas

Os textos ficam direto nas páginas:

- `src/pages/index.astro` — home (hero, blocos, CTAs)
- `src/pages/solucoes.astro` — soluções
- `src/pages/suporte.astro` — suporte
- `src/pages/contato.astro` — contato (com o formulário)

### Trocar **soluções** (9 marcas / 3 pilares)

Edite **`src/data/solucoes.js`** (named ESM exports). É a fonte única do catálogo de soluções; as páginas consomem dali. Adicionar/remover/editar uma solução é mudança neste único arquivo.

### Trocar **contato / WhatsApp / e-mail / Formspree**

Tudo de contato está centralizado em **`src/data/site.js`** (named ESM exports). Trocar aqui propaga para o site inteiro (Footer, FAB do WhatsApp, formulário e os CTAs das 4 páginas). Exports:

| Export | O que é | Quando trocar |
|--------|---------|---------------|
| `telefone` | Telefone para exibição (`"51 3022-3066"`) | Se o telefone mudar |
| `telefoneTel` | Telefone no formato `tel:` (`"+555130223066"`) | Junto com o `telefone` |
| `whatsapp` | Só dígitos (`"555130223066"`) — **único ponto** do número de WhatsApp | Se houver WhatsApp/celular dedicado |
| `whatsappMsg` | Mensagem pré-preenchida ao abrir a conversa | Para ajustar o texto inicial |
| `whatsappUrl` | Link `wa.me` pronto (derivado de `whatsapp` + `whatsappMsg`) | Não editar — é derivado |
| `email` | E-mail de atendimento (**placeholder** `contato@klit.com.br`) | Confirmar o e-mail oficial |
| `endereco` | Objeto com logradouro/bairro/cidade/cep | Se o endereço mudar |
| `formspreeId` | ID do formulário no Formspree (**placeholder** `SEU_FORM_ID`) | Após criar o form no Formspree |
| `formspreeEndpoint` | Endpoint POST (derivado de `formspreeId`) | Não editar — é derivado |

### Trocar **temas / cores / tipografia**

Edite **`src/styles/tokens.css`**. O site tem **4 temas**, definidos via seletor `[data-theme="..."]` (`ocean`, `navy`, `sky`, `soft`). O componente **`ThemeSwitcher`** troca o tema e **persiste a escolha** em `localStorage` na chave **`klit-theme`**.

> **Regra de estilo:** sem hex hardcoded nos componentes — tudo usa tokens (variáveis CSS). Para mudar uma cor, mude o token em `tokens.css`, não no componente.

---

## Pendências / a confirmar

Estes são **placeholders intencionais** deixados para você confirmar antes de publicar (todos editáveis em `src/data/site.js`, salvo indicação):

1. **WhatsApp — confirmar.** Hoje o site usa `555130223066` (o telefone **fixo** 51 3022-3066) como WhatsApp. **Confirme se este número tem WhatsApp ativo.** Se a KLIT tiver um celular/WhatsApp comercial dedicado, troque **apenas** a constante `whatsapp` em `src/data/site.js` (1 lugar) — todo o site passa a apontar para o novo número.
2. **Formspree — colar o `formspreeId` real.** Crie o formulário em [formspree.io](https://formspree.io), copie o ID e substitua `"SEU_FORM_ID"` em `src/data/site.js`. **Enquanto for `SEU_FORM_ID`, o envio do formulário FALHA de forma controlada** (o ContatoForm trata o erro e orienta o visitante a ligar/usar o WhatsApp) — isso é **comportamento esperado** até a configuração.
3. **E-mail oficial e horário de atendimento — confirmar.** O e-mail `contato@klit.com.br` é um placeholder; confirme o e-mail oficial (em `src/data/site.js`). O horário de atendimento exibido no site também é placeholder a confirmar.
4. **Logos de parceiros e imagens de hero (opcional).** Logos oficiais dos parceiros e imagens de hero ainda são opcionais — coloque-os em `assets-input/` e rode `npm run assets:sync` quando quiser usá-los.

---

## Como publicar

Hospede a pasta **`dist/`** (gerada por `npm run build`) em qualquer host estático (Netlify, Vercel, Cloudflare Pages, S3, etc.). Antes de publicar, ajuste o **`site`** em `astro.config.mjs` para o domínio final (já está em `https://klit.com.br`) — ele é usado nos links canônicos e nas tags Open Graph.

---

## Acesso pelo Windows

A pasta do projeto pode ser acessada de uma máquina Windows via **Samba**:

```
\\192.168.68.99\site-klit
```

Cole no Explorador de Arquivos, autentique como usuário `claude` e solte os arquivos em `assets-input/` (subpastas `logos`, `images`, `references`, `docs`). Alternativa: **SFTP** (host `192.168.68.99`, porta `22`, usuário `claude`) via WinSCP/FileZilla.

Detalhes completos (status do share, permissões, troubleshooting, alternativa SFTP) em **[`docs/windows-access.md`](docs/windows-access.md)**.
