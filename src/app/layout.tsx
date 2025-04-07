import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeProviders from "@/components/theme/ThemeProviders";
import ScrollButton from "@/components/scrollbutton/Scrollbutton";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProviders>
              <Navbar />
              <ScrollButton />
              {children}
              <SpeedInsights />
              <Toaster />
              <Footer />
          </ThemeProviders>
      </body>
    </html>
  );
}
