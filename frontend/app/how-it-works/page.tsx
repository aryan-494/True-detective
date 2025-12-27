"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Search, Eye, Lightbulb, Shield } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-foreground mb-3">How It Works</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            TrueDetective helps you understand content through awareness, not judgment. Here's how we guide your
            critical thinking.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Search className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Content Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              We analyze text for patterns, emotional signals, and structural elements that might influence how you
              perceive the information.
            </p>
          </Card>

          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Eye className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Pattern Recognition</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our AI identifies manipulation techniques, emotional triggers, and framing methods commonly used in
              misleading content.
            </p>
          </Card>

          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Awareness Building</h3>
            <p className="text-muted-foreground leading-relaxed">
              Instead of telling you what's true or false, we highlight what to consider and encourage you to verify
              information yourself.
            </p>
          </Card>

          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Shield className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Your Decision</h3>
            <p className="text-muted-foreground leading-relaxed">
              You remain in control. We provide context and guidance, but you make the final judgment about what to
              believe and share.
            </p>
          </Card>
        </div>

        <Card className="p-8 space-y-4 bg-secondary border-0">
          <h3 className="text-xl font-semibold text-foreground">What We Don't Do</h3>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We don't verify factual accuracy or fact-check claims</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We don't judge your beliefs, opinions, or intentions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We don't make decisions for you about what to trust</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We don't claim to be a source of truth</span>
            </li>
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  )
}
