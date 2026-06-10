# Decisões — Site KLIT (1º ciclo)

Registro objetivo das decisões tomadas na fase de QUESTIONING/alinhamento.

## Decisões de produto

| # | Decisão | Justificativa |
|---|---------|---------------|
| P1 | **Um único conceito** de site neste ciclo | Validar 1 direção antes de investir em variações |
| P2 | **Segurança em destaque** na home (Kofre, Sherlock, Eskudo) | Maior diferencial comercial e de ticket recorrente; hoje diluído entre 9 cards |
| P3 | **Posicionamento mantido** | Decisão explícita do usuário — sem rebrand de mensagem |
| P4 | Reaproveitar conteúdo do **site atual** | Empresa, soluções e contatos já existem; evitar reinvenção |
| P5 | Preservar **nomes de marca** das 9 soluções literalmente | São produtos nomeados da KLIT |

## Decisões de escopo

| # | Decisão | Justificativa |
|---|---------|---------------|
| E1 | **Landing + páginas essenciais** (Soluções, Suporte, Contato) | Equilíbrio entre rapidez de validação e navegabilidade |
| E2 | CTA = **WhatsApp + formulário** | Captar leads sem backend |
| E3 | **Sem** backend / CMS / DB / auth / blog / automações | Evitar overengineering no 1º conceito |
| E4 | **Responsividade** obrigatória | Público acessa por desktop e mobile |
| E5 | Logos e referências visuais **fornecidos pelo usuário** via `assets-input/` | Visual final depende de material de marca real |

## Decisões técnicas

| # | Decisão | Justificativa |
|---|---------|---------------|
| T1 | Site **estático** moderno (HTML/CSS/JS ou framework leve) | Simples, manutenível, roda localmente, sem infra de servidor |
| T2 | Estrutura para **troca fácil** de logos/imagens/textos | Manutenção pelo usuário depois do 1º ciclo |
| T3 | **Acesso Windows via Samba** `\\192.168.68.99\site-klit` | Reusa padrão já existente na VM (`KLIT_Bot`, `dossie-dev`) |
| T4 | Pasta oficial de entrada: **`assets-input/`** (logos/images/references/docs) | Centraliza arquivos vindos do Windows; evita assets espalhados |
| T5 | Tom visual: **premium e moderno** | Elevar de "datado/feio" para apresentável e de alto padrão |

## Marca (definida — logos entregues em 2026-06-10)

| # | Decisão | Detalhe |
|---|---------|---------|
| M1 | **Novo Logo KLIT 2026** | Marca de nós/rede + wordmark; variantes por cor em `assets-input/logos/Novo Logo 2026/` |
| M2 | **Paleta oficial** | Ocean Blue `#005A91` (primária), Navy Dark `#1B3A5C`, Sky Blue `#81D2F1`, Soft Blue `#A3C5F1`, Preto `#000000`, Branco |
| M3 | Azul como base visual | Reforça confiança/segurança — alinhado ao pilar de destaque |

## Pendentes de decisão (dependem de input do usuário)

- Stack exata do site estático (HTML puro vs Astro/Vite) — definir no plano de execução.
- **Tipografia** da marca — sugerir (Inter/Plus Jakarta Sans) ou confirmar manual de marca.
- Serviço de envio do formulário (Formspree, email, etc.) — definir na execução.
- Lista de clientes/logos para prova social — confirmar com usuário (não extraível do site atual).
- Arquivos de logo soltos com nomes aleatórios (`asdasdasd.png`, `qweqweq.png` etc.) na raiz de `Novo Logo 2026/` — são duplicatas; confirmar remoção.

---
*Última atualização: 2026-06-10*
