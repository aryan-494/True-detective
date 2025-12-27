"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search, Info, Shield, Telescope } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  const navigation = [
    { name: "Analyze Content", href: "/", icon: Search },
    { name: "How It Works", href: "/how-it-works", icon: Info },
    { name: "Responsible AI", href: "/responsible-ai", icon: Shield },
    { name: "Future Scope", href: "/future-scope", icon: Telescope },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-sidebar-foreground">TrueDetective</h1>
            <p className="text-sm text-muted-foreground">Think before you share</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                )}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-sidebar-border">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            This tool promotes awareness and critical thinking. Users make their own decisions.
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-8 lg:p-12">{children}</div>
      </main>
    </div>
  )
}
