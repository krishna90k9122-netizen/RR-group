"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BarChart3, Play, Rocket, Star } from "lucide-react"

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] pt-6 pb-12 sm:pb-16 lg:pt-10 lg:pb-20">
      {/* Decorative Warm Cream & Gold Aura matching Home */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#E8C98A]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-[#2563EB]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 min-h-[66vh]">
          {/* Left Column: Heading, Copy, Buttons & Trust Proof */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              <span className="text-[14px] leading-none">✢</span>
              <span>Case Studies</span>
              <span className="h-[2px] w-6 bg-[#2563EB]" />
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#071A3A] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Work that ships and
              <br />
              moves{" "}
              <span className="relative inline-block text-[#2563EB]">
                the numbers
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-[#2563EB]/30"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  height="6"
                >
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#53627A] sm:text-lg">
              Real projects across software, AI, infrastructure, marketing and real estate — with
              the outcomes that mattered.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,99,235,0.28)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_12px_28px_rgba(37,99,235,0.36)] hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#case-studies"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E9E1D4] bg-white px-6 py-3.5 text-sm font-semibold text-[#071A3A] shadow-[0_2px_8px_rgba(30,50,80,0.04)] transition-all hover:bg-[#F8F2E6] hover:border-[#071A3A]/20"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2563EB] transition group-hover:scale-110">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                <span>Watch Video</span>
              </a>
            </div>

            {/* Overlapping Client Avatars & Trust Text */}
            <div className="mt-9 flex items-center gap-3.5">
              <div className="flex -space-x-2.5">
                {[
                  { name: "Rahul", bg: "bg-blue-600", text: "RS" },
                  { name: "Pooja", bg: "bg-indigo-600", text: "PS" },
                  { name: "Anil", bg: "bg-emerald-600", text: "AV" },
                  { name: "Meera", bg: "bg-amber-600", text: "MK" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFFDF8] ${avatar.bg} text-xs font-bold text-white shadow-sm`}
                    title={avatar.name}
                  >
                    {avatar.text}
                  </div>
                ))}
              </div>
              <div className="text-xs leading-snug">
                <div className="font-display font-extrabold text-[#071A3A]">200+ businesses</div>
                <div className="text-[#53627A]">trust our journey</div>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Analytics & Target Visual + 4 Floating Cards (NO LAPTOP!) */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Organic Curved Backdrop Shape */}
              <div className="absolute -inset-3 -rotate-1 rounded-[34px] bg-gradient-to-tr from-[#E8C98A]/30 via-white/50 to-[#2563EB]/12 blur-sm -z-10" />

              {/* Main Image Frame (Smartphone + Target + Growth visual) */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#E9E1D4] bg-white p-2.5 shadow-[0_20px_50px_rgba(30,50,80,0.08)]">
                <div className="relative h-[340px] w-full overflow-hidden rounded-[22px] sm:h-[430px] lg:h-[450px]">
                  <Image
                    src="/portfolio-hero.jpg"
                    alt="RR GROUP Smartphone Analytics and Target Growth Composition"
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Card 1: +120% Business Growth (Top-Left) */}
              <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB]">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm font-extrabold text-[#071A3A]">+120%</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Business Growth</div>
                </div>
              </div>

              {/* Floating Card 2: 500+ Projects Delivered (Top-Right) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF3E6] text-[#F59E0B]">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm font-extrabold text-[#071A3A]">500+</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Projects Delivered</div>
                </div>
              </div>

              {/* Floating Card 3: 4+ Years Experience (Bottom-Left) */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB]">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm font-extrabold text-[#071A3A]">4+</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Years Experience</div>
                </div>
              </div>

              {/* Floating Card 4: 98% Client Satisfaction (Bottom-Right) */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB]">
                  <Star className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm font-extrabold text-[#071A3A]">98%</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Mobile-Only Clean Stat Row */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:hidden">
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <BarChart3 className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">+120% Growth</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <Rocket className="h-4 w-4 text-[#F59E0B] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">500+ Projects</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <Award className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">4+ Years Exp</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <Star className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">98% Satisfied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
