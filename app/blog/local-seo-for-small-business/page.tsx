import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'Local SEO for Small Business: The Complete 2026 Guide',
  description: 'Everything a small business needs to rank in Google Maps and local search results. Complete 2026 guide.',
  alternates: { canonical: 'https://defacedworld.com/blog/local-seo-for-small-business' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Local SEO for Small Business',
  author: { '@type': 'Person', name: 'Spencer Wilkinson' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://defacedworld.com/blog/local-seo-for-small-business',
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.back}>← ALL POSTS</Link>
          <div className={styles.meta}><span className={styles.tag}>LOCAL SEO</span><span className={styles.readTime}>12 MIN READ</span></div>
          <h1 className={styles.h1}>LOCAL<br /><span className={styles.red}>SEO</span><br />GUIDE.</h1>
          <p className={styles.intro}>If your competitors are showing up in Google Maps and you're not, this guide is for you. Everything a small business needs to rank in local search — step by step.</p>
        </div>
        <div className={styles.body}>
          <h2>What is local SEO?</h2>
          <p>Local SEO is the process of optimising your online presence to appear in searches with local intent — 'near me' searches, city-specific searches, and Google Maps results. For most small businesses, local search is the highest-value SEO channel because searchers have very high buying intent.</p>
          <h2>The 5 pillars of local SEO</h2>
          <p>Local SEO comes down to five things working together: your Google Business Profile (the most important single factor), on-site signals (address in footer, LocalBusiness schema, location-specific pages), citation consistency (your name, address, and phone number matching everywhere online), reviews (quantity and quality matter), and local content (blog posts and pages that mention your city and services together).</p>
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
