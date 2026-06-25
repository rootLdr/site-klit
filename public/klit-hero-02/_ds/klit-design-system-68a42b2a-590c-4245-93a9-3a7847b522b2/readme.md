# KLIT — Design System

Sistema de design de marca e produto da **KLIT**, uma empresa de serviços gerenciados de TI (Brasil, pt-BR).
A KLIT entrega **serviços gerenciados de TI** — suporte, backup / proteção de dados e monitoramento — com uma proposta de valor baseada em *qualidade comprovável*: medida, reportada e continuamente aprimorada.

O tom é **corporativo, confiável, técnico e premium**: solidez e cuidado. O movimento é calmo e confiante, inspirado em Apple, Aesop e Cubitts — sutil, nunca espalhafatoso.

## Fontes (materiais de origem)

Este sistema foi construído a partir de um brand kit fornecido pelo cliente. Não houve codebase nem Figma.

- `uploads/klit.html` — o Brand Kit canônico da KLIT (paleta, especificação de tipografia, regras de logo, tom, estilo visual). **A referência de registro.**
- `uploads/asdasdasd.png` → `assets/klit-logo-color.png` — logo principal (símbolo azul + wordmark navy) para fundos claros.
- `uploads/fwfefw.png` → `assets/klit-logo-white.png` — logo reverso (branco) para fundos escuros.

> **Nota sobre fontes:** Manrope (display) e Inter (corpo) são ambas Google Fonts open-source, carregadas via `tokens/fonts.css`. Nenhuma substituição foi necessária. O brand kit menciona *Surgena* como fonte de display para relatórios da KLIT — **não usada aqui** (sem licença web conhecida). Se houver licença de webfont da Surgena, envie os arquivos e ela pode substituir a Manrope no display.

---

## Fundamentos de conteúdo

**Idioma.** O conteúdo principal é **Português do Brasil (pt-BR)**. Rótulos técnicos de UI podem aparecer em inglês quando for convencional.

**Voz.** Corporativa, confiante, técnica — mas direta. A KLIT explica *o que faz* e *como comprova*. Evite hype, evite empilhar jargões. Comece pelo resultado (disponibilidade, dados protegidos, tranquilidade) e depois sustente com o mecanismo (monitoramento, backup, relatórios).

**Pessoa.** Fale diretamente com o cliente — *você / sua empresa*. A KLIT se refere a si mesma como *KLIT* ou *nós*. Calorosa mas profissional; nunca informal demais.

**Caixa.** Caixa de frase para títulos e botões (não Title Case, não CAIXA ALTA). A única exceção: **eyebrows / rótulos curtos em caixa alta** com tracking aberto (ex.: `SERVIÇOS GERENCIADOS`).

**Emoji.** Nenhum. A marca é premium e técnica — emoji soa informal e não é usado.

**Números e provas.** A KLIT é orientada a evidências: SLAs, % de uptime, janelas de backup, tempos de resposta. Use números reais e específicos quando possível; nunca invente precisão. Combine sempre cor de status com um ícone (acessibilidade + clareza).

**Exemplos de copy na voz KLIT:**
- Eyebrow: `SERVIÇOS GERENCIADOS DE TI`
- Título: *"Sua infraestrutura monitorada, protegida e comprovada."*
- Subtítulo: *"Suporte, backup e monitoramento contínuo — com relatórios que mostram o resultado."*
- CTA: *"Falar com um especialista"* · *"Ver planos"*
- Reforço: *"Acompanhamento contínuo. Dados protegidos. Qualidade comprovável."*

---

## Fundamentos visuais

**Cor.** Uma base institucional navy (`#0C121D → #4B6387`) ancora a marca; um destaque azul-claro (`#A3C5F1`, igual ao símbolo do logo) conduz CTAs, links e realces. Os neutros são a rampa Slate (`#F8FAFC` página → `#0F172A` texto). As seções alternam **claro (cinza-50) e escuro (navy)** para criar ritmo ao longo da página. Como o azul de destaque é claro, sobre branco ele é combinado com `--blue-ink` (`#2E6BB8`) em texto/links para manter contraste; sobre navy, o azul-claro brilha como destaque.

**Tipografia.** Display e títulos em **Manrope** (700–800, tracking fechado `-0.02em`); corpo e rótulos em **Inter** (400–600, altura de linha 1,6). Saltos generosos de tamanho criam hierarquia clara. Eyebrows são Inter 600 em caixa alta com tracking `+0.04em`.

**Espaçamento e layout.** Escala base-4 com **bastante respiro**. Largura máxima de conteúdo ~1200px; colunas de leitura ~760px. Seções recebem ~96px de padding vertical. Limpo, desafogado, alinhado a uma grade.

**Fundos.** Majoritariamente chapados — cards brancos sobre cinza-50, ou seções navy sólidas. **Sem gradientes chamativos, sem roxo, sem texturas carregadas.** Um gradiente navy-para-navy-black muito sutil ou uma textura de grade pontilhada discreta é aceitável apenas em seções hero escuras. Imagens (quando usadas) tendem ao frio, limpo, corporativo — data centers, dashboards, equipes — nunca quentes ou granuladas.

**Raios de canto.** Suaves, sem arredondar tudo em pílula: cards `10px` (`--radius-md`), inputs/botões `6–10px`, pílulas só para tags/badges. Nada de cantos retos, nada de bolha.

**Cards.** Superfície branca, borda hairline de 1px `--border` (cinza-300), `--radius-md` e uma sombra **sutil** (`0 1px 3px rgba(12,18,29,.08)`). A marca se apoia na combinação borda hairline + sombra leve, em vez de elevação pesada. No hover, os cards sobem suavemente (`--shadow-md`) e transladam ~2px para cima.

**Sombras.** Baixo espalhamento e suaves. `xs/sm` para cards e inputs em repouso; `md` para hover/active; `lg` reservada para diálogos e popovers. Nunca duras ou escuras.

**Bordas e divisórias.** Hairline (1px) cinza-300 no claro; sobre navy, uma hairline azul translúcida (`rgba(163,197,241,.22)`).

**Movimento.** Calmo e premium. O easing padrão é `cubic-bezier(0.16,1,0.3,1)` (assentamento desacelerado); durações `140ms` (rápido) / `240ms` (base) / `420ms` (lento). Hovers fazem fade e sobem, não quicam. Revelações ao rolar são fade-up gentil em ~640ms. Sempre respeite `prefers-reduced-motion`.

**Estados de hover.** Botões primários escurecem levemente + sobem; secundários/ghost ganham um fundo de leve tom azul; links vão para `--blue-ink` com sublinhado. **Estados de clique** descem ~1px e removem a elevação (compressão sutil), nunca uma virada brusca de cor.

**Foco.** Anel visível de 3px em `--focus-ring` (`rgba(126,179,255,.55)`) — acessibilidade é inegociável para um público técnico/corporativo.

**Transparência e blur.** Usados com parcimônia: headers fixos podem usar um backdrop branco/navy com blur; overlays usam um scrim navy a ~50%. Não é uma marca de glassmorphism decorativo.

---

## Iconografia

- **Sistema:** ícones de linha no **estilo Lucide** — traço de 1,5–2px, pontas/junções arredondadas, grade de 24px. Isso segue a nota do brand kit: *"Ícones de linha (estilo lucide), consistentes."*
- **Entrega:** Lucide está disponível via CDN (`https://unpkg.com/lucide@latest`) — usado nos componentes/UI kit. SVGs inline nos cards copiam a mesma linguagem de traço. *(Flag de substituição: o kit especifica o **estilo** Lucide, não um conjunto custom embutido, então o próprio Lucide é a correspondência fiel — nenhum icon font custom foi fornecido.)*
- **Cor:** ícones herdam a cor do texto; ícones de destaque usam `--blue-ink` no claro, `--blue-pale` no navy. Ícones de status usam os tons de status mais escuros para contraste.
- **Emoji:** nunca usado como ícone. Sem ícones de glifo unicode. Sempre SVGs de linha reais.
- **Símbolo do logo:** a marca de "nós conectados" / molécula é identidade de marca, não um ícone — não a substitua em espaços de ícone.

---

## Índice / manifesto

**Raiz**
- `styles.css` — ponto de entrada global (consumidores linkam este arquivo). Apenas linhas `@import`.
- `readme.md` — este guia.
- `SKILL.md` — wrapper de Agent Skill.

**Tokens** (`tokens/`)
- `fonts.css` — Manrope + Inter (Google Fonts).
- `colors.css` — base navy, destaque azul, neutros, status + aliases semânticos.
- `typography.css` — famílias, pesos, escala, classes auxiliares.
- `spacing.css` — espaçamento base-4 + layout.
- `effects.css` — raios, sombras, movimento.

**Assets** (`assets/`)
- `klit-logo-color.png` — logo para fundos claros.
- `klit-logo-white.png` — logo para fundos escuros.

**Cards de foundation** (`guidelines/`) — populam a aba Design System: cores navy / destaque / neutros / status, tipografia de títulos e corpo, escala de espaçamento, raios e sombras, ambos os logos.

**Componentes** (`components/`)
- `core/` — Button, Badge, StatusPill, Card, Input, Eyebrow (ver os cards de componentes).

**UI kit** (`ui_kits/website/`)
- Site institucional KLIT — hero, serviços, provas, CTA, footer.

**Templates** (`templates/`)
- `landing-page/` — landing page institucional pronta para copiar.

---

## Regras de uso do logo (do brand kit)
- Nunca distorça proporções nem aplique efeitos (sombra, contorno, gradiente).
- Fundo escuro → símbolo azul-claro (`#A3C5F1`) + wordmark branco (use `klit-logo-white.png`).
- Fundo claro → símbolo azul + wordmark navy (use `klit-logo-color.png`).
- Área de proteção mínima ao redor do logo = a altura do "k" minúsculo.
- Tamanho mínimo legível do símbolo ≈ 24px.
