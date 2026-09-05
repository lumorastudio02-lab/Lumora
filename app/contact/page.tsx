'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/animations/Reveal'

const services = ['Website Design', 'Website Development', 'Brand Identity', 'Full Package']
const budgets = ['Under ₹30k', '₹30k – ₹60k', '₹60k – ₹1L', '₹1L+']

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [budget, setBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const toggle = (val: string) =>
    setSelected(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 md:px-10 bg-white">
        <Reveal>
          <p className="text-gray-500 text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-800 inline-block" />
            Let's Talk
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display font-bold text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight text-gray-900 mb-6 max-w-3xl">
            Tell us about your{' '}
            <span className="italic text-gray-700">brand.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            Fill out the form below and we'll get back to you within 24 hours. If you'd rather talk first, drop us an email at{' '}
            <a href="mailto:hello@lumora.in" className="text-gray-700 hover:text-gray-900 hover:underline">hello@lumora.in</a>.
          </p>
        </Reveal>
      </section>

      {/* Form + Info */}
      <section className="pb-28 max-w-[1400px] mx-auto px-6 md:px-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* Form */}
          <Reveal>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Your name', key: 'name', type: 'text', placeholder: 'Priya Sharma' },
                      { label: 'Email address', key: 'email', type: 'email', placeholder: 'priya@example.com' },
                    ].map(field => (
                      <div key={field.key}>
                        <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                          {field.label}
                        </label>
                        <input
                          required
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                      Business / Brand name
                    </label>
                    <input
                      type="text"
                      placeholder="Rasa Restaurant, Bloom Boutique…"
                      value={form.company}
                      onChange={e => setForm(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-widest mb-4">
                      What are you looking for?
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {services.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          className={`px-4 py-2.5 rounded-full text-sm border transition-all duration-200 ${
                            selected.includes(s)
                              ? 'bg-gray-900 text-white border-gray-900'
                              : 'border-gray-300 text-gray-600 hover:border-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-widest mb-4">
                      Approximate budget
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgets.map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`px-4 py-2.5 rounded-full text-sm border transition-all duration-200 ${
                            budget === b
                              ? 'bg-gray-900 text-white border-gray-900'
                              : 'border-gray-300 text-gray-600 hover:border-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="What's the brand, what are you trying to achieve, any timeline…"
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors duration-300"
                  >
                    <span>Send message</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
                      <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gray-50 rounded-3xl border border-gray-200 p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-6">
                    <span className="text-gray-600 text-2xl">✦</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl text-gray-900 mb-4">
                    Message received!
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                    We'll review your brief and get back to you within 24 hours. In the meantime, feel free to browse our work.
                  </p>
                  <div className="mt-8 flex gap-3 justify-center">
                    <a href="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                      <span>View our work</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Info sidebar */}
          <Reveal delay={0.2} direction="left">
            <div className="space-y-8 lg:sticky lg:top-28">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Email</p>
                  <a href="mailto:hello@lumora.in" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                    hello@lumora.in
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-900 text-sm hover:text-gray-700 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Location</p>
                  <p className="text-gray-900 text-sm">Pune, Maharashtra, India</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Response time</p>
                  <p className="text-gray-900 text-sm">Within 24 hours</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <p className="text-gray-900 font-semibold text-sm mb-3">Follow our work</p>
                <div className="space-y-2">
                  {['Instagram', 'Behance', 'LinkedIn'].map(p => (
                    <a
                      key={p}
                      href="#"
                      className="flex items-center justify-between text-gray-500 hover:text-gray-900 text-sm py-2 border-b border-gray-200 last:border-0 transition-colors group"
                    >
                      {p}
                      <svg width="11" height="11" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}