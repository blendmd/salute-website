import { type ReactNode } from "react";

const steps: {
  title: string;
  period: string;
  points: string[];
  icon: ReactNode;
}[] = [
  {
    title: "現状ヒアリング・課題抽出",
    period: "目安: 1〜2週間",
    points: [
      "現場を見てムダや停滞箇所を洗い出し。",
      "第三者視点でボトルネックを発見。",
      "自動化すべきポイントを明確化。",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "ワークフロー作成",
    period: "目安: 1〜2週間",
    points: [
      "AI / RPA / 業務連携で最適フローを設計。",
      "役割とムダを可視化。",
      "削減効果を事前に共有。",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
  {
    title: "導入範囲の打ち合わせ",
    period: "目安: 1週間",
    points: [
      "効果が見込める部分から限定導入。",
      "現場と管理側が無理なく運用できる設計。",
      "納得感を重視して実装範囲を決定。",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "試験運用・改善",
    period: "目安: 2〜4週間",
    points: [
      "実業務でテスト導入。",
      "問題点を都度修正。",
      "現場が納得するまで伴走サポート。",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export function FlowSection() {
  return (
    <section
      id="flow"
      className="bg-muted py-20 sm:py-24 md:py-36"
      data-dev-source="src/components/FlowSection.tsx"
      data-dev-label="導入ステップ（FLOW）"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div>
          <span className="mb-3 inline-block h-0.5 w-8 rounded-full bg-primary" />
          <p className="m-0 font-heading text-[13px] font-semibold tracking-[0.22em] text-text-sub uppercase">
            FLOW
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] leading-tight tracking-tight">
            導入ステップ
          </h2>
        </div>

        <ol className="mt-10 grid list-none grid-cols-1 gap-5 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="group relative rounded-xl border border-border/50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg sm:p-7"
            >
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 z-10 hidden text-border lg:block" aria-hidden>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] text-primary transition-colors duration-300 group-hover:bg-primary/[0.14]">
                  {step.icon}
                </div>
                <p className="m-0 font-heading text-[13px] font-bold tracking-wider text-primary">
                  STEP {i + 1}
                </p>
              </div>
              <h3 className="mt-1 mb-2.5 text-base font-bold leading-snug">
                {step.title}
              </h3>
              <p className="m-0 mb-4 inline-block rounded-full bg-muted px-3 py-1 text-xs text-text-sub">
                {step.period}
              </p>
              <ul className="m-0 space-y-2 pl-0 list-none text-sm leading-[1.8] text-text-sub">
                {step.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
