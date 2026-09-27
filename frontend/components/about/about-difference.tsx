"use client"

import { Target, Layers, BarChart3, ShieldCheck } from "lucide-react"

const differentiators = [
  {
    number: "01",
    icon: Target,
    title: "Business First",
    description: "We think like business owners, not just developers.",
    accent: "bg-[#EAF3FF] text-[#1769FF]",
  },
  {
    number: "02",
    icon: Layers,
    title: "End-to-End Support",
    description: "From strategy to execution, we've got you covered.",
    accent: "bg-[#E6F8F0] text-[#289E73]",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Result Driven",
    description: "Every solution is built to create measurable impact.",
    accent: "bg-[#FFF3E6] text-[#D97924]",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Transparent Process",
    description: "Clear communication, no hidden surprises.",
    accent: "bg-[#F3EBFD] text-[#7C55E8]",
  },
]

export function AboutDifference() {
  return (
    <section className="relative bg-[#F8F2E6] py-16 sm:py-24">
      {/* Background Subtle Radial Dot Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#E8C98A_1px,transparent_1px)] [background-size:24px_24px] opacity-25"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Split Header matching Reference 4 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
              What Makes Us Different
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
              More than a service provider —
              <br />a <span className="text-[#1769FF]">growth partner</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#53627A]">
            We don&apos;t just deliver projects, we work as an extension of your team. Our focus is
            on understanding your business, solving real problems and building long-term value.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const IconComp = item.icon
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#E9E1D4] bg-white p-6 shadow-[0_8px_30px_rgba(30,50,80,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(30,50,80,0.08)] hover:border-[#1769FF]/30"
              >
                {/* Large Background Watermark Number in warm gold */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 right-3 font-display text-6xl font-black text-[#E8C98A]/20 select-none transition-transform group-hover:scale-105 group-hover:text-[#E8C98A]/35"
                >
                  {item.number}
                </div>

                <div>
                  {/* Top Bar: Icon + Number Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accent} transition-transform duration-200 group-hover:scale-110 shadow-sm`}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#E9E1D4] bg-[#FFFDF8] px-2.5 py-0.5 text-[11px] font-bold text-[#53627A]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-[#071B3A]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#53627A]">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
