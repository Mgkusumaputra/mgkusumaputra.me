"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const isDevelopment = process.env.NODE_ENV === "development";
const shouldUseTurnstile = !isDevelopment;

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.length > 0) {
    return error.message;
  }

  return "Something went wrong while subscribing.";
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const turnstileToken = formData.get("cf-turnstile-response");

    if (
      shouldUseTurnstile &&
      (!turnstileSiteKey ||
        typeof turnstileToken !== "string" ||
        turnstileToken.length === 0)
    ) {
      setFeedback({
        kind: "error",
        message: "Please complete the security check before subscribing.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          turnstileToken,
        }),
      });

      const payload = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !payload.success) {
        throw new Error(payload.error ?? "Unable to subscribe right now.");
      }

      setEmail("");
      form.reset();
      setFeedback({
        kind: "success",
        message: "Thanks for subscribing. Please check your inbox.",
      });
    } catch (error) {
      setFeedback({
        kind: "error",
        message: getErrorMessage(error),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col px-3 py-4.5 gap-4.5 w-full rounded-md">
      <div className="flex flex-col gap-1.5 text-base">
        <h4 className="font-display font-medium text-primary">Newsletter</h4>
        <p className="text-secondary">
          Receive the latest post updates directly in your inbox ASAP.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:h-9">
          <input
            type="email"
            name="email"
            id="newsletter-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
            className="bg-foreground/30 border border-foreground text-secondary rounded-md px-3 py-1.5 w-full placeholder:text-base focus:outline-none"
          />

          <button
            type="submit"
            disabled={isSubmitting || (shouldUseTurnstile && !turnstileSiteKey)}
            className="bg-foreground/30 border border-foreground text-secondary rounded-md px-4 items-center justify-center w-full h-9 cursor-pointer sm:w-fit disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>

        {shouldUseTurnstile && turnstileSiteKey ? (
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-theme="auto"
          />
        ) : null}

        {shouldUseTurnstile && !turnstileSiteKey ? (
          <p className="text-sm text-red-500">Turnstile site key is not configured.</p>
        ) : null}
      </form>

      {feedback ? (
        <p className={feedback.kind === "error" ? "text-sm text-red-500" : "text-sm text-green-600"}>
          {feedback.message}
        </p>
      ) : null}

      {shouldUseTurnstile && turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      ) : null}
    </div>
  );
}
