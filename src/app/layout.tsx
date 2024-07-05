import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeProviders from "@/components/theme/ThemeProviders";
import style from "./page.module.css";
import Introduction from "@/components/intro/Intro";
import { Inter } from 'next/font/google'
import ScrollButton from "@/components/scrollbutton/Scrollbutton";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Introduction>
          <ThemeProviders>
              <Navbar />
              <ScrollButton />
              {children}
              <Toaster />
              <Footer />
          </ThemeProviders>
        </Introduction>
      </body>
    </html>
  );
}
