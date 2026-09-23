import React from "react";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ankitsaini.vercel.app/#person",
    name: "Ankit Saini",
    givenName: "Ankit",
    familyName: "Saini",
    jobTitle: "Senior Full-Stack Software Engineer & UI/UX Architect",
    description:
      "Full-Stack Engineer with 3.5+ years of experience engineering high-performance web and mobile applications using Next.js, React, TypeScript, Node.js, Flutter, AWS, and Firebase.",
    url: "https://ankitsaini.vercel.app",
    image: "https://ankitsaini.vercel.app/images/myimage.jpg",
    sameAs: [
      "https://github.com/Ankitsaini406",
      "https://www.linkedin.com/in/web-ankit-saini/",
      "mailto:as.ankitsaini406@gmail.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    email: "as.ankitsaini406@gmail.com",
    knowsAbout: [
      "Next.js App Router",
      "React.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Flutter & Dart",
      "AWS Cloud Infrastructure",
      "Firebase Architecture",
      "Web Performance Optimization",
      "Core Web Vitals",
      "System Architecture & API Design",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Gulzar Group of Institutes",
      url: "https://ggi.ac.in/",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor of Computer Applications (BCA)",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Gulzar Group of Institutes",
          url: "https://ggi.ac.in/",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ankitsaini.vercel.app/#website",
    url: "https://ankitsaini.vercel.app",
    name: "Ankit Saini | Full-Stack Developer & UI/UX Architect",
    description:
      "Official portfolio of Ankit Saini, specializing in Next.js, React, scalable cloud infrastructure, and modern frontend architecture.",
    publisher: {
      "@id": "https://ankitsaini.vercel.app/#person",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfilePageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://ankitsaini.vercel.app/about#profile",
    url: "https://ankitsaini.vercel.app/about",
    name: "About Ankit Saini | Full-Stack Developer Profile",
    datePublished: "2024-01-01T00:00:00Z",
    dateModified: "2026-09-23T00:00:00Z",
    mainEntity: {
      "@id": "https://ankitsaini.vercel.app/#person",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://ankitsaini.vercel.app/contact#contact",
    url: "https://ankitsaini.vercel.app/contact",
    name: "Contact Ankit Saini | Hire Full-Stack Developer",
    description:
      "Get in touch with Ankit Saini for full-stack engineering roles, software consulting, and freelance development.",
    mainEntity: {
      "@type": "Person",
      name: "Ankit Saini",
      email: "as.ankitsaini406@gmail.com",
      url: "https://ankitsaini.vercel.app",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "as.ankitsaini406@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
