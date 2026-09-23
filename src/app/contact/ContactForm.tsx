"use client";

import React, { useState } from "react";
import { 
    ArrowUpRight, 
    Check, 
    Clock, 
    Copy, 
    Mail, 
    MapPin, 
    MessageSquare, 
    Send, 
    Sparkles, 
    User 
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";

export default function ContactForm() {
    const [copied, setCopied] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("as.ankitsaini406@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate immediate response or prepare mailto fallback
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 600);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Availability */}
            <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-secondary/5 text-xs font-mono uppercase tracking-widest text-secondary">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Direct Communication Channels</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        Reach Out Directly
                    </h2>

                    <p className="text-secondary text-sm md:text-base leading-relaxed">
                        Whether you are looking to hire a Senior Full-Stack Engineer, require consulting on Next.js performance and architecture, or want to discuss a new software venture, feel free to reach out.
                    </p>
                </div>

                {/* Email Box */}
                <div className="p-6 rounded-2xl border border-border bg-secondary/5 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted">Primary Email</p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <a
                            href="mailto:as.ankitsaini406@gmail.com"
                            className="text-base md:text-lg font-medium text-foreground hover:underline transition-all flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4 text-secondary" />
                            <span>as.ankitsaini406@gmail.com</span>
                        </a>

                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            aria-label="Copy email address"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background hover:bg-secondary/10 transition-colors text-xs font-mono text-secondary hover:text-foreground cursor-pointer"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-green-500" />
                                    <span className="text-green-500">Copied</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Meta details list */}
                <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-border bg-secondary/5 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4 text-foreground" />
                        </div>
                        <div>
                            <p className="text-xs font-mono text-muted uppercase">Response Time</p>
                            <p className="text-sm font-semibold text-foreground">Within 12 hours (7 days a week)</p>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl border border-border bg-secondary/5 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-foreground" />
                        </div>
                        <div>
                            <p className="text-xs font-mono text-muted uppercase">Location &amp; Working Hours</p>
                            <p className="text-sm font-semibold text-foreground">India (IST) • Remote Globally</p>
                        </div>
                    </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-border space-y-3">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted">Professional Networks</p>
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/Ankitsaini406"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl border border-border bg-secondary/5 hover:border-foreground/40 hover:bg-secondary/10 transition-all text-xs font-medium text-foreground flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3 text-muted" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/web-ankit-saini/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl border border-border bg-secondary/5 hover:border-foreground/40 hover:bg-secondary/10 transition-all text-xs font-medium text-foreground flex items-center gap-2"
                        >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                            <ArrowUpRight className="w-3 h-3 text-muted" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl border border-border bg-background/80 backdrop-blur-xl shadow-2xl relative">
                {submitted ? (
                    <div className="py-16 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 mx-auto flex items-center justify-center">
                            <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                        <p className="text-secondary max-w-md mx-auto text-sm leading-relaxed">
                            Your message has been prepared. You can also send directly via email to{" "}
                            <strong className="text-foreground">as.ankitsaini406@gmail.com</strong>.
                        </p>
                        <div className="pt-4">
                            <a
                                href={`mailto:as.ankitsaini406@gmail.com?subject=${encodeURIComponent(
                                    formData.subject + " - from " + formData.name
                                )}&body=${encodeURIComponent(
                                    "Name: " +
                                    formData.name +
                                    "\nEmail: " +
                                    formData.email +
                                    "\n\nMessage:\n" +
                                    formData.message
                                )}`}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:scale-105 transition-all shadow-md"
                            >
                                <Send className="w-4 h-4" />
                                <span>Open Email Client</span>
                            </a>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">Send a Message</h3>
                            <p className="text-xs text-secondary">
                                Fill out the details below to initiate a discussion.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted">
                                    Your Name *
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Alex Morgan"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/5 focus:bg-background focus:border-foreground transition-colors text-foreground text-sm outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted">
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="alex@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/5 focus:bg-background focus:border-foreground transition-colors text-foreground text-sm outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-muted">
                                Project Type / Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/5 focus:bg-background focus:border-foreground transition-colors text-foreground text-sm outline-none"
                            >
                                <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                                <option value="Next.js & Frontend Architecture Consulting">Next.js &amp; Frontend Architecture</option>
                                <option value="Full-Stack Web / Mobile Development">Full-Stack Web / Mobile Development</option>
                                <option value="General Technical Inquiry">General Technical Inquiry</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe your project requirements, scope, timeline, or open role..."
                                className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/5 focus:bg-background focus:border-foreground transition-colors text-foreground text-sm outline-none resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl bg-foreground text-background font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer shadow-lg disabled:opacity-50"
                        >
                            <Send className="w-4 h-4" />
                            <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
