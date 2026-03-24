import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Simple in-memory rate limit: 5 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function getRateLimitKey(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
         req.headers.get('x-real-ip') || 
         'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return false
  }
  if (entry.count >= 5) return true
  entry.count++
  return false
}

function isValidDomain(url: string): boolean {
  // Must look like a real domain — no injections, no localhost in production
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}(\/[^\s]*)?$/
  if (!domainRegex.test(url)) return false
  if (url.length > 200) return false
  // Block prompt injection attempts
  const forbidden = ['ignore', 'system', 'assistant', 'prompt', 'instruction', '<', '>', '"', "'"]
  const lower = url.toLowerCase()
  return !forbidden.some(f => lower.includes(f))
}

export async function POST(req: NextRequest) {
  try {
    const ip = getRateLimitKey(req)
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 })
    }

    const body = await req.json()
    const url = typeof body?.url === 'string' ? body.url.trim().toLowerCase() : ''

    if (!url) return NextResponse.json({ error: 'URL required' }, { status: 400 })
    if (!isValidDomain(url)) {
      return NextResponse.json({ error: 'Please enter a valid website URL.' }, { status: 400 })
    }

    const safeUrl = url.replace(/[^a-zA-Z0-9.\-_/]/g, '')

    const prompt = `You are a senior SEO and GEO (Generative Engine Optimization) analyst for defacedworld.com. Analyze the website: https://${safeUrl}

GEO is the practice of optimising websites to be cited by AI systems like ChatGPT, Perplexity, and Google AI Overviews. It is the evolution of SEO.

Return ONLY a valid JSON object — no markdown, no explanation, no code fences. Just raw JSON:

{
  "scores": {
    "onPage": "C+",
    "contentDepth": "D+",
    "technical": "B",
    "localSeo": "C",
    "geo": "D"
  },
  "criticalFindings": [
    "Specific critical SEO issue #1 (2-3 sentences, specific to this site)",
    "Specific critical SEO issue #2 (2-3 sentences, specific to this site)"
  ],
  "warnings": [
    "Moderate SEO warning #1 specific to this site",
    "Moderate SEO warning #2 specific to this site"
  ],
  "strengths": [
    "Genuine positive #1 specific to this site",
    "Genuine positive #2 specific to this site"
  ],
  "geoFindings": [
    "Critical GEO issue #1 — specific to this site's AI visibility",
    "Critical GEO issue #2 — specific to this site's AI visibility"
  ],
  "geoWins": [
    "GEO strength or quick win for this site"
  ],
  "geoFixes": [
    { "fix": "Short name", "impact": "High", "effort": "30 min", "desc": "One sentence action description" },
    { "fix": "Short name", "impact": "High", "effort": "2 hrs", "desc": "One sentence action description" },
    { "fix": "Short name", "impact": "Medium", "effort": "1 hr", "desc": "One sentence action description" }
  ],
  "keywords": [
    { "term": "real search phrase", "status": "none" },
    { "term": "real search phrase", "status": "none" },
    { "term": "real search phrase", "status": "weak" },
    { "term": "real search phrase", "status": "none" },
    { "term": "real search phrase", "status": "partial" },
    { "term": "real search phrase", "status": "none" }
  ],
  "topFix": "Single highest-impact SEO action in one sentence.",
  "topGeoFix": "Single highest-impact GEO action in one sentence.",
  "businessType": "2-3 word description",
  "industry": "single word"
}

Rules:
- Grades: A, B+, B, B-, C+, C, C-, D+, D, D-, F
- Most sites score C-D for SEO and D-F for GEO — be honest and specific
- GEO grade is almost always D or F for small businesses
- Keywords must be REAL phrases specific to this business
- status values: "none", "weak", "partial" only`

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = message.content
      .map((b: { type: string; text?: string }) => b.type === 'text' ? b.text ?? '' : '')
      .join('')
    const clean = text.replace(/```json|```/g, '').trim()
    const report = JSON.parse(clean)

    return NextResponse.json(report)
  } catch (err) {
    console.error('Analysis error:', err)
    return NextResponse.json({ error: 'Analysis failed. Please try again.' }, { status: 500 })
  }
}
