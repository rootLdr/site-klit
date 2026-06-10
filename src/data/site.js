/**
 * KLIT — Módulo de dados do SITE (fonte única de verdade de CONTATO).
 * ------------------------------------------------------------------
 * Centraliza telefone, WhatsApp, e-mail, endereço e a configuração do
 * formulário (Formspree). É consumido por:
 *   - src/components/Footer.astro          (telefone + endereço)
 *   - src/components/WhatsAppButton.astro  (FAB → whatsappUrl)
 *   - src/components/ContatoForm.astro     (formspreeEndpoint)
 *   - src/pages/index.astro                (CTAs "Falar no WhatsApp")
 *   - src/pages/contato.astro              (CTA WhatsApp)
 *   - src/pages/solucoes.astro             (CTA WhatsApp)
 *   - src/pages/suporte.astro              (CTA WhatsApp)
 *
 * CONTRATO DE EXPORT (named ESM — NÃO usar export default), espelhando o
 * padrão de src/data/solucoes.js:
 *   import { whatsappUrl, telefone, telefoneTel, endereco,
 *            formspreeEndpoint, email } from "../data/site.js";
 *
 * Valores PINADOS no CONTEXT.md da Fase 3 (decisões fechadas).
 */

/* ──────────────────────────────────────────────────────────────────────────
 * TELEFONE / WHATSAPP
 *
 * ⚠️ ATENÇÃO — CONFIRMAR WHATSAPP:
 *   555130223066 é o telefone FIXO (51 3022-3066) da KLIT. Ele está sendo
 *   usado também como número de WhatsApp (link wa.me). É PRECISO CONFIRMAR
 *   se este número TEM WhatsApp ativo. Se a KLIT tiver um CELULAR/WhatsApp
 *   comercial dedicado, troque APENAS a constante `whatsapp` abaixo (1 lugar)
 *   — todo o site passa a apontar para o número novo automaticamente.
 * ────────────────────────────────────────────────────────────────────────── */

/** Telefone para exibição (humano). */
export const telefone = "51 3022-3066";

/** Telefone no formato href `tel:` (E.164: +55 + DDD 51 + número). */
export const telefoneTel = "+555130223066";

/** WhatsApp: só dígitos (55 = Brasil, 51 = DDD POA, + número). Ver aviso acima. */
export const whatsapp = "555130223066";

/** Mensagem pré-preenchida ao abrir a conversa no WhatsApp. */
export const whatsappMsg =
  "Olá! Vim pelo site da KLIT e gostaria de falar com um especialista.";

/** Link wa.me pronto (número + mensagem já codificada). Usado em FAB e CTAs. */
export const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
  whatsappMsg,
)}`;

/* ──────────────────────────────────────────────────────────────────────────
 * E-MAIL
 *
 * ⚠️ PLACEHOLDER — A CONFIRMAR com o usuário:
 *   contato@klit.com.br é um e-mail SUGERIDO. Confirme o e-mail oficial de
 *   atendimento antes de publicar e troque aqui (1 lugar).
 * ────────────────────────────────────────────────────────────────────────── */
export const email = "contato@klit.com.br";

/* ──────────────────────────────────────────────────────────────────────────
 * ENDEREÇO (Porto Alegre/RS)
 * ────────────────────────────────────────────────────────────────────────── */
export const endereco = {
  logradouro: "Av. Doutor Nilo Peçanha 3238, 2º andar",
  bairro: "Chácara das Pedras",
  cidade: "Porto Alegre/RS",
  cep: "CEP 91330-001",
};

/* ──────────────────────────────────────────────────────────────────────────
 * FORMULÁRIO — FORMSPREE
 *
 * ⚠️ PLACEHOLDER — O USUÁRIO DEVE CONFIGURAR:
 *   1. Crie uma conta e um formulário em https://formspree.io
 *   2. Copie o ID do formulário (ex.: "xrgkpqwz")
 *   3. Substitua "SEU_FORM_ID" abaixo por esse ID (1 lugar).
 *
 *   Enquanto `formspreeId` for "SEU_FORM_ID", o envio do formulário FALHA de
 *   forma controlada (o ContatoForm trata o erro e orienta o visitante a
 *   ligar / usar o WhatsApp). Isso é ESPERADO até a configuração.
 * ────────────────────────────────────────────────────────────────────────── */
export const formspreeId = "SEU_FORM_ID";

/** Endpoint completo do Formspree (POST). Derivado de `formspreeId`. */
export const formspreeEndpoint = `https://formspree.io/f/${formspreeId}`;
