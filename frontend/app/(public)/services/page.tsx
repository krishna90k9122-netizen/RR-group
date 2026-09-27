import type { Metadata } from "next"
import { ServicesNav } from "@/components/services/services-nav"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesWhyChoose } from "@/components/services/services-why-choose"
import { ServicesProcess } from "@/components/services/services-process"
import { ServicesCta } from "@/components/services/services-cta"
import { ServicesFooter } from "@/components/services/services-footer"
import { BackgroundCurves } from "@/components/home/background-curves"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Services — RR GROUP | Digital & Business Solutions",
  description:
    "Four connected digital business solutions: Web Development, ERP Solutions, CRM Solutions, and Digital Marketing engineered for measurable growth.",
  openGraph: {
    title: "Services — RR GROUP | Digital & Business Solutions",
    description:
      "Four connected digital business solutions: Web Development, ERP Solutions, CRM Solutions, and Digital Marketing engineered for measurable growth.",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#071A3A] selection:bg-[#EAF2FF] selection:text-[#2563EB]">
      {/* Subtle organic flowing background lines matching Home & About */}
      <BackgroundCurves />

      {/* 1. Single Floating Navbar */}
      <ServicesNav />

      {/* 2. Hero Section */}
      <ServicesHero />

      {/* 3. Four Main Services (2x2 Grid) */}
      <ServicesGrid />

      {/* 4. Why Choose Us */}
      <ServicesWhyChoose />

      {/* 5. Our Process (4 Connected Steps) */}
      <ServicesProcess />

      {/* 6. Final Premium CTA */}
      <ServicesCta />

      {/* 7. Corporate Footer */}
      <ServicesFooter />
    </div>
  )
}
