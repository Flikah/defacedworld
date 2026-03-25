import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'SEO Blog — Guides, Tips & Free Resources',
  description: 'Free SEO guides, tutorials, and resources for business owners. Learn how to fix your website, rank on Google, and grow your business through search.',
  alternates: { canonical: 'https://defacedworld.com/blog' },
  openGraph: {
    title: 'SEO Blog — Free Guides from DEFACEDWORLD',
    description: 'Plain-English SEO guides for business owners. No jargon. Just what works.',
    url: 'https://defacedworld.com/blog',
  },
}

const posts = [
  {
    slug: 'seo-for-service-businesses',
    title: "SEO for Service Businesses: Why You're Invisible (And How to Fix It)",
    desc: 'Plumbers, lawyers, cleaners, consultants — service businesses get ignored by Google for the same fixable reasons. Here is the complete guide to ranking.',
    date: 'March 2026',
    readTime: '10 min read',
    tag: 'Local SEO',
  },
  {
    slug: 'how-to-rank-on-chatgpt',
    title: 'How to Rank on ChatGPT: Get Your Business Cited by AI Search',
    desc: '400 million people use ChatGPT weekly. Here is the exact step-by-step guide to getting your business cited by ChatGPT, Perplexity, and Google AI Overviews.',
    date: 'March 2026',
    readTime: '11 min read',
    tag: 'AI Search · GEO',
  },
  {
    slug: 'technical-seo-checklist',
    title: 'Technical SEO Checklist: 20 Checks Every Website Needs in 2025',
    desc: 'Most small business websites have at least 5 of these 20 technical issues. Each one is silently costing you traffic and leads. Work through this list.',
    date: 'March 2026',
    readTime: '12 min read',
    tag: 'Technical SEO',
  },
    {
    slug: 'llm-seo-geo-guide',
    title: 'LLM SEO & GEO: How to Get Your Business Cited by ChatGPT and Perplexity',
    desc: 'ChatGPT, Perplexity, and Google AI Overviews are how millions of people now find businesses. AI-referred sessions jumped 527% in 2025. Here is exactly how to make sure your business gets cited.',
    date: 'March 2026',
    readTime: '11 min read',
    tag: 'AI Search · GEO',
  },
  {
    slug: 'what-is-an-seo-audit',
    title: 'What Is an SEO Audit? (And Why Your Business Needs One)',
    desc: 'An SEO audit is a complete analysis of why your website isn\'t ranking on Google. Here\'s exactly what it covers, what it finds, and what to do with the results.',
    date: 'March 2026',
    readTime: '8 min read',
    tag: 'SEO Basics',
  },
  {
    slug: 'why-your-website-isnt-showing-up-on-google',
    title: 'Why Your Website Isn\'t Showing Up on Google (7 Real Reasons)',
    desc: 'You have a website. Google still doesn\'t show it. Here are the 7 most common reasons — and how to fix every single one.',
    date: 'March 2026',
    readTime: '10 min read',
    tag: 'Troubleshooting',
  },
  {
    slug: 'meta-descriptions-guide',
    title: 'Meta Descriptions: The 30-Minute Fix That Gets You More Clicks',
    desc: 'Most business websites have no meta descriptions. Here\'s what they are, why they matter, and how to write them in 30 minutes or less.',
    date: 'March 2026',
    readTime: '6 min read',
    tag: 'Quick Wins',
  },
  {
    slug: 'local-seo-for-small-business',
    title: 'Local SEO for Small Business: The Complete 2026 Guide',
    desc: 'If you run a local business and your competitors are showing up in Google Maps and you\'re not, this guide is for you. Everything you need to fix it.',
    date: 'March 2026',
    readTime: '12 min read',
    tag: 'Local SEO',
  },
  {
    slug: 'google-business-profile-setup',
    title: 'How to Set Up Google Business Profile (Step by Step)',
    desc: 'Google Business Profile is the single most powerful free tool for local business visibility. Here\'s how to set it up correctly in under an hour.',
    date: 'March 2026',
    readTime: '9 min read',
    tag: 'Local SEO',
  },
]

export default function Blog() {
  return (
    <div className={styles.wrap}>
      <div className={styles.hero}>
        <p className={styles.kicker}>// FREE RESOURCES</p>
        <h1 className={styles.h1}>SEO GUIDES<br />THAT<br /><span className={styles.red}>ACTUALLY</span><br />WORK.</h1>
        <p className={styles.sub}>Plain-English guides for business owners. No jargon. No fluff. Just what moves the needle.</p>
      </div>

      <div className={styles.grid}>
        {posts.map((p, i) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}>
            <div className={styles.cardTop}>
              <span className={styles.tag}>{p.tag}</span>
              <span className={styles.readTime}>{p.readTime}</span>
            </div>
            <h2 className={styles.cardTitle}>{p.title}</h2>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.cardBottom}>
              <span className={styles.date}>{p.date}</span>
              <span className={styles.readMore}>READ →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaBig}>ENOUGH<br />READING.</div>
        <div className={styles.ctaRight}>
          <p>See what\'s actually broken on your site right now. Free, instant, no account needed.</p>
          <Link href="/" className={styles.ctaBtn}>RUN YOUR FREE AUDIT →</Link>
        </div>
      </div>
    </div>
  )
}
