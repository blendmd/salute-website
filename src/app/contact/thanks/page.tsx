import Link from "next/link";

export default function ContactThanksPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-inner">
        <p className="m-0 font-heading text-[13px] font-medium tracking-[0.2em] text-primary uppercase">
          THANK YOU
        </p>
        <h1>お問い合わせを受け付けました。</h1>
        <p>
          内容を確認のうえ、担当者より折り返しご連絡いたします。
          <br />
          2営業日以内に連絡がない場合は、お手数ですが再度お問い合わせください。
        </p>
        <Link
          className="btn btn-primary"
          href="/"
        >
          トップページへ戻る
        </Link>
      </div>
    </main>
  );
}
