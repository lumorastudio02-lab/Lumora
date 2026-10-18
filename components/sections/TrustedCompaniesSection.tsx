"use client";

import React from "react";
import { motion } from "framer-motion";

const COMPANIES = [
  { name: "Dreams Unlimited", logo: "🎓 Dreams Unlimited" },
  { name: "JBG Academy", logo: "🎨 JBG Academy" },
  { name: "Renuka Paramedical", logo: "🏥 Renuka Paramedical" },
  { name: "OpenAI", logo: "⚡ OpenAI" },
  { name: "Google", logo: "🔍 Google" },
  { name: "Microsoft", logo: "❖ Microsoft" },
  { name: "AWS", logo: "☁ AWS" },
  { name: "Stripe", logo: "💳 Stripe" },
  { name: "Vercel", logo: "▲ Vercel" },
  { name: "Shopify", logo: "🛍 Shopify" },
  { name: "GitHub", logo: "🐙 GitHub" },
];

const BROWSER_SHOWCASES = [
  {
    id: "dreams-unlimited",
    name: "Dreams Unlimited Consultancy",
    category: "Medical Admission Point",
    url: "https://www.dreamsunlimitedconsultancy.com/",
    borderColor: "bg-[#0F766E]",
    bgGradient: "from-teal-500/10 to-emerald-500/5",
    image: "/images/clients/dreams_unlimited.jpg",
  },
  {
    id: "jbg-academy",
    name: "JBG Academy of Design",
    category: "Design Institute • Pune",
    url: "https://www.jbgacademy.com/",
    borderColor: "bg-[#B45309]",
    bgGradient: "from-amber-500/10 to-orange-500/5",
    image: "/images/clients/jbg_academy.png",
  },
  {
    id: "renuka-paramedical",
    name: "Renuka Paramedical Institute",
    category: "Paramedical Institute • Baramati",
    borderColor: "bg-[#1D4ED8]",
    bgGradient: "from-blue-500/10 to-indigo-500/5",
    image: "/images/clients/renuka_paramedical.jpg",
  },
  {
    id: "you-next",
    name: "Partner With Lumora",
    category: "and many growing brands",
    borderColor: "bg-[#8C4A1D]",
    bgGradient: "from-[#B46A28]/10 to-[#8C4A1D]/5",
    logoComponent: (
      <a
        href="#contact"
        className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B45309] to-[#C97A32] text-white text-xs font-heading font-bold shadow-md hover:scale-105 transition-transform"
      >
        <span>You next?</span>
        <span className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
          ↗
        </span>
      </a>
    ),
  },
];

export default function TrustedCompaniesSection() {
  const marqueeItems = [...COMPANIES, ...COMPANIES];

  return (
    <section className="relative w-full bg-[#F4EFEA] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-10 sm:py-12 lg:py-14 my-3 sm:my-4 border-t border-b border-[#E8DFD3] shadow-[0_20px_60px_rgba(60,40,20,0.06)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Centered Editorial Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8C4E1D]">
            PROVEN TRACK RECORD
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#1F1610] tracking-tight">
            Trusted by Brands &amp; Growing Businesses
          </h3>
          <p className="text-base text-[#6B594C] font-subheading">
            From premier educational institutes to medical consultancies and growing enterprises.
          </p>
        </div>

        {/* 4 Browser Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 sm:mb-10">
          {BROWSER_SHOWCASES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col items-center"
            >
              {/* Browser Window Mockup Container */}
              <div className="w-full relative rounded-2xl bg-white p-1.5 shadow-[0_10px_30px_rgba(60,40,20,0.04)] group-hover:shadow-[0_20px_40px_rgba(60,40,20,0.08)] transition-all duration-300 border border-[#E8DFD3]">
                
                {/* Outer Border Frame Header */}
                <div className={`w-full h-10 ${item.borderColor} rounded-t-xl px-3 pt-1.5 pb-1 flex items-center justify-between`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/80" />
                    <span className="w-2 h-2 rounded-full bg-white/80" />
                    <span className="w-2 h-2 rounded-full bg-white/80" />
                  </div>
                  {item.url && (
                    <span className="text-[9px] font-mono font-semibold text-white/90">
                      LIVE ↗
                    </span>
                  )}
                </div>

                {/* White Inner Browser Screen Viewport */}
                <div className={`w-full h-36 bg-gradient-to-b ${item.bgGradient} bg-white rounded-b-lg flex items-center justify-center p-3 border-t border-[#E8DFD3] group-hover:bg-[#FAF8F5] transition-colors relative`}>
                  {item.image ? (
                    <a
                      href={item.url || "#contact"}
                      target={item.url ? "_blank" : undefined}
                      rel={item.url ? "noopener noreferrer" : undefined}
                      className="w-full h-full flex items-center justify-center relative group/img"
                      title={item.name}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-28 max-w-[88%] object-contain rounded-md transition-transform duration-300 group-hover/img:scale-105"
                      />
                    </a>
                  ) : (
                    item.logoComponent
                  )}
                </div>
              </div>

              {/* Sub-label under card */}
              <div className="mt-3 text-center">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-bold text-[#1F1610] hover:text-[#B46A28] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] text-[#B46A28]">↗</span>
                  </a>
                ) : (
                  <span className="text-xs font-heading font-bold text-[#1F1610]">
                    {item.name}
                  </span>
                )}
                <span className="block text-[11px] font-mono text-[#6B594C] mt-0.5">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Tech Marquee Strip */}
        <div className="pt-8 border-t border-[#E8DFD3]">
          <div className="text-center text-xs font-mono font-semibold uppercase tracking-wider text-[#9E8C7D] mb-6">
            INTEGRATED WITH MODERN TECH ECOSYSTEMS
          </div>

          <div className="relative w-full overflow-hidden py-2">
            <div className="flex w-max animate-marquee space-x-12 sm:space-x-16">
              {marqueeItems.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-lg sm:text-xl font-bold font-heading text-[#9E8C7D] grayscale hover:grayscale-0 hover:text-[#1F1610] hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none"
                >
                  <span>{comp.logo}</span>
                </div>
              ))}
            </div>

            {/* Side Fades */}
            <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#F4EFEA] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#F4EFEA] to-transparent pointer-events-none z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}
