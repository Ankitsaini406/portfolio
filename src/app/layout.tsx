import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
// import ThemeProviders from "@/components/theme/ThemeProviders";
import ScrollButton from "@/components/scrollbutton/Scrollbutton";
import { SpeedInsights } from "@vercel/speed-insights/next"
import SmoothScroll from "@/lib/SmoothScroll";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body>
        {/* <ThemeProviders> */}
          <SmoothScroll>
            <Navbar />
            <ScrollButton />
            {children}
            <SpeedInsights />
            <Footer />
          </SmoothScroll>
        {/* </ThemeProviders> */}
      </body>
    </html>
  );
}
