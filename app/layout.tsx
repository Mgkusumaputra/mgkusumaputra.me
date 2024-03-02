import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mgkusumaputra.me"),
  title: {
    default: "Muhammad Garuda",
    template: "%s | Muhammad Garuda",
  },
  description: "SHS Student + Full-Stack Dev & UI/UX Designer.",
  openGraph: {
    title: "Muhammad Garuda",
    description: "SHS Student + Full-Stack Dev & UI/UX Designer.",
    url: "https://mgkusumaputra.me",
    siteName: "Muhammad Garuda",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Muhammad Garuda",
    card: "summary_large_image",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased bg-background text-secondary-foreground `}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
