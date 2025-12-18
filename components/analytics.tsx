import Script from "next/script";

export function Analytics() {
  const props = {
    "data-website-id": process.env.UMAMI_WEBSITE_ID,
    src: process.env.UMAMI_SRC,
  };
  const isDev = process.env.NODE_ENV === "development";
  const onPreview = process.env.VERCEL_ENV === "preview";

  if (isDev || onPreview) return null;

  return (
    <Script
      async
      defer
      id="umami-analytics"
      strategy="afterInteractive"
      {...props}
    />
  );
}
