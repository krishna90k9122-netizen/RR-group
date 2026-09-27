"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Database, Globe, Megaphone, Users } from "lucide-react"

const serviceCards = [
  {
    number: "01",
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites and web applications engineered for performance, SEO and growth.",
    icon: Globe,
    iconBg: "bg-[#EAF2FF]",
    iconColor: "text-[#2563EB]",
    checkColor: "text-[#2563EB]",
    image: "/service-web-card.jpg",
    features: [
      "Custom Website Development",
      "E-commerce Development",
      "Business & Corporate Websites",
      "Web Applications & Dashboards",
    ],
  },
  {
    number: "02",
    title: "ERP Solutions",
    slug: "erp-solutions",
    description: "Custom ERP platforms that unify finance, inventory, sales and operations in one system.",
    icon: Database,
    iconBg: "bg-[#FFF3E6]",
    iconColor: "text-[#F59E0B]",
    checkColor: "text-[#F59E0B]",
    image: "/service-erp-card.jpg",
    features: [
      "Business process management",
      "Inventory management",
      "HR & payroll modules",
      "Finance & accounting workflows",
    ],
  },
  {
    number: "03",
    title: "CRM Solutions",
    slug: "crm-solutions",
    description: "Turn leads into loyal customers with a system your team actually uses.",
    icon: Users,
    iconBg: "bg-[#E6F8F0]",
    iconColor: "text-[#10B981]",
    checkColor: "text-[#10B981]",
    image: "/service-crm-card.jpg",
    features: [
      "Lead management",
      "Sales automation",
      "Customer support",
      "Analytics & reporting",
    ],
  },
  {
    number: "04",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven strategies for measurable and sustainable growth.",
    icon: Megaphone,
    iconBg: "bg-[#F3EBFD]",
    iconColor: "text-[#8B5CF6]",
    checkColor: "text-[#8B5CF6]",
    image: "/service-marketing-card.jpg",
    features: [
      "SEO & content marketing",
      "Social media marketing",
      "Performance ads",
      "Brand strategy",
    ],
  },
]

export function ServicesGrid() {
  return (
    <section className="relative bg-[#FBF7EF] py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* 2 x 2 Service Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {serviceCards.map((card) => {
            const IconComponent = card.icon

            return (
              <div
                key={card.number}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E9E1D4] bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(30,50,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,50,80,0.08)] hover:border-[#2563EB]/35"
              >
                {/* Header: Icon + Number Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} shadow-sm transition-transform duration-200 group-hover:scale-110`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-[#E9E1D4] bg-[#FFFDF8] px-2.5 py-0.5 text-xs font-bold text-[#53627A]">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Content Layout: Left Details + Right Visual */}
                <div className="mt-5 grid items-center gap-6 sm:grid-cols-12">
                  {/* Left Column: Title, Description, Features & CTA */}
                  <div className="sm:col-span-7 flex flex-col justify-between">
                    <div>
                      <h2 className="font-display text-2xl font-bold tracking-tight text-[#071A3A] group-hover:text-[#2563EB] transition-colors">
                        {card.title}
                      </h2>
                      <p className="mt-2 text-xs leading-relaxed text-[#53627A] sm:text-sm">
                        {card.description}
                      </p>

                      {/* 4 Feature Bullet Points */}
                      <ul className="mt-5 space-y-2">
                        {card.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-xs font-medium text-[#071A3A]">
                            <Check className={`h-4 w-4 shrink-0 ${card.checkColor}`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Button */}
                    <div className="mt-7">
                      <Link
                        href={`/services/${card.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_6px_18px_rgba(37,99,235,0.32)]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Dashboard Mockup */}
                  <div className="sm:col-span-5">
                    <div className="relative h-[210px] sm:h-[240px] w-full overflow-hidden rounded-2xl border border-[#E9E1D4]/80 bg-[#FAF5EB]">
                      <Image
                        src={card.image}
                        alt={`${card.title} Solution Interface`}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
