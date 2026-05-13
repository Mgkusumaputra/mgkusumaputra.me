import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const turnstileSecretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
const isDevelopment = process.env.NODE_ENV === "development";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

type NewsletterRequest = {
  email?: string;
  turnstileToken?: string;
};

type TurnstileVerification = {
  success: boolean;
  "error-codes"?: string[];
};

type ResendApiError = {
  message?: string;
  statusCode?: number | null;
};

function resolveResendError(error: ResendApiError | null | undefined) {
  const status =
    error?.statusCode && error.statusCode >= 400 && error.statusCode <= 599
      ? error.statusCode
      : 400;
  const message = error?.message ?? "Resend request failed.";

  return { status, message };
}

async function verifyTurnstile(token: string, remoteIp?: string) {
  if (!turnstileSecretKey) {
    return {
      success: false,
      "error-codes": ["missing-input-secret"],
    } satisfies TurnstileVerification;
  }

  const payload = new URLSearchParams({
    secret: turnstileSecretKey,
    response: token,
  });

  if (remoteIp) {
    payload.append("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload,
    },
  );

  if (!response.ok) {
    return {
      success: false,
      "error-codes": ["verification-request-failed"],
    } satisfies TurnstileVerification;
  }

  return (await response.json()) as TurnstileVerification;
}

export async function POST(req: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY is not configured." },
        { status: 500 },
      );
    }

    if (!isDevelopment && !turnstileSecretKey) {
      return NextResponse.json(
        {
          success: false,
          error: "CLOUDFLARE_TURNSTILE_SECRET_KEY is not configured.",
        },
        { status: 500 },
      );
    }

    const data = (await req.json()) as NewsletterRequest;
    const email = data.email?.trim().toLowerCase();
    const turnstileToken = data.turnstileToken?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!isDevelopment) {
      if (!turnstileToken) {
        return NextResponse.json(
          { success: false, error: "Missing Turnstile token." },
          { status: 400 },
        );
      }

      const forwardedFor = req.headers.get("x-forwarded-for");
      const remoteIp =
        req.headers.get("cf-connecting-ip") ??
        (forwardedFor ? forwardedFor.split(",")[0]?.trim() : undefined);
      const verification = await verifyTurnstile(turnstileToken, remoteIp);

      if (!verification.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Security check failed. Please try again.",
          },
          { status: 400 },
        );
      }
    }

    const contactResult = await resend.contacts.create({
      email,
      segments: [{ id: "86298da5-1466-4db6-ba16-d659515f829c" }],
    });

    if (contactResult.error) {
      const { status, message } = resolveResendError(contactResult.error);
      return NextResponse.json({ success: false, error: message }, { status });
    }

    const emailResult = await resend.emails.send({
      from: "mgkusumaputra Newsletter <newsletter@mgkusumaputra.me>",
      to: [email],
      subject: "Welcome to the Garduu Playground!",
      template: { id: "2391d1f6-9ccb-4c82-b619-901de276856f" },
    });

    if (emailResult.error) {
      const { status, message } = resolveResendError(emailResult.error);
      return NextResponse.json({ success: false, error: message }, { status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected newsletter error.";

    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
