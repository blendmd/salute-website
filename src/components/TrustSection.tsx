const philosophyStrengths = [
  "多角的な解決力",
  "迅速な意思決定",
  "解決まで伴走する支援体制",
];

export function TrustSection() {
  return (
    <section
      className="bg-muted py-20 sm:py-24 md:py-36"
      data-dev-source="src/components/TrustSection.tsx"
      data-dev-label="保証・理念"
    >
      <div className="mx-auto max-w-[1200px] space-y-12 px-6 sm:space-y-16 md:space-y-20 md:px-10">
        {/* Assurance */}
        <div className="rounded-xl border border-border/50 bg-white p-7 shadow-sm sm:p-9 md:p-12">
          <div>
            <span className="mb-3 inline-block h-0.5 w-8 rounded-full bg-primary" />
            <p className="m-0 font-heading text-[14px] font-semibold tracking-[0.14em] text-text-sub uppercase">
              ASSURANCE
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-tight tracking-tight">
              保証・安心材料
            </h2>
          </div>
          <p className="mt-5 max-w-[680px] text-[15px] leading-[1.9] text-text-sub">
            はじめての導入でも安心いただけるよう、要件確認時にリスクと対応範囲を明確化します。返金保証の適用条件は契約書・利用規約で事前にご案内します。
          </p>
          <p className="mt-3 text-xs text-text-sub/70">
            ※
            保証内容は契約条件により異なります。誇大表現を避け、個別にご説明します。
          </p>
        </div>

        {/* Philosophy */}
        <div className="rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0f2744] p-7 text-white sm:p-9 md:p-14">
          <div>
            <span className="mb-3 inline-block h-0.5 w-8 rounded-full bg-sky-400" />
            <p className="m-0 font-heading text-[14px] font-semibold tracking-[0.14em] uppercase text-sky-300">
              PHILOSOPHY
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-tight tracking-tight">
              企業の考え方・理念
            </h2>
          </div>
          <blockquote className="my-6 rounded-xl border-l-[3px] border-sky-400 bg-white/[0.06] px-6 py-5 text-[15px] leading-[1.9] text-white/90 sm:my-8 sm:px-8 sm:py-7">
            AI・RPAは目的ではなく、課題解決のための手段です。最新技術を「絵に描いた餅」で終わらせず、地域企業の現場で成果が出る形に落とし込みます。
          </blockquote>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0 sm:gap-3">
            {philosophyStrengths.map((s) => (
              <li
                key={s}
                className="rounded-full border border-white/30 px-4 py-2 text-[13px] text-white/90 transition-all duration-200 hover:border-white/60 hover:bg-white/[0.08] sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
