"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    price: "$2,499",
    period: "per project",
    description: "Ideal for early-stage startups and small businesses needing a high-converting web platform.",
    features: [
      "Custom Next.js & React Web App",
      "Figma UI/UX Design System",
      "SEO Optimization & Analytics",
      "Responsive Mobile Layouts",
      "2 Rounds of Revisions",
      "2 Weeks Delivery",
    ],
    highlighted: false,
    cta: "Start Starter Project",
  },
  {
    name: "Business Pro",
    price: "$5,999",
    period: "per project",
    description: "Full-scale custom software, AI automation pipelines, mobile app, and dedicated engineering team.",
    features: [
      "Full-Stack Web & Software System",
      "AI Pipeline Integration (OpenAI/Claude/Gemini)",
      "iOS & Android Mobile Application",
      "Apple Standard Micro-Interactions",
      "Cloud Serverless Architecture (AWS/Vercel)",
      "Dedicated Project Manager & 24/7 Support",
      "Unlimited Design Revisions",
    ],
    highlighted: true,
    cta: "Launch Business Pro",
  },
  {
    name: "Enterprise",
    price: "$12,499+",
    period: "custom scope",
    description: "Dedicated full-stack engineering team, custom LLM models, and SLA enterprise support.",
    features: [
      "Custom Enterprise AI Models & Fine-Tuning",
      "Microservices & Serverless Architecture",
      "SOC2 & Security Compliance Audit",
      "99.99% Guaranteed SLA Uptime",
      "Dedicated Senior Engineering Team",
      "White-Glove Onboarding & Training",
    ],
    highlighted: false,
    cta: "Contact Enterprise Sales",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto bg-[#050816] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-20 px-6 sm:px-12 border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
        {/* Background Lumora Sun Orange Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F59E0B]/15 via-purple-500/15 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            TRANSPARENT PRICING
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            Flexible <span className="bg-gradient-to-r from-[#F59E0B] via-cyan-400 to-purple-500 bg-clip-text text-transparent">Plans &amp; Pricing</span>
          </h2>

          <p className="text-lg text-slate-300 font-subheading font-normal">
            Choose the right tier to transform your wireframe blueprint into production reality.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
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
                  MOST POPULAR // FEATURED
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 font-subheading mt-1">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl sm:text-5xl font-extrabold font-mono tracking-tight ${
                    plan.highlighted ? "text-[#F59E0B]" : "text-gradient-cyan-purple"
                  }`}>
                    {plan.price}
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
      </div>
    </div>
  </section>
);
}
