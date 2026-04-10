const capabilityItems = [
  {
    title: "定型業務の自動化",
    list: [
      "システムへのデータ入力・転記",
      "数値の集計・レポート作成",
      "リマインド通知の自動送信",
    ],
  },
  {
    title: "AIによる判断・作成",
    list: [
      "問い合わせ内容の自動分類・要約",
      "メール返信文案の自動作成",
      "ドキュメントからの情報抽出",
    ],
  },
  {
    title: "ツール間の自動連携",
    list: [
      "分散したツール・データの接続",
      "業務全体のフロー自動化",
      "手作業の重複処理を削減",
    ],
  },
  {
    title: "見える化・標準化",
    list: [
      "業務フローを可視化",
      "属人作業の仕組み化",
      "誰でも運用できる体制整備",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section section-blue-bg">
      <div className="container">
        <div className="section-intro section-intro-center invert">
          <span className="line" />
          <p className="eyebrow">FEATURES</p>
          <h2>このサービスでできること</h2>
        </div>
        <div className="capability-grid">
          {capabilityItems.map((item, index) => (
            <article key={item.title} className="capability-card">
              <p className="capability-number">0{index + 1}</p>
              <h3>{item.title}</h3>
              <ul>
                {item.list.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
