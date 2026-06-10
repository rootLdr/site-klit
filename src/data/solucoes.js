/**
 * KLIT — Módulo de dados das soluções (fonte única de verdade).
 * ------------------------------------------------------------------
 * Descreve as 9 soluções da KLIT agrupadas nos 3 pilares. É consumido por:
 *   - src/pages/index.astro      (home: pilar Segurança em destaque + grade de pilares)
 *   - src/pages/solucoes.astro   (página /solucoes: detalhe das 9, por pilar)
 *
 * CONTRATO DE EXPORT (named ESM — NÃO usar export default):
 *   import { solucoes, pilares, solucoesPorPilar } from "../data/solucoes.js";
 *
 *   - solucoes: array das 9 soluções. Cada item:
 *       { nome, slug, descritor, pilar, paragrafo }
 *   - pilares: array dos 3 pilares na ordem
 *       Segurança → Infraestrutura & Cloud → Gestão & Consultoria.
 *       Cada item: { id, titulo, descricao }
 *   - solucoesPorPilar(pilarId): helper que retorna as soluções de um pilar
 *       (equivalente a solucoes.filter(s => s.pilar === pilarId)).
 *
 * ⚠️ MARCAS: os campos `nome` são marcas registradas da KLIT e estão preservados
 *    LITERALMENTE (Kofre, Sherlock, Eskudo, Lokar, Nuvem, Virtualiza, Konecte,
 *    Gesin, Konsulte). NÃO ALTERAR os nomes.
 *
 * ⚠️ DESCRITORES/PARÁGRAFOS: são SUGERIDOS e estão A VALIDAR com o usuário
 *    (reconstruídos a partir de docs/current-site-analysis.md §12 — as descrições
 *    originais do site atual não puderam ser extraídas). Não contêm números,
 *    percentuais ou nomes de clientes inventados.
 */

/** IDs canônicos dos pilares (usados como chave em cada solução). */
export const PILAR = Object.freeze({
  SEGURANCA: "seguranca",
  INFRA_CLOUD: "infra-cloud",
  GESTAO_CONSULTORIA: "gestao-consultoria",
});

/**
 * Os 3 pilares, na ordem de apresentação do site
 * (Segurança primeiro — é o diferencial em destaque).
 */
export const pilares = [
  {
    id: PILAR.SEGURANCA,
    titulo: "Segurança",
    descricao:
      "Proteção de ponta a ponta — do dado ao uso à rede — com monitoramento contínuo e gestão especializada.",
  },
  {
    id: PILAR.INFRA_CLOUD,
    titulo: "Infraestrutura & Cloud",
    descricao:
      "Infraestrutura como serviço, nuvem e mobilidade: a operação rodando com custo previsível e investimento inicial nulo.",
  },
  {
    id: PILAR.GESTAO_CONSULTORIA,
    titulo: "Gestão & Consultoria",
    descricao:
      "Ponto único de contato e consultoria estratégica para manter sua TI alinhada ao negócio.",
  },
];

/**
 * As 9 soluções. `pilar` referencia o `id` de um item de `pilares`.
 * Marcas literais; descritores/parágrafos sugeridos (a validar).
 */
export const solucoes = [
  // ---------- Pilar Segurança ----------
  {
    nome: "Kofre",
    slug: "kofre",
    descritor: "Segurança e gestão de documentos.",
    pilar: PILAR.SEGURANCA,
    paragrafo:
      "Segurança de documentos: mantenha suas informações sempre disponíveis e protegidas, com gestão centralizada do ciclo de vida dos arquivos.",
  },
  {
    nome: "Sherlock",
    slug: "sherlock",
    descritor: "Monitoramento de acesso à internet.",
    pilar: PILAR.SEGURANCA,
    paragrafo:
      "Monitoramento e controle do acesso à internet — voltado a produtividade e à prevenção de vazamento de dados — com relatórios de uso e segurança.",
  },
  {
    nome: "Eskudo",
    slug: "eskudo",
    descritor: "Segurança de rede.",
    pilar: PILAR.SEGURANCA,
    paragrafo:
      "Segurança de rede: proteção integrada e gerenciada contra ameaças, do perímetro ao endpoint.",
  },

  // ---------- Pilar Infraestrutura & Cloud ----------
  {
    nome: "Lokar",
    slug: "lokar",
    descritor: "Outsourcing / infraestrutura como serviço — investimento inicial nulo.",
    pilar: PILAR.INFRA_CLOUD,
    paragrafo:
      "Outsourcing de TI: infraestrutura como serviço, com investimento inicial nulo. Troque o gasto de capital (CAPEX) por um custo operacional previsível e um parceiro único responsável pelo ambiente.",
  },
  {
    nome: "Nuvem",
    slug: "nuvem",
    descritor: "Computação em nuvem.",
    pilar: PILAR.INFRA_CLOUD,
    paragrafo:
      "Computação em nuvem: leve seus sistemas e dados para um ambiente elástico e gerenciado, dimensionado conforme a necessidade da operação.",
  },
  {
    nome: "Virtualiza",
    slug: "virtualiza",
    descritor: "Virtualização de ambientes.",
    pilar: PILAR.INFRA_CLOUD,
    paragrafo:
      "Virtualização de ambientes: consolide servidores e estações em uma infraestrutura mais eficiente, com melhor aproveitamento de recursos e continuidade da operação.",
  },
  {
    nome: "Konecte",
    slug: "konecte",
    descritor: "Mobilidade e disponibilidade.",
    pilar: PILAR.INFRA_CLOUD,
    paragrafo:
      "Mobilidade e disponibilidade: trabalhe de qualquer lugar, a qualquer momento, com acesso seguro aos sistemas e arquivos da empresa.",
  },

  // ---------- Pilar Gestão & Consultoria ----------
  {
    nome: "Gesin",
    slug: "gesin",
    descritor: "Gestão integrada e suporte técnico à infraestrutura.",
    pilar: PILAR.GESTAO_CONSULTORIA,
    paragrafo:
      "Gestão integrada: suporte técnico contínuo à sua infraestrutura, como ponto único de contato para manter o ambiente estável e bem cuidado.",
  },
  {
    nome: "Konsulte",
    slug: "konsulte",
    descritor: "Consultoria em TI.",
    pilar: PILAR.GESTAO_CONSULTORIA,
    paragrafo:
      "Consultoria em TI: apoio estratégico para planejar, evoluir e governar sua tecnologia, alinhando as decisões de infraestrutura aos objetivos do negócio.",
  },
];

/**
 * Retorna as soluções de um pilar específico, preservando a ordem de `solucoes`.
 * @param {string} pilarId — id do pilar (ver `pilares` / `PILAR`).
 * @returns {Array} soluções cujo campo `pilar` é igual a `pilarId`.
 */
export function solucoesPorPilar(pilarId) {
  return solucoes.filter((s) => s.pilar === pilarId);
}
