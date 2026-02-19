import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/Scrollbutton";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ankitsaini.vercel.app"),

  title: "Ankit Saini | Full-Stack Developer & UI/UX Architect",
  description:
    "Specializing in high-performance Next.js applications, GSAP animations, and scalable backend systems with AWS and Firebase.",

  keywords: [
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer India",
    "GSAP Animations",
  ],

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ankit Saini",
  },

  openGraph: {
    title: "Ankit Saini | Engineering Digital Experiences",
    description:
      "Explore my latest projects in Web and Mobile development.",
    images: ["/icons/apple-touch-icon.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ankit Saini | Engineering Digital Experiences",
    description:
      "Explore my latest projects in Web and Mobile development.",
    images: ["/icons/apple-touch-icon.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ankit Saini",
    "jobTitle": "Full-Stack Developer",
    "url": "https://ankitsaini.vercel.app/",
    "sameAs": [
      "https://github.com/Ankitsaini406",
      "https://www.linkedin.com/in/web-ankit-saini/"
    ],
    "knowsAbout": ["React", "Next.js", "Node.js", "GSAP", "AWS", "Flutter", "Firebase"],
    "image": "https://ankitsaini.vercel.app/icons/apple-touch-icon.png"
  };

  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground selection:bg-primary/50">

        {/* GTM (noscript) – must be immediately after body */}
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W7PQRWDR"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <Navbar />
        <ScrollButton />
        <main>{children}</main>
        <Footer />

        {/* GTM Script – Non Blocking */}
        {process.env.NODE_ENV === "production" && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W7PQRWDR');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}