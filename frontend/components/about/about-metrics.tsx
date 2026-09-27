"use client"

import { Users, Rocket, Award, Star } from "lucide-react"

const metrics = [
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    accent: "text-[#1769FF] bg-[#EAF3FF]",
  },
  {
    icon: Rocket,
    value: "500+",
    label: "Projects Delivered",
    accent: "text-[#F2A65A] bg-[#FFF3E6]",
  },
  {
    icon: Award,
    value: "4+",
    label: "Years Experience",
    accent: "text-[#A78BFA] bg-[#F3EBFD]",
  },
  {
    icon: Star,
    value: "98%",
    label: "Client Satisfaction",
    accent: "text-[#67C9A0] bg-[#E6F8F0]",
  },
]

export function AboutMetrics() {
  return (
    <section className="relative bg-[#FBF7EF] py-4 sm:py-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E9E1D4] bg-white/95 p-6 sm:p-8 shadow-[0_10px_35px_rgba(30,50,80,0.04)] backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-6 sm:gap-6 lg:grid-cols-4 lg:divide-x lg:divide-[#E9E1D4]">
            {metrics.map((m, idx) => {
              const IconComp = m.icon
              return (
                <div
                  key={m.label}
                  className={`flex items-center gap-3.5 sm:gap-4 ${
                    idx > 0 ? "lg:pl-8" : ""
                  }`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${m.accent} shadow-sm`}>
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#071B3A]">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#53627A]">
                      {m.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
