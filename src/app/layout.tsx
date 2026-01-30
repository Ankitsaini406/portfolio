import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/Scrollbutton";
import "./globals.css";
import GoogleAnalytics from "@/analytics/GTag";
import ChildLayOut from "./ChildLayout";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ankit Saini | Full-Stack Engineer",
  description: "Architecting scalable digital solutions and high-performance web applications.",
  manifest: "/manifest.json",
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ankit Saini",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="bg-(--color-background) text-(--color-foreground) selection:bg-primary/30">
        <ChildLayOut>
          <Navbar />
          <ScrollButton />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ChildLayOut>
      </body>
    </html>
  );
}