"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles, ExternalLink } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
  website?: string;
  badge?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dreams Unlimited Consultancy",
    role: "Medical Admission Consultancy",
    company: "dreamsunlimitedconsultancy.com",
    avatar: "/images/clients/dreams_unlimited.jpg",
    website: "https://www.dreamsunlimitedconsultancy.com/",
    badge: "Verified Client",
    rating: 5,
    review:
      "We had a great experience working with Lumora Technologies. They created a professional, modern, and user-friendly website for Dreams Unlimited Consultancy. The team understood our requirements well and provided great support throughout the project. Highly recommended!",
  },
  {
    name: "JBG Academy of Design",
    role: "Design & Creative Institute",
    company: "jbgacademy.com",
    avatar: "/images/clients/jbg_academy.png",
    website: "https://www.jbgacademy.com/",
    badge: "Verified Client",
    rating: 5,
    review:
      "The team at Lumora Studios has done an excellent job creating a perfect website for us. As a design institute, we teach students the importance of creativity, aesthetics, and presentation — and the Lumora team truly understood that vision. They created a premium-looking website that perfectly represents our institute and our design philosophy. What impressed us the most was their professionalism, creativity, attention to detail, and the fact that they delivered such quality work within budget. Thank you so much to the entire team of Lumora Studios for your dedication and support. Wishing you great success ahead!",
  },
  {
    name: "Renuka Paramedical Institute",
    role: "Paramedical Healthcare Institute",
    company: "Baramati, Maharashtra",
    avatar: "/images/clients/renuka_paramedical.jpg",
    badge: "Verified Client",
    rating: 5,
    review:
      "Lumora Technologies delivered an outstanding digital platform for Renuka Paramedical Institute Baramati. The portal made course information, syllabus details, and student admission inquiries seamless and accessible. Their technical execution, responsiveness, and dedication to excellence were truly commendable!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full bg-[#FAF8F5] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] py-10 sm:py-12 lg:py-14 my-3 sm:my-4 border-t border-b border-[#E8DFD3] shadow-[0_20px_60px_rgba(60,40,20,0.06)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DFCEBD] text-[#8C4E1D] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B46A28]" />
            CLIENT REVIEWS &amp; SUCCESS STORIES
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F1610] tracking-tight">
            What Our <span className="text-gradient-sun">Clients Say</span>
          </h2>

          <p className="text-lg text-[#6B594C] font-subheading font-normal">
            Trusted by educational institutes, medical consultancies, and growing businesses.
          </p>
        </div>

        {/* 3D Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-[#E8DFD3] shadow-[0_10px_30px_rgba(60,40,20,0.04)] hover:shadow-[0_20px_50px_rgba(60,40,20,0.08)] hover:border-[#B46A28]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Top Row: Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] border border-[#DFCEBD] flex items-center justify-center text-[#B46A28]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-[15px] text-[#1F1610] leading-relaxed font-subheading italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author Info & Client Logo */}
              <div className="pt-6 mt-6 border-t border-[#E8DFD3] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 min-w-[52px] h-[52px] rounded-2xl bg-[#FAF8F5] p-1 border border-[#DFCEBD] shadow-sm flex items-center justify-center overflow-hidden">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold font-heading text-[#1F1610] group-hover:text-[#B46A28] transition-colors leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#6B594C] font-mono mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {t.website && (
                  <a
                    href={t.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 rounded-xl bg-[#F4ECE1] hover:bg-[#B46A28] text-[#8C4E1D] hover:text-white border border-[#DFCEBD] transition-all"
                    title={`Visit ${t.name} website`}
                    aria-label={`Visit ${t.name} website`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}