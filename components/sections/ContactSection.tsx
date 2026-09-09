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
    <section id="contact" className="relative w-full bg-[#F6F6F3] rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[100px] rounded-b-none py-20 lg:py-28 mt-10 sm:mt-16 mb-0 border-t border-[#E4E4E2] shadow-[0_-20px_60px_rgba(0,0,0,0.06)] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FB923C]/10 border border-[#FB923C]/30 text-[#F97316] text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                START YOUR PROJECT
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#1F2937] tracking-tight">
                Let&apos;s Build Something <br />
                <span className="text-gradient-sun">Extraordinary.</span>
              </h2>

              <p className="text-base text-[#64748B] font-subheading font-normal leading-relaxed">
                Ready to transform your wireframe blueprint into a digital reality? Reach out to our team today for a free proposal.
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E4E4E2] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#64748B] uppercase font-bold">EMAIL US DIRECTLY</div>
                  <a href="mailto:lumora.web.technology@gmail.com" className="text-sm sm:text-base font-bold font-heading text-[#1F2937] hover:text-[#F97316] transition-colors break-all">
                    lumora.web.technology@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E4E4E2] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#64748B] uppercase font-bold">CALL / WHATSAPP</div>
                  <div className="text-sm sm:text-base font-bold font-heading text-[#1F2937]">
                    +91 96651 19803 / +91 83292 85087
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E4E4E2] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#F97316]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#64748B] uppercase font-bold">HEADQUARTERS LOCATION</div>
                  <div className="text-base font-bold font-heading text-[#1F2937]">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-full font-bold">
              <Clock className="w-4 h-4" />
              <span>Guaranteed Proposal Response Within 2 Hours</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#E4E4E2] shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
              
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#1F2937]">Message Sent Successfully!</h3>
                  <p className="text-[#64748B] text-sm max-w-md mx-auto font-subheading leading-relaxed">
                    Thank you for sent query! We have received your project details and forwarded a copy to <strong>lumorastudio02@gmail.com</strong>.
                  </p>
                  <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl font-mono inline-block">
                    ✓ Confirmation email sent to: <strong>{formData.email}</strong>. We will reach out ASAP!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-heading text-[#1F2937]">Launch Your Project</h3>
                    <p className="text-xs text-[#64748B] font-subheading">Fill out the form below to get a technical estimate &amp; blueprint consultation.</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-600">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F2937] uppercase font-bold">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F2937] uppercase font-bold">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F2937] uppercase font-bold">Company Name</label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#1F2937] uppercase font-bold">Primary Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#1F2937] text-sm focus:outline-none focus:border-[#F97316] transition-colors"
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
                    <label className="text-xs font-mono text-[#1F2937] uppercase font-bold">Project Brief &amp; Requirements</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your project goals, timelines, and feature requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-heading font-bold text-base text-slate-900 bg-gradient-to-r from-[#FDBA22] via-[#FB923C] to-[#EF4444] shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70"
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
