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
    <div className="bg-[#FAF8F5] text-[#1F1610] min-h-screen selection:bg-[#B46A28]/20 selection:text-[#1F1610]">
      {/* Navigation */}
      <Navbar />

      {/* Main Milky & Warm Brown Luxury Theme Sections */}
      <main>
        {/* Section 1: Hero (Milky Alabaster & Warm Amber Ambient Mesh) */}
        <HeroSection />

        {/* Section 2: Trusted Companies (Warm Latte Floating Marquee) */}
        <TrustedCompaniesSection />

        {/* Section 3: Services (Milky Surfaces with Bronze/Caramel Badges) */}
        <ServicesSection />

        {/* Section 4: Why Lumora (Warm Latte Elevated Bento Grid) */}
        <WhyLumoraSection />

        {/* Section 5: Process (Interactive 5-Stage Screen Simulator) */}
        <ProcessSection />

        {/* Section 6: Portfolio Showcase (Warm White Container with Draggable Before/After Slider) */}
        <FeaturedProjectsSection />

        {/* Section 7: Technology Stack Grid (Warm Milky Cards with Espresso Badges) */}
        <TechStackSection />

        {/* Section 8: Case Studies & Benchmark Terminal (Elevated Warm Latte Container) */}
        <CaseStudiesSection />

        {/* Section 9: Testimonials (Milky Canvas with Warm Caramel Quote Badges) */}
        <TestimonialsSection />

        {/* Section 10: Recommended Pricing */}
        <PricingSection />

        {/* Section 11: FAQ Accordions (Warm Latte Container with Caramel Chevrons) */}
        <FaqSection />

        {/* Section 12: Contact Scope Form (Full-Stack Inquiry & Blueprint Dispatch) */}
        <ContactSection />
      </main>

      {/* Section 13 & 14: Master Footer (Warm Latte Curved Container & Live Clock) */}
      <Footer />
    </div>
  )
}
