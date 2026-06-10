// @ts-check
import { defineConfig } from 'astro/config';

// Saída ESTÁTICA (padrão do Astro): `astro build` gera dist/ com HTML pré-renderado.
// Sem adaptador SSR — o site é 100% estático (FND-01).
// O `site` é placeholder; ajustar para o domínio final (https://klit.com.br) na publicação.
export default defineConfig({
  site: 'https://klit.com.br',
  output: 'static',
});
