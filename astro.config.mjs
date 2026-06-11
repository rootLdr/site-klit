// @ts-check
import { defineConfig } from 'astro/config';

// Saída ESTÁTICA (padrão do Astro): `astro build` gera dist/ com HTML pré-renderado.
// Sem adaptador SSR — o site é 100% estático (FND-01).
//
// Publicação: GitHub Pages de PROJETO serve o repositório numa subpasta do
// domínio (leandrolider.com.br/site-klit). Por isso:
//   - `site` = domínio de produção (usado em canonical/OG absolutos);
//   - `base` = nome da subpasta. O dist/ continua "plano"; o GitHub serve no
//     prefixo /site-klit/. Todos os links internos passam por src/utils/links.js,
//     que respeita esse `base` automaticamente.
// Para publicar outro projeto (site2/site3): mude `base` e `site` aqui.
export default defineConfig({
  site: 'https://leandrolider.com.br',
  base: '/site-klit',
  output: 'static',
  // Servidor local acessível na LAN (dev e preview).
  // host: true => bind em 0.0.0.0; porta 3333 está no range 3000-3999 já liberado no firewall.
  // Acesso de outros dispositivos da rede: http://192.168.68.99:3333
  server: { host: true, port: 3333 },
});
