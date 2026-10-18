"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Award, Activity, Sparkles, CheckCircle2, Layers, Cpu, Smartphone, Code } from "lucide-react";

const PDF_FEATURES = [
  {
    tag: "MULTIPLE",
    title: "Digital Projects",
    description: "Websites, UI/UX & Software Solutions",
    icon: Layers,
    color: "text-amber-400",
    border: "border-amber-500/30",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    tag: "CUSTOM",
    title: "Business Solutions",
    description: "Built Around Real Client Requirements",
    icon: Cpu,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    tag: "MODERN",
    title: "Technology Stack",
    description: "React • Next.js • WordPress • Supabase",
    icon: Code,
    color: "text-purple-400",
    border: "border-purple-500/30",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    tag: "RESPONSIVE",
    title: "Cross-Device Experience",
    description: "Designed for Mobile & Desktop",
    icon: Smartphone,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
];

const METRICS = [
  { label: "Speed Improvement", value: "+340%", subtext: "Lighthouse Performance 99+", icon: Zap, color: "text-cyan-400", border: "border-cyan-500/30" },
  { label: "Conversion Increase", value: "+148%", subtext: "Organic Checkout Conversion", icon: TrendingUp, color: "text-purple-400", border: "border-purple-500/30" },
  { label: "UI Quality Score", value: "99.8%", subtext: "Figma Tokens Consistency", icon: Award, color: "text-pink-400", border: "border-pink-500/30" },
  { label: "Uptime SLA", value: "99.99%", subtext: "Serverless Cloud Mesh Uptime", icon: Activity, color: "text-emerald-400", border: "border-emerald-500/30" },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative my-3 sm:my-4 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto bg-[#F4EFEA] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-10 sm:py-12 lg:py-14 px-6 sm:px-12 border border-[#E8DFD3] shadow-[0_20px_60px_rgba(60,40,20,0.06)] overflow-hidden relative">
        {/* Background Ambient Glow */}
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[300px] bg-gradient-to-r from-[#E8D4BE]/25 to-[#DFC7AF]/20 blur-[140px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Section Header (PDF Page 1 Specification) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DFCEBD] text-[#8C4E1D] text-xs font-mono font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B46A28]" />
            PROVEN IMPACT
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#1F1610] tracking-tight">
            PROVEN <span className="text-gradient-sun">WORK</span>
          </h2>

          <p className="text-xl sm:text-2xl text-[#8C4E1D] font-semibold font-heading">
            Projects Built for Real Businesses
          </p>
        </div>

        {/* 4 Feature Highlights Cards (From PDF Page 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PDF_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-white p-6 border border-[#E8DFD3] shadow-[0_8px_25px_rgba(60,40,20,0.04)] flex flex-col justify-between space-y-4 hover:border-[#B46A28]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] border border-[#DFCEBD] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#B46A28]" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#F4ECE1] text-[#8C4E1D] border border-[#DFCEBD]">
                    ✦ {feat.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-[#1F1610]">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#6B594C] font-subheading mt-1 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Verified Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-white p-6 border border-[#E8DFD3] shadow-[0_8px_25px_rgba(60,40,20,0.04)] flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] border border-[#DFCEBD] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#8C4A1D]" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 font-bold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <div className="text-4xl font-extrabold font-mono text-gradient-sun tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-base font-bold font-heading text-[#1F1610] mt-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-[#7D6B5D] mt-1">
                    {metric.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width Case Study Blueprint Breakdown Container */}
        <div className="rounded-3xl bg-white border border-[#E8DFD3] shadow-[0_10px_35px_rgba(60,40,20,0.05)] p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8C4E1D]">
                FEATURED CASE STUDY // FINTECH PLATFORM
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1F1610]">
                How We Re-engineered FinTech SaaS to Handle 5M+ Daily Transactions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#6B594C] pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B46A28] shrink-0 mt-0.5" />
                  <span><strong>Problem:</strong> Slow legacy codebase causing 4.2s page load latencies and high drop-offs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8C4A1D] shrink-0 mt-0.5" />
                  <span><strong>Solution:</strong> Migrated to Next.js App Router, edge API functions, and serverless vector caching.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#241A14] text-[#FAF8F5] rounded-2xl border border-[#3E2C20] p-6 font-mono text-xs space-y-3 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#3E2C20] pb-2 text-[#C97A32] font-bold">
                <span>// PERFORMANCE BENCHMARK</span>
                <span className="text-emerald-400">PASSED 100%</span>
              </div>
              <div className="space-y-1 text-slate-300">
                <div className="flex justify-between"><span>First Contentful Paint:</span> <span className="text-emerald-400 font-bold">0.18s</span></div>
                <div className="flex justify-between"><span>Time to Interactive:</span> <span className="text-emerald-400 font-bold">0.42s</span></div>
                <div className="flex justify-between"><span>Cumulative Layout Shift:</span> <span className="text-emerald-400 font-bold">0.000</span></div>
                <div className="flex justify-between"><span>Lighthouse Security:</span> <span className="text-[#C97A32] font-bold">100/100</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);
}
