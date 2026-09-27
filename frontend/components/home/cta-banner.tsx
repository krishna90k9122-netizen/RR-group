"use client"

import Link from "next/link"
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#FAF5EB] py-16 sm:py-24">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Banner Container: Very Light Blue + Cream Gradient */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#E9E1D4] bg-gradient-to-br from-[#FFFDF8] via-[#F8F2E6] to-[#EAF3FF] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(30,50,80,0.06)]">
          {/* Subtle Blue Glow in the corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#1769FF]/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#E8C98A]/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1769FF]/20 bg-white/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1769FF] shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-6 font-display text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
              Ready to build what&apos;s next?
            </h2>

            {/* Supporting Text */}
            <p className="mt-5 text-base leading-relaxed text-[#53627A] sm:text-lg">
              Book a free discovery call and get a clear plan — and pricing — for your project within 48 hours.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,105,255,0.28)] transition-all hover:bg-[#1258D9] hover:shadow-[0_12px_28px_rgba(23,105,255,0.36)] hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/919438000000?text=Hi%20RR%20GROUP,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E9E1D4] bg-white px-7 py-3.5 text-sm font-semibold text-[#071B3A] shadow-[0_2px_8px_rgba(30,50,80,0.04)] transition-all hover:bg-[#FFFDF8] hover:border-[#1769FF]/40 hover:-translate-y-0.5"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F8F0] text-[#289E73]">
                  <MessageSquare className="h-3.5 w-3.5" />
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges under buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#53627A]">
              <div className="flex items-center gap-1.5">
                <PhoneCall className="h-3.5 w-3.5 text-[#1769FF]" />
                <span>Response in under 2 hours</span>
              </div>
              <span className="text-[#E9E1D4]">•</span>
              <div>NDA signed upfront</div>
              <span className="text-[#E9E1D4]">•</span>
              <div>No obligation architectural estimate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
