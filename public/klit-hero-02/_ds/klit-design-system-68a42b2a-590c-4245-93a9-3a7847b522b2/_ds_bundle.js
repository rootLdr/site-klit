/* @ds-bundle: {"format":3,"namespace":"KLITDesignSystem_68a42b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"de1a522549ae","components/core/Button.jsx":"e4f2a3f19b16","components/core/Card.jsx":"33ff4015db89","components/core/Eyebrow.jsx":"2b8ff040b6b8","components/core/Input.jsx":"fd87e467edc5","components/core/StatusPill.jsx":"56b6a5ca130b","ui_kits/website/CTASection.jsx":"a1d67867b51e","ui_kits/website/CTASection.standalone.jsx":"0e99f0032cbf","ui_kits/website/Header.jsx":"d1c42b46b55e","ui_kits/website/Header.standalone.jsx":"0172d5074518","ui_kits/website/Hero.jsx":"bb3db0ac0ba8","ui_kits/website/Proof.jsx":"46d2ac2b32de","ui_kits/website/Services.jsx":"447141458eb9","ui_kits/website/icons.jsx":"445179ec078c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KLITDesignSystem_68a42b = window.KLITDesignSystem_68a42b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLIT Badge — small count / label token. Solid accent or soft neutral.
 */
function Badge({
  children,
  variant = 'accent',
  style = {},
  ...rest
}) {
  const variants = {
    accent: {
      background: 'var(--navy-dark)',
      color: 'var(--white)'
    },
    soft: {
      background: 'var(--info-bg)',
      color: 'var(--accent-strong)'
    },
    neutral: {
      background: 'var(--g100)',
      color: 'var(--text-muted)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20,
      height: 20,
      padding: '0 7px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLIT Button — primary call-to-action and secondary actions.
 * Variants: primary (blue accent), secondary (navy outline), ghost (subtle), inverse (on navy).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 13,
      gap: 6,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '11px 20px',
      fontSize: 15,
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '15px 28px',
      fontSize: 17,
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    transform: !disabled && active ? 'translateY(1px)' : !disabled && hover ? 'translateY(-1px)' : 'translateY(0)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--blue-ink)' : 'var(--navy-dark)',
      color: 'var(--white)',
      boxShadow: hover && !disabled ? 'var(--shadow-md)' : 'var(--shadow-sm)'
    },
    secondary: {
      background: hover && !disabled ? 'var(--info-bg)' : 'var(--white)',
      color: 'var(--navy-dark)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: hover && !disabled ? 'var(--info-bg)' : 'transparent',
      color: 'var(--accent-strong)'
    },
    inverse: {
      background: hover && !disabled ? 'var(--blue-2)' : 'var(--blue-pale)',
      color: 'var(--navy-black)',
      boxShadow: hover && !disabled ? 'var(--shadow-md)' : 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLIT Card — white surface, hairline border, subtle shadow, soft corners.
 * Optionally interactive (gentle lift on hover).
 */
function Card({
  children,
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLIT Eyebrow — uppercase, wide-tracked accent label that sits above headings.
 */
function Eyebrow({
  children,
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--blue-pale)' : 'var(--accent-strong)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLIT Input — labelled text field with focus ring and optional error state.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `klit-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--err)' : focus ? 'var(--blue-2)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      background: 'var(--white)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${borderColor}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--err)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  success: {
    color: '#15803D',
    bg: 'var(--ok-bg)',
    dot: 'var(--ok)',
    label: 'Operacional',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })
  },
  info: {
    color: 'var(--blue-ink)',
    bg: 'var(--info-bg)',
    dot: 'var(--info)',
    label: 'Info',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 16v-4M12 8h.01"
    }))
  },
  warning: {
    color: '#B45309',
    bg: 'var(--warn-bg)',
    dot: 'var(--warn)',
    label: 'Atenção',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4M12 17h.01"
    }))
  },
  error: {
    color: '#B91C1C',
    bg: 'var(--err-bg)',
    dot: 'var(--err)',
    label: 'Falha',
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m15 9-6 6M9 9l6 6"
    }))
  },
  neutral: {
    color: 'var(--text-muted)',
    bg: 'var(--g100)',
    dot: 'var(--neutral)',
    label: 'Inativo',
    icon: /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    })
  }
};

/**
 * KLIT StatusPill — status indicator that ALWAYS pairs color with an icon
 * (never color alone). Use for service / system / SLA states.
 */
function StatusPill({
  status = 'success',
  children,
  style = {},
  ...rest
}) {
  const s = STATUS[status] || STATUS.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '5px 12px 5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: s.bg,
      color: s.color,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s.icon), children || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTASection.jsx
try { (() => {
/* KLIT website — contact CTA with form + footer */
function CTASection() {
  const {
    Button,
    Input,
    Eyebrow
  } = window.KLITDesignSystem_68a42b;
  const KIcon = window.KIcon;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Vamos conversar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '14px 0 0'
    }
  }, "Receba um diagn\xF3stico gratuito da sua TI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '14px 0 0'
    }
  }, "Conte rapidamente sobre seu ambiente. Um especialista retorna em at\xE9 um dia \xFAtil com um plano de a\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 28
    }
  }, ['Sem compromisso', 'Análise de riscos e backups', 'Proposta sob medida'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "check",
    size: 18,
    color: "var(--blue-ink)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      margin: '0 auto 16px',
      borderRadius: '50%',
      background: 'var(--ok-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "check",
    size: 28,
    color: "#15803D"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Recebemos seu contato"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, "Um especialista da KLIT retornar\xE1 em breve.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail corporativo",
    type: "email",
    placeholder: "voce@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Nome da empresa"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(KIcon, {
      name: "arrow-right",
      size: 18
    }),
    style: {
      marginTop: 4
    }
  }, "Solicitar diagn\xF3stico")))));
}
function SiteFooter() {
  const KIcon = window.KIcon;
  const cols = [{
    h: 'Serviços',
    items: ['Suporte gerenciado', 'Backup & proteção', 'Monitoramento', 'Segurança']
  }, {
    h: 'Empresa',
    items: ['Sobre a KLIT', 'Casos', 'Carreiras', 'Contato']
  }, {
    h: 'Recursos',
    items: ['Blog', 'Status', 'Documentação', 'Suporte']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-black)',
      color: 'var(--text-inverse-muted)',
      padding: '64px 32px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 40,
      borderBottom: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/klit-logo-white.png",
    alt: "KLIT",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 18,
      maxWidth: 260
    }
  }, "Servi\xE7os gerenciados de TI: suporte, backup e monitoramento cont\xEDnuo com qualidade comprov\xE1vel."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "phone",
    size: 16,
    color: "var(--blue-pale)"
  }), "+55 (11) 4000-0000")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--white)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-inverse-muted)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--blue-pale)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-inverse-muted)'
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 24,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 KLIT. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Termos")))));
}
window.CTASection = CTASection;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTASection.standalone.jsx
try { (() => {
/* KLIT website — contact CTA with form + footer */
function CTASection() {
  const {
    Button,
    Input,
    Eyebrow
  } = window.KLITDesignSystem_68a42b;
  const KIcon = window.KIcon;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Vamos conversar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '14px 0 0'
    }
  }, "Receba um diagn\xF3stico gratuito da sua TI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '14px 0 0'
    }
  }, "Conte rapidamente sobre seu ambiente. Um especialista retorna em at\xE9 um dia \xFAtil com um plano de a\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 28
    }
  }, ['Sem compromisso', 'Análise de riscos e backups', 'Proposta sob medida'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "check",
    size: 18,
    color: "var(--blue-ink)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      margin: '0 auto 16px',
      borderRadius: '50%',
      background: 'var(--ok-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "check",
    size: 28,
    color: "#15803D"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Recebemos seu contato"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, "Um especialista da KLIT retornar\xE1 em breve.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail corporativo",
    type: "email",
    placeholder: "voce@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Nome da empresa"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(KIcon, {
      name: "arrow-right",
      size: 18
    }),
    style: {
      marginTop: 4
    }
  }, "Solicitar diagn\xF3stico")))));
}
function SiteFooter() {
  const KIcon = window.KIcon;
  const cols = [{
    h: 'Serviços',
    items: ['Suporte gerenciado', 'Backup & proteção', 'Monitoramento', 'Segurança']
  }, {
    h: 'Empresa',
    items: ['Sobre a KLIT', 'Casos', 'Carreiras', 'Contato']
  }, {
    h: 'Recursos',
    items: ['Blog', 'Status', 'Documentação', 'Suporte']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-black)',
      color: 'var(--text-inverse-muted)',
      padding: '64px 32px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 40,
      borderBottom: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoWhite,
    alt: "KLIT",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 18,
      maxWidth: 260
    }
  }, "Servi\xE7os gerenciados de TI: suporte, backup e monitoramento cont\xEDnuo com qualidade comprov\xE1vel."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "phone",
    size: 16,
    color: "var(--blue-pale)"
  }), "+55 (11) 4000-0000")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--white)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-inverse-muted)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--blue-pale)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-inverse-muted)'
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 24,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 KLIT. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Termos")))));
}
window.CTASection = CTASection;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTASection.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* KLIT website — sticky header with nav + CTA */
function SiteHeader() {
  const {
    Button
  } = window.KLITDesignSystem_68a42b;
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
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(160%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/klit-logo-color.png",
    alt: "KLIT",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--accent-strong)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Falar com especialista"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.standalone.jsx
try { (() => {
/* KLIT website — sticky header with nav + CTA */
function SiteHeader() {
  const {
    Button
  } = window.KLITDesignSystem_68a42b;
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
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(160%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoColor,
    alt: "KLIT",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--accent-strong)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Falar com especialista"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* KLIT website — navy hero with monitoring panel mock */
function Hero() {
  const {
    Button,
    Eyebrow,
    StatusPill
  } = window.KLITDesignSystem_68a42b;
  const KIcon = window.KIcon;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'radial-gradient(120% 120% at 80% 0%, #1E2B40 0%, #0C121D 60%)',
      color: 'var(--white)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.4,
      backgroundImage: 'linear-gradient(var(--border-inverse) 1px, transparent 1px), linear-gradient(90deg, var(--border-inverse) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
      maskImage: 'radial-gradient(80% 80% at 70% 10%, #000 30%, transparent 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 32px 104px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Servi\xE7os gerenciados de TI"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      margin: '18px 0 0'
    }
  }, "Sua infraestrutura", /*#__PURE__*/React.createElement("br", null), "monitorada, protegida", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-pale)'
    }
  }, "e comprovada.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)',
      margin: '22px 0 0',
      maxWidth: 480
    }
  }, "Suporte, backup e monitoramento cont\xEDnuo \u2014 com relat\xF3rios que mostram o resultado. Qualidade comprov\xE1vel, todos os dias."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(KIcon, {
      name: "arrow-right",
      size: 18
    })
  }, "Falar com especialista"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'transparent',
      color: 'var(--white)',
      borderColor: 'var(--border-inverse)'
    }
  }, "Ver planos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 40,
      color: 'var(--text-inverse-muted)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "check",
    size: 16,
    color: "var(--blue-pale)"
  }), "99,9% uptime"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "check",
    size: 16,
    color: "var(--blue-pale)"
  }), "Resposta < 15min"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "check",
    size: 16,
    color: "var(--blue-pale)"
  }), "Backup di\xE1rio"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border-inverse)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      backdropFilter: 'blur(4px)',
      boxShadow: '0 24px 60px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "Painel de monitoramento"), /*#__PURE__*/React.createElement(StatusPill, {
    status: "success"
  }, "Operacional")), [{
    n: 'Servidor de produção',
    i: 'server',
    s: 'success',
    v: 'Online · 99,98%'
  }, {
    n: 'Backup noturno',
    i: 'hard-drive',
    s: 'success',
    v: 'Concluído 03:12'
  }, {
    n: 'Latência de rede',
    i: 'activity',
    s: 'warning',
    v: '142 ms'
  }].map(row => /*#__PURE__*/React.createElement("div", {
    key: row.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      flex: 'none',
      background: 'rgba(163,197,241,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: row.i,
    size: 19,
    color: "var(--blue-pale)",
    stroke: 1.8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, row.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-inverse-muted)',
      marginTop: 2
    }
  }, row.v)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: row.s === 'warning' ? 'var(--warn)' : 'var(--ok)',
      boxShadow: `0 0 0 4px ${row.s === 'warning' ? 'rgba(245,158,11,.18)' : 'rgba(34,197,94,.18)'}`
    }
  }))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
/* KLIT website — proof / stats band (navy) */
function Proof() {
  const {
    Eyebrow
  } = window.KLITDesignSystem_68a42b;
  const stats = [{
    v: '99,9%',
    l: 'Uptime médio garantido em contrato'
  }, {
    v: '< 15min',
    l: 'Tempo médio de primeira resposta'
  }, {
    v: '12k+',
    l: 'Backups verificados por mês'
  }, {
    v: '24/7',
    l: 'Monitoramento e plantão técnico'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-dark)',
      color: 'var(--white)',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Qualidade comprov\xE1vel"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.02em',
      margin: '14px 0 0'
    }
  }, "Resultados que aparecem nos relat\xF3rios")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0
    }
  }, stats.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: s.v,
    style: {
      padding: '8px 28px',
      textAlign: 'center',
      borderLeft: idx === 0 ? 'none' : '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      letterSpacing: '-0.02em',
      color: 'var(--blue-pale)'
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-inverse-muted)',
      marginTop: 10
    }
  }, s.l))))));
}
window.Proof = Proof;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* KLIT website — services grid (light section) */
function Services() {
  const {
    Card,
    Eyebrow
  } = window.KLITDesignSystem_68a42b;
  const KIcon = window.KIcon;
  const items = [{
    i: 'headset',
    t: 'Suporte gerenciado',
    d: 'Mesa de ajuda dedicada, com SLA definido e acompanhamento de cada chamado.'
  }, {
    i: 'hard-drive',
    t: 'Backup & proteção',
    d: 'Cópias automáticas, criptografadas e com restauração testada periodicamente.'
  }, {
    i: 'activity',
    t: 'Monitoramento 24/7',
    d: 'Servidores, redes e serviços observados em tempo real, com alertas proativos.'
  }, {
    i: 'shield-check',
    t: 'Segurança',
    d: 'Patches, antivírus gerenciado e políticas de acesso para reduzir riscos.'
  }, {
    i: 'server',
    t: 'Infraestrutura',
    d: 'Planejamento, provisionamento e manutenção de servidores e nuvem.'
  }, {
    i: 'bar-chart',
    t: 'Relatórios',
    d: 'Indicadores claros de disponibilidade e desempenho, mês a mês.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O que fazemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '14px 0 0'
    }
  }, "TI gerenciada de ponta a ponta"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '14px 0 0'
    }
  }, "Cuidamos da sua opera\xE7\xE3o para que sua equipe foque no neg\xF3cio \u2014 n\xE3o em incidentes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    interactive: true,
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--info-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: it.i,
    size: 24,
    color: "var(--blue-ink)",
    stroke: 1.9
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '8px 0 0'
    }
  }, it.d))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* KLIT UI kit — Lucide-style line icons (24px grid, 2px stroke, rounded).
   Exported to window for the other babel scripts in this kit. */
const KIcon = ({
  name,
  size = 24,
  color = 'currentColor',
  stroke = 2,
  style
}) => {
  const paths = {
    shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
    })),
    'shield-check': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    activity: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 12h-4l-3 9L9 3l-3 9H2"
    })),
    'hard-drive': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "12",
      x2: "2",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "16",
      x2: "6.01",
      y2: "16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "16",
      x2: "10.01",
      y2: "16"
    })),
    headset: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 11a9 9 0 0 1 18 0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 16v2a4 4 0 0 1-4 4h-5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "11",
      width: "5",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18",
      y: "11",
      width: "5",
      height: "7",
      rx: "1.5"
    })),
    server: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "3",
      width: "20",
      height: "7",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "14",
      width: "20",
      height: "7",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6.5",
      x2: "6.01",
      y2: "6.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "17.5",
      x2: "6.01",
      y2: "17.5"
    })),
    'bar-chart': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "16"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })),
    lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    })),
    zap: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
    })),
    phone: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, paths[name] || null);
};
window.KIcon = KIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StatusPill = __ds_scope.StatusPill;

})();
