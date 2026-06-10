# Acesso à pasta `site-klit` pelo Windows

> Como colocar arquivos (logos, imagens, PDFs, docs institucionais, referências de marca) na pasta do projeto a partir de uma máquina Windows.

## Ambiente (confirmado)

| Item | Valor |
|------|-------|
| Tipo de ambiente | VM **KVM/QEMU** (não é WSL, não é container) |
| Sistema | Ubuntu Server 24.04 (`systemd`, hostname `ubuntuserver`) |
| **Caminho absoluto Linux** | `/home/claude/site-klit` |
| IP da VM na LAN | **192.168.68.99** (rede `192.168.68.0/24`, gateway `192.168.68.251`) |
| Serviços ativos | SSH (porta 22) e **Samba/SMB** (portas 445/139) |
| Shares Samba já existentes | `KLIT_Bot`, `dossie-dev` (em `/opt/apps`) |

> ⚠️ Por **não** ser WSL, o caminho `\\wsl$\Distro\...` **não se aplica** aqui. Use o IP da LAN.

## Método recomendado: Samba (mesmo padrão do `KLIT_Bot`)

**Caminho de acesso pelo Windows (após habilitar o share):**

```
\\192.168.68.99\site-klit
```

Cole isso na barra de endereços do **Explorador de Arquivos** do Windows. Mapeie como unidade de rede se quiser (ex.: `Z:`).

### Status: share ATIVO ✅ (criado em 2026-06-10)

O share `[site-klit]` foi adicionado a `/etc/samba/smb.conf`, validado com `testparm` (sem erros) e o `smbd` foi recarregado. O usuário `claude` **já possui credencial Samba** (a mesma usada nos shares `KLIT_Bot` e `dossie-dev`).

Config aplicada:
```ini
[site-klit]
   comment = Projeto novo site KLIT
   path = /home/claude/site-klit
   browseable = yes
   read only = no
   valid users = claude
   force user = claude
   create mask = 0664
   directory mask = 0775
```

**Para usar agora no Windows:**
1. Abra o Explorador e acesse `\\192.168.68.99\site-klit`.
2. Autentique como usuário **`claude`** (mesma senha Samba que você já usa para `KLIT_Bot`).
3. Entre em `assets-input\` e solte os arquivos nas subpastas (`logos`, `images`, `references`, `docs`).

> Confirmado: sua máquina Windows (`192.168.68.50`) já conecta a esta VM via Samba — o novo share fica disponível pelo mesmo caminho.
>
> Se um dia precisar redefinir a senha Samba: `sudo smbpasswd -a claude`. Backup do `smb.conf` original: `/etc/samba/smb.conf.bak.*`.

## Onde colocar os arquivos: `assets-input/`

Depois de acessar o share, coloque os arquivos nas subpastas oficiais (a serem criadas na próxima fase):

```
site-klit/assets-input/
├── logos/        ← logos da KLIT e variações
├── images/       ← fotos, banners, imagens de seções
├── references/   ← referências visuais / sites que você gosta
└── docs/         ← PDFs, documentos institucionais, material de marca
```

Regra: **nada de assets espalhados** fora de `assets-input/` sem decisão documentada.

## Permissões

- A pasta pertence ao usuário `claude` (uid 1002). O share acima usa `valid users = claude`, então autentique no Windows como `claude`.
- `create mask 0664` / `directory mask 0775` garantem que arquivos enviados pelo Windows fiquem legíveis/graváveis pelo projeto.

## Alternativa: SFTP (SSH já está ativo)

Se o Samba não funcionar (firewall, política de rede), use **WinSCP** ou **FileZilla**:

- Protocolo: **SFTP** · Host: `192.168.68.99` · Porta: `22` · Usuário: `claude`
- Navegue até `/home/claude/site-klit/assets-input/` e arraste os arquivos.

## Se o Windows não conseguir acessar

1. **Ping:** confirme que o Windows alcança a VM — `ping 192.168.68.99`. Sem resposta → as máquinas não estão na mesma LAN/VLAN ou há firewall.
2. **SMB desabilitado no Windows:** ative "Suporte a Compartilhamento de Arquivos SMB" em *Recursos do Windows*. Windows moderno bloqueia login SMB de convidado — use usuário+senha (`claude`).
3. **Porta 445 bloqueada:** alguns provedores/firewalls bloqueiam SMB. Nesse caso, use a alternativa **SFTP** acima.
4. **Credenciais:** se pedir login repetidamente, confirme que `smbpasswd -a claude` foi executado e use exatamente o usuário `claude`.
5. **Último recurso:** transferir via `scp` no PowerShell — `scp arquivo.png claude@192.168.68.99:/home/claude/site-klit/assets-input/images/`.

---
*Última atualização: 2026-06-10 — durante QUESTIONING. Criação do share Samba e da pasta `assets-input/` permanece pendente para a fase de execução.*
