import Image from "next/image";

const CTA_BG_IMAGE =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80&auto=format&fit=crop";

const reassurances = [
  { text: "無料・30秒で完了", icon: "clock" },
  { text: "強引な営業は一切なし", icon: "shield" },
  { text: "オンライン対応可", icon: "monitor" },
] as const;

function ReassuranceIcon({ type }: { type: string }) {
  const props = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "clock")
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  if (type === "shield")
    return (
      <svg {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  return (
    <svg {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-28 text-center text-white md:py-40"
      data-dev-source="src/components/CtaSection.tsx"
      data-dev-label="最終CTA"
    >
      <Image
        src={CTA_BG_IMAGE}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c]/92 to-[#0f2744]/92" />

      <div className="relative mx-auto max-w-[800px] px-6 md:px-10">
        <span className="mx-auto mb-3 block h-0.5 w-8 rounded-full bg-sky-400" />
        <p className="m-0 font-heading text-[13px] font-semibold tracking-[0.22em] uppercase text-sky-300">
          GET STARTED
        </p>
        <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] leading-tight tracking-tight">
          まずは無料ヒアリングから
        </h2>
        <p className="mx-auto mt-6 max-w-[580px] text-[15px] leading-[1.9] text-white/75">
          現場の課題をお聞かせください。AI・RPA・業務連携の観点から、最適な改善プランをご提案します。
        </p>

        <a
          className="group relative mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-10 py-5 text-base font-bold text-primary-deep shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          href="#contact"
        >
          まずは相談してみる
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
          <span className="absolute -inset-1 animate-cta-ping rounded-lg bg-white/20" />
        </a>

        <ul className="mx-auto mt-8 flex list-none flex-wrap items-center justify-center gap-x-6 gap-y-2 p-0">
          {reassurances.map((r) => (
            <li
              key={r.text}
              className="flex items-center gap-1.5 text-[13px] text-white/70"
            >
              <ReassuranceIcon type={r.icon} />
              {r.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
