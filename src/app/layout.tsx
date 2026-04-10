import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI×RPAで業務効率化 | 株式会社salute",
  description:
    "株式会社saluteは、AI・RPA・業務連携自動化で中小企業の現場業務を効率化する実践型サービスを提供しています。無料ヒアリング実施中。",
  openGraph: {
    title: "AI×RPAで業務効率化 | 株式会社salute",
    description:
      "AI・RPA・業務連携自動化で、現場のムダを価値に変える実践型サービス。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
