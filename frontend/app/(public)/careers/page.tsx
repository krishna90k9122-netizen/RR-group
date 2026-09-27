import type { Metadata } from "next"
import { CareersNav } from "@/components/careers/careers-nav"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersRoles } from "@/components/careers/careers-roles"
import { CareersWhatsappCta } from "@/components/careers/careers-whatsapp-cta"
import { CareersCta } from "@/components/careers/careers-cta"
import { CareersFooter } from "@/components/careers/careers-footer"
import { BackgroundCurves } from "@/components/home/background-curves"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Careers — RR GROUP | Digital & Business Solutions",
  description:
    "Do the best work of your career. Join RR GROUP's engineering, design, consulting and growth teams building high-impact digital solutions.",
  openGraph: {
    title: "Careers — RR GROUP | Digital & Business Solutions",
    description:
      "Do the best work of your career. Join RR GROUP's engineering, design, consulting and growth teams building high-impact digital solutions.",
    type: "website",
  },
}

export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#071A3A] selection:bg-[#EAF2FF] selection:text-[#1769FF]">
      {/* Subtle organic flowing background lines matching Home & Services */}
      <BackgroundCurves />

      {/* 1. Single Floating Navbar matching Home visual language with Careers active */}
      <CareersNav />

      {/* 2. Hero Section: Split layout with office collaboration image & 3 floating stat cards */}
      <CareersHero />

      {/* 3. Horizontal Benefits Strip (4 items) */}
      <CareersBenefits />

      {/* 4. Open Positions: 4 Job Cards + Interactive Application Modal */}
      <CareersRoles />

      {/* 5. WhatsApp Career Questions Banner */}
      <CareersWhatsappCta />

      {/* 6. Prefer a Direct Conversation CTA Banner */}
      <CareersCta />

      {/* 7. Corporate Warm Cream Footer */}
      <CareersFooter />
    </div>
  )
}
