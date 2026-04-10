const navItems = [
  { href: "#problem", label: "PROBLEM" },
  { href: "#overview", label: "SERVICE" },
  { href: "#capabilities", label: "FEATURES" },
  { href: "#steps", label: "STEP" },
  { href: "#pricing", label: "PRICE" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  return (
    <header id="top" className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="株式会社salute トップへ">
          <span className="logo-mark">i</span>
          <span className="logo-text">salute</span>
        </a>
        <nav aria-label="グローバルナビゲーション">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-pill">
          <span aria-hidden>✉</span>
          <span>CONTACT</span>
        </a>
      </div>
    </header>
  );
}
