import type { Metadata } from "next"
import { PortfolioNav } from "@/components/portfolio/portfolio-nav"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioMetrics } from "@/components/portfolio/portfolio-metrics"
import { PortfolioCta } from "@/components/portfolio/portfolio-cta"
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"
import { BackgroundCurves } from "@/components/home/background-curves"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — RR GROUP | Digital & Business Solutions",
  description:
    "Real projects across software, AI, infrastructure, marketing and real estate — with the outcomes that mattered. 500+ projects delivered with 98% client satisfaction.",
  openGraph: {
    title: "Portfolio & Case Studies — RR GROUP | Digital & Business Solutions",
    description:
      "Real projects across software, AI, infrastructure, marketing and real estate — with the outcomes that mattered. 500+ projects delivered with 98% client satisfaction.",
    type: "website",
  },
}

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#071A3A] selection:bg-[#EAF2FF] selection:text-[#1769FF]">
      {/* Subtle organic flowing background lines matching Home & Services */}
      <BackgroundCurves />

      {/* 1. Single Floating Navbar matching Home visual language with Portfolio active */}
      <PortfolioNav />

      {/* 2. Hero Section: Split layout with 3D Smartphone Analytics, floating metric badges (NO LAPTOP) */}
      <PortfolioHero />

      {/* 3. Category Filters + 6 Premium Case Studies Grid */}
      <PortfolioGrid />

      {/* 4. Compact Metrics Strip (200+, 500+, 4+, 98%) */}
      <PortfolioMetrics />

      {/* 5. Final Gradient CTA with WhatsApp and Quote Buttons */}
      <PortfolioCta />

      {/* 6. Corporate Warm Cream Footer matching Home/Services */}
      <PortfolioFooter />
    </div>
  )
}
