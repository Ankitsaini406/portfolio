import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import ThemeProviders from "@/components/theme/ThemeProviders";
import ScrollButton from "@/components/Scrollbutton";
import SmoothScroll from "@/lib/SmoothScroll";
import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";

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
    <html lang="en" className="scroll-smooth!">
      <body>
        {/* <ThemeProviders> */}
          <SmoothScroll>
            <Navbar />
            <ScrollButton />
            {/* <CustomCursor /> */}
            {children}
            <Footer />
          </SmoothScroll>
        {/* </ThemeProviders> */}
      </body>
    </html>
  );
}
