# Phase 2 Context — Conteúdo & Páginas

**Phase goal:** Home premium completa com **Segurança em destaque** + páginas essenciais (Soluções, Suporte, Contato), usando o conteúdo real do site atual reescrito (sem typos), sobre o shell da Fase 1.

## Base técnica (Fase 1 — já existe, reutilizar)
- Astro estático; `src/layouts/BaseLayout.astro`, `Header`, `Footer`, `WhatsAppButton`, `ThemeSwitcher`.
- Primitivos: `Container`, `Section` (tone default|dark), `Button` (primary|secondary|ghost), `Card`. Tokens em `src/styles/tokens.css` (paleta + temas), `global.css` (Inter).
- **Regra:** usar SEMPRE os primitivos e tokens — zero hex hardcoded; manter responsivo e temável. Conteúdo desta fase deve funcionar nos 4 temas.

## Posicionamento (one-liner que guia toda a copy)
**KLIT — parceiro de infraestrutura de TI gerenciada e segura para empresas do Sul do Brasil: modelo de serviço (investimento inicial nulo) e proteção de ponta a ponta — do dado à rede à nuvem.** Fala com o decisor técnico (gerenciada/segura, SLA, parceiros) e com o econômico (OPEX vs CAPEX, custo previsível).

> ⚠️ Copy abaixo é reconstruída/melhorada a partir do site atual (as descrições originais de cada solução não puderam ser extraídas). Tratar descritores como **sugeridos — a validar com o usuário**; não inventar números/claims.

## HOME — seções (ordem)

### 1. Hero (CNT-01) — sem slider, mensagem fixa
- Headline (sugestão): **"Infraestrutura de TI gerenciada e segura para sua empresa."**
- Subheadline: **"Do dado à rede à nuvem — com investimento inicial nulo e suporte de quem entende do seu negócio."**
- CTAs: primário **"Falar no WhatsApp"** (WhatsAppButton/wa.me) + secundário **"Conheça as soluções"** (âncora/link `/solucoes`).
- Visual premium, usa tokens/tema.

### 2. Segurança em destaque (CNT-02) — o diferencial
- Título: **"Segurança de ponta a ponta"**. Subtítulo: proteção do **dado → uso → rede**.
- 3 cards (os produtos de segurança):
  - **Kofre** — Segurança e gestão de documentos.
  - **Sherlock** — Monitoramento de acesso à internet.
  - **Eskudo** — Segurança de rede.
- Prova: mencionar parceiros **Trend Micro** e **Cisco**.

### 3. Soluções em 3 pilares (CNT-03) — as 9
Agrupar as 9 soluções (nomes de marca **preservados literalmente**) com descritor funcional ao lado:
- **Pilar Segurança:** Kofre (segurança de documentos), Sherlock (monitoramento de acesso à internet), Eskudo (segurança de rede).
- **Pilar Infraestrutura & Cloud:** Lokar (outsourcing / infraestrutura como serviço), Nuvem (computação em nuvem), Virtualiza (virtualização de ambientes), Konecte (mobilidade e disponibilidade).
- **Pilar Gestão & Consultoria:** Gesin (gestão integrada e suporte técnico à infraestrutura), Konsulte (consultoria em TI).

### 4. Tese econômica (CNT-04)
- Destacar **"Investimento inicial nulo"** (infraestrutura como serviço / Lokar): OPEX vs CAPEX, custo previsível, parceiro único. Mensagem de mobilidade: "Trabalhe de qualquer lugar, a qualquer momento" (Konecte).

### 5. Parceiros (CNT-05)
- Faixa moderna com: **VMware, Trend Micro, Microsoft, Cisco, SolarWinds, Google, Azure, AWS**. (Logos dos parceiros não estão em assets-input/ — usar texto/placeholder elegante ou marcar para o usuário fornecer; NÃO baixar logos de terceiros automaticamente.)

### 6. Institucional (CNT-06) — reescrito, sem typos
- **Missão:** "Conquistar e fidelizar clientes, garantindo eficácia aos usuários, mobilidade e redução de custos."
- **Visão:** "Ser referência nacional nos segmentos em que atua."
- **Valores:** Cliente satisfeito · Ética · Inovação · Sustentabilidade · Lucratividade.

### 7. CTA final + contato rápido
- Reforço de CTA (WhatsApp + link Contato), telefone 51 3022-3066.

## PÁGINAS ESSENCIAIS

### /solucoes (CNT-07)
- Detalhe das 9 soluções, agrupadas nos 3 pilares (mesma taxonomia da home), cada uma com nome + descritor + 1 parágrafo curto (sugerido, a validar). Reusar `Card`/`Section`.

### /suporte (CNT-08) — substitui a página vazia do site atual
- Conteúdo real de suporte: canais de atendimento (telefone **51 3022-3066**, **WhatsApp**, e-mail placeholder a confirmar), proposta de SLA/atendimento (texto genérico sóbrio, sem inventar números), e um espaço reservado para **ferramentas de acesso remoto** (TeamViewer/AnyDesk) marcado como "em breve / a fornecer" (não embutir libs).

### /contato (CNT-09)
- **Formulário** (nome, e-mail, empresa, telefone, mensagem) — montar a UI e validação básica HTML agora; **o envio funcional é Fase 3 (ENT-02)**: deixar o `action`/serviço como placeholder documentado.
- Dados reais: telefone **51 3022-3066** (tel:), endereço **Av. Doutor Nilo Peçanha 3238, 2º andar, Chácara das Pedras, Porto Alegre/RS, CEP 91330-001**, botão WhatsApp. Mapa opcional (embed simples) — pode ficar para Fase 3.

### CNT-10 — preservar conteúdo factual
- Garantir que contatos, endereço, parceiros e os nomes das 9 soluções migraram corretamente do site atual.

## Pendências/placeholders desta fase
- Descritores das soluções e textos de apoio = **sugeridos, a validar** com o usuário.
- Logos de parceiros e lista de clientes/prova social = usuário fornece (placeholder elegante por ora).
- Imagens de hero/seções = se houver em `assets-input/images/`, usar; senão, composição visual com tokens/ilustração simples.
- Envio do formulário e número real de WhatsApp = Fase 3.

## Requirements desta fase
CNT-01..10. Success criteria (ROADMAP): home com hero fixo + Segurança em destaque; 9 soluções em 3 pilares (marcas preservadas); parceiros + institucional sem typos; páginas Soluções/Suporte/Contato navegáveis pelo header; telefone e endereço reais no Contato.
