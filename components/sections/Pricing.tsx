const inclusions = [
  "初期設計・設定費込み",
  "業務フロー設計",
  "試験運用サポート",
  "運用中の改善提案",
];

export function Pricing() {
  return (
    <section id="pricing" className="section section-muted">
      <div className="container">
        <div className="section-intro">
          <span className="line" />
          <p className="eyebrow">PRICING</p>
          <h2>料金プラン</h2>
        </div>
        <div className="pricing-card">
          <p className="pricing-badge">初回10社限定 / リリース特別価格</p>
          <p className="pricing-value">
            30,000円<span>（税込）/ 月</span>
          </p>
          <p className="pricing-note">契約期間: 1年（以降自動継続）</p>
          <ul className="pricing-checklist">
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#contact">
            まずは無料で相談する
          </a>
        </div>
      </div>
    </section>
  );
}
