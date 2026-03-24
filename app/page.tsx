'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

type GeoFix = { fix: string; impact: string; effort: string; desc: string }
type Report = {
  scores: { onPage: string; contentDepth: string; technical: string; localSeo: string; geo: string }
  criticalFindings: string[]
  warnings: string[]
  strengths: string[]
  geoFindings: string[]
  geoWins: string[]
  geoFixes: GeoFix[]
  keywords: { term: string; status: 'none' | 'weak' | 'partial' }[]
  topFix: string
  topGeoFix: string
  businessType: string
}

const STEPS = [
  'Crawling structure & metadata',
  'Auditing title tags & descriptions',
  'Checking local SEO signals',
  'Running GEO & AI visibility check',
  'Compiling your report',
]

function gradeClass(g: string) {
  if (g.startsWith('A')) return styles.gradeA
  if (g.startsWith('B')) return styles.gradeB
  if (g.startsWith('C')) return styles.gradeC
  return styles.gradeD
}

function impactClass(impact: string) {
  if (impact === 'High') return styles.impactHigh
  if (impact === 'Medium') return styles.impactMed
  return styles.impactLow
}

const WHY_WITHOUT = [
  'Customers search for what you do and find your competitor instead — every single day.',
  'ChatGPT and Perplexity recommend rivals when asked about businesses in your category.',
  'Google Maps shows competitors in the local pack — you are simply not there.',
  'Your website exists but generates no inbound leads. All sales are cold outreach.',
  'As AI search grows, your invisibility compounds. The gap widens every month.',
]

const WHY_WITH = [
  ['Sustainable', 'Your site appears when customers search for exactly what you offer — free, compounding traffic.'],
  ['AI-Visible', 'ChatGPT and Perplexity cite your business when asked for services in your industry.'],
  ['Local Dominance', 'Google Maps shows your business first to people searching in your area.'],
  ['Passive Growth', 'Your website generates inbound leads while you sleep — without paying for ads.'],
  ['Unstoppable', 'Every piece of content you publish builds authority that compounds over years.'],
]

const WHY_STATS = [
  { num: '94%', label: 'of business websites have critical SEO gaps costing them leads every day', source: 'Industry analysis 2025' },
  { num: '<5%', label: 'of websites are optimised for AI search — 95% are invisible to ChatGPT', source: 'GEO research 2025' },
  { num: '527%', label: 'growth in AI-referred website traffic in 2025 — the fastest growing channel', source: 'Search Engine Land' },
  { num: '75%', label: 'of users never scroll past page one of Google. If you are not there, you do not exist.', source: 'Search behaviour data' },
]

export default function Home() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(-1)
  const [doneSteps, setDoneSteps] = useState<number[]>([])
  const [report, setReport] = useState<Report | null>(null)
  const [error, setError] = useState('')
  const reportRef = useRef<HTMLDivElement>(null)

  async function analyze() {
    const clean = url.trim().replace(/^https?:\/\//i, '').replace(/\/$/, '')
    if (!clean) return
    setLoading(true)
    setReport(null)
    setError('')
    setCurrentStep(0)
    setDoneSteps([])

    const start = Date.now()
    const timers: NodeJS.Timeout[] = []
    STEPS.forEach((_, i) => {
      if (i === 0) return
      timers.push(setTimeout(() => {
        setDoneSteps(prev => [...prev, i - 1])
        setCurrentStep(i)
      }, i * 4500))
    })

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: clean }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)

      const elapsed = Date.now() - start
      const minWait = STEPS.length * 4500
      if (elapsed < minWait) await new Promise(r => setTimeout(r, minWait - elapsed))

      timers.forEach(clearTimeout)
      setDoneSteps([0, 1, 2, 3, 4])
      setCurrentStep(-1)
      await new Promise(r => setTimeout(r, 300))
      setReport(data)
      setTimeout(() => reportRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
    } catch {
      timers.forEach(clearTimeout)
      setError("Could not analyze that URL. Make sure it is live and try again.")
      setCurrentStep(-1)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.bgText} aria-hidden="true">DEFACED</div>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className={styles.heroKicker}>// FREE SEO + GEO AUDIT</p>
            <h1 className={styles.heroH1}>
              <span>YOUR</span>
              <span>SITE IS</span>
              <span>DE<span className={styles.struckText}>FACED</span>.</span>
            </h1>
            <p className={styles.heroDesc}>
              Enter any URL. Get a real SEO + GEO audit in 30 seconds — free.
              See every gap making you invisible to Google <em>and</em> ChatGPT,
              before you spend a dollar.
            </p>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.inputCard}>
              <div className={styles.inputCardLabel}>// ANALYZE YOUR WEBSITE</div>
              <div className={styles.inputRow}>
                <span className={styles.prefix}>https://</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="yoursite.com"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !loading && analyze()}
                  disabled={loading}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <button
                className={styles.analyzeBtn}
                onClick={analyze}
                disabled={loading || !url.trim()}
              >
                {loading
                  ? <span className={styles.btnInner}><span className={styles.spinner} />ANALYZING</span>
                  : <span className={styles.btnInner}>ANALYZE NOW <span className={styles.btnArrow}>→</span></span>
                }
              </button>

              {error && <p className={styles.errorMsg}>{error}</p>}

              {loading && (
                <div className={styles.steps}>
                  {STEPS.map((step, i) => (
                    <div
                      key={i}
                      className={[
                        styles.step,
                        doneSteps.includes(i) ? styles.stepDone : '',
                        currentStep === i ? styles.stepActive : '',
                      ].join(' ')}
                    >
                      <span className={styles.stepIcon}>
                        {doneSteps.includes(i) ? '✓' : currentStep === i ? '▸' : '—'}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!loading && !report && (
              <div className={styles.statsStrip}>
                {[
                  ['94%', 'have critical SEO gaps'],
                  ['<5%', 'optimised for AI search'],
                  ['527%', 'AI traffic growth 2025'],
                ].map(([v, l]) => (
                  <div key={v} className={styles.statItem}>
                    <span className={styles.statVal}>{v}</span>
                    <span className={styles.statLbl}>{l}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {Array(8).fill('SEO AUDIT — GEO ANALYSIS — KEYWORD GAPS — META DESCRIPTIONS — LOCAL SEO — AI SEARCH VISIBILITY — CHATGPT CITATIONS — SCHEMA MARKUP — ').map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY IT MATTERS ══ */}
      {!report && !loading && (
        <section className={styles.why}>

          {/* Opening */}
          <div className={styles.whyOpen}>
            <div className={styles.whyOpenInner}>
              <p className={styles.whyEyebrow}>// THE STAKES</p>
              <h2 className={styles.whyHeadline}>
                THE INTERNET<br />
                DOES NOT WAIT<br />
                FOR YOU TO<br />
                <span className={styles.whyStruck}>GET READY.</span>
              </h2>
              <p className={styles.whyBody}>
                Every day your website goes unoptimised,{' '}
                <strong>a competitor takes your customer.</strong>{' '}
                Google processes 8.5 billion searches daily. ChatGPT handles
                3 billion prompts monthly. The businesses that show up across
                all of them will win.{' '}
                <strong>The ones that do not will not.</strong>
              </p>
            </div>
          </div>

          {/* Hard numbers */}
          <div className={styles.whyStats}>
            {WHY_STATS.map(s => (
              <div key={s.num} className={styles.whyStat}>
                <span className={styles.whyStatNum}>{s.num}</span>
                <p className={styles.whyStatLabel}>{s.label}</p>
                <span className={styles.whyStatSource}>{s.source}</span>
              </div>
            ))}
          </div>

          {/* Without vs With */}
          <div className={styles.whyCompare}>
            <div className={styles.whyCol}>
              <div className={styles.whyColHead}>
                <span className={styles.whyColDot} />
                WITHOUT SEO &amp; GEO
              </div>
              {WHY_WITHOUT.map((text, i) => (
                <div key={i} className={styles.whyItem}>
                  <span className={styles.whyItemNum}>{String(i + 1).padStart(2, '0')}</span>
                  <p className={styles.whyItemText}>{text}</p>
                </div>
              ))}
            </div>
            <div className={styles.whyColDivider} />
            <div className={styles.whyCol}>
              <div className={styles.whyColHead}>
                <span className={styles.whyColDotWhite} />
                WITH SEO &amp; GEO
              </div>
              {WHY_WITH.map(([label, text], i) => (
                <div key={i} className={styles.whyItem}>
                  <span className={styles.whyItemNum}>{String(i + 1).padStart(2, '0')}</span>
                  <p className={styles.whyItemText}>
                    <strong>{label}.</strong> {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI shift callout */}
          <div className={styles.whyShift}>
            <div className={styles.whyShiftLeft}>
              <p className={styles.whyEyebrow}>// THE AI SHIFT IS NOT COMING. IT IS HERE.</p>
              <h3 className={styles.whyShiftTitle}>SEARCH HAS<br />CHANGED.<br />FOREVER.</h3>
              <p className={styles.whyShiftBody}>
                Traditional SEO got you ranked in Google blue links. That still matters —
                but it is no longer enough. <strong>400 million people use ChatGPT weekly.</strong>{' '}
                Perplexity, Google AI Overviews, Claude — they all answer questions by
                pulling from websites. Your site either gets cited or your competitor does.{' '}
                <strong>GEO (Generative Engine Optimization) is how you make sure it is yours.</strong>{' '}
                Businesses optimising for AI search today will own their categories tomorrow.
                The ones waiting will be explaining to their board why organic traffic collapsed.
              </p>
            </div>
            <div className={styles.whyShiftRight}>
              <span className={styles.whyNow}>NOW.</span>
              <span className={styles.whyNowSub}>Not later. Not next quarter.</span>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.whyCta}>
            <h3 className={styles.whyCtaTitle}>FIND OUT WHERE YOU STAND.</h3>
            <div className={styles.whyCtaBtns}>
              <button
                className={styles.whyCtaPrimary}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                RUN FREE AUDIT →
              </button>
              <Link href="/blog/llm-seo-geo-guide" className={styles.whyCtaGhost}>
                Read the GEO guide →
              </Link>
            </div>
          </div>

        </section>
      )}

      {/* ══ REPORT ══ */}
      {report && (
        <section className={styles.report} ref={reportRef}>
          <div className={styles.reportWrap}>

            <div className={styles.reportMast}>
              <div>
                <p className={styles.reportLabel}>// SEO + GEO AUDIT REPORT</p>
                <h2 className={styles.reportSite}>{url.replace(/^https?:\/\//i, '').replace(/\/$/, '')}</h2>
                <p className={styles.reportBiz}>{report.businessType}</p>
              </div>
              <div className={styles.reportMastRight}>
                <p className={styles.reportDate}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}</p>
                <p className={styles.reportBy}>BY DEFACEDWORLD</p>
              </div>
            </div>

            {/* Grade row */}
            <div className={styles.gradeRow}>
              {[
                { label: 'On-Page', grade: report.scores.onPage },
                { label: 'Content', grade: report.scores.contentDepth },
                { label: 'Technical', grade: report.scores.technical },
                { label: 'Local SEO', grade: report.scores.localSeo },
              ].map(s => (
                <div key={s.label} className={styles.gradeCell}>
                  <p className={styles.gradeLabel}>{s.label}</p>
                  <div className={[styles.gradeValue, gradeClass(s.grade)].join(' ')}>{s.grade}</div>
                </div>
              ))}
              <div className={[styles.gradeCell, styles.gradeCellGeo].join(' ')}>
                <p className={styles.gradeLabel}>
                  GEO <span className={styles.geoNew}>NEW</span>
                </p>
                <div className={[styles.gradeValue, gradeClass(report.scores.geo)].join(' ')}>{report.scores.geo}</div>
                <p className={styles.geoSubLabel}>AI Visibility</p>
              </div>
            </div>

            {/* SEO Findings */}
            <div className={styles.findingsRow}>
              <div className={styles.findingsCol}>
                <div className={styles.colHeader}>
                  <span className={styles.dot} style={{ background: '#ddd' }} />
                  CRITICAL ISSUES
                </div>
                {report.criticalFindings.map((f, i) => (
                  <div key={i} className={[styles.finding, styles.fCrit].join(' ')}>
                    <span className={styles.fNum}>{String(i + 1).padStart(2, '0')}</span>
                    <p>{f}</p>
                  </div>
                ))}
                <div className={styles.colHeader} style={{ marginTop: '2rem' }}>
                  <span className={styles.dot} style={{ background: '#666' }} />
                  WARNINGS
                </div>
                {report.warnings.map((f, i) => (
                  <div key={i} className={[styles.finding, styles.fWarn].join(' ')}>
                    <span className={styles.fNum}>{String(i + 1).padStart(2, '0')}</span>
                    <p>{f}</p>
                  </div>
                ))}
              </div>
              <div className={styles.findingsCol}>
                <div className={styles.colHeader}>
                  <span className={styles.dot} style={{ background: '#888' }} />
                  STRENGTHS
                </div>
                {report.strengths.map((f, i) => (
                  <div key={i} className={[styles.finding, styles.fGood].join(' ')}>
                    <span className={styles.fNum}>{String(i + 1).padStart(2, '0')}</span>
                    <p>{f}</p>
                  </div>
                ))}
                <div className={styles.colHeader} style={{ marginTop: '2rem' }}>
                  <span className={styles.dot} style={{ background: '#fff' }} />
                  TOP SEO PRIORITY
                </div>
                <div className={[styles.finding, styles.fTop].join(' ')}>
                  <span className={styles.fNum}>01</span>
                  <p>{report.topFix}</p>
                </div>
              </div>
            </div>

            {/* GEO Section */}
            <div className={styles.geoSection}>
              <div className={styles.geoHeader}>
                <div className={styles.geoHeaderLeft}>
                  <p className={styles.geoTag}>// GEO — GENERATIVE ENGINE OPTIMIZATION</p>
                  <h3 className={styles.geoTitle}>ARE YOU VISIBLE TO AI?</h3>
                  <p className={styles.geoIntro}>
                    ChatGPT, Perplexity, and Google AI Overviews are how millions now find businesses.
                    AI-referred traffic grew <strong>527%</strong> in 2025.
                    Here is how this site scores — and exactly what to fix.
                  </p>
                </div>
                <div className={styles.geoGrade}>
                  <span className={[styles.geoGradeVal, gradeClass(report.scores.geo)].join(' ')}>
                    {report.scores.geo}
                  </span>
                  <p className={styles.geoGradeLbl}>GEO Score</p>
                </div>
              </div>

              <div className={styles.geoBody}>
                <div className={styles.geoGrid}>
                  <div>
                    <div className={styles.colHeader}>
                      <span className={styles.dot} style={{ background: '#ddd' }} />
                      AI VISIBILITY GAPS
                    </div>
                    {report.geoFindings.map((f, i) => (
                      <div key={i} className={[styles.finding, styles.fCrit].join(' ')}>
                        <span className={styles.fNum}>{String(i + 1).padStart(2, '0')}</span>
                        <p>{f}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className={styles.colHeader}>
                      <span className={styles.dot} style={{ background: '#888' }} />
                      GEO QUICK WIN
                    </div>
                    {report.geoWins.map((f, i) => (
                      <div key={i} className={[styles.finding, styles.fGood].join(' ')}>
                        <span className={styles.fNum}>{String(i + 1).padStart(2, '0')}</span>
                        <p>{f}</p>
                      </div>
                    ))}
                    <div className={styles.colHeader} style={{ marginTop: '2rem' }}>
                      <span className={styles.dot} style={{ background: '#fff' }} />
                      TOP GEO PRIORITY
                    </div>
                    <div className={[styles.finding, styles.fTop].join(' ')}>
                      <span className={styles.fNum}>01</span>
                      <p>{report.topGeoFix}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.geoFixLabel}>
                  <div className={styles.colHeader}>
                    <span className={styles.dot} style={{ background: '#555' }} />
                    GEO FIX PLAN — GET CITED BY CHATGPT &amp; PERPLEXITY
                  </div>
                </div>
                <div className={styles.geoFixTable}>
                  <div className={[styles.geoFixRow, styles.geoFixHead].join(' ')}>
                    <span>Fix</span>
                    <span>Impact</span>
                    <span>Effort</span>
                    <span>What to do</span>
                  </div>
                  {report.geoFixes.map((fix, i) => (
                    <div key={i} className={styles.geoFixRow}>
                      <span className={styles.geoFixName}>{fix.fix}</span>
                      <span className={[styles.geoFixImpact, impactClass(fix.impact)].join(' ')}>{fix.impact}</span>
                      <span className={styles.geoFixEffort}>{fix.effort}</span>
                      <span className={styles.geoFixDesc}>{fix.desc}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.geoExplainer}>
                  <p className={styles.geoExplainerLabel}>// WHAT IS GEO?</p>
                  <p className={styles.geoExplainerText}>
                    GEO (Generative Engine Optimization) is the evolution of SEO. Traditional SEO gets you
                    ranked in Google blue links. GEO gets you <em>cited inside AI answers</em> — in ChatGPT,
                    Perplexity, Google AI Overviews, and Claude. The same fixes that help your Google ranking
                    also help your AI visibility.
                  </p>
                  <Link href="/blog/llm-seo-geo-guide" className={styles.geoLearnMore}>
                    Read the full GEO guide →
                  </Link>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className={styles.kwSection}>
              <div className={styles.colHeader}>
                <span className={styles.dot} style={{ background: '#555' }} />
                KEYWORD COVERAGE — 6 OF 12 SHOWN IN PREVIEW
              </div>
              <div className={styles.kwGrid}>
                {report.keywords.map((k, i) => (
                  <div key={i} className={styles.kwRow}>
                    <span className={styles.kwTerm}>{k.term}</span>
                    <span className={[styles.kwTag, styles['kwTag_' + k.status]].join(' ')}>
                      {k.status.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Locked */}
            <div className={styles.locked}>
              <div className={styles.lockedBlur}>
                <div className={styles.colHeader}>
                  <span className={styles.dot} style={{ background: '#555' }} />
                  BUSINESS GROWTH OPPORTUNITIES · FULL KEYWORD MAP · FULL GEO ROADMAP
                </div>
                {[72, 58, 84].map((n, i) => (
                  <div key={i} className={[styles.finding, styles.fWarn].join(' ')}>
                    <span className={styles.fNum}>{String(i + 1).padStart(2, '0')}</span>
                    <p>{'█'.repeat(n)}</p>
                  </div>
                ))}
              </div>
              <div className={styles.lockOverlay}>
                <div className={styles.lockBox}>
                  <p className={styles.lockLabel}>FULL REPORT LOCKED</p>
                  <p className={styles.lockDesc}>
                    Complete keyword map, business growth strategy, full GEO implementation
                    roadmap, and a priority fix plan with time and cost estimates for every issue found.
                  </p>
                  <a href="/contact?pkg=audit" className={styles.lockBtn}>
                    GET MY FULL REPORT — $497
                  </a>
                  <p className={styles.lockOr}>
                    or <a href="/services">view all packages</a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA bar */}
            <div className={styles.ctaBar}>
              <div className={styles.ctaBig}>
                READY TO<br />
                <span className={styles.ctaDim}>FIX IT?</span>
              </div>
              <div className={styles.ctaRight}>
                <p>
                  The Audit + Fix package covers the full report plus implementation of every
                  critical SEO and GEO fix. You hand over access. We do the work.
                </p>
                <div className={styles.ctaBtns}>
                  <a href="/contact?pkg=fix" className={styles.ctaPrimary}>AUDIT + FIX — $1,497</a>
                  <a href="/contact?pkg=audit" className={styles.ctaSecondary}>REPORT ONLY — $497</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ══ HOW IT WORKS ══ */}
      {!report && !loading && (
        <section className={styles.how}>
          <div className={styles.howWrap}>
            <div className={styles.howBig}>
              WE DO<br />
              <span className={styles.howDim}>BIG<br />FIXES.</span>
            </div>
            <div className={styles.howSteps}>
              {[
                ['01', 'Enter URL', 'Any live website. Takes 3 seconds.'],
                ['02', 'We Analyze', 'SEO, GEO, keywords, local signals, AI visibility.'],
                ['03', 'Get Report', 'Free SEO + GEO preview instantly. Full report: $497.'],
                ['04', 'We Fix It', 'Hand over access. We implement every fix. Done in days, not months.'],
              ].map(([n, t, d]) => (
                <div key={n} className={styles.howStep}>
                  <p className={styles.howN}>{n}</p>
                  <p className={styles.howT}>{t}</p>
                  <p className={styles.howD}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
