"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Layout, Server, Sparkles, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    title: "AI Powered Solutions",
    description: "Integrated artificial intelligence models, automated code generation, and neural reasoners that accelerate time-to-market.",
    badge: "Next-Gen AI",
  },
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description: "Rapid 2x agile sprints, modular UI design tokens, and CI/CD automated deployments without compromising quality.",
    badge: "2x Delivery Speed",
  },
  {
    icon: Layout,
    title: "Modern UI/UX Systems",
    description: "Apple and Framer standard interfaces, fluid 60fps micro-interactions, responsive grids, and accessible design tokens.",
    badge: "Award-Winning UI",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description: "Cloud serverless infrastructures, microservices mesh, 99.99% uptime SLA, and enterprise security compliance.",
    badge: "99.99% Uptime",
  },
];

export default function WhyLumoraSection() {
  return (
    <section id="why-lumora" className="relative w-full bg-[#F6F6F3] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] py-20 lg:py-28 my-6 sm:my-10 border-t border-b border-[#E4E4E2] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FB923C]/10 border border-[#FB923C]/30 text-[#F97316] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            THE LUMORA ADVANTAGE
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F2937] tracking-tight">
            Why <span className="text-gradient-sun">Lumora Technologies?</span>
          </h2>

          <p className="text-lg text-[#64748B] font-subheading font-normal">
            We fuse futuristic artificial intelligence with engineering craftsmanship to build software that scales effortlessly.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white p-6 border border-[#E4E4E2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#FB923C]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Wrapper with Lumora Sun Orange Gradient */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FDBA22] via-[#FB923C] to-[#EF4444] p-[1px] shadow-md group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-[#1F2937] rounded-[15px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-[#FDBA22]" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-[#1F2937]">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-[#1F2937] group-hover:text-[#F97316] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#64748B] font-subheading leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#F97316]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise Grade</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
