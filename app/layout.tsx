import type { Metadata } from "next";
import { Caveat, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/themeProvider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ViewTransition } from "react";
import { Analytics } from "@/components/analytics";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mgkusumaputra.me"),
  title: {
    default: "Muhammad Garuda",
    template: "%s | Muhammad Garuda",
  },
  description: "SHS Student + Software Engineer",
  openGraph: {
    title: "Muhammad Garuda",
    description: "SHS Student + Software Engineer",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "transition-colors duration-300 ease-out scroll-smooth",
          `w-full max-w-3xl mx-auto antialiased`,
          "selection:bg-foreground/65",
          "scrollbar",
          `${plusJakartaSans.variable} ${inter.variable} ${caveat.variable}`
        )}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ViewTransition name="slow-fade">{children}</ViewTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
