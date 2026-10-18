"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Clock, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Website Development",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project scope.");
      }

      setFormSubmitted(true);
    } catch (err: any) {
      console.error("Contact Form Error:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#FAF8F5] rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[80px] rounded-b-none py-10 sm:py-12 lg:py-14 mt-4 sm:mt-6 mb-0 border-t border-[#E8DFD3] shadow-[0_-20px_60px_rgba(60,40,20,0.04)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DFCEBD] text-[#8C4E1D] text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#B46A28]" />
                START YOUR PROJECT
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F1610] tracking-tight">
                Let&apos;s Build Something <br />
                <span className="text-gradient-sun">Extraordinary.</span>
              </h2>

              <p className="text-base text-[#6B594C] font-subheading font-normal leading-relaxed">
                Ready to transform your wireframe blueprint into a digital reality? Reach out to our team today for a free proposal.
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] flex items-center justify-center text-[#B46A28]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8C4E1D] uppercase font-bold">EMAIL US DIRECTLY</div>
                  <a href="mailto:lumora.web.technologies@gmail.com" className="text-sm sm:text-base font-bold font-heading text-[#1F1610] hover:text-[#B46A28] transition-colors break-all">
                    lumora.web.technologies@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] flex items-center justify-center text-[#8C4A1D]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8C4E1D] uppercase font-bold">CALL / WHATSAPP</div>
                  <div className="text-sm sm:text-base font-bold font-heading text-[#1F1610]">
                    +91 96651 19803 / +91 83292 85087
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] flex items-center justify-center text-[#C97A32]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8C4E1D] uppercase font-bold">HEADQUARTERS LOCATION</div>
                  <div className="text-base font-bold font-heading text-[#1F1610]">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8C4E1D] bg-[#F4ECE1] border border-[#DFCEBD] px-3.5 py-2 rounded-full font-bold">
              <Clock className="w-4 h-4 text-[#B46A28]" />
              <span>Guaranteed Proposal Response Within 2 Hours</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#E8DFD3] shadow-[0_20px_50px_rgba(60,40,20,0.05)] relative overflow-hidden">
              
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#1F1610]">Message Sent Successfully!</h3>
                  <p className="text-[#6B594C] text-sm max-w-md mx-auto font-subheading leading-relaxed">
                    Thank you for your message! We have received your project details and forwarded a copy to <strong>lumorastudio02@gmail.com</strong>.
                  </p>
                  <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl font-mono inline-block">
                    ✓ Confirmation email sent to: <strong>{formData.email}</strong>. We will reach out ASAP!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-heading text-[#1F1610]">Launch Your Project</h3>
                    <p className="text-xs text-[#6B594C] font-subheading">Fill out the form below to get a technical estimate &amp; blueprint consultation.</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-600">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F1610] uppercase font-bold">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD3] text-[#1F1610] placeholder-[#A8988B] text-sm focus:outline-none focus:border-[#B46A28] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F1610] uppercase font-bold">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD3] text-[#1F1610] placeholder-[#A8988B] text-sm focus:outline-none focus:border-[#B46A28] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F1610] uppercase font-bold">Company Name</label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD3] text-[#1F1610] placeholder-[#A8988B] text-sm focus:outline-none focus:border-[#B46A28] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F1610] uppercase font-bold">Primary Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD3] text-[#1F1610] text-sm focus:outline-none focus:border-[#B46A28] focus:bg-white transition-colors"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI Automation">AI Automation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#1F1610] uppercase font-bold">Project Brief &amp; Requirements</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your project goals, timelines, and feature requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD3] text-[#1F1610] placeholder-[#A8988B] text-sm focus:outline-none focus:border-[#B46A28] focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-heading font-bold text-base text-white bg-gradient-to-r from-[#B45309] via-[#C97A32] to-[#8C4A1D] shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Project Scope...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Scope</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
