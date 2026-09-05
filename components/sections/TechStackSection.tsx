"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import LumoraLogo from "@/components/common/LumoraLogo";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend & AI" | "Cloud & DevOps" | "Animation & 3D";
  description: string;
  iconText: string;
  color: string;
}

const TECH_ITEMS: TechItem[] = [
  { name: "React", category: "Frontend", description: "UI Component Library", iconText: "⚛", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js 14", category: "Frontend", description: "App Router & SSR", iconText: "▲", color: "from-slate-200 to-slate-400" },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility Styling System", iconText: "🌊", color: "from-sky-400 to-cyan-500" },
  { name: "Node.js", category: "Backend & AI", description: "Scalable Event Runtime", iconText: "🟢", color: "from-emerald-400 to-green-600" },
  { name: "Python", category: "Backend & AI", description: "AI & Neural Pipelines", iconText: "🐍", color: "from-[#FDBA22] to-amber-600" },
  { name: "OpenAI API", category: "Backend & AI", description: "GPT-4o & LLM Automation", iconText: "🤖", color: "from-emerald-400 to-teal-500" },
  { name: "Claude 3.5", category: "Backend & AI", description: "Anthropic Intelligence", iconText: "🧠", color: "from-orange-400 to-amber-600" },
  { name: "Google Gemini", category: "Backend & AI", description: "Multimodal AI Models", iconText: "✨", color: "from-blue-400 to-purple-500" },
  { name: "PostgreSQL", category: "Backend & AI", description: "Relational Vector DB", iconText: "🐘", color: "from-blue-400 to-indigo-600" },
  { name: "MongoDB", category: "Backend & AI", description: "NoSQL Enterprise Storage", iconText: "🍃", color: "from-green-500 to-emerald-600" },
  { name: "Firebase", category: "Cloud & DevOps", description: "Realtime DB & Auth", iconText: "🔥", color: "from-[#FDBA22] to-red-500" },
  { name: "AWS Cloud", category: "Cloud & DevOps", description: "Serverless Global Hosting", iconText: "☁", color: "from-amber-500 to-orange-600" },
  { name: "Docker", category: "Cloud & DevOps", description: "Microservices Containers", iconText: "🐳", color: "from-blue-500 to-cyan-600" },
  { name: "GSAP", category: "Animation & 3D", description: "High Performance Motion", iconText: "⚡", color: "from-green-400 to-emerald-500" },
  { name: "Framer Motion", category: "Animation & 3D", description: "React Motion Components", iconText: "🔮", color: "from-purple-400 to-pink-500" },
  { name: "Three.js", category: "Animation & 3D", description: "3D WebGL Canvas Engine", iconText: "📐", color: "from-cyan-400 to-indigo-500" },
];

const CATEGORIES = ["All", "Frontend", "Backend & AI", "Cloud & DevOps", "Animation & 3D"];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech = activeCategory === "All"
    ? TECH_ITEMS
    : TECH_ITEMS.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="relative w-full bg-[#060816] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] py-20 lg:py-28 my-6 sm:my-10 border-t border-b border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-gradient-to-tr from-cyan-500/10 via-[#FDBA22]/10 to-purple-500/10 rounded-full blur-[140px] sm:blur-[160px] pointer-events-none" />

        <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold uppercase">
            <Cpu className="w-3.5 h-3.5 text-[#FDBA22]" />
            POWERING FUTURE-READY APPS
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            Our <span className="text-gradient-sun">Technology Orbit</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-subheading font-normal">
            We build with industry-leading frontend frameworks, enterprise cloud infrastructure, and state-of-the-art AI models.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-4 sm:pt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] text-slate-900 shadow-[0_0_20px_rgba(253,186,34,0.4)]"
                    : "glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Center Logo Showcase Badge */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="p-3 sm:p-4 px-6 sm:px-8 rounded-2xl sm:rounded-3xl glass-card-dark border border-[#FDBA22]/30 shadow-[0_0_40px_rgba(253,186,34,0.2)] flex items-center justify-center">
            <LumoraLogo variant="full" size="md" />
          </div>
        </div>

        {/* Tech Grid: 2 cols mobile -> 3 cols sm -> 4 cols lg -> 6 cols 2xl */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-6 gap-3 sm:gap-5">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative rounded-xl sm:rounded-2xl glass-card-dark p-3.5 sm:p-4 border border-cyan-500/20 hover:border-[#FDBA22]/50 hover:shadow-[0_0_30px_rgba(253,186,34,0.25)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${tech.color} p-[1px] shadow-md group-hover:scale-110 transition-transform shrink-0`}>
                <div className="w-full h-full bg-[#060816] rounded-[10px] flex items-center justify-center text-lg sm:text-xl font-bold">
                  {tech.iconText}
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm font-bold font-heading text-white group-hover:text-[#FDBA22] transition-colors truncate">
                  {tech.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-subheading truncate">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}
