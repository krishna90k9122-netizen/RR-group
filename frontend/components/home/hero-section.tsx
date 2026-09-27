"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20">
      {/* ==================================================
          1. FULL-WIDTH HERO BACKGROUND (Office + Laptop)
          ================================================== */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 bottom-24 sm:bottom-28 lg:bottom-32 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/home-hero-bg.png')",
          backgroundPosition: "right 15%",
        }}
      >
        {/* Soft responsive fade overlay on mobile/tablet to ensure text stays crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/90 sm:via-[#FFFDF8]/75 to-transparent lg:via-[#FFFDF8]/30 xl:via-transparent" />
        {/* Bottom subtle gradient blend into cream background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFDF8] via-[#FFFDF8]/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[460px] lg:min-h-[500px] flex flex-col justify-center">
          {/* Main Hero Grid: Left Content */}
          <div className="grid items-center lg:grid-cols-12 gap-8 lg:gap-12 py-4 sm:py-6 lg:py-8">
            {/* Left Column: Heading, Description, Buttons, Checkpoints, Avatars */}
            <div className="lg:col-span-7 xl:col-span-6 z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D5E2F7] bg-white/95 px-3.5 py-1 shadow-xs backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#1769FF] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#071B3A]">
                  DIGITAL TECHNOLOGY &amp; BUSINESS SOLUTIONS
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-4 sm:mt-5 font-display text-4xl font-extrabold tracking-tight text-[#071B3A] sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] lg:leading-[1.1]">
                Transforming
                <br />
                Ideas into{" "}
                <span className="relative inline-block text-[#1769FF]">
                  Digital
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full text-[#1769FF]"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    height="8"
                  >
                    <path
                      d="M2,8 Q50,2 98,6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                Solutions
              </h1>

              {/* Description */}
              <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#53627A]">
                We build websites, ERP, CRM and digital marketing systems that help businesses operate
                smarter, grow faster and stay ahead in the digital world.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,105,255,0.28)] transition-all hover:bg-[#1258D9] hover:shadow-[0_12px_28px_rgba(23,105,255,0.36)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Our Services →</span>
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#E9E1D4] bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-[#071B3A] shadow-xs transition-all hover:bg-[#F8F2E6] hover:border-[#071B3A]/20 hover:-translate-y-0.5"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1769FF]">
                    <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                  </span>
                  <span>Watch Video</span>
                </a>
              </div>

              {/* Checkpoint Highlights */}
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-[#53627A]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#12B76A]" />
                  <span>End-to-End Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#12B76A]" />
                  <span>Dedicated Tech Team</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#12B76A]" />
                  <span>Enterprise Security</span>
                </div>
              </div>

              {/* Social Proof Avatars */}
              <div className="mt-7 sm:mt-8 flex items-center gap-3.5">
                <div className="flex -space-x-2">
                  {["avatar-1.jpg", "avatar-2.jpg", "avatar-3.jpg", "avatar-4.jpg", "avatar-5.jpg"].map(
                    (file, i) => (
                      <div
                        key={i}
                        className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border-2 border-white shadow-xs"
                      >
                        <Image
                          src={`/avatars/${file}`}
                          alt="Client avatar"
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      </div>
                    ),
                  )}
                </div>
                <div className="text-xs font-semibold leading-tight text-[#071B3A]">
                  <div>Join hundreds of businesses</div>
                  <div className="text-[#53627A] font-normal">building with RR GROUP</div>
                </div>
              </div>
            </div>

            {/* Right Column: Empty spacer on desktop because the laptop is part of background */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[380px] lg:min-h-[420px] pointer-events-none" />
          </div>

        </div>

        {/* ==================================================
            3. STATS BAR (Single Horizontal White Card)
            ================================================== */}
        <div className="mt-6 sm:mt-8 lg:mt-10">
          <div className="rounded-[24px] sm:rounded-[32px] border border-[#E9E1D4] bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(30,50,80,0.06)]">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:divide-x sm:divide-[#E9E1D4]">
              {/* Stat 1: 120+ */}
              <div className="flex flex-col items-center sm:items-start sm:px-6 first:pl-0 text-center sm:text-left">
                <span className="font-display text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
                  120+
                </span>
                <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#53627A]">
                  PROJECTS COMPLETED
                </span>
              </div>

              {/* Stat 2: 98% ★ */}
              <div className="flex flex-col items-center sm:items-start sm:px-6 text-center sm:text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
                    98%
                  </span>
                  <span className="text-[#12B76A] font-bold text-sm">★</span>
                </div>
                <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#53627A]">
                  CLIENT SATISFACTION
                </span>
              </div>

              {/* Stat 3: 12+ */}
              <div className="flex flex-col items-center sm:items-start sm:px-6 text-center sm:text-left">
                <span className="font-display text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
                  12+
                </span>
                <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#53627A]">
                  INDUSTRIES SERVED
                </span>
              </div>

              {/* Stat 4: 6 wks Fast */}
              <div className="flex flex-col items-center sm:items-start sm:px-6 last:pr-0 text-center sm:text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
                    6 wks
                  </span>
                  <span className="rounded-full bg-[#EAF3FF] px-2.5 py-0.5 text-[10px] font-bold text-[#1769FF]">
                    Fast
                  </span>
                </div>
                <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#53627A]">
                  AVERAGE DELIVERY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
