"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQPageSchema } from "@/components/seo/JsonLd";

export const FAQ_ITEMS = [
  {
    question: "Who is Ankit Saini and what technologies does he specialize in?",
    answer:
      "Ankit Saini is a Senior Full-Stack Software Engineer and UI/UX Architect based in India with over 3.5 years of industry experience. He specializes in the React and Next.js ecosystem, TypeScript, Node.js, Tailwind CSS, Flutter for cross-platform mobile apps, and cloud infrastructure on AWS and Firebase. He has architected and shipped 11+ production-grade web and mobile applications.",
  },
  {
    question: "How does Ankit optimize web performance to achieve 100/100 Core Web Vitals in Next.js?",
    answer:
      "Ankit implements modern Next.js App Router performance patterns: React Server Components (RSC) to minimize client-side JavaScript payloads, dynamic imports and route-based code splitting, automated image optimization via next/image (AVIF/WebP formats), edge caching with stale-while-revalidate headers, and strict font optimization using next/font. This approach consistently yields sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).",
  },
  {
    question: "What is Ankit's architectural approach to scalable enterprise web applications?",
    answer:
      "Ankit follows clean architecture principles, modular component design, and end-to-end type safety. Key tenets include: strict separation of business logic from UI presentation, scalable state management via React Query (TanStack Query) and Zustand, resilient API layers with OpenAPI/tRPC specs, atomic design tokens, and robust error boundaries to guarantee 99.9% uptime in production environments.",
  },
  {
    question: "How does Ankit handle backend engineering, databases, and cloud infrastructure?",
    answer:
      "On the backend, Ankit develops scalable RESTful and GraphQL APIs using Node.js, Express, and Next.js Serverless Route Handlers. He architects relational schemas with PostgreSQL and Prisma ORM, as well as document databases with MongoDB and Firebase Firestore. For cloud deployments, he leverages AWS (S3, Lambda, CloudFront), Vercel Edge Network, and Docker containerization for automated CI/CD pipelines.",
  },
  {
    question: "What are Ankit Saini's professional credentials and experience?",
    answer:
      "Ankit holds a Bachelor of Computer Applications (BCA) from Gulzar Group of Institutes (2016 – 2019) and brings 3.5+ years of dedicated software engineering experience. He has engineered complex SaaS systems, high-traffic consumer web portals, and mobile applications, mentoring junior engineers and collaborating closely with cross-functional product and design teams.",
  },
  {
    question: "Is Ankit available for full-time software engineering roles, contracts, or consulting?",
    answer:
      "Yes. Ankit is currently available for full-time Senior Full-Stack Engineer and Frontend Architect roles (remote worldwide or hybrid in India), as well as selective high-impact freelance consulting projects. Inquiries typically receive a direct response within 12 hours via email at as.ankitsaini406@gmail.com or through the Contact page.",
  },
  {
    question: "What testing and code quality standards are applied across his projects?",
    answer:
      "Every project adheres to strict automated linting with ESLint, formatting with Prettier, static analysis with TypeScript in strict mode, component unit testing with Jest and React Testing Library, and end-to-end testing with Playwright or Cypress. This ensures zero regression, high maintainability, and clean technical documentation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 px-6 overflow-hidden bg-background border-t border-border"
      aria-labelledby="faq-heading"
    >
      {/* Background Noise & Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/svg/noise.svg')] mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

      {/* JSON-LD Schema for AI SEO & Google AI Overviews */}
      <FAQPageSchema faqs={FAQ_ITEMS} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/5 text-xs font-mono uppercase tracking-widest text-secondary">
            <HelpCircle className="w-3.5 h-3.5 text-foreground" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl md:text-5xl font-black text-foreground tracking-tight"
          >
            Engineering Insights &amp; FAQs
          </h2>

          <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Detailed answers regarding technical capabilities, engineering philosophy, performance standards, and availability for hire.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-foreground/40 bg-secondary/5 shadow-md"
                    : "border-border hover:border-foreground/20 bg-background/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-foreground tracking-tight flex items-center gap-3">
                    <span className="text-xs font-mono text-muted">0{index + 1}.</span>
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-foreground text-background" : "text-secondary"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-2 text-secondary text-sm md:text-base leading-relaxed border-t border-border/40"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Citation Notice / Freshness Signal */}
        <div className="mt-12 p-4 rounded-xl border border-border/60 bg-secondary/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-foreground shrink-0" />
            <span>
              Authoritative technical data verified by <strong>Ankit Saini</strong>.
            </span>
          </div>
          <span className="font-mono">Last updated: September 2026</span>
        </div>
      </div>
    </section>
  );
}
