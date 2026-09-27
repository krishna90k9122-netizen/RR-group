"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "RR GROUP completely restructured our manufacturing operations with their custom ERP. Order fulfillment turnaround decreased by 38% within the very first quarter of launch.",
    name: "Rajesh Mohanty",
    role: "Managing Director",
    company: "Utkal Industrial Components",
    initials: "RM",
    bgInitials: "bg-[#EAF3FF] text-[#1769FF]",
  },
  {
    quote:
      "Our real estate sales team was juggling disparate spreadsheets and WhatsApp chats. The CRM platform built by RR GROUP automated client follow-ups and tripled our monthly deal closures.",
    name: "Pooja Singhania",
    role: "VP of Sales & Strategy",
    company: "Horizon Realty Assets",
    initials: "PS",
    bgInitials: "bg-[#FFF3E6] text-[#F2A65A]",
  },
  {
    quote:
      "The Next.js storefront and marketing funnels engineered by RR GROUP scaled effortlessly through our peak festive season sales with zero latency. Truly an indispensable technical partner.",
    name: "Anil K. Verma",
    role: "Founder & CEO",
    company: "Aura Essentials Retail",
    initials: "AV",
    bgInitials: "bg-[#E6F8F0] text-[#289E73]",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#FBF7EF] py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
            Client Voices
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            What our clients say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#53627A]">
            Trusted by enterprise leaders and high-growth disruptors who demand engineering excellence and measurable business ROI.
          </p>
        </div>

        {/* Testimonials Grid + Satisfaction Highlight */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: 98% Satisfaction Card */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-[#E9E1D4] bg-white p-8 shadow-[0_10px_35px_rgba(30,50,80,0.05)]">
            <div>
              <div className="inline-flex items-center gap-1 rounded-full bg-[#FFFDF8] border border-[#E9E1D4] px-3 py-1 text-xs font-bold text-[#071B3A]">
                <span>Verified Metric</span>
              </div>
              <div className="mt-6 font-display text-6xl font-black tracking-tight text-[#071B3A]">
                98%
              </div>
              <div className="mt-2 text-lg font-bold text-[#1769FF]">
                Client Satisfaction Score
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#53627A]">
                Over 120+ custom enterprise solutions delivered across India and overseas with 94% repeat and expansion partnerships.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E9E1D4]">
              <div className="flex items-center gap-1 text-[#E8C98A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="mt-2 block text-xs font-semibold text-[#53627A]">
                Rated 4.9 / 5 across all delivery reviews
              </span>
            </div>
          </div>

          {/* Right Column: 3 Quote Cards */}
          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col justify-between rounded-3xl border border-[#E9E1D4] bg-white p-6 shadow-[0_8px_25px_rgba(30,50,80,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(30,50,80,0.08)] hover:border-[#1769FF]/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Quote className="h-6 w-6 text-[#1769FF]/30" />
                    <div className="flex items-center gap-0.5 text-[#E8C98A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-[#53627A]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#E9E1D4]/60">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${item.bgInitials}`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#071B3A]">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-[#53627A]">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
