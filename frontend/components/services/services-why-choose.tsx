"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Layers, ShieldCheck, Target } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Business First",
    description: "We think like business owners, not just developers.",
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    description: "From strategy to execution, we've got you covered.",
  },
  {
    icon: BarChart3,
    title: "Result Driven",
    description: "Every solution is built to create measurable impact.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description: "Clear communication, no hidden surprises.",
  },
]

export function ServicesWhyChoose() {
  return (
    <section className="relative bg-[#FAF5EB] py-16 sm:py-24">
      {/* Decorative Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#E8C98A]/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Story & CTA */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              <span className="h-[2px] w-6 bg-[#2563EB]" />
              <span>Why Choose Us</span>
              <span className="text-[14px] leading-none">✢</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071A3A] sm:text-4xl lg:text-5xl">
              More than services —
              <br />a <span className="text-[#2563EB]">growth partner</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-[#53627A] sm:text-base">
              We don&apos;t just deliver projects, we work as an extension of your team. Our focus is
              on understanding your business, solving real problems and building long-term value.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 text-xs font-bold text-white shadow-[0_6px_20px_rgba(37,99,235,0.28)] transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2 x 2 Benefit Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-[#E9E1D4] bg-white p-6 shadow-[0_6px_20px_rgba(30,50,80,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_12px_28px_rgba(30,50,80,0.07)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB] transition-transform duration-200 group-hover:scale-110 shadow-sm">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-[#071A3A]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#53627A]">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
