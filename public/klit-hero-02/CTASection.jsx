/* KLIT website — contact CTA with form + footer */
function CTASection() {
  const { Button, Input, Eyebrow } = window.KLITDesignSystem_68a42b;
  const KIcon = window.KIcon;
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: 'var(--surface-page)', padding: '96px 32px' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <Eyebrow>Vamos conversar</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '14px 0 0' }}>
            Receba um diagnóstico gratuito da sua TI
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', margin: '14px 0 0' }}>
            Conte rapidamente sobre seu ambiente. Um especialista retorna em até um dia útil com um plano de ação.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
            {['Sem compromisso', 'Análise de riscos e backups', 'Proposta sob medida'].map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--text-body)' }}>
                <KIcon name="check" size={18} color="var(--blue-ink)" />{t}
              </span>
            ))}
          </div>
        </div>
        <div style={{
          background: 'var(--surface-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-md)',
        }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 8px' }}>
              <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: 'var(--ok-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <KIcon name="check" size={28} color="#15803D" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text-strong)', margin: 0 }}>Recebemos seu contato</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginTop: 8 }}>Um especialista da KLIT retornará em breve.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input label="Nome" placeholder="Seu nome" required />
              <Input label="E-mail corporativo" type="email" placeholder="voce@empresa.com" required />
              <Input label="Empresa" placeholder="Nome da empresa" />
              <Button variant="primary" size="lg" type="submit" iconRight={<KIcon name="arrow-right" size={18} />} style={{ marginTop: 4 }}>
                Solicitar diagnóstico
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const KIcon = window.KIcon;
  const cols = [
    { h: 'Serviços', items: ['Suporte gerenciado', 'Backup & proteção', 'Monitoramento', 'Segurança'] },
    { h: 'Empresa', items: ['Sobre a KLIT', 'Casos', 'Carreiras', 'Contato'] },
    { h: 'Recursos', items: ['Blog', 'Status', 'Documentação', 'Suporte'] },
  ];
  return (
    <footer style={{ background: 'var(--navy-black)', color: 'var(--text-inverse-muted)', padding: '64px 32px 36px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom: '1px solid var(--border-inverse)' }}>
          <div>
            <img src="assets/klit-logo-white.png" alt="KLIT" style={{ height: 28 }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, marginTop: 18, maxWidth: 260 }}>
              Serviços gerenciados de TI: suporte, backup e monitoramento contínuo com qualidade comprovável.
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, fontSize: 14 }}>
              <KIcon name="phone" size={16} color="var(--blue-pale)" />+55 (11) 4000-0000
            </span>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--white)', marginBottom: 14 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(i => (
                  <a key={i} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-inverse-muted)', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--blue-pale)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-inverse-muted)'}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 13 }}>
          <span>© 2026 KLIT. Todos os direitos reservados.</span>
          <span style={{ display: 'flex', gap: 20 }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidade</a><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Termos</a></span>
        </div>
      </div>
    </footer>
  );
}
window.CTASection = CTASection;
window.SiteFooter = SiteFooter;
