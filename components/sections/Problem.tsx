const problems = [
  "毎日同じ入力・転記をしている",
  "Excelとクラウドを行き来している",
  "担当者しか分からない業務がある",
  "人手不足で改善まで手が回らない",
];

export function Problem() {
  return (
    <section id="problem" className="section section-muted">
      <div className="container">
        <div className="section-intro">
          <span className="line" />
          <p className="eyebrow">PROBLEM</p>
          <h2>こんなお悩み、ありませんか？</h2>
        </div>
        <div className="problem-grid">
          {problems.map((text, index) => (
            <article key={text} className="problem-card">
              <p className="problem-icon" aria-hidden>
                {index + 1}
              </p>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="problem-conclusion">
          その業務、人がやらなくていい仕事かもしれません。
        </p>
      </div>
    </section>
  );
}
