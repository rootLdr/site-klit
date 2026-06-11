// @ts-check
import { defineConfig } from 'astro/config';

// Saída ESTÁTICA (padrão do Astro): `astro build` gera dist/ com HTML pré-renderado.
// Sem adaptador SSR — o site é 100% estático (FND-01).
// O `site` é placeholder; ajustar para o domínio final (https://klit.com.br) na publicação.
export default defineConfig({
  site: 'https://klit.com.br',
  output: 'static',
  // Servidor local acessível na LAN (dev e preview).
  // host: true => bind em 0.0.0.0; porta 3333 está no range 3000-3999 já liberado no firewall.
  // Acesso de outros dispositivos da rede: http://192.168.68.99:3333
  server: { host: true, port: 3333 },
});
