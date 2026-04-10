import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <p className="footer-brand">株式会社salute</p>
          <p>
            〒000-0000
            <br />
            鹿児島県〇〇市〇〇 1-2-3
            <br />
            TEL: 099-000-0000
          </p>
        </div>
        <div className="footer-links">
          <a href="#problem">課題訴求</a>
          <a href="#overview">サービス概要</a>
          <a href="#capabilities">できること</a>
          <a href="#steps">導入ステップ</a>
          <a href="#pricing">料金</a>
          <a href="#contact">お問い合わせ</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <Link href="/privacy-policy">プライバシーポリシー</Link>
          <p>© {new Date().getFullYear()} salute Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
