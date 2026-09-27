import type { Metadata } from "next"
import { HomeNav } from "@/components/home/home-nav"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyUsSection } from "@/components/home/why-us-section"
import { EcosystemSection } from "@/components/home/ecosystem-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FaqSection } from "@/components/home/faq-section"
import { CtaBanner } from "@/components/home/cta-banner"
import { HomeFooter } from "@/components/home/home-footer"
import { BackgroundCurves } from "@/components/home/background-curves"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "RR GROUP — Digital Technology & Business Solutions",
  description:
    "Transforming ideas into digital solutions. Web development, ERP, CRM, and digital marketing systems built for real business outcomes.",
  openGraph: {
    title: "RR GROUP — Digital Technology & Business Solutions",
    description:
      "Transforming ideas into digital solutions. Web development, ERP, CRM, and digital marketing systems built for real business outcomes.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#071B3A] selection:bg-[#EAF3FF] selection:text-[#1769FF]">
      {/* Subtle organic flowing background lines */}
      <BackgroundCurves />

      {/* 1. Floating Navbar */}
      <HomeNav />

      {/* 2. Hero & 3. Hero Stats */}
      <HeroSection />

      {/* 4. Services */}
      <ServicesSection />

      {/* 5. Why RR Group */}
      <WhyUsSection />

      {/* 6. Digital Ecosystem */}
      <EcosystemSection />

      {/* 7. Selected Work / Portfolio */}
      <PortfolioSection />

      {/* 8. Process */}
      <ProcessSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ */}
      <FaqSection />

      {/* 11. Final CTA */}
      <CtaBanner />

      {/* 12. Footer */}
      <HomeFooter />
    </div>
  )
}
