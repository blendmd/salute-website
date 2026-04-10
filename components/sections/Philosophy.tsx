const strengths = ["多角的な解決力", "迅速な意思決定", "解決まで伴走する支援体制"];

export function Philosophy() {
  return (
    <section className="section section-photo-bg">
      <div className="container philosophy-wrap">
        <div className="section-intro invert">
          <span className="line" />
          <p className="eyebrow">PHILOSOPHY</p>
          <h2>企業の考え方・理念</h2>
        </div>
        <blockquote className="philosophy-quote">
          AI・RPAは目的ではなく、課題解決のための手段です。最新技術を「絵に描いた餅」で終わらせず、地域企業の現場で成果が出る形に落とし込みます。
        </blockquote>
        <ul className="philosophy-strengths">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
