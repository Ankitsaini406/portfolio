import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeProviders from "@/components/theme/ThemeProviders";
import style from "./page.module.css"

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
        <body className={style.backgroungColor}>
          <div className={style.backgroundImage}>
          <ThemeProviders>
          <Navbar />
          {children}
          <Footer />
          </ThemeProviders>
          </div>
        </body>
      </html>
  );
}
