export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-hover py-14 sm:py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:gap-10 md:px-10 md:text-left">
        <div>
          <h2 className="m-0 text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-snug text-white">
            業務効率化、何から始めるか迷っていませんか？
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
            まずは現状をお聞かせください。最適な改善ポイントを無料でご提案します。
          </p>
        </div>
        <a
          className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-[15px] font-bold text-primary shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-9 sm:py-4.5"
          href="#contact"
        >
          無料相談を申し込む
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
    </section>
  );
}
