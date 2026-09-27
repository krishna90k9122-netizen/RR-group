"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, LogOut, ShieldCheck, ShoppingBag } from "lucide-react"
import { AuthGuard } from "@/components/auth/auth-guard"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { useAuth } from "@/components/providers/auth-provider"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { logout, isStaff } = useAuth()

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#FBF7EF]/30">
        {/* Top Header for Dashboard with Home and Back navigation */}
        <header className="sticky top-0 z-40 border-b border-[#E9E1D4] bg-white/95 backdrop-blur-md shadow-xs">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left: Brand + Back to Home */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/" className="flex items-center gap-2" aria-label="RR GROUP Home">
                <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-[#E9E1D4] bg-[#FFFDF8] p-1 shadow-xs">
                  <Image src="/assets/rr-mark.png" alt="RR GROUP" fill className="object-contain" sizes="36px" />
                </div>
                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="font-display text-sm font-extrabold text-[#071B3A]">RR GROUP</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#53627A]">Customer Portal</span>
                </div>
              </Link>

              <div className="h-4 w-px bg-[#E9E1D4]" />

              {/* Back to Home Button */}
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-semibold text-[#071B3A] shadow-xs transition hover:bg-[#1769FF] hover:text-white hover:border-[#1769FF]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3 py-1.5 text-xs font-semibold text-[#071B3A] shadow-xs transition hover:bg-[#FBF7EF] hover:border-[#1769FF]/40"
              >
                <ShoppingBag className="h-3.5 w-3.5 text-[#1769FF]" />
                <span className="hidden sm:inline">Shop Store</span>
              </Link>

              {isStaff && (
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Admin Panel</span>
                </Link>
              )}

              {/* Logout Button */}
              <button
                type="button"
                onClick={() => logout()}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#071B3A] shadow-xs transition hover:bg-red-50 hover:text-red-600 hover:border-red-200 cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5 text-[#53627A]" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Dashboard Layout */}
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row">
          <aside className="shrink-0 lg:w-64">
            <DashboardNav />
          </aside>
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </AuthGuard>
  )
}