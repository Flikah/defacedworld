import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'What Is an SEO Audit? (And Why Your Business Needs One)',
  description: 'An SEO audit is a complete analysis of why your website isn\'t ranking on Google. Here\'s exactly what it covers, what it finds, and what to do next.',
  alternates: { canonical: 'https://defacedworld.com/blog/what-is-an-seo-audit' },
  openGraph: {
    title: 'What Is an SEO Audit?',
    description: 'A complete breakdown of what an SEO audit is, what it finds, and why every business website needs one.',
    url: 'https://defacedworld.com/blog/what-is-an-seo-audit',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is an SEO Audit? (And Why Your Business Needs One)',
  description: 'An SEO audit is a complete analysis of why your website isn\'t ranking on Google.',
  author: { '@type': 'Person', name: 'Spencer Wilkinson', url: 'https://defacedworld.com/about' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-01',
  dateModified: '2026-03-01',
  mainEntityOfPage: 'https://defacedworld.com/blog/what-is-an-seo-audit',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does an SEO audit include?', acceptedAnswer: { '@type': 'Answer', text: 'A full SEO audit covers on-page factors (title tags, meta descriptions, headings, copy), technical SEO (site speed, crawlability, schema, canonicals), local SEO signals (Google Business Profile, NAP consistency, structured data), and keyword opportunity analysis.' } },
    { '@type': 'Question', name: 'How much does an SEO audit cost?', acceptedAnswer: { '@type': 'Answer', text: 'Professional SEO audits typically range from $497 to $5,000+ depending on the size of the site and depth of analysis. At DEFACEDWORLD, a full audit report costs $497 and includes a 30-minute walkthrough call.' } },
    { '@type': 'Question', name: 'How often should you do an SEO audit?', acceptedAnswer: { '@type': 'Answer', text: 'Most small businesses should do a full SEO audit once per year, with a lighter check every quarter. If you\'ve recently redesigned your site, changed platforms, or noticed a traffic drop, audit immediately.' } },
  ],
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.back}>← ALL POSTS</Link>
          <div className={styles.meta}><span className={styles.tag}>SEO BASICS</span><span className={styles.readTime}>8 MIN READ</span></div>
          <h1 className={styles.h1}>WHAT IS AN<br /><span className={styles.red}>SEO AUDIT?</span></h1>
          <p className={styles.intro}>An SEO audit is a complete analysis of why your website isn't ranking on Google. It finds every broken signal, missing opportunity, and technical issue that's making you invisible to potential customers. Here's exactly what it covers, what it finds, and what to do with the results.</p>
        </div>

        <div className={styles.body}>
          <h2>The short version</h2>
          <p>An SEO audit is a systematic review of your website against the factors Google uses to decide where you rank in search results. It answers the question: <strong>why isn't my website showing up when people search for what I do?</strong></p>
          <p>Most business websites have 10–20 fixable problems that are costing them leads every single day. An SEO audit finds all of them.</p>

          <h2>What an SEO audit actually examines</h2>
          <p>A proper audit covers four distinct areas:</p>

          <h3>1. On-page SEO</h3>
          <p>This is everything Google reads on your actual pages: title tags, meta descriptions, heading structure, body copy, image alt text, and keyword usage. On-page issues are the most common and the fastest to fix.</p>
          <p>Example problems found here: a homepage title tag that just says the company name with no keywords, meta descriptions that are missing entirely (so Google writes its own), or service pages with so little copy that Google doesn't understand what you do.</p>

          <h3>2. Technical SEO</h3>
          <p>Technical SEO covers whether Google can actually find, crawl, and index your pages correctly. Issues here are often invisible to the naked eye but can prevent your site from ranking at all.</p>
          <p>Example problems: pages accidentally blocked from Google by a robots.txt rule, duplicate content caused by www vs non-www URLs, no XML sitemap, or a site that loads in 8 seconds on mobile.</p>

          <h3>3. Local SEO</h3>
          <p>If you're a business with a physical location or serving a specific geographic area, local SEO determines whether you show up in Google Maps and local search results. This is often the highest-value part of an audit for small and medium businesses.</p>
          <p>Example problems: no LocalBusiness structured data (JSON-LD), the business address not appearing anywhere on the website, or a Google Business Profile that's unclaimed or has wrong hours.</p>

          <h3>4. Keyword analysis</h3>
          <p>This maps what your potential customers are actually searching for against what your site currently ranks for — and shows you the gap. Most businesses are missing dozens of keyword opportunities they could rank for with relatively little effort.</p>

          <h2>What comes out of an SEO audit</h2>
          <p>A good SEO audit doesn't just list problems. It delivers:</p>
          <ul>
            <li>A prioritized list of fixes, ordered by impact</li>
            <li>Effort and cost estimates for each fix</li>
            <li>Keyword opportunities specific to your business and location</li>
            <li>A business growth strategy beyond just technical fixes</li>
          </ul>
          <p>The output should be a clear action plan, not a 60-page report that sits in a drawer.</p>

          <h2>How much does an SEO audit cost?</h2>
          <p>Prices range from $0 (automated tools that give you a score and little else) to $10,000+ for enterprise-level agency audits. For most small and medium businesses, a professional manual audit costs between $497 and $2,000.</p>
          <p>At DEFACEDWORLD, our <Link href="/services">Audit Report</Link> is $497 and includes a 30-minute walkthrough call. You can also <Link href="/">run a free preview</Link> right now — no account needed.</p>

          <h2>How often should you audit?</h2>
          <p>Most small businesses should do a full audit once a year. If you've recently relaunched your site, changed platforms, or noticed a sudden traffic drop, audit immediately. Don't wait for annual cycles in those cases.</p>

          <h2>Can I do an SEO audit myself?</h2>
          <p>You can do a basic version using free tools like Google Search Console, Screaming Frog's free tier, and manual page-by-page review. The limitations are time and knowing what to look for. Most business owners who attempt a DIY audit miss the structural and local SEO issues that often matter most.</p>
          <p>Our <Link href="/">free audit tool</Link> gives you a real AI-generated report in 30 seconds — a useful starting point before deciding whether to tackle fixes yourself or bring in help.</p>

          <div className={styles.faq}>
            <h2>Frequently asked questions</h2>
            <div className={styles.faqItem}><h3>What does an SEO audit include?</h3><p>A full SEO audit covers on-page factors (title tags, meta descriptions, headings, copy), technical SEO (speed, crawlability, schema, canonicals), local SEO (Google Business Profile, NAP, structured data), and keyword opportunity analysis.</p></div>
            <div className={styles.faqItem}><h3>How much does an SEO audit cost?</h3><p>Professional audits range from $497 to $5,000+ depending on site size and depth. Our full audit report is $497 and includes a 30-minute walkthrough.</p></div>
            <div className={styles.faqItem}><h3>How often should you do an SEO audit?</h3><p>Most small businesses: once a year. If you've redesigned your site, changed platforms, or noticed a traffic drop — audit immediately, don't wait.</p></div>
          </div>

          <div className={styles.ctaBox}>
            <div className={styles.ctaTitle}>SEE WHAT'S BROKEN ON YOUR SITE</div>
            <p>Run a free instant SEO audit — no account, no email, 30 seconds.</p>
            <Link href="/" className={styles.ctaBtn}>RUN FREE AUDIT →</Link>
          </div>
        </div>
      </article>
    </>
  )
}
