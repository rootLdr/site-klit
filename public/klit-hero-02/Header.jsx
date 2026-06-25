/* KLIT website — sticky header with nav + CTA */
function SiteHeader() {
  const { Button } = window.KLITDesignSystem_68a42b;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-site-scroll]') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 8);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Serviços', 'Como funciona', 'Planos', 'Sobre'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(160%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <img src="assets/klit-logo-color.png" alt="KLIT" style={{ height: 30 }} />
        <nav style={{ display: 'flex', gap: 32 }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
              color: 'var(--text-body)', textDecoration: 'none',
              transition: 'color var(--dur-fast) var(--ease-out)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-strong)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-body)'}>
              {l}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="ghost" size="sm">Entrar</Button>
          <Button variant="primary" size="sm">Falar com especialista</Button>
        </div>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
