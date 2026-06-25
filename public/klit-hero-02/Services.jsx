/* KLIT website — services grid (light section) */
function Services() {
  const { Card, Eyebrow } = window.KLITDesignSystem_68a42b;
  const KIcon = window.KIcon;
  const items = [
    { i: 'headset', t: 'Suporte gerenciado', d: 'Mesa de ajuda dedicada, com SLA definido e acompanhamento de cada chamado.' },
    { i: 'hard-drive', t: 'Backup & proteção', d: 'Cópias automáticas, criptografadas e com restauração testada periodicamente.' },
    { i: 'activity', t: 'Monitoramento 24/7', d: 'Servidores, redes e serviços observados em tempo real, com alertas proativos.' },
    { i: 'shield-check', t: 'Segurança', d: 'Patches, antivírus gerenciado e políticas de acesso para reduzir riscos.' },
    { i: 'server', t: 'Infraestrutura', d: 'Planejamento, provisionamento e manutenção de servidores e nuvem.' },
    { i: 'bar-chart', t: 'Relatórios', d: 'Indicadores claros de disponibilidade e desempenho, mês a mês.' },
  ];
  return (
    <section style={{ background: 'var(--surface-page)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <Eyebrow>O que fazemos</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38,
            letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '14px 0 0',
          }}>
            TI gerenciada de ponta a ponta
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', margin: '14px 0 0' }}>
            Cuidamos da sua operação para que sua equipe foque no negócio — não em incidentes.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {items.map(it => (
            <Card key={it.t} interactive padding={26}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-md)',
                background: 'var(--info-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
              }}>
                <KIcon name={it.i} size={24} color="var(--blue-ink)" stroke={1.9} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--text-strong)', margin: 0 }}>{it.t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '8px 0 0' }}>{it.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
