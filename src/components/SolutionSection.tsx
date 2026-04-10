import Image from "next/image";

const SOLUTION_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop";

const strengths = [
  {
    title: "専門知識がなくても導入可能",
    body: "現場の言葉でヒアリングし、技術面は私たちが設計・実装します。",
  },
  {
    title: "ツール依存ではなく最適設計",
    body: "特定ツールありきではなく、業務課題に合わせて最適な手段を選定します。",
  },
  {
    title: "効果重視のスモールスタート",
    body: "100%自動化を目指さず、今すぐ減らせるムダから確実に改善します。",
  },
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 sm:py-24 md:py-36"
      data-dev-source="src/components/SolutionSection.tsx"
      data-dev-label="サービス概要（SERVICE）"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-[42%_58%] md:gap-16 md:px-10">
        <div>
          <span className="mb-3 inline-block h-0.5 w-8 rounded-full bg-primary" />
          <p className="m-0 font-heading text-[13px] font-semibold tracking-[0.14em] text-text-sub uppercase">
            SERVICE OVERVIEW
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-snug tracking-tight">
            DX推進に必要なのは
            <br />
            <span className="text-primary">実践的なIT企画</span>です。
          </h2>

          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl shadow-md">
            <Image
              src={SOLUTION_IMAGE}
              alt="データ分析・デジタルトランスフォーメーション"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/20 to-transparent" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur-sm">
                Digital Transformation
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary-deep shadow-sm backdrop-blur-sm">
                Data Analysis
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mt-0 text-[15px] leading-[1.9] text-text-sub">
            saluteのAI業務効率化サービスは、大規模なシステム導入ではなく、目の前の困りごとを解決する実践型支援です。
            AI・RPA・業務連携を組み合わせて、現場に無理なく定着する形で自動化を進めます。
          </p>
          <span className="mt-1 inline-block self-start rounded-full bg-primary/[0.08] px-4 py-1.5 text-xs font-semibold text-primary">
            実践型サービス
          </span>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
            {strengths.map((s, i) => (
              <article
                key={s.title}
                className="group rounded-xl border border-border/50 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg sm:p-6"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.08] font-heading text-sm font-bold text-primary">
                  0{i + 1}
                </div>
                <h3 className="m-0 mb-3 text-[15px] font-bold leading-snug">
                  {s.title}
                </h3>
                <p className="m-0 text-sm leading-[1.85] text-text-sub">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
