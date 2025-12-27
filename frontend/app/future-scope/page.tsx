"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { GitCompare, GraduationCap, Compass, TrendingUp } from "lucide-react"

export default function FutureScopePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-foreground mb-3">Future Scope</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We're constantly exploring new ways to help people build better critical thinking skills and navigate the
            complex information landscape.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <GitCompare className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Perspective Comparison</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tools to help you discover and compare multiple perspectives on the same topic, highlighting how different
              sources frame similar information.
            </p>
          </Card>

          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Education Mode</h3>
            <p className="text-muted-foreground leading-relaxed">
              Interactive learning experiences for students and educators to develop media literacy and critical
              thinking skills through real-world examples.
            </p>
          </Card>

          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Compass className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Verification Guidance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enhanced step-by-step guidance for verifying claims, finding original sources, and cross-referencing
              information across trusted platforms.
            </p>
          </Card>

          <Card className="p-8 space-y-4 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Awareness Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Long-term tools to track your own critical thinking development and identify personal patterns in how you
              consume and evaluate information.
            </p>
          </Card>
        </div>

        <Card className="p-8 space-y-4 bg-secondary border-0">
          <h3 className="text-xl font-semibold text-foreground">Research Areas</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We're actively researching these areas to enhance misinformation awareness:
          </p>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>Cognitive bias detection and personalized awareness recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>Real-time content monitoring with context-aware alerts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>Community-driven verification networks with transparent methodologies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>Integration with social platforms to provide awareness at the source</span>
            </li>
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  )
}
