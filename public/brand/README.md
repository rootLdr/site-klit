# public/brand/ — Logos e favicon do site KLIT

> **Atenção:** os arquivos desta pasta (exceto este README e o `.gitkeep`) são
> **GERADOS** pelo script `assets:sync`. **Não edite aqui** — edite a **origem**
> em `assets-input/` e rode o comando de sincronização.

## Como trocar/atualizar o logo (FND-07)

1. **Coloque os arquivos novos na origem**, dentro da pasta da variante de cor:

   ```
   assets-input/logos/Novo Logo 2026/<variante de cor>/
   ```

   Variantes de cor disponíveis (nome exato da pasta → slug usado no site):

   | Pasta de origem                          | Slug no site |
   | ---------------------------------------- | ------------ |
   | `CLASSICA 02 • Ocean Blue - 005A91`      | `ocean`      |
   | `Navy Dark - Hex 1B3A5C`                 | `navy`       |
   | `CLASSICA 01 • Sky Blue - Hex 81D2F1`    | `sky`        |
   | `Soft Blue - Hex A3C5F1`                 | `soft`       |
   | `Branco`                                 | `branco`     |
   | `Preto - Hex 000000`                     | `preto`      |

2. **Use exatamente estes nomes de arquivo** dentro de cada pasta de variante:

   - `Favicon PNG 48 × 48 px.png`
   - `Logo pequeno _ marca reduzida 512 × 512 px.png`
   - `Logo principal horizontal - 1024px.png`
   - `Logo principal para alta resolução - 2048px.png`
   - `Logo vertical_quadrado 1024 × 1024 px.png`

   E, na raiz de `Novo Logo 2026/`, o vetor `01 VETOR ORIGINAL.svg`.

3. **Publique no site** rodando, na raiz do projeto:

   ```bash
   npm run assets:sync
   ```

   O comando copia os logos para `public/brand/` com nomes limpos e regenera os
   arquivos canônicos. É **idempotente** — pode rodar quantas vezes quiser.

## O que cada arquivo gerado representa

| Arquivo em `public/brand/`     | Origem                                         | Uso no site                                    |
| ------------------------------ | ---------------------------------------------- | ---------------------------------------------- |
| `favicon.png`                  | favicon-48 da variante **ocean**               | Favicon do site (`<head>`)                     |
| `logo-horizontal.png`          | horizontal-1024 da variante **ocean**          | Logo do header em **fundos claros**            |
| `logo-horizontal-branco.png`   | horizontal-1024 da variante **branco**         | Logo do header em **fundos escuros**           |
| `logo.svg`                     | `01 VETOR ORIGINAL.svg`                         | Vetor do logo (escala sem perda)               |
| `ocean/` `navy/` `sky/` `soft/` `branco/` `preto/` | cada variante de cor          | Todos os formatos por cor (ver abaixo)         |

Dentro de cada subpasta de cor (`ocean/`, `navy/`, …) estão os 5 formatos com
nomes limpos: `favicon-48.png`, `marca-512.png`, `horizontal-1024.png`,
`horizontal-2048.png`, `vertical-1024.png`.

## Quero trocar a cor padrão do logo/favicon do site

Os arquivos canônicos (`favicon.png`, `logo-horizontal.png`) usam a variante
**ocean** por padrão. Para mudar a variante padrão, edite o mapa no script
`scripts/sync-assets.mjs` (seção "Canônicos do site") e rode `npm run assets:sync`
novamente.
