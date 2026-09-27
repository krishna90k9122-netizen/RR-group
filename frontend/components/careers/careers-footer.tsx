"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"

const shopLinks = [
  { label: "All Products", href: "/shop" },
  { label: "Categories", href: "/shop" },
  { label: "Best Sellers", href: "/shop" },
  { label: "New Arrivals", href: "/shop" },
  { label: "Deals", href: "/shop" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const supportLinks = [
  { label: "Help Center", href: "/contact" },
  { label: "Track Order", href: "/dashboard" },
  { label: "Returns", href: "/terms" },
  { label: "Shipping", href: "/terms" },
  { label: "Warranty", href: "/terms" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
]

export function CareersFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-[#E9E1D4] bg-[#FAF5EB] pt-16 pb-12 text-[#071A3A]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#E9E1D4] bg-[#FFFDF8] p-1.5 shadow-xs flex items-center justify-center">
                <Image
                  src="/assets/rr-mark.png"
                  alt="RR GROUP"
                  fill
                  className="object-contain p-1"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-extrabold tracking-tight text-[#071A3A]">
                  RR GROUP
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53627A]">
                  DIGITAL &amp; BUSINESS SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#53627A]">
              Business software, hardware and cloud services trusted by growing teams across India.
            </p>

            {/* Address & Contact Info */}
            <div className="mt-5 space-y-2 text-xs text-[#53627A]">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#1769FF] mt-0.5" />
                <span>27/817, Nuasahi, Nayapalli, Bhubaneswar, Odisha 751012, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#1769FF]" />
                <a href="tel:+919938844331" className="hover:text-[#1769FF]">
                  +91 9938844331
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#1769FF]" />
                <a href="mailto:rrgroup.official@zohomail.in" className="hover:text-[#1769FF]">
                  rrgroup.official@zohomail.in
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {/* Shop */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">Shop</h3>
              <ul className="mt-4 space-y-2.5">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[#53627A] transition hover:text-[#1769FF]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[#53627A] transition hover:text-[#1769FF]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">Support</h3>
              <ul className="mt-4 space-y-2.5">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[#53627A] transition hover:text-[#1769FF]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">Legal</h3>
              <ul className="mt-4 space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[#53627A] transition hover:text-[#1769FF]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#E9E1D4] pt-8 text-xs text-[#53627A] sm:flex-row">
          <div>© 2026 RR GROUP. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <span>Made with ❤️ in India</span>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#071A3A] shadow-sm transition hover:bg-[#1769FF] hover:text-white hover:border-[#1769FF]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
