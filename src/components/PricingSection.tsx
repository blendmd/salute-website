import Image from "next/image";

const PRICING_BG = "/images/bg01.jpeg";

const inclusions = [
  "初期設計・設定費込み",
  "業務フロー設計",
  "試験運用サポート",
  "運用中の改善提案",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 sm:py-24 md:py-36"
      data-dev-source="src/components/PricingSection.tsx"
      data-dev-label="料金プラン（PRICING）"
    >
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full" aria-hidden>
        <Image
          src={PRICING_BG}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/68" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[280px_1fr] md:gap-16 lg:grid-cols-[320px_1fr]">
          {/* Left: heading */}
          <div>
            <span className="mb-3 inline-block h-0.5 w-8 rounded-full bg-primary" />
            <p className="m-0 font-heading text-[13px] font-semibold tracking-[0.14em] text-text-sub uppercase">
              PRICING
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-tight tracking-tight">
              料金プラン
            </h2>
            <p className="mt-4 hidden text-sm leading-[1.85] text-text-sub md:block">
              初期費用なし・月額固定でスタートできます。まずは無料ヒアリングからお気軽にどうぞ。
            </p>
          </div>

          {/* Right: pricing card */}
          <div className="rounded-xl border border-border/50 bg-white p-7 shadow-md sm:p-9 md:p-12">
            <span className="mb-5 inline-block rounded-full bg-primary/[0.08] px-5 py-2 text-xs font-semibold text-primary">
              初回10社限定 / リリース特別価格
            </span>
            <p className="m-0 font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">
              30,000
              <span className="font-sans text-[0.45em] font-normal text-text-sub">
                円（税込）/ 月
              </span>
            </p>
            <p className="mt-2 mb-7 text-sm text-text-sub">
              契約期間: 1年（以降自動継続）
            </p>

            <ul className="m-0 mb-8 list-none p-0">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-t border-border/50 py-4 text-[15px]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/[0.1] text-xs text-primary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-[15px] font-bold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 sm:px-9 sm:py-4.5"
              href="#contact"
            >
              まずは無料で相談する
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
