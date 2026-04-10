"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** 左上ロゴ: `public/` からのパス。画像を差し替えるときはファイルを置き換えるか、このパスを変更 */
const HEADER_LOGO_SRC = "/images/salute_logo.png";
/**
 * ヒーロー上（ヘッダー透過時）は背景が暗いため、暗色ロゴを `brightness-0 invert` で明るくする。
 * すでに白／明るいロゴ画像に差し替えたら false に。
 */
const HEADER_LOGO_INVERT_ON_HERO = true;

const navItems = [
  { href: "#problem", label: "PROBLEM" },
  { href: "#solution", label: "SERVICE" },
  { href: "#features", label: "FEATURES" },
  { href: "#flow", label: "FLOW" },
  { href: "#pricing", label: "PRICE" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="top"
      data-dev-source="src/components/Header.tsx"
      data-dev-label="ヘッダー（ロゴ・ナビ）"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-6 px-6 md:px-10">
        <a
          href="#top"
          className="relative flex h-9 w-[140px] shrink-0 items-center sm:w-[160px]"
          aria-label="株式会社salute トップへ"
        >
          <Image
            src={HEADER_LOGO_SRC}
            alt="株式会社salute"
            fill
            className={`object-contain object-left transition-all duration-500 ${
              HEADER_LOGO_INVERT_ON_HERO && !scrolled
                ? "brightness-0 invert"
                : ""
            }`}
            sizes="160px"
            priority
          />
        </a>

        <nav aria-label="グローバルナビゲーション" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[13px] font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.href} className="list-none">
                <a
                  href={item.href}
                  className={`relative py-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ${
                    scrolled
                      ? "text-text-sub after:bg-primary hover:text-primary"
                      : "text-white/80 after:bg-white hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden rounded-lg px-6 py-2.5 text-[13px] font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:inline-flex ${
              scrolled
                ? "bg-primary text-white hover:bg-primary-hover"
                : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
            }`}
          >
            お問い合わせ
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
              scrolled ? "hover:bg-muted" : "hover:bg-white/10"
            }`}
            aria-label="メニューを開く"
            aria-expanded={mobileOpen}
          >
            <svg
              className={`h-5 w-5 transition-colors duration-300 ${scrolled ? "text-text-main" : "text-white"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      {/* Mobile drawer */}
      <nav
        className={`fixed top-[72px] right-0 z-50 h-[calc(100dvh-72px)] w-72 border-l border-border/40 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <ul className="flex flex-col gap-1 p-5">
          {navItems.map((item) => (
            <li key={item.href} className="list-none">
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex rounded-lg px-4 py-3.5 text-[15px] font-medium text-text-main transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5 pt-2">
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-hover"
          >
            お問い合わせ
          </a>
        </div>
      </nav>
    </header>
  );
}
