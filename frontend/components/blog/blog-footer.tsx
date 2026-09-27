"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"

const servicesLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "ERP Solutions", href: "/services/erp-solutions" },
  { label: "CRM Solutions", href: "/services/crm-solutions" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Custom Software", href: "/services" },
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
  { label: "FAQs", href: "/#faq" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
]

export function BlogFooter() {
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

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#53627A] transition hover:bg-[#1769FF] hover:text-white hover:border-[#1769FF]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#53627A] transition hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#53627A] transition hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#53627A] transition hover:bg-[#071A3A] hover:text-white hover:border-[#071A3A]"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {/* Services */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#53627A] transition hover:text-[#1769FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#53627A] transition hover:text-[#1769FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">
                Support
              </h3>
              <ul className="mt-4 space-y-2.5">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#53627A] transition hover:text-[#1769FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#071A3A]">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#53627A] transition hover:text-[#1769FF]"
                    >
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
