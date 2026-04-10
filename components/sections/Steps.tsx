const steps = [
  {
    title: "現状ヒアリング・課題抽出",
    period: "目安: 1〜2週間",
    points: [
      "現場を見てムダや停滞箇所を洗い出し",
      "第三者視点でボトルネックを発見",
      "自動化すべきポイントを明確化",
    ],
  },
  {
    title: "ワークフロー作成",
    period: "目安: 1〜2週間",
    points: [
      "AI / RPA / 業務連携で最適フローを設計",
      "役割とムダを可視化",
      "削減効果を事前に共有",
    ],
  },
  {
    title: "導入範囲の打ち合わせ",
    period: "目安: 1週間",
    points: [
      "効果が見込める部分から限定導入",
      "現場と管理側が無理なく運用できる設計",
      "納得感を重視して実装範囲を決定",
    ],
  },
  {
    title: "試験運用・改善",
    period: "目安: 2〜4週間",
    points: [
      "実業務でテスト導入",
      "問題点を都度修正",
      "現場が納得するまで伴走サポート",
    ],
  },
];

export function Steps() {
  return (
    <section id="steps" className="section">
      <div className="container">
        <div className="section-intro">
          <span className="line" />
          <p className="eyebrow">STEP</p>
          <h2>導入ステップ</h2>
        </div>
        <ol className="timeline">
          {steps.map((step, index) => (
            <li key={step.title} className="timeline-item">
              <p className="timeline-step">STEP {index + 1}</p>
              <h3>{step.title}</h3>
              <p className="timeline-period">{step.period}</p>
              <ul>
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
