"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe, Database, Users, Megaphone, Check } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Web Development",
    slug: "web-development",
    description:
      "Modern, fast, SEO-ready web applications built on Next.js, React and modern cloud architectures.",
    features: ["Custom Web Apps & Portals", "Responsive UI/UX Engineering", "Headless CMS & API Integrations"],
    icon: Globe,
    accentColor: "#1769FF",
    bgAccent: "bg-[#EAF3FF]",
    textAccent: "text-[#1769FF]",
    image: "/project-ecommerce.jpg",
  },
  {
    number: "02",
    title: "ERP Solutions",
    slug: "erp-solutions",
    description:
      "End-to-end enterprise resource planning tailored to streamline inventory, manufacturing, payroll and billing.",
    features: ["Inventory & Supply Chain", "Production & Workforce Automation", "Financial Reporting & Invoicing"],
    icon: Database,
    accentColor: "#67C9A0",
    bgAccent: "bg-[#E6F8F0]",
    textAccent: "text-[#289E73]",
    image: "/project-erp.jpg",
  },
  {
    number: "03",
    title: "CRM Solutions",
    slug: "crm-solutions",
    description:
      "Centralized customer relationship management that tracks pipelines, automates follow-ups and drives conversions.",
    features: ["Omnichannel Lead Tracking", "Automated Sales Workflows", "Customer Analytics & Retention"],
    icon: Users,
    accentColor: "#F2A65A",
    bgAccent: "bg-[#FFF3E6]",
    textAccent: "text-[#D97924]",
    image: "/project-crm.jpg",
  },
  {
    number: "04",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Data-backed digital acquisition, search engine optimization, content strategy and paid ad campaigns that convert.",
    features: ["Performance SEO & SEM", "Targeted Social & Search Ads", "Conversion Rate Optimization (CRO)"],
    icon: Megaphone,
    accentColor: "#A78BFA",
    bgAccent: "bg-[#F3EBFD]",
    textAccent: "text-[#7C55E8]",
    image: "/project-marketing.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#F8F2E6] py-20 sm:py-28">
      {/* Background Decorative Grid and soft aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#E8C98A_1px,transparent_1px)] [background-size:24px_24px] opacity-25"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
            What We Do
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            Services built around
            <br />
            your business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#53627A]">
            Comprehensive technology and growth solutions designed to modernize legacy processes,
            amplify your brand, and accelerate revenue.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.number}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E9E1D4] bg-white p-6 shadow-[0_10px_30px_rgba(30,50,80,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(30,50,80,0.09)] hover:border-[#1769FF]/30"
              >
                {/* Large Background Watermark Number in warm cream/gold */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 right-2 font-display text-7xl font-black text-[#E8C98A]/20 select-none transition-transform group-hover:scale-105 group-hover:text-[#E8C98A]/30"
                >
                  {service.number}
                </div>

                <div>
                  {/* Top Bar: Icon + Number Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.bgAccent} ${service.textAccent} transition-transform group-hover:scale-110`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#E9E1D4] bg-[#FFFDF8] px-2.5 py-0.5 text-[11px] font-bold text-[#53627A]">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#071B3A]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#53627A]">
                    {service.description}
                  </p>

                  {/* Mini Preview Image */}
                  <div className="mt-5 relative h-36 w-full overflow-hidden rounded-xl border border-[#E9E1D4] bg-[#FAF5EB]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  {/* Feature Bullets */}
                  <ul className="mt-5 space-y-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-[#53627A]">
                        <Check className={`h-3.5 w-3.5 shrink-0 ${service.textAccent}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link */}
                <div className="mt-8 pt-4 border-t border-[#E9E1D4]/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B3A] transition-colors group-hover:text-[#1769FF]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
