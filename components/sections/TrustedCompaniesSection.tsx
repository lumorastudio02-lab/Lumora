"use client";

import React from "react";
import { motion } from "framer-motion";

const COMPANIES = [
  { name: "OpenAI", logo: "⚡ OpenAI" },
  { name: "Google", logo: "🔍 Google" },
  { name: "Microsoft", logo: "❖ Microsoft" },
  { name: "AWS", logo: "☁ AWS" },
  { name: "Stripe", logo: "💳 Stripe" },
  { name: "Vercel", logo: "▲ Vercel" },
  { name: "Shopify", logo: "🛍 Shopify" },
  { name: "Meta", logo: "∞ Meta" },
  { name: "Docker", logo: "🐳 Docker" },
  { name: "GitHub", logo: "🐙 GitHub" },
];

const BROWSER_SHOWCASES = [
  {
    id: "evltn",
    name: "EVLTN Gym",
    borderColor: "bg-[#EAB308]",
    bgGradient: "from-amber-500/10 to-yellow-500/5",
    logoComponent: (
      <div className="text-center space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-slate-900 font-extrabold text-lg tracking-wider">
          <div className="space-y-0.5">
            <div className="w-4 h-0.5 bg-slate-900" />
            <div className="w-4 h-0.5 bg-slate-900" />
            <div className="w-4 h-0.5 bg-slate-900" />
          </div>
          <span className="font-heading uppercase tracking-widest font-black text-xl">EVLTN</span>
        </div>
        <div className="text-[9px] font-mono font-bold tracking-[0.25em] text-slate-600 uppercase">
          MARTIAL ARTS
        </div>
      </div>
    ),
  },
  {
    id: "nord",
    name: "North-Baltic Sea Logistics",
    borderColor: "bg-[#3B82F6]",
    bgGradient: "from-blue-500/10 to-sky-500/5",
    logoComponent: (
      <div className="flex items-center justify-center gap-2 text-slate-900">
        <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white font-black text-xs transform -rotate-6 shadow-sm">
          ▲
        </div>
        <div className="text-left leading-tight">
          <div className="font-heading font-black text-sm tracking-tight text-blue-950 uppercase">
            NORD-OSTSEE
          </div>
          <div className="text-[8px] font-mono font-semibold tracking-widest text-blue-600 uppercase">
            LOGISTIK
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cords",
    name: "Cord's Café",
    borderColor: "bg-[#4D6443]",
    bgGradient: "from-emerald-600/10 to-green-600/5",
    logoComponent: (
      <div className="text-center">
        <div className="font-serif italic font-extrabold text-2xl text-slate-800 tracking-wide">
          CORD&apos;S
        </div>
        <div className="font-serif text-lg font-normal text-slate-700 tracking-wider -mt-1">
          Café
        </div>
      </div>
    ),
  },
  {
    id: "you-next",
    name: "and many more",
    borderColor: "bg-[#A855F7]",
    bgGradient: "from-purple-600/10 to-pink-600/5",
    logoComponent: (
      <a
        href="#contact"
        className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-heading font-bold shadow-lg hover:scale-105 transition-transform"
      >
        <span>You next?</span>
        <span className="text-[#FDBA22] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
          ↗
        </span>
      </a>
    ),
  },
];

export default function TrustedCompaniesSection() {
  const marqueeItems = [...COMPANIES, ...COMPANIES];

  return (
    <section className="relative w-full bg-[#F6F6F3] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] py-20 lg:py-24 my-6 sm:my-10 border-t border-b border-[#E4E4E2] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Centered Editorial Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FB923C]">
            PROVEN TRACK RECORD
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#1F2937] tracking-tight">
            Trusted by Brands &amp; Growing Businesses
          </h3>
          <p className="text-base text-[#64748B] font-subheading">
            From high-growth startups to established local enterprises.
          </p>
        </div>

        {/* 4 Browser Showcase Cards Grid (Reference Image Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BROWSER_SHOWCASES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Browser Window Mockup Container */}
              <div className="w-full relative rounded-2xl bg-white p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-slate-200">
                
                {/* Thick Colored Outer Border Frame Header */}
                <div className={`w-full h-12 ${item.borderColor} rounded-t-xl px-3 pt-2 pb-1 flex items-center justify-between`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  </div>
                </div>

                {/* White Inner Browser Screen Viewport */}
                <div className={`w-full h-32 bg-gradient-to-b ${item.bgGradient} bg-white rounded-b-lg flex items-center justify-center p-4 border-t border-slate-100 group-hover:bg-slate-50/50 transition-colors`}>
                  {item.logoComponent}
                </div>
              </div>

              {/* Sub-label under card */}
              <span className="mt-3 text-xs font-heading font-semibold text-slate-700 group-hover:text-[#F97316] transition-colors text-center">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Global Tech Marquee Strip */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-6">
            INTEGRATED WITH MODERN TECH ECOSYSTEMS
          </div>

          <div className="relative w-full overflow-hidden py-2">
            <div className="flex w-max animate-marquee space-x-12 sm:space-x-16">
              {marqueeItems.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-lg sm:text-xl font-bold font-heading text-slate-400 grayscale hover:grayscale-0 hover:text-[#1F2937] hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none"
                >
                  <span>{comp.logo}</span>
                </div>
              ))}
            </div>

            {/* Side Fades */}
            <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#F6F6F3] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#F6F6F3] to-transparent pointer-events-none z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}
