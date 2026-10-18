"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  Send,
  Copy,
  Check
} from "lucide-react";
import LumoraLogo from "@/components/common/LumoraLogo";

// Custom SVG Social Icons for maximum reliability and sharpness
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: email,
          service: "Newsletter Subscription",
          message: `Client subscribed to Lumora Technologies Weekly Tech Digest newsletter with email address: ${email}`,
        }),
      });
    } catch (err) {
      console.error("Newsletter submission error:", err);
    }

    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 6000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#F4EFEA] pt-12 sm:pt-14 pb-8 sm:pb-10 border-t border-[#E8DFD3] text-[#1F1610] z-20 overflow-hidden select-none">
      
      {/* Decorative Radial Background Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#E8D4BE]/30 via-[#F3E5D4]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#B45309]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#C97A32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Top Header Row: Brand Identity & Live Status Badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-[#E8DFD3]">
          
          {/* Logo Showcase & Brand Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 max-w-xl">
            <Link href="#hero" className="inline-block group transform hover:scale-[1.02] transition-transform duration-300">
              <LumoraLogo variant="full" size="lg" theme="light" />
            </Link>
            <p className="text-sm font-subheading text-[#6B594C] leading-relaxed pt-1">
              Transforming Ideas Into Digital Reality. We design websites, software, mobile apps, and digital experiences that scale.
            </p>
          </div>

          {/* Live Availability & Clock Pill */}
          <div className="flex flex-col items-center md:items-end gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8DFD3] shadow-sm backdrop-blur-md text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-[#1F1610]">Accepting New Projects Q3/Q4</span>
            </div>

            <div className="text-xs font-mono text-[#6B594C] flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-lg border border-[#E8DFD3]">
              <Globe className="w-3.5 h-3.5 text-[#B46A28]" />
              <span>Pune, India (IST)</span>
              {time && <span className="font-semibold text-[#1F1610] ml-1">[{time}]</span>}
            </div>
          </div>
        </div>

        {/* Middle Mega Grid: Newsletter & Dynamic Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-8 sm:py-10 border-b border-[#E8DFD3]">
          
          {/* Column 1: Newsletter Card & Social Media */}
          <div className="space-y-6">
            <div className="space-y-3.5 p-6 rounded-3xl bg-white border border-[#E8DFD3] shadow-sm relative overflow-hidden group hover:border-[#B46A28]/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C4E1D] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B46A28]" /> Newsletter
                </span>
                <span className="text-[10px] font-mono text-[#8C4E1D]/70">Weekly Tech Digest</span>
              </div>
              
              <p className="text-xs text-[#6B594C] font-subheading">
                Get high-impact UI/UX insights and enterprise software tech stack updates.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-mono flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3] text-[#1F1610] placeholder-[#A8988B] text-xs focus:outline-none focus:border-[#B46A28] focus:ring-2 focus:ring-[#B46A28]/10 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-[#B45309] to-[#C97A32] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:brightness-105 transition-all active:scale-[0.98]"
                  >
                    <span>Subscribe Now</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="space-y-2.5">
              <h5 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8C4E1D]">Follow Lumora</h5>
              <div className="flex items-center gap-2">
                {[
                  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
                  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white border border-[#E8DFD3] text-[#6B594C] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#B45309] hover:to-[#C97A32] hover:text-white hover:border-transparent transition-all duration-200 shadow-sm"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#1F1610] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B46A28]" /> Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-subheading text-[#6B594C]">
              {[
                { name: "Home", href: "#hero" },
                { name: "Services", href: "#services" },
                { name: "Why Lumora", href: "#why-lumora" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Process", href: "#process" },
                { name: "Tech Stack", href: "#tech-stack" },
                { name: "Pricing & Plans", href: "#pricing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#B46A28] hover:translate-x-1 inline-block transition-all duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#1F1610] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C97A32]" /> Services
            </h4>
            <ul className="space-y-2.5 text-sm font-subheading text-[#6B594C]">
              {[
                "Website Development",
                "Software Engineering",
                "Graphic & UI/UX Design",
                "Mobile App Development",
                "AI Automation Engine",
                "Cloud & DevOps Architecture"
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-[#B46A28] hover:translate-x-1 inline-block transition-all duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Connect & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#1F1610] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C4A1D]" /> Direct Connect
            </h4>
            
            <ul className="space-y-3 text-sm font-subheading text-[#6B594C]">
              
              {/* Email item with copy button */}
              <li className="flex items-center justify-between p-2.5 rounded-2xl bg-white border border-[#E8DFD3] hover:border-[#B46A28]/40 transition-all group">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#B46A28] shrink-0" />
                  <span className="text-[11px] font-mono truncate text-[#1F1610]">lumora.web.technologies@gmail.com</span>
                </div>
                <button
                  onClick={() => copyToClipboard("lumora.web.technologies@gmail.com", "Email")}
                  className="p-1.5 rounded-lg text-[#8C4E1D] hover:text-[#B46A28] hover:bg-[#F4ECE1] transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedText === "Email" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </li>

              {/* Phone item with copy button */}
              <li className="flex items-center justify-between p-2.5 rounded-2xl bg-white border border-[#E8DFD3] hover:border-[#B46A28]/40 transition-all group">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Phone className="w-4 h-4 text-[#B46A28] shrink-0" />
                  <span className="text-[11px] font-mono text-[#1F1610]">+91 96651 19803 / +91 83292 85087</span>
                </div>
                <button
                  onClick={() => copyToClipboard("+91 96651 19803 / +91 83292 85087", "Phone")}
                  className="p-1.5 rounded-lg text-[#8C4E1D] hover:text-[#B46A28] hover:bg-[#F4ECE1] transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedText === "Phone" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </li>

              {/* Location item */}
              <li className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-white border border-[#E8DFD3]">
                <MapPin className="w-4 h-4 text-[#B46A28] shrink-0 mt-0.5" />
                <span className="text-xs text-[#6B594C]">Pune, Maharashtra, India — 411001</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B594C]">
          <p>© {new Date().getFullYear()} Lumora Technologies. All rights reserved.</p>

          <div className="flex items-center gap-6 text-[#6B594C]">
            <a href="#" className="hover:text-[#B46A28] transition-colors">Privacy Policy</a>
            <span className="text-[#DFCEBD]">•</span>
            <a href="#" className="hover:text-[#B46A28] transition-colors">Terms of Service</a>
            <span className="text-[#DFCEBD]">•</span>
            <a href="#" className="hover:text-[#B46A28] transition-colors">Sitemap</a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#E8DFD3] text-[#1F1610] hover:text-[#B46A28] hover:border-[#B46A28]/50 shadow-sm transition-all duration-200 hover:shadow-md group active:scale-95"
          >
            <span className="text-[11px] font-mono font-semibold">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}