import Image from "next/image";

const HERO_BG = "/images/main.jpeg";

export function Hero() {
  return (
    <section
      className="relative flex min-h-dvh flex-col overflow-hidden text-white"
      data-dev-source="src/components/Hero.tsx"
      data-dev-label="ヒーロー"
    >
      <Image
        src={HERO_BG}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Multi-layer cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e18]/70 via-[#0f2744]/65 to-[#0f2744]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1e35]/50 via-transparent to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#0f2744] to-transparent" />

      {/* Content — vertically centered, pushed down to clear fixed header */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 pt-[72px] md:px-10">
        <div className="max-w-[680px] py-16 sm:py-20 md:py-0">
          <p className="m-0 font-heading text-[12px] font-semibold tracking-[0.24em] uppercase text-sky-300/90 sm:text-[13px]">
            株式会社salute | AI業務効率化サービス
          </p>

          <h1 className="mt-5 mb-7 font-heading text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] tracking-tight sm:mt-6 sm:mb-9">
            <span className="block">DX FROM</span>
            <span className="block text-sky-400">AI PLANNING</span>
          </h1>

          <p className="mb-5 max-w-[580px] text-[clamp(1.15rem,2.6vw,1.75rem)] font-bold leading-snug sm:mb-6">
            AI × RPA × 業務連携で
            <br />
            現場のムダを、価値ある時間に変えます。
          </p>

          <p className="mb-9 max-w-[500px] text-[14px] leading-[1.95] text-white/65 sm:mb-11 sm:text-[15px]">
            複数ツールを組み合わせて、効果が出る部分だけを実装。
            <br className="hidden sm:inline" />
            専門知識がなくても始められる、実践型の伴走支援です。
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-lg bg-sky-400 px-8 py-4 text-[15px] font-bold text-[#0f2744] shadow-lg shadow-sky-400/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-xl hover:shadow-sky-400/30 sm:px-10 sm:py-[18px] sm:text-base"
              href="#contact"
            >
              無料ヒアリングはこちら
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
              <span className="absolute -inset-1 animate-cta-ping rounded-lg bg-sky-400/20" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/[0.07] px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.13] sm:py-[18px]"
              href="#solution"
            >
              サービス内容を見る
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-[11px] text-white/55 sm:mt-5 sm:text-xs">
            <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            30秒で入力完了・費用は一切かかりません
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5 p-0 sm:mt-9 sm:gap-3">
            {["AI活用", "RPA自動化", "業務連携"].map((tag) => (
              <li
                key={tag}
                className="list-none rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold text-sky-300/80 backdrop-blur-sm sm:px-4 sm:text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2 pb-8 sm:pb-10">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
          Scroll
        </span>
        <span className="hero-scroll-line block h-10 w-px bg-gradient-to-b from-white/50 to-transparent sm:h-12" />
      </div>
    </section>
  );
}
