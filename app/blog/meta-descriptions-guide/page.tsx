import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'Meta Descriptions: The 30-Minute Fix That Gets You More Clicks',
  description: 'Most business websites have no meta descriptions. Here is what they are, why they matter, and how to write them in 30 minutes.',
  alternates: { canonical: 'https://defacedworld.com/blog/meta-descriptions-guide' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Meta Descriptions Guide
Local SEO for Small Business',
  author: { '@type': 'Person', name: 'Spencer Wilkinson' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://defacedworld.com/blog/meta-descriptions-guide',
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.back}>← ALL POSTS</Link>
          <div className={styles.meta}><span className={styles.tag}>QUICK WINS</span><span className={styles.readTime}>6
12 MIN READ</span></div>
          <h1 className={styles.h1}>META<br /><span className={styles.red}>DESCRIPTIONS</span><br />GUIDE.
LOCAL<br /><span className={styles.red}>SEO</span><br />GUIDE.</h1>
          <p className={styles.intro}>Meta descriptions are the short text under your site title in Google results. Most business sites don't have them — and it's costing clicks every single day. Here's what they are, why they matter, and how to write them in 30 minutes.
If your competitors are showing up in Google Maps and you're not, this guide is for you. Everything a small business needs to rank in local search — step by step.</p>
        </div>
        <div className={styles.body}>
          <h2>What is a meta description?
What is local SEO?</h2>
          <p>A meta description is the 140–160 character summary that appears under your page title in Google search results. It doesn't directly affect where you rank, but it has a massive effect on whether people click your result or your competitor's. A well-written meta description can increase your click-through rate by 30–40% — which Google then uses as a positive ranking signal.
Local SEO is the process of optimising your online presence to appear in searches with local intent — 'near me' searches, city-specific searches, and Google Maps results. For most small businesses, local search is the highest-value SEO channel because searchers have very high buying intent.</p>
          <h2>The 3-part formula for a great meta description
The 5 pillars of local SEO</h2>
          <p>Every meta description should do three things: include your primary keyword naturally, communicate a clear benefit or value proposition, and include a call to action. Example: 'Independent women's boutique in Greenville SC. Curated dresses, shoes & accessories from premium brands. Free shipping over . Shop now.' That's 156 characters — keyword, value, CTA.
Local SEO comes down to five things working together: your Google Business Profile (the most important single factor), on-site signals (address in footer, LocalBusiness schema, location-specific pages), citation consistency (your name, address, and phone number matching everywhere online), reviews (quantity and quality matter), and local content (blog posts and pages that mention your city and services together).</p>
          <div className={styles.ctaBox}>
            <div className={styles.ctaTitle}>SEE YOUR SITE'S ACTUAL SEO GAPS</div>
            <p>Free instant audit. No account needed. Results in 30 seconds.</p>
            <Link href="/" className={styles.ctaBtn}>RUN FREE AUDIT →</Link>
          </div>
        </div>
      </article>
    </>
  )
}
