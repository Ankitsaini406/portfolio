import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/Scrollbutton";
import SmoothScroll from "@/lib/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Saini",
  description: "Ankit Saini Portfolio",
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
