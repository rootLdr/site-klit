# Requirements: Site KLIT

**Defined:** 2026-06-10
**Core Value:** Comunicar com clareza e ar premium que a KLIT protege e gerencia a infraestrutura de TI de empresas (Segurança em destaque) e converter o visitante em contato (WhatsApp / formulário).

## v1 Requirements

Requisitos do primeiro conceito. Cada um mapeia para uma fase do roadmap.

### Fundação & Base Visual (FND) — Categoria/Fase 1

- [x] **FND-01**: Site estático roda localmente com um comando (dev server)
- [x] **FND-02**: Pipeline de assets consome de `assets-input/` (logos, imagens) e disponibiliza ao site
- [ ] **FND-03**: Design system premium definido via tokens trocáveis (cores, tipografia, espaçamento, grid)
- [ ] **FND-04**: Componentes base reutilizáveis (botão, card, seção, container)
- [ ] **FND-05**: Header com navegação + footer + botão WhatsApp flutuante em todas as páginas
- [ ] **FND-06**: Estrutura 100% responsiva (mobile, tablet, desktop)
- [x] **FND-07**: Troca fácil de logo/textos/imagens (sem editar lógica complexa), documentada
- [ ] **FND-08**: **Seletor de tema** visível troca a cor primária entre as opções da paleta (Ocean Blue / Navy Dark / Sky Blue / Soft Blue) com 1 clique, aplicado em runtime (CSS custom properties / `data-theme`)

### Conteúdo & Páginas (CNT) — Categoria/Fase 2

- [ ] **CNT-01**: Home com hero premium e mensagem de posicionamento fixa (sem slider)
- [ ] **CNT-02**: Seção de **Segurança em destaque** (Kofre, Sherlock, Eskudo)
- [ ] **CNT-03**: As 9 soluções agrupadas em 3 pilares (Segurança / Infra & Cloud / Gestão & Consultoria)
- [ ] **CNT-04**: Seção de tese econômica ("investimento inicial nulo")
- [ ] **CNT-05**: Faixa de parceiros (VMware, Trend Micro, Microsoft, Cisco, SolarWinds, Google, Azure, AWS)
- [ ] **CNT-06**: Seção institucional (Missão/Visão/Valores reescritos, sem typos)
- [ ] **CNT-07**: Página/seção Soluções detalhando as 9 (nomes de marca preservados)
- [ ] **CNT-08**: Página Suporte com conteúdo real (substitui a `/suporte/` vazia)
- [ ] **CNT-09**: Página Contato com telefone, endereço (Porto Alegre) e dados reais
- [ ] **CNT-10**: Conteúdo factual do site atual preservado (contatos, parceiros, soluções)

### Conversão, Qualidade & Entrega (ENT) — Categoria/Fase 3

- [ ] **ENT-01**: Botão WhatsApp flutuante abre conversa (link `wa.me`)
- [ ] **ENT-02**: Formulário de contato funcional via serviço externo (ex.: Formspree) com validação
- [ ] **ENT-03**: CTAs de contato claros nos pontos-chave da home
- [ ] **ENT-04**: SEO básico (title, meta description, Open Graph, favicon)
- [ ] **ENT-05**: Acessibilidade básica (contraste, alt text, teclado, HTML semântico)
- [ ] **ENT-06**: Performance (imagens otimizadas, carregamento rápido)
- [ ] **ENT-07**: README de manutenção (rodar local, estrutura, onde colocar assets, trocar conteúdo)
- [ ] **ENT-08**: Build de produção gerável e servível localmente

## v2 Requirements

Reconhecidos, porém adiados — fora do roadmap atual.

### Futuro

- **V2-01**: Variações alternativas do conceito (B, C…)
- **V2-02**: Blog / central de conteúdo
- **V2-03**: CMS para edição sem código
- **V2-04**: Portal/área do cliente (suporte, chamados)
- **V2-05**: Multi-idioma (PT/EN)
- **V2-06**: Integração com CRM / automação de marketing
- **V2-07**: Página de suporte com ferramentas de acesso remoto (TeamViewer/AnyDesk)

## Out of Scope

Explicitamente excluído neste ciclo — documentado para evitar scope creep.

| Feature | Motivo |
|---------|--------|
| Backend / API própria | 1º conceito é estático; sem necessidade |
| Banco de dados | Sem dados dinâmicos a persistir |
| Autenticação / área admin | Sem requisito de login |
| CMS | Edição via código/arquivos basta neste ciclo |
| Blog completo / automações | Evitar overengineering |
| Novo logo / rebrand | Posicionamento mantido; logos fornecidos pelo usuário |
| Múltiplas versões simultâneas | Usuário pediu UM conceito agora |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FND-01..08 | Fase 1 | Pending |
| CNT-01..10 | Fase 2 | Pending |
| ENT-01..08 | Fase 3 | Pending |

**Coverage:**
- v1 requirements: 26 total (FND 8 · CNT 10 · ENT 8)
- Mapeados para fases: 26
- Não mapeados: 0 ✅

---
*Requirements definidos: 2026-06-10*
*Última atualização: 2026-06-10 após inicialização*
