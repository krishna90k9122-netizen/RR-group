"use client"

import Link from "next/link"
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react"

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] py-16 sm:py-24">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Banner Container: Royal Blue to Electric Blue gradient matching Reference 4 */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#104CC4] via-[#1769FF] to-[#3B82F6] p-8 sm:p-12 lg:p-14 text-white shadow-[0_20px_50px_rgba(23,105,255,0.28)]">
          {/* Subtle wave & glow texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-black/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Let&apos;s Build Together</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white">
                Ready to grow your business with RR GROUP?
              </h2>
              <p className="mt-3 text-sm text-white/85 sm:text-base">
                Tell us where you are today and we&apos;ll help you plan what&apos;s next. Get an actionable roadmap and pricing within 48 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold text-[#071B3A] shadow-md transition-all hover:bg-[#FFFDF8] hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#1769FF] transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/919438000000?text=Hi%20RR%20GROUP,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F8F0] text-[#16A34A]">
                  <MessageSquare className="h-3 w-3 fill-current" />
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
