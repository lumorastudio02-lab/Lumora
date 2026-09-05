"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    company: "TechStart Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    review: "Lumora Technologies delivered an exceptional platform for our AI startup. Their attention to detail, speed of execution, and visual aesthetics are truly world-class!",
  },
  {
    name: "Michael Chen",
    role: "VP of Product",
    company: "GrowthLab SaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    review: "Professional, creative, and extremely reliable. Our web application performance skyrocketed after Lumora rebuilt our full-stack architecture with Next.js.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    company: "InnovateCo",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    review: "The UI/UX design system transformed our business. Every component feels polished like Apple & Vercel. Highly recommended for any serious technology brand!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full bg-[#F6F6F3] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] py-20 lg:py-28 my-6 sm:my-10 border-t border-b border-[#E4E4E2] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FB923C]/10 border border-[#FB923C]/30 text-[#F97316] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            CLIENT REVIEWS
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F2937] tracking-tight">
            What Our <span className="text-gradient-sun">Clients Say</span>
          </h2>

          <p className="text-lg text-[#64748B] font-subheading font-normal">
            Trusted by founders, product leaders, and global technology businesses worldwide.
          </p>
        </div>

        {/* 3D Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-white p-8 border border-[#E4E4E2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#FB923C]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Lumora Sun Orange Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#FDBA22]/15 border border-[#FDBA22]/30 flex items-center justify-center text-[#F97316]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-base text-[#1F2937] leading-relaxed font-subheading italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FB923C] shadow-md"
                />
                <div>
                  <h4 className="text-base font-bold font-heading text-[#1F2937] group-hover:text-[#F97316] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#64748B] font-mono">
                    {t.role}, <span className="text-[#F97316] font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}