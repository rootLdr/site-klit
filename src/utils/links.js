/**
 * Helpers de links internos com suporte a `base` (subpasta de publicação).
 *
 * O site é publicado numa subpasta (ex.: GitHub Pages de projeto =>
 * leandrolider.com.br/site-klit). O Astro expõe esse prefixo em
 * `import.meta.env.BASE_URL`. Estes helpers garantem que TODO link interno e
 * TODO asset local respeitem esse prefixo — e que a detecção de "link ativo"
 * funcione mesmo com a base no caminho.
 *
 * Reutilizável: para publicar como site2/site3, basta mudar `base` no
 * astro.config.mjs — nada aqui muda (BASE_URL acompanha). Se `base` for "/",
 * os helpers viram no-op (geram "/contato", etc.).
 */

// BASE_URL normalizada para garantir uma única barra inicial e final.
// Ex.: "/site-klit" ou "/site-klit/" -> "/site-klit/"; "/" -> "/".
const BASE = ("/" + (import.meta.env.BASE_URL || "/") + "/").replace(/\/{2,}/g, "/");

/**
 * Prefixa um caminho root-relative ("/contato", "/brand/x.png") com a base.
 * Deixa intactos: âncoras (#...), externos (http..., tel:, mailto:, //) e
 * caminhos que não começam com "/".
 */
export function href(path = "/") {
  if (typeof path !== "string") return path;
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return (BASE + path.slice(1)).replace(/\/{2,}/g, "/");
}

/**
 * Detecta link ativo comparando um href root-relative do NAV ("/solucoes")
 * com o pathname atual (que JÁ inclui a base, ex.: "/site-klit/solucoes/").
 */
export function isActive(navHref, pathname) {
  const norm = (s) => (s || "/").replace(/\/+$/, "") || "/";
  const target = norm(href(navHref));
  const current = norm(pathname);
  if (navHref === "/") return current === target; // home: exato
  return current === target || current.startsWith(target + "/");
}
