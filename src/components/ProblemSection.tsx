import { type ReactNode } from "react";

const problems: { title: string; detail: string; icon: ReactNode }[] = [
  {
    title: "毎日同じ入力・転記をしている",
    detail:
      "入力や転記、確認作業が日課化し、本業の判断や対応に回す時間が削られがちです。",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: "Excelとクラウドを行き来している",
    detail:
      "クラウドと表計算の往復や版ズレが常態化し、正しいデータの所在が曖昧になりやすい状態です。",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "担当者しか分からない業務がある",
    detail:
      "手順を把握している人が限られ、休暇や異動で業務が滞りやすい。マニュアルがなく暗黙知に頼ったままになりがちです。",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "人手不足で改善まで手が回らない",
    detail:
      "日々の業務で手一杯で、改善やIT化まで手が回りにくい。ツールも定着せず、負担だけ増えることもあります。",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="bg-muted py-20 sm:py-24 md:py-36"
      data-dev-source="src/components/ProblemSection.tsx"
      data-dev-label="課題訴求（PROBLEM）"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div>
          <span className="mb-3 inline-block h-0.5 w-8 rounded-full bg-primary" />
          <p className="m-0 font-heading text-[14px] font-semibold tracking-[0.14em] text-text-sub uppercase">
            PROBLEM
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-tight tracking-tight">
            こんなお悩み、ありませんか？
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="group flex flex-col items-start text-left rounded-xl border border-border/50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg sm:p-7"
            >
              <div className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center self-center rounded-2xl bg-primary/[0.08] text-primary transition-colors duration-300 group-hover:bg-primary/[0.12]">
                {problem.icon}
              </div>
              <p className="m-0 w-full text-[15px] font-bold leading-snug text-text-main">
                {problem.title}
              </p>
              <p className="m-0 mt-2.5 w-full text-[14px] leading-[1.85] text-text-sub">
                {problem.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-[clamp(1.1rem,2.5vw,1.75rem)] font-bold leading-relaxed text-text-main sm:mt-14">
          その業務、人がやらなくていい仕事かもしれません。
        </p>
      </div>
    </section>
  );
}
