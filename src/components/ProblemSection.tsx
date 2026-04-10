import { type ReactNode } from "react";

const problems: { text: string; icon: ReactNode }[] = [
  {
    text: "毎日同じ入力・転記をしている",
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
    text: "Excelとクラウドを行き来している",
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
    text: "担当者しか分からない業務がある",
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
    text: "人手不足で改善まで手が回らない",
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
          <p className="m-0 font-heading text-[13px] font-semibold tracking-[0.14em] text-text-sub uppercase">
            PROBLEM
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-tight tracking-tight">
            こんなお悩み、ありませんか？
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {problems.map((problem) => (
            <article
              key={problem.text}
              className="group flex flex-col items-center text-center rounded-xl border border-border/50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg sm:p-7"
            >
              <div className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary transition-colors duration-300 group-hover:bg-primary/[0.12]">
                {problem.icon}
              </div>
              <p className="m-0 text-[15px] leading-[1.85]">{problem.text}</p>
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
