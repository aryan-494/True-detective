"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AnalysisResults } from "@/components/analysis-results"

const sampleContent = `BREAKING: New study reveals shocking truth about everyday food! Scientists warn that this common ingredient could be affecting millions. Health experts say you need to know this NOW. Share this with everyone you know before it's too late!`

export function AnalyzeContent() {
  const [content, setContent] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    if (!content.trim()) return
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 1500)
  }

  const handleSampleContent = () => {
    setContent(sampleContent)
    setShowResults(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold text-foreground mb-3">Analyze Content</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Paste a message, headline, or post you want to examine
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <Textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
            setShowResults(false)
          }}
          placeholder="Paste a message, headline, or social media content here…"
          className="min-h-[200px] text-base resize-none bg-card"
        />
        <div className="flex gap-3">
          <Button onClick={handleAnalyze} disabled={!content.trim() || isAnalyzing} size="lg" className="px-8">
            {isAnalyzing ? "Analyzing..." : "Run Analysis"}
          </Button>
          <Button onClick={handleSampleContent} variant="outline" size="lg" disabled={isAnalyzing}>
            Try Sample Content
          </Button>
        </div>
      </div>

      {/* Results Section */}
      {showResults && <AnalysisResults content={content} />}
    </div>
  )
}
