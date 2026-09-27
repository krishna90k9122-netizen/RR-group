"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ArrowRight, Menu, Search, X } from "lucide-react"
import { useAuth } from "@/components/providers/auth-provider"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
]

export function ServicesNav() {
  const pathname = usePathname()
  const { user, isAuthenticated } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-3 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] rounded-full border border-[#E9E1D4] bg-[#FFFDF8]/95 pl-4 pr-3 sm:pl-6 sm:pr-4 py-2.5 shadow-[0_8px_30px_rgba(30,50,80,0.06)] backdrop-blur-md transition-all">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 ml-1 sm:ml-1.5" aria-label="RR GROUP Home">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[#E9E1D4] bg-[#FFFDF8] p-1.5 shadow-xs flex items-center justify-center">
              <Image
                src="/assets/rr-mark.png"
                alt="RR GROUP"
                fill
                className="object-contain p-1"
                sizes="36px"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold tracking-tight text-[#071A3A]">
                RR GROUP
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#53627A]">
                Digital &amp; Business Solutions
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation with Active Services state */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Services Page Navigation">
            {navLinks.map((link) => {
              const isCurrent = link.href === "/services"
              const isActive = pathname === link.href || (link.href === "/services" && pathname?.startsWith("/services"))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#EAF2FF] text-[#2563EB] font-semibold"
                      : "text-[#53627A] hover:text-[#071A3A] hover:bg-[#F8F2E6]/60"
                  }`}
                >
                  {link.label}
                  {isActive && isCurrent && (
                    <span className="absolute -bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-[#2563EB]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5">
            {/* Search Button */}
            <div className="relative hidden sm:block">
              {searchOpen ? (
                <div className="flex items-center rounded-full border border-[#E9E1D4] bg-white px-3 py-1 shadow-sm">
                  <Search className="h-3.5 w-3.5 text-[#53627A]" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="ml-2 w-28 border-none bg-transparent text-xs text-[#071A3A] outline-none placeholder:text-[#53627A]/60"
                    autoFocus
                    onBlur={() => !searchQuery && setSearchOpen(false)}
                  />
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setSearchOpen(false)
                    }}
                    className="text-[#53627A] hover:text-[#071A3A]"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  aria-label="Search"
                  onClick={() => setSearchOpen(true)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#071A3A] shadow-sm transition hover:bg-[#FBF7EF] hover:border-[#2563EB]/40"
                >
                  <Search className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Login / Profile */}
            {isAuthenticated && user ? (
              <Link
                href="/dashboard"
                className="hidden rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#071A3A] shadow-sm transition hover:bg-[#FBF7EF] sm:inline-flex items-center gap-1.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]/10 text-[10px] font-bold text-[#2563EB]">
                  {user.firstName?.[0]?.toUpperCase() || "U"}
                </span>
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden rounded-full px-3 py-1.5 text-xs font-semibold text-[#071A3A] transition hover:text-[#2563EB] sm:inline-block"
              >
                Login
              </Link>
            )}

            {/* Get Started Button */}
            <Link
              href="/services"
              className="hidden lg:inline-flex items-center rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#071A3A] shadow-sm transition hover:bg-[#FBF7EF] hover:border-[#2563EB]/40"
            >
              Get Started
            </Link>

            {/* Get a Quote Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition hover:bg-[#1D4ED8] hover:shadow-[0_6px_20px_rgba(37,99,235,0.36)]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#071A3A] shadow-sm md:hidden"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 border-t border-[#E9E1D4] pt-3 pb-2 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    link.href === "/services"
                      ? "bg-[#EAF2FF] text-[#2563EB] font-semibold"
                      : "text-[#53627A] hover:bg-[#F8F2E6] hover:text-[#071A3A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-[#E9E1D4] pt-3">
                {isAuthenticated && user ? (
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#071A3A]"
                  >
                    My Account ({user.firstName || user.email})
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#071A3A]"
                  >
                    Login
                  </Link>
                )}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-[#2563EB] px-3.5 py-1.5 text-xs font-semibold text-white"
                >
                  Get a Quote →
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
