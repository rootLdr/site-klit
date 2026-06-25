/* KLIT website — proof / stats band (navy) */
function Proof() {
  const { Eyebrow } = window.KLITDesignSystem_68a42b;
  const stats = [
    { v: '99,9%', l: 'Uptime médio garantido em contrato' },
    { v: '< 15min', l: 'Tempo médio de primeira resposta' },
    { v: '12k+', l: 'Backups verificados por mês' },
    { v: '24/7', l: 'Monitoramento e plantão técnico' },
  ];
  return (
    <section style={{ background: 'var(--navy-dark)', color: 'var(--white)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow onDark>Qualidade comprovável</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34,
            letterSpacing: '-0.02em', margin: '14px 0 0',
          }}>
            Resultados que aparecem nos relatórios
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {stats.map((s, idx) => (
            <div key={s.v} style={{
              padding: '8px 28px', textAlign: 'center',
              borderLeft: idx === 0 ? 'none' : '1px solid var(--border-inverse)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, letterSpacing: '-0.02em', color: 'var(--blue-pale)' }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-inverse-muted)', marginTop: 10 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;
