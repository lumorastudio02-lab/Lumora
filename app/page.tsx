import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import HeroSection from '@/components/sections/HeroSection'
import TrustedCompaniesSection from '@/components/sections/TrustedCompaniesSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyLumoraSection from '@/components/sections/WhyLumoraSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection'
import TechStackSection from '@/components/sections/TechStackSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/sections/PricingSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Lumora Technologies — Transforming Ideas Into Digital Reality | AI Software Agency',
  description: 'Lumora Technologies designs future-ready websites, software, mobile apps, AI automation, and digital experiences that help businesses grow faster.',
}

export default function HomePage() {
  return (
    <div className="bg-[#060816] text-white min-h-screen selection:bg-[#FDBA22]/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main v2.0 Alternating Hybrid Theme Sections */}
      <main>
        {/* Section 1: Hero (Dark) */}
        <HeroSection />

        {/* Section 2: Trusted Companies (Warm White Floating Container) */}
        <TrustedCompaniesSection />

        {/* Section 3: Services (Dark Glass Cards with Blueprint Morphs) */}
        <ServicesSection />

        {/* Section 4: Why Lumora (Warm White Floating Container) */}
        <WhyLumoraSection />

        {/* Section 5: Process (Dark Interactive 5-Stage Screen Recording Simulator) */}
        <ProcessSection />

        {/* Section 6: Portfolio Showcase (Warm White Container with Before/After Slider) */}
        <FeaturedProjectsSection />

        {/* Section 7: Technology Stack Orbit (Dark) */}
        <TechStackSection />

        {/* Section 8: Case Studies & Metrics (Dark) */}
        <CaseStudiesSection />

        {/* Section 9: Testimonials (Warm White Container) */}
        <TestimonialsSection />

        {/* Section 10: Pricing & CTA (Dark with Lumora Sun Glow) */}
        <PricingSection />

        {/* Section 11: FAQ (Dark Accordion) */}
        <FaqSection />

        {/* Section 12: Contact Scope Form (Warm White Container) */}
        <ContactSection />
      </main>

      {/* Section 13 & 14: Master Footer (Warm White Curved Container) */}
      <Footer />
    </div>
  )
}
