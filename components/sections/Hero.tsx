export function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">株式会社salute | AI業務効率化サービス</p>
          <h1>
            <span>DX FROM</span>
            <span className="accent">AI PLANNING</span>
          </h1>
          <p className="hero-subtitle">
            AI × RPA × 業務連携で
            <br />
            現場のムダを、価値ある時間に変えます。
          </p>
          <p className="hero-description">
            複数ツールを組み合わせて、効果が出る部分だけを実装。
            <br />
            専門知識がなくても始められる、実践型の伴走支援です。
          </p>
          <div className="hero-cta-group">
            <a className="btn btn-primary" href="#contact">
              無料ヒアリングはこちら
            </a>
            <a className="btn btn-secondary" href="#overview">
              サービス内容を見る
            </a>
          </div>
          <ul className="hero-tags">
            <li>AI活用</li>
            <li>RPA自動化</li>
            <li>業務連携</li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-image-panel" aria-hidden />
          <article className="hero-news-card">
            <p className="news-heading">NEWS</p>
            <div>
              <p className="news-meta">2026.03.12 / リリース</p>
              <p>無料ヒアリング受付を開始しました</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
