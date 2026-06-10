# Análise do Site Atual — KLIT (klit.com.br)

## 1. Visão geral

A KLIT é uma provedora de infraestrutura de TI como serviço (modelo MSP) sediada em Porto Alegre/RS. O site atual (klit.com.br) é institucional, construído sobre WordPress, com estrutura single-page por âncoras e uma subpágina `/suporte/`. O design é datado, típico de template B2B de meados da década de 2010: hero em slider rotativo de imagem+texto, grade plana de 9 cards de produto, faixas monocromáticas de logos de parceiros e um bloco institucional (Conceito/Missão/Visão/Valores) com hierarquia fraca. O rodapé exibe um aviso de copyright datado. (Detalhes técnicos — ano de construção, tema, plugins e versões — são inferências a partir do código-fonte, não constam da base do projeto e devem ser confirmados.)

O posicionamento é o de parceiro de infraestrutura de TI gerenciada, com tese econômica central de "investimento inicial nulo" (OPEX vs CAPEX). O público real são médias e grandes empresas do Sul do Brasil (indústria, agronegócio/cooperativas, saúde e serviços), com um decisor duplo: o técnico (CIO/gerente de TI) e o econômico (diretor/proprietário/CFO).

O ativo comercial mais forte — Segurança (Kofre + Sherlock + Eskudo) — hoje está diluído como 3 de 9 cards iguais, sem prioridade visual. Não há WhatsApp, e-mail visível, prova social ou ferramentas de suporte. A página `/suporte/` está praticamente vazia. Estas são exatamente as lacunas que o novo conceito (Segurança em destaque, visual premium/moderno, CTA por WhatsApp + formulário) precisa endereçar.

## 2. Páginas e seções encontradas

Arquitetura de informação atual (single-page com âncoras + uma subpágina real):

- **HOME** (`#home`) — hero/slider de 3 slides.
- **Soluções** (`#solution`) — grade plana com as 9 soluções.
- **Clientes** (`#client`) — item de menu; não foi possível extrair a lista de clientes/logos via WebFetch (recomenda-se confirmar com o usuário).
- **KLIT / Sobre** (`#sobre`) — bloco institucional "Conceito" com Missão, Visão e Valores.
- **Parceiros** (`#parceiros`) — faixa de logos de tecnologias parceiras.
- **Suporte** (`/suporte/`) — subpágina real, porém **praticamente vazia**: serve apenas como casca de navegação (logo, menu reduzido e rodapé). **Não há** ferramentas de acesso remoto (TeamViewer/AnyDesk/etc.), formulário, downloads, telefone, e-mail, horário de atendimento ou texto explicativo de suporte.
- **Contato** (`#contact`) — telefone, endereço e formulário com botão "Enviar".

Notas técnicas (inferidas do código-fonte; **não constam da base do projeto** e devem ser confirmadas): site WordPress, com stack legado de jQuery + sliders e CSS de fallback/polyfills para navegadores antigos. A inconsistência de padrão (Suporte é página real, o restante é âncora) prejudica navegação, SEO e mensuração.

## 3. Mensagens principais

Mensagens-âncora do posicionamento, extraídas do hero/slider (3 slides):

- **Slide 1:** "Gestão integrada" / "Suporte Tecnico à infraestrutura".
- **Slide 2:** "Mobilidade e disponibilidade" / "Conexão a qualquer hora e em qualquer lugar".
- **Slide 3:** "Outsoursing" / "Infraestrutura como serviço".

Slogans e frases de apoio reaproveitáveis:

- "Gestão total e integrada" (slogan de marca).
- "Investimento inicial nulo" (associado a Lokar/Outsourcing) — a tese econômica mais forte, hoje subaproveitada.
- "Trabalho de qualquer lugar a qualquer momento" (associado a Konecte/Mobilidade).

Síntese de posicionamento (one-liner para alinhar copy e visual): KLIT = parceiro de infraestrutura de TI gerenciada e segura para empresas do Sul do Brasil, com modelo de serviço (investimento inicial nulo) e proteção de ponta a ponta — do dado à rede à nuvem. Esse one-liner amarra os 3 pilares e fala simultaneamente com o decisor técnico (gerenciada/segura) e com o econômico (modelo de serviço, custo previsível).

Observação: as mensagens do hero hoje só falam de infraestrutura; **nenhuma fixa o pilar de Segurança**, que será o destaque do novo site.

## 4. Serviços / produtos / soluções apresentados

As 9 soluções nomeadas (nomes de marca a preservar literalmente):

1. **Lokar** — Outsourcing: infraestrutura como serviço (associado ao slogan "investimento inicial nulo"). *No hero/slider o termo aparece grafado "Outsoursing".*
2. **Konecte** — Mobilidade e disponibilidade (associado ao slogan "Trabalho de qualquer lugar a qualquer momento").
3. **Nuvem** — Computação em nuvem (Cloud computing).
4. **Gesin** — Gestão integrada: suporte técnico à infraestrutura. *No hero/slider o termo aparece grafado "Tecnico".*
5. **Kofre** — Segurança de documentos. **(Pilar Segurança)**
6. **Virtualiza** — Virtualização de ambientes.
7. **Konsulte** — Consultoria.
8. **Sherlock** — Monitoramento de acesso à Internet. **(Pilar Segurança)**
9. **Eskudo** — Segurança de rede. **(Pilar Segurança)**

*Observação: a base do projeto fornece apenas o nome e a categoria de cada solução. As descrições/taglines exibidas no site atual não foram extraídas e não devem ser tratadas como cópia real — qualquer descritor proposto para o novo site é sugestão a validar.*

**Pilar de Segurança** (destaque do novo site) = **Kofre + Sherlock + Eskudo** (dado → uso → rede).

Hoje as 9 soluções são listadas em pé de igualdade, em grade plana, sem hierarquia — o que dilui a mensagem e esconde o pilar de Segurança, justamente o de maior urgência e ticket recorrente. Vários nomes são opacos (não comunicam função) e exigem um descritor funcional ao lado da marca para reduzir fricção cognitiva no comprador B2B.

Reagrupamento recomendado em 3 pilares:

- **Pilar 1 — Segurança (herói):** Kofre, Sherlock, Eskudo. Proteção fim a fim: dado → rede → uso. Amarrar a parceiros Trend Micro e Cisco como prova.
- **Pilar 2 — Infraestrutura & Cloud:** Lokar, Nuvem, Virtualiza, Konecte. Core operacional/recorrente.
- **Pilar 3 — Gestão & Consultoria:** Gesin (ponto único de contato) e Konsulte (consultoria estratégica). Camada de relacionamento e governança.

## 5. Público-alvo aparente

**Perfil de empresa:** médias e grandes empresas do Sul do Brasil — indústria, agronegócio/cooperativas, saúde e serviços financeiros — com TI própria, porém enxuta, que precisa terceirizar infraestrutura e segurança. Não é SMB de varejo nem startup.

**Região:** foco primário Rio Grande do Sul e Sul do Brasil (sede em Porto Alegre, clientes do interior gaúcho). A visão de "referência nacional" é aspiracional, não o público atual.

**Decisor duplo:**

- **Decisor técnico** (CIO / Gerente de TI / Coordenador de Infra): avalia SLA, redundância, segurança e parceiros (VMware, Cisco, Microsoft, AWS).
- **Decisor econômico** (Diretor / Proprietário / CFO): compra "investimento inicial nulo", OPEX vs CAPEX e redução de custos.

A home precisa falar com os dois: prova técnica (parceiros, SLA, segurança) + tese financeira (infraestrutura como serviço, custo previsível).

## 6. Problemas de clareza

- **Pilar de Segurança invisível:** Kofre, Sherlock e Eskudo são indistinguíveis dos demais 7 produtos numa grade plana; o diferencial declarado do novo site não é percebido.
- **9 soluções sem hierarquia nem agrupamento:** parede de 9 cards iguais, sem grupos temáticos — o visitante não sabe por onde começar.
- **Nomes de produto opacos:** marcas inventadas que não comunicam função (Lokar, Gesin, Konecte etc.) exigem que o comprador "adivinhe" o que cada uma faz, sem descritor funcional ao lado.
- **Hero/slider dilui o foco:** a mensagem se reparte em 3+ frames; a maioria dos usuários só vê o primeiro slide, e nenhuma frase fixa o posicionamento.
- **Copy centrada em features, não em benefícios:** "Gestão integrada", "Cloud computing", "Virtualização de ambientes" descrevem a tecnologia, não o ganho (menos custo, menos risco, mais uptime, conformidade).
- **Institucional voltado para dentro:** Missão/Visão/Valores falam da empresa ("conquistar e fidelizar clientes", "ser referência nacional", "lucratividade"), não do resultado para o cliente.
- **Item de menu "KLIT" ambíguo:** usar o nome da marca como rótulo de menu (apontando para `#sobre`) confunde com o logo/home.

## 7. Problemas de UX e navegação

- **Sem WhatsApp em lugar nenhum** (0 ocorrências no código-fonte), apesar de o público B2B brasileiro esperar contato rápido por esse canal — barreira crítica de conversão.
- **E-mail de contato não exibido:** a seção Contato traz só telefone e endereço; o formulário tem apenas o botão "Enviar".
- **CTA único e genérico:** o único call-to-action é "Enviar"; não há CTAs ao longo da página (hero, fim de cada solução, institucional).
- **Telefone provavelmente não clicável** (`tel:`) nem amigável a mobile, sem DDI.
- **Formulário sem expectativa de resposta** nem microcopy de privacidade nem estado de sucesso descrito.
- **Página `/suporte/` vazia:** para um MSP, suporte é argumento de venda (SLA, ponto único de contato, canais, horário) — hoje é placeholder.
- **Single-page por âncora** prejudica SEO, compartilhamento de link direto, criação de landing pages segmentadas e mensuração de conversão por seção.
- **Inconsistência de padrão de URL:** Suporte é página real enquanto o resto é âncora — voltar à home a partir de `/suporte/` pode confundir.
- **Ausência de prova social:** sem logos de clientes, depoimentos, cases, métricas (anos de mercado, nº de clientes, SLA, uptime) ou certificações — em B2B de TI/Segurança, confiança é o principal gargalo de conversão.

## 8. Problemas de copy

- **Typos que minam credibilidade junto a público técnico:**
  - "Outsoursing" → **Outsourcing** (hero/slider e Lokar).
  - "Tecnico" → **Técnico** (hero/slider e Gesin).
  - "referencia" → **referência** (Visão — ironicamente, na frase que promete ser referência).
- **Copy vaga e cheia de jargão sem benefício:** features no lugar de ganhos; "investimento inicial nulo", o slogan mais forte, está subaproveitado.
- **CTA fraco:** "Enviar" não diz o que acontece depois nem reduz fricção.
- **Sherlock ambíguo:** "monitoramento" pode soar invasivo (vigilância de funcionário); precisa ser contextualizado como produtividade + prevenção de vazamento.
- **Institucional genérico:** Missão/Visão/Valores não convertem e ocupam espaço nobre.
- **Rodapé datado:** copyright com ano antigo e crédito de design legado (texto exato a confirmar no código-fonte).

## 9. Problemas visuais

- **Stack/visual datado (template WordPress legado):** jQuery + sliders legados e CSS de fallback/polyfills para navegadores antigos — raiz da percepção antiga; contradiz o posicionamento premium desejado e enfraquece a venda de Segurança. (Detalhes de tema/plugins/versões são inferências do código-fonte, não confirmadas pela base.)
- **Hero em slider rotativo:** padrão datado, ruim para LCP/performance, fragmenta a mensagem.
- **Sem hierarquia visual:** 9 cards de peso idêntico, Segurança sem destaque.
- **Tipografia plana:** sem escala de tipos clara — títulos e corpo em pesos/tamanhos semelhantes.
- **Sistema de cores indefinido:** não há um sistema de cores de marca consistente; as cores observadas parecem herdadas do template/CMS, não de uma identidade própria.
- **Logos de parceiros/clientes em faixa inconsistente:** proporções, cores e tamanhos mistos, sem contêineres ou baseline comum.
- **Separação de seções e ritmo de espaçamento fracos:** a página lê-se como um scroll indiferenciado, com paddings inconsistentes.
- **Responsividade legada:** baseada em grid e polyfills de uma geração antiga de navegadores — feita para classes de dispositivo do início/meados da década de 2010.
- **Imagery genérica de stock:** slider e cards usam fotos de banco típicas do template, sem linguagem visual coesa nem conjunto de ícones próprio.

## 10. Oportunidades de melhoria

- **Adicionar WhatsApp:** botão flutuante persistente em todas as páginas + CTA no header e na seção de contato, com mensagem pré-preenchida.
- **Expor e-mail clicável** (`mailto:`) e tornar o telefone clicável (`tel:`, com +55 51), posicionando-o como secundário ao WhatsApp.
- **Hero único e estático**, liderado por Segurança/benefício, com CTA primário (WhatsApp) + secundário (formulário/"Solicitar diagnóstico").
- **Elevar o pilar Segurança:** seção dedicada logo após o hero, com Kofre/Sherlock/Eskudo, argumento de risco/conformidade (LGPD, vazamento, ataque) e CTA próprio ("Solicitar diagnóstico de segurança").
- **Agrupar as 9 soluções em 3 pilares** (Segurança em destaque → Infraestrutura & Cloud → Gestão & Consultoria), mantendo todos visíveis na mesma rolagem — herói sem esconder o restante.
- **Sempre exibir "NomeMarca — descritor funcional"** nos cards e na primeira menção, com tratamento visual uniforme.
- **Reescrever copy de feature para benefício** (custo, risco, uptime, conformidade); promover "investimento inicial nulo".
- **Adicionar prova social:** faixa de logos de clientes, 2-3 depoimentos/cases com resultado, métricas de credibilidade (anos de mercado, nº de clientes, SLA/uptime) e selos das parcerias.
- **Construir página `/suporte/` real:** abrir chamado, acesso remoto, telefone/WhatsApp de suporte e horário de atendimento — transformar em prova de serviço.
- **Migrar para páginas essenciais reais** (ex.: `/seguranca/`, `/outsourcing/`, `/contato/`) além da landing, mantendo âncoras só para navegação interna da home.
- **Redesign premium/moderno:** escala de tipos com par display+corpo, paleta de marca disciplinada (1 cor primária + 1 acento para Segurança/CTA + rampa neutra com contraste AA), grid de logos uniforme (monocromático com cor no hover), ritmo de espaçamento generoso (96-128px desktop), e conjunto de ícones próprio para as 9 soluções.

## 11. Conteúdos a PRESERVAR

- **Nomes dos 9 produtos (marcas):** Lokar, Konecte, Nuvem, Gesin, Kofre, Virtualiza, Konsulte, Sherlock, Eskudo.
- **Categoria de cada solução (conforme a base):** Lokar (Outsourcing / infraestrutura como serviço), Konecte (Mobilidade e disponibilidade), Nuvem (Cloud computing), Gesin (Gestão integrada / suporte técnico à infraestrutura), Kofre (Segurança de documentos), Virtualiza (Virtualização de ambientes), Konsulte (Consultoria), Sherlock (Monitoramento de acesso à Internet), Eskudo (Segurança de rede). *A base traz apenas a categoria; eventuais descrições/taglines do site atual não foram extraídas e não estão confirmadas.*
- **Pilar de Segurança:** Kofre + Sherlock + Eskudo.
- **Missão:** "Conquistar e fidelizar clientes, garantindo eficácia aos seus usuários, mobilidade, redução de custos."
- **Visão:** "Ser referência nacional nos segmentos em que atua."
- **Valores:** Cliente satisfeito, Ética, Inovação, Sustentabilidade, Lucratividade.
- **Telefone:** 51 3022-3066.
- **Endereço completo:** Av. Doutor Nilo Peçanha, 3238 - 2º Andar, Chácara das Pedras, Porto Alegre/RS, CEP 91330-001.
- **Parceiros tecnológicos (8 marcas):** VMware, Trend Micro, Microsoft, Cisco, SolarWinds, Google, Azure, AWS.
- **Slogan de marca:** "Gestão total e integrada".
- **Tese econômica central:** "investimento inicial nulo" / infraestrutura como serviço (OPEX).
- **Mensagens-âncora do hero (posicionamento):** Gestão integrada; Mobilidade e disponibilidade; Outsourcing/Infraestrutura como serviço.
- **Arquitetura de informação base:** Soluções, Clientes, Institucional (KLIT/Sobre), Parceiros, Suporte, Contato.
- **Posicionamento de provedor de infraestrutura de TI / MSP** — manter, não repivotar.

Observações: a lista de **Clientes** (`#client`) não foi extraível via WebFetch — confirmar com o usuário se há logos/depoimentos a preservar. Carteira mencionada como prova social (a confirmar): Tramontina, Cotrijal, Coprel, Joape, Diaglaser, Next Corretora. Logos oficiais atualizados de parceiros serão fornecidos pelo usuário.

## 12. Conteúdos a REESCREVER

- **Corrigir typos confirmados na base:** Outsoursing → Outsourcing; Tecnico → Técnico; referencia → referência. Fazer, além disso, uma revisão ortográfica completa do site (incluindo verificar a grafia de endereço e dos descritores de solução, ainda não auditados linha a linha).
- **Hero/slider → hero único e estático**, liderado por Segurança/benefício, em tom premium e moderno (mantendo o posicionamento). Ex.: Headline "Segurança e infraestrutura de TI, gerenciadas de ponta a ponta." / Subhead "Protegemos seus dados, sua rede e sua operação — com infraestrutura como serviço, investimento inicial nulo e suporte especializado." / CTAs "Falar no WhatsApp" + "Solicitar diagnóstico".
- **Grade plana das 9 soluções → 3 pilares** (Segurança em destaque / Infraestrutura & Cloud / Gestão & Consultoria), cada card com "NomeMarca — descritor funcional + benefício".
- **Descrições por solução**, exemplos de reescrita:
  - Lokar — "Outsourcing de TI: infraestrutura como serviço, com investimento inicial nulo."
  - Gesin — "Gestão integrada: suporte técnico contínuo à sua infraestrutura."
  - Sherlock — "Monitoramento e controle do acesso à Internet (produtividade e prevenção de vazamento), com relatórios de uso e segurança."
  - Kofre — "Segurança de documentos: mantenha suas informações sempre disponíveis e protegidas."
  - Eskudo — "Segurança de rede: proteção integrada e gerenciada contra ameaças, do perímetro ao endpoint."
- **Intro do pilar Segurança (novo):** título "Segurança em primeiro lugar" / corpo "Da rede aos documentos, protegemos cada camada da sua operação com monitoramento contínuo e gestão especializada."
- **Missão (reescrever para clareza):** "Conquistar e fidelizar clientes entregando tecnologia que gera eficiência, mobilidade e redução de custos."
- **Visão (corrigir "referencia"):** "Ser referência nacional nos segmentos de tecnologia e segurança da informação em que atuamos."
- **Valores:** manter os cinco, reescrevendo cada um como frase curta de tom premium (ex.: "Cliente satisfeito — o centro de tudo o que fazemos"; "Ética — transparência em cada decisão"; "Inovação — sempre um passo à frente"; "Sustentabilidade — crescer com responsabilidade"; "Lucratividade — resultados que sustentam a confiança"). Encurtar o institucional e convertê-lo em prova de confiança (anos, equipe, certificações).
- **CTA "Enviar" →** "Quero falar com a KLIT" / "Falar no WhatsApp" / "Solicitar diagnóstico de segurança" / "Enviar mensagem".
- **Seção Contato:** adicionar e-mail clicável + linha de WhatsApp; reescrever intro do formulário de genérica para orientada a conversão ("Fale com um especialista KLIT. Respondemos rápido pelo WhatsApp ou e-mail."); formulário enxuto (nome, e-mail/WhatsApp, mensagem) com expectativa de resposta ("Retornamos em até X horas úteis"), microcopy de privacidade e estado de sucesso.
- **Página `/suporte/` (hoje vazia):** CRIAR conteúdo real — "Suporte KLIT: abra um chamado, acesse o suporte remoto e fale com nossa equipe." com seções "Abrir chamado", "Acesso remoto", "Telefone/WhatsApp de suporte" e "Horário de atendimento".
- **Rodapé:** substituir o copyright datado (ano antigo + crédito de design legado) por ano dinâmico e crédito atualizado, ex.: "© 2026 KLIT — Tecnologia e Segurança da Informação. Todos os direitos reservados." Substituir o logo legado por versão fornecida pelo usuário.
- **Menu:** renomear o item "KLIT" para "Sobre" / "A KLIT".
- **Clientes e parceiros:** confirmar a lista de Clientes com o usuário e curar/atualizar os logos de parceiros.

## 13. Implicações para o novo conceito (Segurança em destaque, premium/moderno, WhatsApp+formulário)

**Segurança em destaque (sem esconder infraestrutura).** Técnica "herói + carteira completa": (1) um slide/abertura de Segurança no topo; (2) seção dedicada "Segurança KLIT" logo após o hero, com Kofre/Sherlock/Eskudo e o argumento de risco (vazamento, produtividade, ataque, LGPD); (3) na sequência, a seção "Soluções" completa mostra os 3 pilares lado a lado, garantindo que Infraestrutura & Cloud e Gestão & Consultoria fiquem visíveis na mesma rolagem; (4) amarrar Trend Micro e Cisco (parceiros já existentes) explicitamente ao pilar de Segurança como prova. Resultado: Segurança é a porta de entrada e o diferencial de pauta, mas o visitante percebe em 1 scroll que a KLIT entrega o stack completo — evitando o risco de parecer "só uma empresa de antivírus".

**Premium / moderno.** O visual datado é a causa-raiz da baixa percepção de valor e enfraquece justamente a venda de Segurança (onde modernidade sinaliza competência técnica). Reconstruir em stack moderno (sem jQuery slider, sem polyfills de IE), com hero único estático, escala de tipos real (par display + corpo neutro), paleta de marca disciplinada (1 primária + 1 acento reservado para Segurança/CTA + rampa neutra com contraste AA), grid uniforme de logos, ritmo de espaçamento generoso e ícones próprios. Corrigir todos os typos é pré-requisito de credibilidade premium. Traduzir Missão/Visão/Valores em bullets de benefício, e adicionar faixa de métricas/prova social para sustentar o tom.

**WhatsApp + formulário (CTA).** O site atual não tem WhatsApp nem e-mail visíveis; o formulário tem apenas "Enviar". O novo conceito exige: botão flutuante de WhatsApp em todas as páginas + CTA no header + CTA recorrente ao fim de cada bloco; formulário enxuto com expectativa de resposta e estado de sucesso; e-mail e telefone clicáveis como canais secundários. **Atenção:** e-mail institucional e número de WhatsApp **não existem na base atual** e precisam ser **fornecidos pelo usuário**. A página `/suporte/` deve deixar de ser placeholder e virar prova de serviço (SLA, ponto único de contato via Gesin, abertura de chamado, acesso remoto, horário) — um argumento de venda essencial para um MSP.

**Hierarquia da home recomendada (6 blocos):**

1. **Hero** — proposta de valor única + CTA WhatsApp (primário) e formulário (secundário); liderado por Segurança.
2. **Prova rápida** — faixa de logos de clientes + parceiros (autoridade imediata).
3. **Pilar Segurança** — "Segurança KLIT" (Kofre/Sherlock/Eskudo) + argumento de risco/conformidade.
4. **Soluções completas** — os 3 pilares lado a lado; cada card com nome de marca + descritor funcional.
5. **Por que KLIT / tese de valor** — OPEX vs CAPEX, ponto único de contato (Gesin), redução de custos, SLA/mobilidade (Missão/Valores traduzidos em benefício).
6. **CTA final + contato** — WhatsApp + formulário + telefone 51 3022-3066 + endereço; CTA recorrente fixo no header.
