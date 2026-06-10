#!/usr/bin/env node
// scripts/sync-assets.mjs
// -----------------------------------------------------------------------------
// Pipeline de assets da KLIT (FND-02 / FND-07).
//
// Copia os logos de `assets-input/logos/Novo Logo 2026/` para `public/brand/`,
// renomeando para nomes limpos (kebab-case, sem espaços/bullets/acentos), e
// elege os arquivos canônicos consumidos pelo site (favicon e logos do header).
//
// - Sem dependências externas (apenas node:fs / node:path).
// - Idempotente: rodar duas vezes não duplica nem quebra (sobrescreve em cópia).
// - Loga cada cópia e um resumo final.
// - Os arquivos em public/brand/ são GERADOS: edite a ORIGEM em assets-input/.
//
// Uso: `npm run assets:sync`
// -----------------------------------------------------------------------------

import { existsSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SRC_DIR = join(ROOT, 'assets-input', 'logos', 'Novo Logo 2026');
const OUT_DIR = join(ROOT, 'public', 'brand');

// Variante de cor (pasta de origem, nome EXATO com bullet/acentos) -> slug limpo.
// Os slugs ocean/navy/sky/soft casam com os data-theme do plano 01-02.
const VARIANTS = {
  'Branco': 'branco',
  'CLASSICA 01 • Sky Blue - Hex 81D2F1': 'sky',
  'CLASSICA 02 • Ocean Blue - 005A91': 'ocean',
  'Navy Dark - Hex 1B3A5C': 'navy',
  'Preto - Hex 000000': 'preto',
  'Soft Blue - Hex A3C5F1': 'soft',
};

// Arquivo de origem (dentro de cada pasta de variante) -> nome de destino limpo.
const FILES = {
  'Favicon PNG 48 × 48 px.png': 'favicon-48.png',
  'Logo pequeno _ marca reduzida 512 × 512 px.png': 'marca-512.png',
  'Logo principal horizontal - 1024px.png': 'horizontal-1024.png',
  'Logo principal para alta resolução - 2048px.png': 'horizontal-2048.png',
  'Logo vertical_quadrado 1024 × 1024 px.png': 'vertical-1024.png',
};

// Vetor único na raiz de "Novo Logo 2026/".
const VECTOR_SRC = '01 VETOR ORIGINAL.svg';
const VECTOR_DEST = 'logo.svg';

// Variante padrão (primária) usada para os assets canônicos do header/favicon.
const PRIMARY_VARIANT = 'ocean';

let copied = 0;
const warnings = [];

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function copy(srcPath, destPath, label) {
  if (!existsSync(srcPath)) {
    warnings.push(`AUSENTE: ${label} (esperado em ${srcPath})`);
    return false;
  }
  ensureDir(dirname(destPath));
  copyFileSync(srcPath, destPath);
  console.log(`  copiado: ${label} -> ${destPath.replace(ROOT + '/', '')}`);
  copied++;
  return true;
}

function main() {
  console.log('KLIT assets:sync — copiando logos de assets-input/ para public/brand/\n');

  if (!existsSync(SRC_DIR)) {
    console.error(
      `ERRO: pasta de origem não encontrada.\n` +
        `Esperado em: ${SRC_DIR}\n` +
        `Coloque os logos em "assets-input/logos/Novo Logo 2026/<variante de cor>/" e rode de novo.`
    );
    process.exit(1);
  }

  ensureDir(OUT_DIR);

  // 1) Copiar cada variante (5 formatos) para public/brand/<slug>/
  for (const [folder, slug] of Object.entries(VARIANTS)) {
    const variantDir = join(SRC_DIR, folder);
    if (!existsSync(variantDir)) {
      warnings.push(`Variante ausente: "${folder}" (slug ${slug})`);
      continue;
    }
    console.log(`Variante: ${folder} -> ${slug}/`);
    for (const [srcName, destName] of Object.entries(FILES)) {
      copy(join(variantDir, srcName), join(OUT_DIR, slug, destName), `${slug}/${destName}`);
    }
  }

  // 2) Vetor original na raiz -> public/brand/logo.svg
  console.log('\nVetor:');
  copy(join(SRC_DIR, VECTOR_SRC), join(OUT_DIR, VECTOR_DEST), VECTOR_DEST);

  // 3) Assets canônicos do site (consumidos pelo BaseLayout/header em 01-03)
  console.log('\nCanônicos do site:');
  // Favicon canônico = favicon-48 da variante primária (ocean).
  copy(
    join(SRC_DIR, 'CLASSICA 02 • Ocean Blue - 005A91', 'Favicon PNG 48 × 48 px.png'),
    join(OUT_DIR, 'favicon.png'),
    'favicon.png'
  );
  // Logo horizontal default (fundos claros) = horizontal-1024 ocean.
  copy(
    join(SRC_DIR, 'CLASSICA 02 • Ocean Blue - 005A91', 'Logo principal horizontal - 1024px.png'),
    join(OUT_DIR, 'logo-horizontal.png'),
    'logo-horizontal.png'
  );
  // Logo horizontal para fundos escuros = horizontal-1024 branco.
  copy(
    join(SRC_DIR, 'Branco', 'Logo principal horizontal - 1024px.png'),
    join(OUT_DIR, 'logo-horizontal-branco.png'),
    'logo-horizontal-branco.png'
  );

  // 4) Avisar sobre PNGs soltos de nome aleatório na raiz (ignorados de propósito).
  const looseRootPngs = readdirSync(SRC_DIR).filter(
    (f) => f.toLowerCase().endsWith('.png')
  );
  if (looseRootPngs.length > 0) {
    console.log(`\n(Ignorados na raiz: ${looseRootPngs.length} PNG(s) soltos de nome aleatório.)`);
  }

  // Resumo
  console.log(`\nResumo: ${copied} arquivo(s) copiado(s) para public/brand/`);
  if (warnings.length > 0) {
    console.log(`\nAvisos (${warnings.length}):`);
    for (const w of warnings) console.log(`  - ${w}`);
  }
  console.log(`Variante primária (favicon/logo default): ${PRIMARY_VARIANT}`);
  console.log('OK');
}

main();
