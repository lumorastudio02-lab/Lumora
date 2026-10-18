"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

interface PlanItem {
  name: string;
  priceINR: string;
  priceAUD: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const PLANS: PlanItem[] = [
  {
    name: "Starter",
    priceINR: "₹9,999",
    priceAUD: "A$250+",
    period: "starting price",
    description: "Ideal for small businesses and startups that need a professional online presence.",
    features: [
      "Custom Responsive Website",
      "Up to 5 Pages",
      "Modern UI/UX Design",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact / WhatsApp Integration",
      "2 Rounds of Revisions",
    ],
    highlighted: false,
    cta: "Select Starter Plan",
  },
  {
    name: "Business Pro",
    priceINR: "₹24,999",
    priceAUD: "A$750+",
    period: "starting price",
    description: "Perfect for growing businesses that need a powerful website or custom digital solution.",
    features: [
      "Custom Website Design & Development",
      "Up to 10 Pages",
      "Advanced UI/UX Design",
      "CMS / Admin Panel",
      "SEO Optimization",
      "Forms & Lead Management",
      "Database Integration",
      "Performance Optimization",
      "Deployment & Support",
    ],
    highlighted: true,
    cta: "Select Business Pro",
  },
  {
    name: "Custom Solutions",
    priceINR: "₹49,999+",
    priceAUD: "A$2,000",
    period: "custom scope",
    description: "For businesses that need custom software, web applications, billing systems, or mobile apps.",
    features: [
      "Custom Software Development",
      "Database & Backend Development",
      "Admin Dashboard",
      "User Authentication",
      "Custom Business Features",
      "API Integrations",
      "Cloud Deployment",
      "Ongoing Support Available",
    ],
    highlighted: false,
    cta: "Get Custom Quote",
  },
];

export default function PricingSection() {
  const [currency, setCurrency] = useState<"INR" | "AUD">("INR");

  return (
    <section id="pricing" className="relative my-3 sm:my-4 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto bg-[#FAF8F5] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-10 sm:py-12 lg:py-14 px-6 sm:px-12 border border-[#E8DFD3] shadow-[0_20px_60px_rgba(60,40,20,0.06)] overflow-hidden relative">
        {/* Background Warm Amber Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#E8D4BE]/25 via-[#F3E5D4]/35 to-[#DFC7AF]/25 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DFCEBD] text-[#8C4E1D] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B46A28]" />
            RECOMMENDED PRICING
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#1F1610] tracking-tight">
            Recommended Pricing <span className="text-gradient-sun">For Your Website</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B594C] font-subheading font-normal">
            Transparent, fixed-tier packages tailored for businesses of all scales.
          </p>

          {/* Interactive Currency Switcher */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-[#F4EFEA] border border-[#E8DFD3] shadow-inner gap-1">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  currency === "INR"
                    ? "bg-gradient-to-r from-[#B45309] to-[#C97A32] text-white shadow-md scale-105"
                    : "text-[#6B594C] hover:text-[#1F1610]"
                }`}
              >
                <span>🇮🇳 INR (₹)</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrency("AUD")}
                className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  currency === "AUD"
                    ? "bg-gradient-to-r from-[#B45309] to-[#C97A32] text-white shadow-md scale-105"
                    : "text-[#6B594C] hover:text-[#1F1610]"
                }`}
              >
                <span>🇦🇺 AUD (A$)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-12">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white border-2 border-[#B46A28] shadow-[0_15px_45px_rgba(180,106,40,0.16)] lg:-translate-y-4"
                  : "bg-white border border-[#E8DFD3] shadow-[0_8px_25px_rgba(60,40,20,0.04)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D] text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1F1610]">{plan.name}</h3>
                  <p className="text-xs text-[#6B594C] font-subheading mt-2 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl sm:text-5xl font-extrabold font-mono tracking-tight ${
                    plan.highlighted ? "text-[#B45309]" : "text-gradient-sun"
                  }`}>
                    {currency === "INR" ? plan.priceINR : plan.priceAUD}
                  </span>
                  <span className="text-xs font-mono text-[#7D6B5D]">{plan.period}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-[#E8DFD3]">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C4E1D]">WHAT&apos;S INCLUDED:</p>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#5C4B3E] font-subheading">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-[#F4ECE1] text-[#B45309]" : "bg-[#F4ECE1] text-[#8C4E1D]"
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E8DFD3]">
                <Link
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-heading font-bold text-sm transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D] text-white shadow-md hover:shadow-lg"
                      : "bg-[#F4ECE1] border border-[#DFCEBD] text-[#1F1610] hover:bg-white hover:border-[#B46A28]"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lumora Technologies — AUD Pricing Table Breakdown (PDF Page 3) */}
        <div className="rounded-3xl bg-white border border-[#E8DFD3] shadow-[0_10px_35px_rgba(60,40,20,0.04)] p-8 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8DFD3]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] border border-[#DFCEBD] flex items-center justify-center text-[#B46A28]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#1F1610]">
                  Lumora Technologies — AUD Pricing
                </h3>
                <p className="text-xs text-[#6B594C] font-mono">
                  Dedicated Australian Dollar (AUD) rates for international clients
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              🇦🇺 AUD Official Table
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-subheading border-collapse">
              <thead>
                <tr className="border-b border-[#E8DFD3] text-xs font-mono text-[#8C4E1D] uppercase tracking-wider">
                  <th className="py-4 px-6">Plan</th>
                  <th className="py-4 px-6">Scope / Tier</th>
                  <th className="py-4 px-6 text-right">Pricing (AUD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD3]/80 text-sm text-[#1F1610]">
                <tr className="hover:bg-[#FAF8F5] transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#B46A28] inline-block" />
                    Starter
                  </td>
                  <td className="py-4 px-6 text-xs text-[#6B594C]">Up to 5 Pages • Responsive Website • Basic SEO</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-[#8C4E1D]">A$250+</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5] transition-colors bg-[#FAF6F0]">
                  <td className="py-4 px-6 font-bold flex items-center gap-2 text-[#B45309]">
                    <span className="w-3 h-3 rounded-sm bg-[#B45309] inline-block" />
                    Business Pro (MOST POPULAR)
                  </td>
                  <td className="py-4 px-6 text-xs text-[#6B594C]">Up to 10 Pages • Custom Design • CMS • DB • Support</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-[#B45309]">A$750+</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5] transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#8C4A1D] inline-block" />
                    Custom Solutions
                  </td>
                  <td className="py-4 px-6 text-xs text-[#6B594C]">Custom Software • Backend • APIs • Cloud • Support</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-[#8C4A1D]">A$2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
