"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { AlertCircle, Users, Target, BookOpen } from "lucide-react"

export default function ResponsibleAIPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-foreground mb-3">Responsible AI</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We're committed to building AI that empowers critical thinking without imposing judgment or claiming
            absolute truth.
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="p-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Transparency First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're upfront about our tool's limitations. TrueDetective doesn't verify facts or determine truth.
                  It's designed to raise awareness about content patterns that might influence perception, helping you
                  think more critically.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">No Bias Judgment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We avoid making value judgments about beliefs, political views, or personal perspectives. Our analysis
                  focuses on structural patterns and emotional signals, not the correctness of ideas.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">User Empowerment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You remain in control of your decisions. We provide context and highlight considerations, but we never
                  tell you what to believe or share. Critical thinking is a personal responsibility.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Continuous Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're constantly improving our approach based on research in misinformation awareness, cognitive
                  science, and ethical AI. Our goal is to help, not to control.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 space-y-4 bg-secondary border-0">
          <h3 className="text-xl font-semibold text-foreground">Our Commitments</h3>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We will never claim to be a source of absolute truth</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We will be transparent about our limitations and uncertainties</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We will respect diverse perspectives and avoid ideological bias</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>We will prioritize user agency over algorithmic authority</span>
            </li>
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  )
}
