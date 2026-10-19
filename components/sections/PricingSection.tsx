"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PlanItem {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const PLANS: PlanItem[] = [
  {
    name: "Starter",
    price: "₹9,999",
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
    price: "₹24,999",
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
    price: "₹49,999+",
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
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
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
                    {plan.price}
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

        </div>
      </div>
    </section>
  );
}
