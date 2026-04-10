import { type ReactNode } from "react";

const features: {
  title: string;
  items: string[];
  icon: ReactNode;
  label: string;
}[] = [
  {
    title: "定型業務の自動化",
    label: "Automation",
    items: [
      "システムへのデータ入力・転記。",
      "数値の集計・レポート作成。",
      "リマインド通知の自動送信。",
    ],
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "AIによる判断・作成",
    label: "AI Processing",
    items: [
      "問い合わせ内容の自動分類・要約。",
      "メール返信文案の自動作成。",
      "ドキュメントからの情報抽出。",
    ],
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    title: "ツール間の自動連携",
    label: "Integration",
    items: [
      "分散したツール・データの接続。",
      "業務全体のフロー自動化。",
      "手作業の重複処理を削減。",
    ],
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    title: "見える化・標準化",
    label: "Visualization",
    items: [
      "業務フローを可視化。",
      "属人作業の仕組み化。",
      "誰でも運用できる体制整備。",
    ],
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2744] py-20 text-white sm:py-24 md:py-36"
      data-dev-source="src/components/FeaturesSection.tsx"
      data-dev-label="できること（FEATURES）"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="text-center">
          <span className="mx-auto mb-3 block h-0.5 w-8 rounded-full bg-sky-400" />
          <p className="m-0 font-heading text-[14px] font-semibold tracking-[0.14em] uppercase text-sky-300">
            FEATURES
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-tight tracking-tight">
            このサービスでできること
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="group rounded-xl border border-white/[0.12] bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.2] hover:bg-white/[0.1] hover:shadow-lg hover:shadow-black/10 sm:p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/[0.15] text-sky-400 transition-colors duration-300 group-hover:bg-sky-400/[0.22]">
                  {f.icon}
                </div>
                <div>
                  <p className="m-0 font-heading text-2xl font-bold text-sky-400/50">
                    0{i + 1}
                  </p>
                  <span className="text-[11px] font-semibold tracking-wider text-sky-300/60 uppercase">
                    {f.label}
                  </span>
                </div>
              </div>
              <h3 className="mt-1 mb-5 text-lg font-bold">{f.title}</h3>
              <ul className="m-0 list-none space-y-2.5 p-0">
                {f.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-relaxed text-white/80"
                  >
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-sky-400/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
