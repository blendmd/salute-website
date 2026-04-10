const strengths = [
  {
    title: "専門知識がなくても導入可能",
    body: "現場の言葉でヒアリングし、技術面は私たちが設計・実装します。",
  },
  {
    title: "ツール依存ではなく最適設計",
    body: "特定ツールありきではなく、業務課題に合わせて最適な手段を選定します。",
  },
  {
    title: "効果重視のスモールスタート",
    body: "100%自動化を目指さず、今すぐ減らせるムダから確実に改善します。",
  },
];

export function ServiceOverview() {
  return (
    <section id="overview" className="section">
      <div className="container split-panel">
        <div className="overview-message">
          <span className="line" />
          <p className="eyebrow">SERVICE OVERVIEW</p>
          <h2>
            DX推進に必要なのは
            <br />
            <span className="accent">実践的なIT企画</span>
            です。
          </h2>
        </div>
        <div className="overview-body">
          <p>
            saluteのAI業務効率化サービスは、大規模なシステム導入ではなく、目の前の困りごとを解決する実践型支援です。
            AI・RPA・業務連携を組み合わせて、現場に無理なく定着する形で自動化を進めます。
          </p>
          <p className="tag-badge">実践型サービス</p>
          <div className="strength-grid">
            {strengths.map((item) => (
              <article key={item.title} className="strength-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
