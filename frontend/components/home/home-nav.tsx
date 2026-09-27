"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowRight, LogOut, Megaphone, Menu, Search, ShieldCheck, X } from "lucide-react"
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

export function HomeNav() {
  const router = useRouter()
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      {/* ==================================================
          1. TOP ANNOUNCEMENT BAR WITH SOCIAL ICONS
          ================================================== */}
      <div className="bg-[#1769FF] text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8 py-1.5 text-xs font-medium">
          {/* Left / Center Message */}
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Megaphone className="h-3.5 w-3.5 shrink-0" />
            <span>Building digital solutions that drive business growth</span>
          </div>

          {/* Right Social Icons */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white transition-opacity"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter X"
              className="text-white/80 hover:text-white transition-opacity"
            >
              <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/80 hover:text-white transition-opacity"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/80 hover:text-white transition-opacity"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ==================================================
          2. FLOATING WHITE PILL NAVBAR
          ================================================== */}
      <header className="sticky top-2 z-50 w-full px-3 py-2 sm:px-6 lg:px-8 bg-transparent">
        <div className="mx-auto max-w-[1400px] rounded-full border border-[#E9E1D4] bg-white/95 pl-4 pr-3 sm:pl-6 sm:pr-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all">
          <div className="flex items-center justify-between gap-3 lg:gap-4">
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 ml-1 sm:ml-1.5" aria-label="RR GROUP Home">
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
                <span className="font-display text-base font-extrabold tracking-tight text-[#071B3A]">
                  RR GROUP
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#53627A]">
                  DIGITAL &amp; BUSINESS SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Center: Desktop Nav */}
            <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isHome = link.href === "/"
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "bg-[#EAF3FF] text-[#1769FF] font-semibold"
                        : "text-[#53627A] hover:text-[#071B3A] hover:bg-[#F8F2E6]/60"
                    }`}
                  >
                    {link.label}
                    {isActive && isHome && (
                      <span className="absolute -bottom-1 left-1/2 h-0.5 w-3.5 -translate-x-1/2 rounded-full bg-[#1769FF]" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right: Actions (Search, Divider, Login, Get Started, Get a Quote) */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Search Icon Button */}
              <div className="relative hidden md:block">
                {searchOpen ? (
                  <div className="flex items-center rounded-full border border-[#E9E1D4] bg-white px-3 py-1 shadow-xs">
                    <Search className="h-3.5 w-3.5 text-[#53627A]" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="ml-2 w-28 text-xs text-[#071B3A] outline-none placeholder:text-[#53627A]/60 bg-transparent"
                      autoFocus
                      onBlur={() => !searchQuery && setSearchOpen(false)}
                    />
                    <button
                      onClick={() => {
                        setSearchQuery("")
                        setSearchOpen(false)
                      }}
                      className="text-[#53627A] hover:text-[#071B3A]"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    aria-label="Search"
                    onClick={() => setSearchOpen(true)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#53627A] shadow-xs transition hover:text-[#071B3A] hover:border-[#1769FF]/40"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-4 w-px bg-[#E9E1D4]" />

              {/* Admin Login Button */}
              <Link
                href="/admin/login"
                className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-[#FFFDF8] px-3.5 py-2 text-xs sm:text-[13px] font-semibold text-[#071B3A] shadow-xs transition hover:bg-[#1769FF]/5 hover:text-[#1769FF] hover:border-[#1769FF]/30"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#1769FF]" />
                <span>Admin Login</span>
              </Link>

              {/* Login / Dashboard Button (Replaced Get Started) */}
              {isAuthenticated && user ? (
                <Link
                  href="/dashboard"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#1769FF] px-4 py-2 text-xs sm:text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(23,105,255,0.28)] transition hover:bg-[#1258D9] hover:shadow-[0_6px_20px_rgba(23,105,255,0.36)]"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold text-white">
                    {user.firstName?.[0]?.toUpperCase() || "U"}
                  </span>
                  <span>Dashboard</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#1769FF] px-4 py-2 text-xs sm:text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(23,105,255,0.28)] transition hover:bg-[#1258D9] hover:shadow-[0_6px_20px_rgba(23,105,255,0.36)]"
                >
                  <span>Login</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}

              {/* Logout Button (Replaced Get a Quote) */}
              <button
                type="button"
                onClick={async () => {
                  try {
                    await logout()
                  } catch {
                    // ignore
                  }
                  router.push("/login")
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-4 py-2 text-xs sm:text-[13px] font-semibold text-[#071B3A] shadow-xs transition hover:bg-[#FBF7EF] hover:border-[#1769FF]/40 cursor-pointer"
              >
                <span>Logout</span>
                <LogOut className="h-3.5 w-3.5 text-[#53627A]" />
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                aria-label="Toggle navigation menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#071B3A] shadow-xs lg:hidden"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="mt-3 border-t border-[#E9E1D4] pt-3 pb-2 lg:hidden">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium ${
                      pathname === link.href
                        ? "bg-[#EAF3FF] text-[#1769FF] font-semibold"
                        : "text-[#53627A] hover:bg-[#F8F2E6] hover:text-[#071B3A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-[#E9E1D4] pt-3">
                  <Link
                    href="/admin/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 rounded-full border border-[#E9E1D4] bg-[#FFFDF8] py-2 px-4 text-xs font-semibold text-[#071B3A] transition hover:text-[#1769FF]"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-[#1769FF]" />
                    <span>Admin Login</span>
                  </Link>
                  <div className="flex items-center justify-between gap-2">
                    {isAuthenticated && user ? (
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-flex items-center justify-center gap-1 rounded-full bg-[#1769FF] px-4 py-2 text-xs font-semibold text-white flex-1"
                      >
                        <span>Dashboard</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ) : (
                      <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-flex items-center justify-center gap-1 rounded-full bg-[#1769FF] px-4 py-2 text-xs font-semibold text-white flex-1"
                      >
                        <span>Login</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={async () => {
                        setMobileMenuOpen(false)
                        try {
                          await logout()
                        } catch {
                          // ignore
                        }
                        router.push("/login")
                      }}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white py-2 px-4 text-xs font-semibold text-[#071B3A] flex-1 cursor-pointer"
                    >
                      <span>Logout</span>
                      <LogOut className="h-3.5 w-3.5 text-[#53627A]" />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
