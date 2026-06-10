# Site KLIT — Novo Site Institucional

## What This Is

Reformulação completa do site institucional da **KLIT** (klit.com.br), uma provedora de infraestrutura de TI gerenciada (MSP) de Porto Alegre/RS. O objetivo deste ciclo é entregar **um único conceito** de site moderno, premium e profissional — claro e apresentável — com a oferta de **Segurança em destaque**, reaproveitando o conteúdo do site atual. Posicionamento mantido.

## Core Value

Comunicar, com clareza e ar premium, que a KLIT **protege e gerencia** a infraestrutura de TI de empresas (Segurança em destaque) e **converter o visitante em contato** via WhatsApp e formulário.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Conceito único de site moderno/premium, navegável e **responsivo**
- [ ] Home forte com o pilar de **Segurança** (Kofre / Sherlock / Eskudo) em destaque
- [ ] **Landing + páginas essenciais** (Soluções, Suporte, Contato)
- [ ] CTA: **WhatsApp** (botão flutuante) **+ formulário** de contato
- [ ] Preservar conteúdo factual do site atual (9 soluções, missão/visão/valores, parceiros, telefone/endereço)
- [ ] Estrutura `assets-input/` para arquivos vindos do Windows (logos, imagens, refs, docs)
- [ ] Acesso à pasta `site-klit` pelo Windows via **Samba** documentado e funcional
- [ ] Código simples/manutenível; troca fácil de logos, imagens e textos
- [ ] Rodar localmente + **README** de manutenção

### Out of Scope

- Backend / CMS / banco de dados — 1º conceito é estático; sem necessidade
- Autenticação / área administrativa — sem requisito de login
- Múltiplas versões do site — usuário pediu **UM** conceito neste ciclo (variações ficam para depois)
- Blog completo / automações / integrações avançadas — evitar overengineering
- Novo logo / rebrand — posicionamento mantido; logos serão fornecidos pelo usuário

## Context

- **Empresa:** KLIT — infraestrutura de TI gerenciada (MSP), Porto Alegre/RS. Público B2B: médias/grandes empresas do Sul do Brasil, com decisor duplo (técnico CIO/TI + econômico diretor/CFO).
- **Site atual:** single-page WordPress por âncoras (`#home/#solution/#client/#sobre/#parceiros/#contact`) + subpágina `/suporte/` praticamente vazia. Design datado, hero em slider, 9 soluções em grade plana sem hierarquia, sem WhatsApp/email visível. Análise completa em `docs/current-site-analysis.md`.
- **9 soluções:** Lokar (outsourcing/IaaS), Konecte (mobilidade), Nuvem (cloud), Gesin (gestão/suporte), **Kofre (segurança de documentos)**, Virtualiza (virtualização), Konsulte (consultoria), **Sherlock (monitoramento de acesso à internet)**, **Eskudo (segurança de rede)**.
- **Parceiros:** VMware, Trend Micro, Microsoft, Cisco, SolarWinds, Google, Azure, AWS.
- **Contato real:** Fone 51 3022-3066 · Av. Doutor Nilo Peçanha 3238, 2º andar, Chácara das Pedras, Porto Alegre, CEP 91330-001.
- **Ambiente de dev:** VM KVM, Ubuntu Server 24.04, `/home/claude/site-klit`, LAN `192.168.68.99`. Não é WSL. Acesso Windows via Samba (detalhes em `docs/windows-access.md`).

## Constraints

- **Tech stack**: Site **estático** moderno (HTML/CSS/JS ou framework leve tipo Astro/Vite) — Simples e manutenível, sem backend.
- **Ambiente**: VM KVM Ubuntu 24.04 em `/home/claude/site-klit` — Persistente (servidor real da KLIT).
- **Acesso Windows**: Samba `\\192.168.68.99\site-klit` (padrão dos shares `KLIT_Bot`/`dossie-dev`) — share ainda **pendente de criação**.
- **Assets**: Visual final depende de arquivos que o usuário colocará em `assets-input/` pelo Windows — Dependência externa.
- **Conteúdo**: Reaproveitar do site atual; **preservar literalmente** os nomes de marca das 9 soluções.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Um único conceito neste ciclo | Usuário pediu validar 1 direção antes de variações | — Pending |
| Site estático (sem backend/CMS) | Escopo enxuto, manutenível, sem necessidade de DB/auth | — Pending |
| Segurança como pilar de destaque na home | Kofre+Sherlock+Eskudo = maior diferencial/ticket recorrente | — Pending |
| Landing + páginas essenciais | Equilíbrio entre rapidez de validação e navegabilidade | — Pending |
| CTA WhatsApp + formulário | Captar leads sem backend (WhatsApp link + serviço de form) | — Pending |
| Tom visual premium/moderno | Elevar de datado para apresentável e de alto padrão | — Pending |
| Acesso Windows via Samba | Reusa padrão já existente na VM (KLIT_Bot/dossie-dev) | — Pending |
| Posicionamento mantido | Decisão explícita do usuário | ✓ Good |

## Evolution

**After each phase transition:**
1. Requirements invalidados? → mover para Out of Scope com motivo
2. Requirements validados? → mover para Validated com referência de fase
3. Novos requirements? → adicionar a Active
4. Decisões a registrar? → adicionar a Key Decisions
5. "What This Is" ainda preciso? → atualizar se divergir

---
*Last updated: 2026-06-10 — após QUESTIONING + análise do site atual*
