import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LoginForm } from "@/components/auth/login-form"
import { ArrowLeft, Home, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Login — RR GROUP Store",
  description: "Sign in to your RR GROUP account to manage orders, invoices and support tickets.",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Top Navigation Row: Back to Home */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-xs transition hover:bg-[#1769FF] hover:text-white hover:border-[#1769FF]"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-foreground/80 hover:text-foreground"
          >
            <div className="relative h-6 w-6 overflow-hidden rounded-md border border-border bg-white p-0.5">
              <Image src="/assets/rr-mark.png" alt="RR GROUP" fill className="object-contain" sizes="24px" />
            </div>
            <span>RR GROUP</span>
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <div className="mb-6 text-center">
            <div className="relative mx-auto mb-3 h-12 w-12 overflow-hidden rounded-2xl border border-[#E9E1D4] bg-[#FFFDF8] p-1.5 shadow-xs">
              <Image src="/assets/rr-mark.png" alt="RR GROUP" fill className="object-contain" sizes="48px" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to access your orders, invoices and support tickets.
            </p>
          </div>

          <LoginForm />

          <div className="mt-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <Link
            href="/admin/login"
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 dark:hover:bg-emerald-900"
          >
            <ShieldCheck className="size-4" />
            Admin Access
          </Link>

          <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4 text-center text-sm text-muted-foreground">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-primary hover:underline">
                Create one
              </Link>
            </p>
            <div className="pt-1">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition"
              >
                <Home className="size-3.5" />
                <span>Return to Website Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}