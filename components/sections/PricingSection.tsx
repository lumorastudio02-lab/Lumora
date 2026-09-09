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
    <section id="pricing" className="relative my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto bg-[#050816] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-20 px-6 sm:px-12 border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
        {/* Background Lumora Sun Orange Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F59E0B]/15 via-purple-500/15 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            RECOMMENDED PRICING
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            Recommended Pricing <span className="bg-gradient-to-r from-[#F59E0B] via-cyan-400 to-purple-500 bg-clip-text text-transparent">For Your Website</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-subheading font-normal">
            Transparent, fixed-tier packages tailored for businesses of all scales.
          </p>

          {/* Interactive Currency Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner gap-1">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  currency === "INR"
                    ? "bg-gradient-to-r from-[#F59E0B] to-amber-500 text-slate-950 shadow-md scale-105"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>🇮🇳 INR (₹)</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrency("AUD")}
                className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  currency === "AUD"
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md scale-105"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>🇦🇺 AUD (A$)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? "glass-card border-2 border-[#F59E0B] shadow-[0_0_50px_rgba(245,158,11,0.35)] lg:-translate-y-4 bg-gradient-to-b from-[#F59E0B]/10 via-white/5 to-white/5"
                  : "glass-card border border-cyan-500/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F59E0B] via-amber-400 to-orange-500 text-slate-900 font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 font-subheading mt-2 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl sm:text-5xl font-extrabold font-mono tracking-tight ${
                    plan.highlighted ? "text-[#F59E0B]" : "text-gradient-cyan-purple"
                  }`}>
                    {currency === "INR" ? plan.priceINR : plan.priceAUD}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{plan.period}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">WHAT&apos;S INCLUDED:</p>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-subheading">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-[#F59E0B]/20 text-[#F59E0B]" : "bg-cyan-500/20 text-cyan-400"
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <Link
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-heading font-bold text-sm transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#F59E0B] via-amber-400 to-orange-500 text-slate-900 shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50"
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
        <div className="rounded-3xl glass-panel border border-cyan-500/30 p-8 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Lumora Technologies — AUD Pricing
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Dedicated Australian Dollar (AUD) rates for international clients
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              🇦🇺 AUD Official Table
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-subheading border-collapse">
              <thead>
                <tr className="border-b border-slate-700/80 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Plan</th>
                  <th className="py-4 px-6">Scope / Tier</th>
                  <th className="py-4 px-6 text-right">Pricing (AUD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm text-slate-200">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-blue-500 inline-block" />
                    Starter
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-400">Up to 5 Pages • Responsive Website • Basic SEO</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-cyan-300">A$250+</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors bg-amber-500/5">
                  <td className="py-4 px-6 font-bold flex items-center gap-2 text-[#F59E0B]">
                    <span className="w-3 h-3 rounded-sm bg-[#F59E0B] inline-block" />
                    Business Pro (MOST POPULAR)
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-300">Up to 10 Pages • Custom Design • CMS • DB • Support</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-[#F59E0B]">A$750+</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-purple-500 inline-block" />
                    Custom Solutions
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-400">Custom Software • Backend • APIs • Cloud • Support</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-purple-300">A$2,000</td>
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
