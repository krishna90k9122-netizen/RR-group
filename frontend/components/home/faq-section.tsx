"use client"

import { useState } from "react"
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How do you price projects?",
    answer:
      "We offer two flexible engagement models: fixed-scope milestone pricing for clearly defined builds (such as MVP platforms, website redesigns, or standalone ERP modules), and dedicated sprint retainers for agile iterative engineering where requirements evolve dynamically. Every quotation includes explicit deliverables, timelines, and post-launch guarantees with zero surprise costs.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every build comes with a complimentary 30 to 60-day stabilization warranty period covering bug fixes, server performance monitoring, and team onboarding. Following launch, we offer tailored SLA support plans covering continuous security updates, feature expansions, database backups, and emergency hotfixes.",
  },
  {
    question: "Can you integrate with our existing software?",
    answer:
      "Seamless integrations are core to our architecture. We routinely connect custom websites and portals with existing ERPs, CRMs (Salesforce, Zoho, HubSpot), payment gateways (Razorpay, Stripe), logistics APIs, legacy SQL databases, and internal enterprise tools via secure REST and GraphQL webhooks.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "A typical full-stack web application or digital marketing launch averages 4 to 6 weeks from kickoff to production. Custom enterprise ERP or multi-tier CRM implementations usually range from 8 to 14 weeks depending on workflow complexity, third-party integrations, and data migration scopes.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative bg-[#F8F2E6] py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            Got questions?
            <br />
            We&apos;ve got answers.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#53627A]">
            Everything you need to know about partnering with RR GROUP for your next digital transformation.
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#E9E1D4] bg-white shadow-[0_6px_20px_rgba(30,50,80,0.03)] transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#071B3A]">
                    {faq.question}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1769FF] transition-transform duration-200">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#E9E1D4]/60 px-5 pt-3 pb-6 sm:px-6">
                    <p className="text-sm leading-relaxed text-[#53627A]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Support Help Card */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E9E1D4] bg-[#FFFDF8] p-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1769FF]">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#071B3A]">
                Have a unique requirement or RFP?
              </div>
              <div className="text-xs text-[#53627A]">
                Our solutions architects are available for direct technical scoping.
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1769FF] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1258D9]"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
