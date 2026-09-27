import type { Metadata } from "next"
import { AboutNav } from "@/components/about/about-nav"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutDifference } from "@/components/about/about-difference"
import { AboutMetrics } from "@/components/about/about-metrics"
import { AboutPrinciples } from "@/components/about/about-principles"
import { AboutCta } from "@/components/about/about-cta"
import { AboutFooter } from "@/components/about/about-footer"
import { BackgroundCurves } from "@/components/home/background-curves"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "About Us — RR GROUP | Digital & Business Solutions",
  description:
    "Building digital solutions for real business growth. Learn about RR GROUP's journey, team, and principles.",
  openGraph: {
    title: "About Us — RR GROUP | Digital & Business Solutions",
    description:
      "Building digital solutions for real business growth. Learn about RR GROUP's journey, team, and principles.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#071B3A] selection:bg-[#EAF3FF] selection:text-[#1769FF]">
      {/* Subtle organic flowing background lines matching Reference 4 */}
      <BackgroundCurves />

      {/* 1. Single Floating Navbar */}
      <AboutNav />

      {/* 2. Compact Split Hero */}
      <AboutHero />

      {/* 3. Our Story */}
      <AboutStory />

      {/* 4. What Makes Us Different */}
      <AboutDifference />

      {/* 5. Compact Trust Metrics Strip */}
      <AboutMetrics />

      {/* 6. Our Principles */}
      <AboutPrinciples />

      {/* 7. Final Premium CTA */}
      <AboutCta />

      {/* 8. Corporate Footer */}
      <AboutFooter />
    </div>
  )
}