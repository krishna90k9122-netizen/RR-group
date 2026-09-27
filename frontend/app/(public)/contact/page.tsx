import type { Metadata } from "next"
import { loadServices } from "@/lib/data"
import { ContactClient } from "./contact-client"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Contact Us — RR GROUP | Digital & Business Solutions",
  description:
    "Tell us what you're trying to build. Reach out to RR GROUP for web development, ERP, CRM, and digital marketing solutions. We respond within one business day.",
  openGraph: {
    title: "Contact Us — RR GROUP | Digital & Business Solutions",
    description:
      "Tell us what you're trying to build. Reach out to RR GROUP for web development, ERP, CRM, and digital marketing solutions.",
    type: "website",
  },
}

export default async function ContactPage() {
  const services = await loadServices()
  return <ContactClient services={services} />
}
