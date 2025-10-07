import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/Scrollbutton";
import "./globals.css";
import GoogleAnalytics from "@/analytics/GTag";
import ChildLayOut from "./ChildLayout";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <ChildLayOut>
          <Navbar />
          <ScrollButton />
          {children}
          <Footer />
        </ChildLayOut>
      </body>
    </html>
  );
}