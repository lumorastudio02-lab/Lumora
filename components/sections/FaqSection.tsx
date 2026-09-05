"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is the typical development timeline for a project?",
    answer: "Most standard website and branding projects take 2 to 3 weeks. Complex full-stack software applications, SaaS dashboards, and mobile apps with AI integrations typically take 4 to 8 weeks depending on scope.",
  },
  {
    question: "How does Lumora integrate AI models into websites & apps?",
    answer: "We connect enterprise APIs (OpenAI GPT-4o, Claude 3.5, Gemini, custom vector embeddings) with secure serverless edge functions. This allows your app to deliver instant automated responses, intelligent recommendations, and AI workflows.",
  },
  {
    question: "What is the 'Skeleton → Reality' design process?",
    answer: "Every product starts as a wireframe blueprint where user journeys, component tokens, and architecture are mapped out in Figma. Once approved, the wireframe morphs into high-fidelity production reality with full code implementation.",
  },
  {
    question: "Do you provide ongoing hosting, SLA, and maintenance support?",
    answer: "Yes! We deploy to high-availability global serverless networks (Vercel, AWS) with 99.99% uptime guarantees. We provide monthly SLA maintenance, security audits, and continuous performance tuning.",
  },
  {
    question: "Can we start with a small MVP and expand later?",
    answer: "Absolutely. Many of our clients start with our Starter tier to validate their MVP blueprint. We build with modular React & Next.js architectures so scaling up to custom software and mobile apps is seamless.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto bg-[#050816] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-20 px-6 sm:px-12 border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Got <span className="text-gradient-cyan-purple">Questions?</span>
          </h2>

          <p className="text-lg text-slate-300 font-normal">
            Everything you need to know about working with Lumora Technologies.
          </p>
        </div>

        {/* Glass Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "glass-card border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-white/5"
                    : "glass-panel border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-bold font-heading text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-cyan-500/20" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
}
