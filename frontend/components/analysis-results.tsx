"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Info, AlertTriangle, CheckCircle2, AlertCircle, Eye, Shield } from "lucide-react"

interface AnalysisResultsProps {
  content: string
}

export function AnalysisResults({ content }: AnalysisResultsProps) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    confidence: true,
    claims: true,
  })

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }))
  }

  return (
    <div className="space-y-6">
      {/* Analysis Confidence */}
      <AnalysisCard
        id="confidence"
        title="Analysis Confidence"
        icon={Info}
        expanded={expandedCards.confidence}
        onToggle={toggleCard}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Medium Confidence
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This analysis is based on textual patterns and common manipulation techniques. It does not verify factual
            accuracy or determine truth.
          </p>
        </div>
      </AnalysisCard>

      {/* Claim Breakdown */}
      <AnalysisCard
        id="claims"
        title="Claim Breakdown"
        icon={Eye}
        expanded={expandedCards.claims}
        onToggle={toggleCard}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Facts</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                <span>References a study (unspecified source)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                <span>Mentions a common food ingredient</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Opinions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                <span>Characterizes findings as "shocking"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                <span>Implies urgency without context</span>
              </li>
            </ul>
          </div>
        </div>
      </AnalysisCard>

      {/* Manipulation & Emotional Signals */}
      <AnalysisCard
        id="signals"
        title="Manipulation & Emotional Signals"
        icon={AlertCircle}
        expanded={expandedCards.signals}
        onToggle={toggleCard}
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <h4 className="font-medium text-foreground">Low-Risk Signals</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-success/10 text-success hover:bg-success/20 border-success/20">
                ✓ Cites research
              </Badge>
              <Badge className="bg-success/10 text-success hover:bg-success/20 border-success/20">
                ✓ References experts
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <h4 className="font-medium text-foreground">High-Risk Signals</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-warning/10 text-warning hover:bg-warning/20 border-warning/20">
                ⚠ Urgency language ("NOW", "too late")
              </Badge>
              <Badge className="bg-warning/10 text-warning hover:bg-warning/20 border-warning/20">
                ⚠ Vague sourcing ("study reveals")
              </Badge>
              <Badge className="bg-warning/10 text-warning hover:bg-warning/20 border-warning/20">
                ⚠ Emotional triggers ("shocking")
              </Badge>
              <Badge className="bg-warning/10 text-warning hover:bg-warning/20 border-warning/20">
                ⚠ Social pressure ("share with everyone")
              </Badge>
            </div>
          </div>
        </div>
      </AnalysisCard>

      {/* Context & Awareness */}
      <AnalysisCard
        id="context"
        title="Context & Awareness"
        icon={Info}
        expanded={expandedCards.context}
        onToggle={toggleCard}
      >
        <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>The study source and methodology are not specified</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>No context provided about the ingredient or potential risks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>The urgency framing may create emotional rather than rational response</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>Request to share quickly could discourage verification</span>
          </li>
        </ul>
      </AnalysisCard>

      {/* Why This Might Mislead */}
      <AnalysisCard
        id="mislead"
        title="Why This Might Mislead People"
        icon={AlertTriangle}
        expanded={expandedCards.mislead}
        onToggle={toggleCard}
      >
        <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>
              <span className="font-medium text-foreground">Fear appeal:</span> Creates anxiety about everyday choices
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>
              <span className="font-medium text-foreground">Time pressure:</span> Discourages careful consideration
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>
              <span className="font-medium text-foreground">Authority framing:</span> Appeals to unnamed experts without
              proof
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span>
              <span className="font-medium text-foreground">Social contagion:</span> Encourages rapid sharing before
              verification
            </span>
          </li>
        </ul>
      </AnalysisCard>

      {/* Verification Guidance */}
      <AnalysisCard
        id="verification"
        title="Verification Guidance"
        icon={Shield}
        expanded={expandedCards.verification}
        onToggle={toggleCard}
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Consider these steps before sharing or acting on this content:
          </p>
          <ol className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-medium text-foreground min-w-[24px]">1.</span>
              <span>Search for the original study or source publication</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-medium text-foreground min-w-[24px]">2.</span>
              <span>Check if reputable news outlets have covered this story</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-medium text-foreground min-w-[24px]">3.</span>
              <span>Look for the study's sample size, methodology, and peer review status</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-medium text-foreground min-w-[24px]">4.</span>
              <span>Compare with information from established health organizations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-medium text-foreground min-w-[24px]">5.</span>
              <span>Be cautious of claims that create urgency without providing evidence</span>
            </li>
          </ol>
        </div>
      </AnalysisCard>

      {/* Safety Mode Labels */}
      <AnalysisCard
        id="safety"
        title="Safety Mode Labels"
        icon={Shield}
        expanded={expandedCards.safety}
        onToggle={toggleCard}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-sm">
              Health-Related Content
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Sensitive topic — extra care recommended.</span> Health claims
            should be verified through official medical sources and healthcare professionals.
          </p>
        </div>
      </AnalysisCard>

      {/* Tool Limitations */}
      <AnalysisCard
        id="limitations"
        title="Tool Limitations"
        icon={Info}
        expanded={expandedCards.limitations}
        onToggle={toggleCard}
      >
        <div className="space-y-4 bg-secondary/50 p-6 rounded-lg">
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>This tool does not verify factual accuracy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>This tool does not judge beliefs or intentions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>Users remain responsible for their decisions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1">•</span>
              <span>Analysis is based on patterns, not absolute truth</span>
            </li>
          </ul>
        </div>
      </AnalysisCard>
    </div>
  )
}

interface AnalysisCardProps {
  id: string
  title: string
  icon: any
  expanded?: boolean
  onToggle: (id: string) => void
  children: React.ReactNode
}

function AnalysisCard({ id, title, icon: Icon, expanded = false, onToggle, children }: AnalysisCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <button
        onClick={() => onToggle(id)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Icon className="w-5 h-5 text-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {expanded && <div className="px-6 pb-6">{children}</div>}
    </Card>
  )
}
