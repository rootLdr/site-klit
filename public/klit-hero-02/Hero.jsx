/* KLIT website — navy hero with monitoring panel mock */
function Hero() {
  const { Button, Eyebrow, StatusPill } = window.KLITDesignSystem_68a42b;
  const KIcon = window.KIcon;
  return (
    <section style={{
      position: 'relative',
      background: 'radial-gradient(120% 120% at 80% 0%, #1E2B40 0%, #0C121D 60%)',
      color: 'var(--white)', overflow: 'hidden',
    }}>
      {/* faint grid texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(var(--border-inverse) 1px, transparent 1px), linear-gradient(90deg, var(--border-inverse) 1px, transparent 1px)',
        backgroundSize: '48px 48px', maskImage: 'radial-gradient(80% 80% at 70% 10%, #000 30%, transparent 80%)',
      }} />
      <div style={{
        position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '88px 32px 104px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr',
        gap: 56, alignItems: 'center',
      }}>
        <div>
          <Eyebrow onDark>Serviços gerenciados de TI</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52,
            lineHeight: 1.08, letterSpacing: '-0.02em', margin: '18px 0 0',
          }}>
            Sua infraestrutura<br/>monitorada, protegida<br/>
            <span style={{ color: 'var(--blue-pale)' }}>e comprovada.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.6,
            color: 'var(--text-inverse-muted)', margin: '22px 0 0', maxWidth: 480,
          }}>
            Suporte, backup e monitoramento contínuo — com relatórios que mostram o resultado. Qualidade comprovável, todos os dias.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <Button variant="inverse" size="lg" iconRight={<KIcon name="arrow-right" size={18} />}>Falar com especialista</Button>
            <Button variant="secondary" size="lg" style={{ background: 'transparent', color: 'var(--white)', borderColor: 'var(--border-inverse)' }}>Ver planos</Button>
          </div>
          <div style={{ display: 'flex', gap: 24, marginTop: 40, color: 'var(--text-inverse-muted)', fontSize: 14 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><KIcon name="check" size={16} color="var(--blue-pale)" />99,9% uptime</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><KIcon name="check" size={16} color="var(--blue-pale)" />Resposta &lt; 15min</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><KIcon name="check" size={16} color="var(--blue-pale)" />Backup diário</span>
          </div>
        </div>

        {/* Monitoring panel mock */}
        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-inverse)',
          borderRadius: 'var(--radius-lg)', padding: 22, backdropFilter: 'blur(4px)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>Painel de monitoramento</span>
            <StatusPill status="success">Operacional</StatusPill>
          </div>
          {[
            { n: 'Servidor de produção', i: 'server', s: 'success', v: 'Online · 99,98%' },
            { n: 'Backup noturno', i: 'hard-drive', s: 'success', v: 'Concluído 03:12' },
            { n: 'Latência de rede', i: 'activity', s: 'warning', v: '142 ms' },
          ].map(row => (
            <div key={row.n} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
              borderTop: '1px solid var(--border-inverse)',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 'var(--radius-sm)', flex: 'none',
                background: 'rgba(163,197,241,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <KIcon name={row.i} size={19} color="var(--blue-pale)" stroke={1.8} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{row.n}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-inverse-muted)', marginTop: 2 }}>{row.v}</div>
              </div>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: row.s === 'warning' ? 'var(--warn)' : 'var(--ok)',
                boxShadow: `0 0 0 4px ${row.s === 'warning' ? 'rgba(245,158,11,.18)' : 'rgba(34,197,94,.18)'}`,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
