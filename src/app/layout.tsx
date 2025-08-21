import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/Scrollbutton";
import SmoothScroll from "@/lib/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Saini",
  description: "Ankit Saini Portfolio",
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ankit Saini",
  },
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body>
        <SmoothScroll>
          <Navbar />
          <ScrollButton />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
