"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ContactPayload = {
  company: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  agreement: boolean;
  website?: string;
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

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onChange =
    (key: keyof ContactPayload) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
      const value =
        event.target instanceof HTMLInputElement &&
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const validate = (): string | null => {
    if (!form.company.trim()) return "会社名は必須です。";
    if (!form.name.trim()) return "お名前は必須です。";
    if (!form.email.trim()) return "メールアドレスは必須です。";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "メールアドレスの形式が不正です。";
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      return "相談内容は20文字以上で入力してください。";
    }
    if (!form.agreement) return "個人情報保護方針への同意が必要です。";
    return null;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "送信に失敗しました。");
      }

      setForm(initialForm);
      router.push("/contact/thanks");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "送信に失敗しました。",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section-muted">
      <div className="container form-wrap">
        <div className="section-intro">
          <span className="line" />
          <p className="eyebrow">CONTACT</p>
          <h2>無料ヒアリングのお申し込み</h2>
        </div>
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label>
            会社名 <span className="required">必須</span>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange("company")}
              required
            />
          </label>
          <label>
            お名前 <span className="required">必須</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange("name")}
              required
            />
          </label>
          <label>
            メールアドレス <span className="required">必須</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange("email")}
              required
            />
          </label>
          <label>
            電話番号 <span className="optional">任意</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange("phone")}
            />
          </label>
          <label className="full">
            相談内容 <span className="required">必須</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange("message")}
              required
            />
          </label>

          <input
            className="honey"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={onChange("website")}
            aria-hidden
          />

          <label className="full agreement">
            <input
              type="checkbox"
              checked={form.agreement}
              onChange={onChange("agreement")}
            />
            個人情報保護方針に同意します
          </label>

          {error ? <p className="form-error">{error}</p> : null}

          <button className="btn btn-primary full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "送信中..." : "お問い合わせはこちら"}
          </button>
        </form>
      </div>
    </section>
  );
}
