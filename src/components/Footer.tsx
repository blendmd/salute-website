import Link from "next/link";

const footerLinks = [
  { href: "#problem", label: "課題訴求" },
  { href: "#solution", label: "サービス概要" },
  { href: "#features", label: "できること" },
  { href: "#flow", label: "導入ステップ" },
  { href: "#pricing", label: "料金" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-border/60 bg-[#0f1c2e] text-white"
      data-dev-source="src/components/Footer.tsx"
      data-dev-label="フッター"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-12 sm:gap-10 sm:py-16 md:flex-row md:justify-between md:px-10">
        <div>
          <p className="m-0 font-heading text-lg font-bold tracking-wide">
            株式会社salute
          </p>
          <p className="mt-4 text-sm leading-[1.9] text-white/60">
            〒441-8006
            <br />
            豊橋市高洲町高洲25
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/40 sm:py-6 md:flex-row md:px-10">
          <Link
            href="/privacy-policy"
            className="transition-colors duration-200 hover:text-white/70"
          >
            プライバシーポリシー
          </Link>
          <p className="m-0">
            &copy; {new Date().getFullYear()} salute Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
