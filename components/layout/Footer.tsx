"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import LumoraLogo from "@/components/common/LumoraLogo";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="relative w-full bg-[#F6F6F3] py-16 sm:py-20 border-t border-[#E4E4E2]/70 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          {/* Top Row: Centered Lumora Logo Showcase */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 pb-12 border-b border-[#E4E4E2]">
            <Link href="#hero" className="inline-block group">
              <LumoraLogo variant="full" size="lg" />
            </Link>
            <p className="text-sm text-[#64748B] font-subheading max-w-md">
              Transforming Ideas Into Digital Reality. We design websites, software, mobile apps, and digital experiences that scale.
            </p>
          </div>

          {/* Middle Row: Links & Floating Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-[#E4E4E2]">
            
            {/* Newsletter Floating Card */}
            <div className="space-y-3 p-5 rounded-2xl bg-white border border-[#E4E4E2] shadow-sm">
              <span className="text-xs font-mono font-bold uppercase text-[#F97316]">
                STAY INSPIRED // NEWSLETTER
              </span>
              {subscribed ? (
                <div className="text-xs text-emerald-600 font-mono flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4" /> Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[#1F2937] placeholder-slate-400 text-xs focus:outline-none focus:border-[#F97316]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-[#1F2937] text-white font-heading font-bold text-xs hover:bg-[#F97316] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#1F2937] uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm font-subheading text-[#64748B]">
                <li><Link href="#hero" className="hover:text-[#F97316] transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-[#F97316] transition-colors">Services</Link></li>
                <li><Link href="#why-lumora" className="hover:text-[#F97316] transition-colors">Why Lumora</Link></li>
                <li><Link href="#portfolio" className="hover:text-[#F97316] transition-colors">Portfolio</Link></li>
                <li><Link href="#process" className="hover:text-[#F97316] transition-colors">Process</Link></li>
                <li><Link href="#pricing" className="hover:text-[#F97316] transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#1F2937] uppercase tracking-widest">Services</h4>
              <ul className="space-y-2 text-sm font-subheading text-[#64748B]">
                <li><a href="#services" className="hover:text-[#F97316] transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-[#F97316] transition-colors">Software Development</a></li>
                <li><a href="#services" className="hover:text-[#F97316] transition-colors">Graphic &amp; UI/UX Design</a></li>
                <li><a href="#services" className="hover:text-[#F97316] transition-colors">Mobile App Development</a></li>
                <li><a href="#services" className="hover:text-[#F97316] transition-colors">AI Automation Engine</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#1F2937] uppercase tracking-widest">Connect</h4>
              <ul className="space-y-2 text-sm font-subheading text-[#64748B]">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span>hello@lumora.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span>+91 91741 01846</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>Pune, Maharashtra, India</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
            <p>© {new Date().getFullYear()} Lumora Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#F97316] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#F97316] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#F97316] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
    </footer>
  );
}