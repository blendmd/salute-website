import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  agreement?: boolean;
  website?: string;
};

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;

function validate(body: ContactBody): string | null {
  if (body.website) return "不正な送信を検知しました。";
  if (!body.company?.trim()) return "会社名は必須です。";
  if (!body.name?.trim()) return "お名前は必須です。";
  if (!body.email?.trim()) return "メールアドレスは必須です。";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "メールアドレスの形式が不正です。";
  }
  if (!body.message?.trim() || body.message.trim().length < 20) {
    return "相談内容は20文字以上で入力してください。";
  }
  if (!body.agreement) return "同意チェックが必要です。";
  return null;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const history = rateLimitMap.get(key) ?? [];
  const recent = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimitMap.set(key, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ContactBody;
  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const ipKey =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ipKey)) {
    return NextResponse.json(
      { error: "短時間での送信が多いため、時間をおいて再度お試しください。" },
      { status: 429 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM ?? smtpUser;
  const secure = process.env.SMTP_SECURE === "true";

  if (!smtpHost || !smtpUser || !smtpPass || !contactTo || !contactFrom) {
    return NextResponse.json(
      { error: "メール送信設定が未完了です。管理者にお問い合わせください。" },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: body.email,
      subject: `【LP問い合わせ】${body.company} / ${body.name}`,
      text: `
会社名: ${body.company}
お名前: ${body.name}
メールアドレス: ${body.email}
電話番号: ${body.phone ?? "未入力"}

相談内容:
${body.message}
      `.trim(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "メール送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }
}
