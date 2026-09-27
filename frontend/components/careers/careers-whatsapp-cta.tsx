"use client"

import { MessageCircle, ArrowRight } from "lucide-react"

export function CareersWhatsappCta() {
  return (
    <section className="relative bg-[#FBF7EF] py-8 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[26px] border border-[#E9E1D4] bg-[#EAF2FF]/50 p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_rgba(30,50,80,0.03)] backdrop-blur-sm">
          {/* Subtle background decoration curves */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1769FF]/10 blur-2xl"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4 sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1769FF] shadow-sm border border-[#E9E1D4]">
                <MessageCircle className="h-6 w-6 fill-current" />
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071A3A]">
                  Have questions about a role or working with us?
                </h3>
                <p className="mt-1 max-w-xl text-xs sm:text-sm text-[#53627A] leading-relaxed">
                  Message us directly on WhatsApp and we&apos;ll answer personally — no bots, no HR portals.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919938844331?text=Hi%20RR%20GROUP,%20I%20have%20a%20question%20about%20careers%20and%20roles."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(23,105,255,0.28)] transition-all hover:bg-[#1258DB] hover:shadow-[0_6px_20px_rgba(23,105,255,0.36)] hover:-translate-y-0.5 shrink-0"
            >
              <span>Ask a Question on WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
