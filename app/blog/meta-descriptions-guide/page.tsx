import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'Meta Descriptions: The 30-Minute Fix That Gets You More Clicks',
  description: 'Most business websites have no meta descriptions. Here is what they are, why they matter, and how to write them in 30 minutes.',
  alternates: { canonical: 'https://defacedworld.com/blog/meta-descriptions-guide' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Meta Descriptions: The 30-Minute Fix That Gets You More Clicks',
  author: { '@type': 'Person', name: 'Spencer Wilkinson' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-01',
  description: 'Most business websites have no meta descriptions. Here is what they are, why they matter, and how to write them in 30 minutes.',
}

export default function MetaDescriptionsGuide() {
  return (
    <main className={styles.post}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={styles.postHeader}>
        <div className={styles.postMeta}>
          <span className={styles.postCategory}>QUICK WINS</span>
          <span className={styles.postReadTime}>6 min read</span>
        </div>
        <h1 className={styles.postTitle}>Meta Descriptions: The 30-Minute Fix That Gets You More Clicks</h1>
        <p className={styles.postSubtitle}>Most business websites have no meta descriptions at all. Here is what they are, why they matter for clicks, and how to write good ones in 30 minutes.</p>
        <div className={styles.postDate}>MARCH 2026</div>
      </div>

      <div className={styles.postBody}>
        <p>When your website shows up in Google, two things appear under your page title: the URL and a short paragraph of text. That paragraph is the meta description. Most business websites either have none at all or let Google auto-generate one by pulling random text from the page. Both are missed opportunities.</p>

        <h2>What is a meta description?</h2>
        <p>A meta description is an HTML tag that tells search engines and users what a page is about. It shows up in search results directly beneath the page title. It does not directly affect your Google ranking — but it directly affects whether someone clicks your link or scrolls past it.</p>
        <p>Think of it as the 160-character sales pitch for each page on your website.</p>

        <h2>Why most business sites get this wrong</h2>
        <p>If you do not write a meta description, Google will write one for you. It pulls a random sentence from your page — usually something like &ldquo;Welcome to our website. We offer quality services.&rdquo; This is rarely what would make someone want to click.</p>
        <p>The result: your page appears in search results, but nobody clicks. Your click-through rate stays low, which signals to Google that your result is not helpful, which pushes you further down the rankings over time.</p>

        <h2>What makes a good meta description</h2>
        <p>A good meta description does three things. First, it tells the user exactly what the page is about and what they will get from it. Second, it matches the intent behind the search — someone searching for a plumber wants to know you are available now, not that you were founded in 1987. Third, it fits in 155 characters so Google does not truncate it.</p>
        <p>Including your main keyword naturally helps too, since Google bolds matching terms in the snippet, making your result stand out visually.</p>

        <h2>How to write them in 30 minutes</h2>
        <p>Start with your five most important pages: homepage, services or product page, about page, contact page, and your highest-traffic blog post if you have one. For each one, write one sentence that answers: what is this page about, and why should someone click it over the competition?</p>
        <p>Use an active voice. Lead with what the user gets. Keep it under 155 characters. Do not keyword-stuff — write for a human first.</p>
        <p>Example of a bad meta description: &ldquo;SEO services, digital marketing, local SEO, technical SEO, affordable SEO agency.&rdquo;</p>
        <p>Example of a good one: &ldquo;Free instant SEO audit for any website. See exactly what is hurting your Google rankings in 30 seconds — no account needed.&rdquo;</p>

        <h2>Where to add them</h2>
        <p>In most website platforms this is straightforward. In WordPress, the Yoast or RankMath plugin adds a meta description field to every page. In Squarespace and Wix, it is in the page settings under SEO. In Shopify, it is in the search engine listing preview section of each product and page. In a custom Next.js or React site, it goes in the metadata export at the top of each page file.</p>

        <div className={styles.cta}>
          <div className={styles.ctaTitle}>SEE YOUR SITE&apos;S ACTUAL SEO GAPS</div>
          <p className={styles.ctaText}>Run a free audit and see every missing meta description, weak title tag, and GEO gap on your site right now.</p>
          <Link href="/" className={styles.ctaButton}>RUN FREE AUDIT →</Link>
        </div>
      </div>
    </main>
  )
}
