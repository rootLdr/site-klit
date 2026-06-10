# Próximos passos — Site KLIT (1º ciclo)

## Próximos passos objetivos

1. ~~**Criar estrutura `assets-input/`**~~ ✅ feito (logos/images/references/docs).
2. ~~**Habilitar share Samba** `\\192.168.68.99\site-klit`~~ ✅ feito e ativo (ver `docs/windows-access.md`).
3. **Usuário coloca os assets** (logos, imagens, referências, manual de marca) em `assets-input/` ← **pode fazer agora pelo Windows**.
4. **Definir requirements e roadmap** GSD (REQUIREMENTS.md → ROADMAP.md) — quando o usuário autorizar avançar.
5. **Construir o 1º conceito** (home premium com Segurança em destaque + páginas essenciais + WhatsApp/formulário).
6. **README de manutenção** ao final do ciclo (como rodar localmente, estrutura, onde colocar assets).

## Pendências

- [x] Share Samba criado (`\\192.168.68.99\site-klit`) — falta você **testar a partir do Windows**.
- [x] `assets-input/` criada.
- [ ] Logos e referências visuais entregues pelo usuário.
- [ ] Cores/tipografia da marca definidas (a partir dos logos / manual).
- [ ] Serviço de envio do formulário escolhido.
- [ ] Lista de clientes para prova social confirmada.
- [ ] Stack do site estático escolhida.

## Riscos

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Assets não chegam a tempo | Bloqueia visual final | Construir com placeholders; trocar via `assets-input/` depois |
| Windows não acessa a VM (porta 445 bloqueada) | Usuário não consegue enviar arquivos | Alternativa SFTP/WinSCP já documentada |
| Conteúdo do site atual incompleto (clientes, descrições reais) | Copy imprecisa | Confirmar com usuário antes de publicar; descritores marcados como "a validar" |
| Escopo inflar (multi-versão, backend) | Atraso e overengineering | Out of Scope explícito no PROJECT.md |
| Nomes de produto opacos confundem visitante | Perda de clareza | Adicionar descritor funcional ao lado de cada marca |

## Dependências

- **Acesso Windows → assets:** passos 5/6 dependem dos passos 1–3 (Samba + `assets-input/` + arquivos do usuário).
- **Visual final** depende dos **logos e referências** que o usuário colocará em `assets-input/`.
- **Cores/tipografia** dependem do material de marca (ou serão inferidas dos logos).

## Itens que dependem de arquivos em `assets-input/`

- `logos/` → header, footer, favicon, marca das soluções.
- `images/` → hero, seções, fundo, banners.
- `references/` → calibrar direção visual premium/moderna.
- `docs/` → extrair textos institucionais e dados que não estão no site atual.

---
*Última atualização: 2026-06-10*
