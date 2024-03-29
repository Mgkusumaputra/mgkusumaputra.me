import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="w-full mx-auto px-8 py-10 max-w-2xl md:px-0">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
