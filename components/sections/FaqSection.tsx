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
    <section id="faq" className="relative my-3 sm:my-4 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto bg-[#F4EFEA] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-10 sm:py-12 lg:py-14 px-6 sm:px-12 border border-[#E8DFD3] shadow-[0_20px_60px_rgba(60,40,20,0.06)] overflow-hidden relative">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#E8D4BE]/30 via-[#F3E5D4]/40 to-[#DFC7AF]/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DFCEBD] text-[#8C4E1D] text-xs font-mono font-bold uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#B46A28]" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F1610] tracking-tight">
            Got <span className="text-gradient-sun">Questions?</span>
          </h2>

          <p className="text-lg text-[#6B594C] font-normal">
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
                    ? "bg-white border-[#B46A28] shadow-[0_10px_30px_rgba(180,106,40,0.12)]"
                    : "bg-white/80 hover:bg-white border-[#E8DFD3] shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-bold font-heading text-[#1F1610]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-gradient-to-r from-[#B45309] to-[#C97A32] text-white shadow-sm" : "bg-[#F4ECE1] text-[#8C4E1D]"
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
                      <div className="p-6 pt-0 text-sm text-[#6B594C] leading-relaxed border-t border-[#E8DFD3]/70">
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
