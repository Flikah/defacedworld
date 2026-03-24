import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'Why Your Website Isn\'t Showing Up on Google (7 Real Reasons)',
  description: 'You have a website. Google still doesn\'t show it. Here are the 7 most common reasons your site isn\'t ranking — and how to fix every single one.',
  alternates: { canonical: 'https://defacedworld.com/blog/why-your-website-isnt-showing-up-on-google' },
  openGraph: { title: 'Why Your Website Isn\'t Showing Up on Google', description: '7 real reasons your website isn\'t ranking — and how to fix them.', url: 'https://defacedworld.com/blog/why-your-website-isnt-showing-up-on-google' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Why Your Website Isn\'t Showing Up on Google (7 Real Reasons)',
  author: { '@type': 'Person', name: 'Spencer Wilkinson', url: 'https://defacedworld.com/about' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-01', dateModified: '2026-03-01',
  mainEntityOfPage: 'https://defacedworld.com/blog/why-your-website-isnt-showing-up-on-google',
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.back}>← ALL POSTS</Link>
          <div className={styles.meta}><span className={styles.tag}>TROUBLESHOOTING</span><span className={styles.readTime}>10 MIN READ</span></div>
          <h1 className={styles.h1}>WHY YOUR SITE<br />ISN'T ON<br /><span className={styles.red}>GOOGLE.</span></h1>
          <p className={styles.intro}>You built a website. You might have even paid good money for it. But when you search for what you do, you're nowhere to be found. Here are the 7 real reasons — and how to fix every one.</p>
        </div>
        <div className={styles.body}>
          <h2>First: how Google decides who ranks</h2>
          <p>Google uses hundreds of signals to decide which websites appear for any given search. Most of them boil down to three things: <strong>can Google find and understand your site, does your site clearly say what it does and where, and does it match what the searcher is looking for.</strong></p>
          <p>When your site doesn't show up, it's almost always failing on one of these. Here's how to diagnose which one.</p>

          <h2>Reason 1: Google hasn't indexed your site yet</h2>
          <p>If your site is brand new or recently rebuilt, Google may simply not have found it yet. You can check by searching <code>site:yourdomain.com</code> in Google. If nothing comes back, your site isn't indexed.</p>
          <p><strong>Fix:</strong> Submit your site to Google Search Console and submit your sitemap. It can take 1–4 weeks for a new site to start appearing in results.</p>

          <h2>Reason 2: Your title tags don't contain keywords</h2>
          <p>The single most common SEO problem for small business websites. Your title tag (the text that appears in the browser tab and in Google results) just says your company name, with no indication of what you actually do or where you do it.</p>
          <p>Google uses title tags as a primary signal for what your page is about. If your homepage title is "Greenville Plumbing Co." and someone searches "emergency plumber Greenville SC," Google has no reason to connect those two things.</p>
          <p><strong>Fix:</strong> Rewrite every title tag to include your primary service and location. "Emergency Plumber Greenville SC — Greenville Plumbing Co." is infinitely more rankable than the company name alone. Read our <Link href="/blog/meta-descriptions-guide">guide to meta descriptions and title tags</Link> for a step-by-step approach.</p>

          <h2>Reason 3: You have no meta descriptions</h2>
          <p>Meta descriptions are the short paragraph that appears under your site title in Google results. When they're missing, Google writes its own — usually pulling random text from the page that makes no sense out of context and doesn't make anyone want to click.</p>
          <p><strong>Fix:</strong> Write a 140–160 character meta description for every page. Include your primary keyword and a clear reason to click. Our <Link href="/blog/meta-descriptions-guide">meta descriptions guide</Link> covers exactly how to do this in 30 minutes.</p>

          <h2>Reason 4: You have no dedicated service pages</h2>
          <p>This is the most common structural problem we find. All your services are on one page, or worse, crammed into a single paragraph on the homepage. Google can only rank one URL for each search query. If "kitchen renovation" and "bathroom renovation" are both on the same page, you're competing with yourself and ranking for neither.</p>
          <p><strong>Fix:</strong> Give every service its own page with a keyword-rich URL, title, and 300+ words of specific copy. <code>/services/kitchen-renovation</code> and <code>/services/bathroom-renovation</code> can both rank independently.</p>

          <h2>Reason 5: Your site has no local SEO signals</h2>
          <p>If you serve a specific geographic area, you need to tell Google that clearly. This means your address in the footer, a Google Business Profile that's verified and complete, and LocalBusiness JSON-LD schema on your homepage.</p>
          <p>Without these, Google has no reason to show you for "[service] near me" or "[service] [city]" searches — even if you've been serving that area for 20 years.</p>
          <p><strong>Fix:</strong> See our complete guide to <Link href="/blog/local-seo-for-small-business">local SEO for small businesses</Link> and our <Link href="/blog/google-business-profile-setup">Google Business Profile setup walkthrough</Link>.</p>

          <h2>Reason 6: Your site is too slow</h2>
          <p>Google uses page speed as a ranking factor, especially on mobile. A site that takes more than 3 seconds to load will rank lower and convert worse than a fast one. Test yours at PageSpeed Insights (pagespeed.web.dev).</p>
          <p><strong>Fix:</strong> The most common culprits are uncompressed images, too many plugins (WordPress), and cheap hosting. Compress all images to WebP, delete unused plugins, and consider a CDN or faster host.</p>

          <h2>Reason 7: You have no content</h2>
          <p>Google rewards websites that demonstrate expertise and depth. A 5-page brochure site tells Google very little about who you are and what you know. Competitors with blogs, detailed service pages, and FAQ sections have far more surface area for Google to find and rank.</p>
          <p><strong>Fix:</strong> Start a blog. Even 4–6 posts per year targeting specific questions your customers search ("how much does X cost in [city]", "X vs Y", "what to look for when hiring X") can dramatically expand your organic reach over 12 months.</p>

          <div className={styles.ctaBox}>
            <div className={styles.ctaTitle}>FIND OUT EXACTLY WHY YOUR SITE ISN'T RANKING</div>
            <p>Our free instant audit checks all 7 of these in under 30 seconds.</p>
            <Link href="/" className={styles.ctaBtn}>RUN FREE AUDIT →</Link>
          </div>
        </div>
      </article>
    </>
  )
}
