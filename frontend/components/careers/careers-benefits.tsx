"use client"

import { BarChart3, Heart, Settings, Users } from "lucide-react"

const benefits = [
  {
    icon: BarChart3,
    title: "Meaningful Work",
    description: "Real projects, real impact",
    accent: "bg-[#EAF2FF] text-[#1769FF]",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Learn and grow together",
    accent: "bg-[#EAF2FF] text-[#1769FF]",
  },
  {
    icon: Settings,
    title: "Flexible Culture",
    description: "Trust, not micromanagement",
    accent: "bg-[#EAF2FF] text-[#1769FF]",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Do great work, sustainably",
    accent: "bg-[#EAF2FF] text-[#1769FF]",
  },
]

export function CareersBenefits() {
  return (
    <section className="relative bg-[#FBF7EF] py-4 sm:py-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[26px] border border-[#E9E1D4] bg-white p-5 sm:p-7 shadow-[0_4px_20px_rgba(30,50,80,0.03)]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#E9E1D4]">
            {benefits.map((b, idx) => {
              const IconComp = b.icon
              return (
                <div
                  key={b.title}
                  className={`flex items-center gap-4 ${
                    idx > 0 ? "lg:pl-7" : ""
                  }`}
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${b.accent} shadow-sm`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#071A3A]">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#53627A]">
                      {b.description}
                    </p>
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
