"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ContactPayload = {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  agreement: boolean;
  website: string;
};

const initialForm: ContactPayload = {
  company: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  agreement: false,
  website: "",
};

const inputStyles =
  "w-full rounded-lg border border-border bg-white px-4 py-3.5 text-[15px] font-[inherit] transition-all duration-200 placeholder:text-text-sub/40 focus:border-primary focus:ring-3 focus:ring-primary/15 focus:outline-none hover:border-border/80";

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onChange =
    (key: keyof ContactPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const validate = (): string | null => {
    if (!form.company.trim()) return "会社名は必須です。";
    if (!form.name.trim()) return "お名前は必須です。";
    if (!form.email.trim()) return "メールアドレスは必須です。";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "メールアドレスの形式が不正です。";
    if (!form.message.trim() || form.message.trim().length < 20)
      return "相談内容は20文字以上で入力してください。";
    if (!form.agreement) return "個人情報保護方針への同意が必要です。";
    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "送信に失敗しました。");
      }

      setForm(initialForm);
      router.push("/contact/thanks");
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-muted py-20 sm:py-24 md:py-36"
      data-dev-source="src/components/ContactForm.tsx"
      data-dev-label="お問い合わせフォーム"
    >
      <div className="mx-auto max-w-[860px] px-6 md:px-10">
        <div className="text-center">
          <span className="mx-auto mb-3 block h-0.5 w-8 rounded-full bg-primary" />
          <p className="m-0 font-heading text-[13px] font-semibold tracking-[0.14em] text-text-sub uppercase">
            CONTACT
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-tight tracking-tight">
            無料ヒアリングのお申し込み
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-relaxed text-text-sub">
            以下のフォームからお気軽にお問い合わせください。
            通常1営業日以内にご連絡いたします。
          </p>
        </div>

        <form
          className="mt-10 rounded-xl border border-border/50 bg-white p-6 shadow-md sm:mt-12 sm:p-9 md:p-12"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-text-main">
              <span className="flex items-center gap-2">
                会社名
                <span className="inline-block rounded bg-red-50 px-1.5 py-0.5 text-[11px] font-semibold text-red-600">
                  必須
                </span>
              </span>
              <input
                type="text"
                name="company"
                placeholder="例: 株式会社salute"
                className={inputStyles}
                value={form.company}
                onChange={onChange("company")}
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-main">
              <span className="flex items-center gap-2">
                お名前
                <span className="inline-block rounded bg-red-50 px-1.5 py-0.5 text-[11px] font-semibold text-red-600">
                  必須
                </span>
              </span>
              <input
                type="text"
                name="name"
                placeholder="例: 田中 太郎"
                className={inputStyles}
                value={form.name}
                onChange={onChange("name")}
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-main">
              <span className="flex items-center gap-2">
                メールアドレス
                <span className="inline-block rounded bg-red-50 px-1.5 py-0.5 text-[11px] font-semibold text-red-600">
                  必須
                </span>
              </span>
              <input
                type="email"
                name="email"
                placeholder="例: info@example.com"
                className={inputStyles}
                value={form.email}
                onChange={onChange("email")}
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-main">
              <span className="flex items-center gap-2">
                電話番号
                <span className="inline-block rounded bg-muted px-1.5 py-0.5 text-[11px] text-text-sub">
                  任意
                </span>
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="例: 099-000-0000"
                className={inputStyles}
                value={form.phone}
                onChange={onChange("phone")}
              />
            </label>
          </div>

          <label className="mt-6 flex flex-col gap-2 text-sm font-medium text-text-main sm:mt-7">
            <span className="flex items-center gap-2">
              相談内容
              <span className="inline-block rounded bg-red-50 px-1.5 py-0.5 text-[11px] font-semibold text-red-600">
                必須
              </span>
            </span>
            <textarea
              name="message"
              rows={5}
              placeholder="現在の課題やご相談内容をご記入ください"
              className={`${inputStyles} resize-y`}
              value={form.message}
              onChange={onChange("message")}
              required
            />
          </label>

          {/* Honeypot */}
          <input
            className="absolute -left-[9999px] opacity-0"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={onChange("website")}
            aria-hidden
          />

          <label className="mt-6 flex cursor-pointer flex-row items-center gap-3 rounded-lg px-1 py-2 text-sm text-text-sub transition-colors hover:text-text-main sm:mt-7">
            <input
              type="checkbox"
              className="h-[18px] w-[18px] shrink-0 rounded accent-primary"
              checked={form.agreement}
              onChange={onChange("agreement")}
            />
            個人情報保護方針に同意します
          </label>

          {error && (
            <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-5 py-3.5 text-sm leading-relaxed text-red-700">
              {error}
            </p>
          )}

          <button
            className="group mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4.5 text-base font-bold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 disabled:pointer-events-none disabled:opacity-50 sm:mt-8 sm:py-5"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "送信中..."
            ) : (
              <>
                無料ヒアリングに申し込む
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
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
