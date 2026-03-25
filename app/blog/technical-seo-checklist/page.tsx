import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'Technical SEO Checklist: 20 Checks Every Website Needs in 2025',
  description: 'The complete technical SEO checklist for small business websites. 20 specific checks covering crawlability, speed, schema, canonicals, and AI visibility.',
  alternates: { canonical: 'https://defacedworld.com/blog/technical-seo-checklist' },
  openGraph: {
    title: 'Technical SEO Checklist: 20 Checks Every Website Needs in 2025',
    description: 'The 20-point technical SEO checklist every small business website needs.',
    url: 'https://defacedworld.com/blog/technical-seo-checklist',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Technical SEO Checklist: 20 Checks Every Website Needs in 2025',
  description: 'The complete 20-point technical SEO checklist for small business websites.',
  author: { '@type': 'Person', name: 'Spencer Wilkinson', url: 'https://defacedworld.com/about' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://defacedworld.com/blog/technical-seo-checklist',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is technical SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Technical SEO covers the behind-the-scenes factors that determine whether Google can find, crawl, and index your website correctly. It includes site speed, URL structure, XML sitemaps, robots.txt, schema markup, HTTPS, canonical tags, and mobile-friendliness.' } },
    { '@type': 'Question', name: 'How often should I run a technical SEO audit?', acceptedAnswer: { '@type': 'Answer', text: 'For most small businesses, once per year is sufficient for a full technical audit. Run a lighter check any time you redesign your site, switch platforms, change hosting providers, or notice a sudden drop in traffic.' } },
    { '@type': 'Question', name: 'Can I do technical SEO myself?', acceptedAnswer: { '@type': 'Answer', text: 'Many technical SEO fixes are straightforward — submitting a sitemap, adding HTTPS, fixing broken links — and can be done without a developer. Others like implementing schema markup may require developer help.' } },
    { '@type': 'Question', name: 'What is the most important technical SEO factor?', acceptedAnswer: { '@type': 'Answer', text: "Crawlability and indexability — if Google can't find and index your pages, nothing else matters. After that, page speed, HTTPS, and schema markup have the biggest impact for most small business websites." } },
    { '@type': 'Question', name: 'Does technical SEO affect AI search visibility?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Robots.txt settings for AI crawlers, schema markup, page speed, and structured content all influence GEO (AI search visibility) as well as traditional Google rankings.' } },
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
          <div className={styles.meta}><span className={styles.tag}>TECHNICAL SEO</span><span className={styles.readTime}>12 MIN READ</span></div>
          <h1 className={styles.h1}>TECHNICAL SEO<br /><span className={styles.red}>CHECKLIST 2025</span></h1>
          <p className={styles.intro}>Most small business websites have at least 5 of these 20 issues. Each one is silently costing you traffic and leads. Work through this list and fix what applies — you will see the difference in rankings within weeks.</p>
        </div>
        <div className={styles.body}>
          <h2>Crawlability and indexability</h2>
          <p>These are the foundation. If Google cannot find and index your pages, nothing else matters.</p>

          <h3>1. Verify Google can crawl your site</h3>
          <p>Open yoursite.com/robots.txt and check it is not accidentally blocking Googlebot. A misconfigured robots.txt is one of the most common and most damaging technical SEO errors. The line "Disallow: /" blocks everything. Make sure yours only blocks pages you intentionally want hidden — admin areas, staging pages, duplicate content.</p>

          <h3>2. Submit your XML sitemap to Google Search Console</h3>
          <p>Your sitemap tells Google which pages exist and how important they are. Without it, Google has to discover your pages by following links — some pages may never get indexed. Create a sitemap at yoursite.com/sitemap.xml and submit it in Google Search Console under Indexing then Sitemaps.</p>

          <h3>3. Check all important pages are indexed</h3>
          <p>In Google Search Console, go to Pages then Not indexed and review why. Common causes: pages marked noindex accidentally, orphan pages not linked from anywhere, or pages blocked by robots.txt. Every page that should rank needs to be in Google's index.</p>

          <h3>4. Fix crawl errors</h3>
          <p>Check Coverage for 404 errors and server errors in Google Search Console. Every 404 page that was once indexed bleeds authority. Either redirect these URLs to a relevant live page or fix the broken links pointing to them.</p>

          <h2>HTTPS and security</h2>

          <h3>5. Ensure the entire site runs on HTTPS</h3>
          <p>Google has used HTTPS as a ranking signal since 2014 and marks non-HTTPS sites as "Not Secure" in Chrome. If any part of your site — especially checkout or contact forms — runs on HTTP, fix it immediately. Check by looking at the padlock icon in the browser address bar.</p>

          <h3>6. Redirect HTTP to HTTPS and www to non-www</h3>
          <p>Your site should be accessible at exactly one URL. If your homepage is reachable at four different versions (http, https, www, non-www), Google sees them as separate sites and splits your ranking signals. Pick one canonical version and 301 redirect all others to it.</p>

          <h2>Page speed and Core Web Vitals</h2>

          <h3>7. Test your Core Web Vitals</h3>
          <p>Run your site through PageSpeed Insights (pagespeed.web.dev). Google's Core Web Vitals — Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift — are direct ranking factors. Aim for LCP under 2.5 seconds, INP under 200ms, and CLS under 0.1.</p>

          <h3>8. Compress all images</h3>
          <p>Uncompressed images are the most common cause of slow page loads. Every image should be compressed before upload. Use WebP format where possible — it is 25–35% smaller than JPEG at equivalent quality. Set explicit width and height attributes to prevent layout shift.</p>

          <h3>9. Use a fast host</h3>
          <p>Shared hosting on budget providers often introduces 1–3 seconds of server response time before the page even starts loading. If your Time to First Byte is consistently above 600ms, consider migrating to a faster host — Vercel, Cloudflare Pages, or a VPS.</p>

          <h3>10. Enable browser caching and compression</h3>
          <p>Your server should send caching headers that tell browsers to store static assets locally and compress files using Gzip or Brotli before sending them. Both are typically one-click configurations in your hosting control panel or CDN settings.</p>

          <h2>URL structure and architecture</h2>

          <h3>11. Use clean, descriptive URLs</h3>
          <p>/services/plumbing-repairs is good. /page?id=47 is bad. Clean URLs are easier for Google to understand, easier for users to remember, and more likely to be clicked in search results. On WordPress, set your permalink structure to "Post name" not the default numeric format.</p>

          <h3>12. Fix redirect chains</h3>
          <p>A redirect chain is when Page A redirects to Page B which redirects to Page C. Every hop loses a small amount of link equity and slows page load. Make sure each redirect goes directly to the final destination URL.</p>

          <h3>13. Add canonical tags to duplicate content</h3>
          <p>If the same content appears at multiple URLs — for example a product page accessible with and without URL parameters — add a canonical tag pointing to the primary version. This tells Google which version to index and prevents your own pages competing against each other.</p>

          <h2>On-page technical signals</h2>

          <h3>14. Unique title tags under 60 characters on every page</h3>
          <p>Title tags are the most important on-page SEO element. Every page needs a unique title that includes the primary keyword and, for local businesses, the location. Keep titles under 60 characters to prevent Google truncating them in search results.</p>

          <h3>15. Unique meta descriptions under 155 characters</h3>
          <p>Meta descriptions appear in search results and influence click-through rate. Write descriptions that describe the page value and include a call to action. Duplicate meta descriptions across multiple pages signal low-quality content to Google.</p>

          <h3>16. One H1 per page with the primary keyword</h3>
          <p>Each page should have exactly one H1 tag containing the primary keyword for that page. It should differ from the title tag — not be identical. Use H2 and H3 tags to structure the content hierarchy.</p>

          <h2>Schema markup</h2>

          <h3>17. LocalBusiness schema on your homepage</h3>
          <p>LocalBusiness schema tells Google and AI systems exactly what your business is, where it is, and how to contact it. It should include business type, name, address, phone, opening hours, price range, service area, and review aggregate. The most impactful schema implementation for service businesses.</p>

          <h3>18. FAQPage schema on service and content pages</h3>
          <p>FAQPage schema enables rich results in Google and significantly boosts AI search visibility. Every service page and blog post should have at least 3–5 FAQs marked up with FAQPage schema. This is one of the highest-ROI technical SEO investments for small businesses.</p>

          <h2>Mobile</h2>

          <h3>19. Fix all mobile usability issues</h3>
          <p>Google uses mobile-first indexing — it primarily uses the mobile version of your site for ranking. Run your site through the Mobile-Friendly Test in Google Search Console. Fix text that is too small to read, clickable elements that are too close together, and content wider than the screen.</p>

          <h2>AI search visibility</h2>

          <h3>20. Allow AI crawlers in robots.txt</h3>
          <p>AI systems like ChatGPT, Perplexity, and Claude use their own crawlers to keep knowledge current. If these crawlers are blocked, you cannot be cited in AI search results. Add explicit allow rules for GPTBot, PerplexityBot, ClaudeBot, Google-Extended, and OAI-SearchBot to your robots.txt. This is the single most underdone GEO fix — fewer than 5% of websites have done it.</p>

          <h2>Where to start</h2>
          <p>Work through these 20 points systematically. Prioritise in this order: crawlability first, then HTTPS, then page speed, then schema. Those four areas cover the highest-impact issues for most small business websites.</p>
          <p>If you want a faster way to identify which of these issues your site has right now, the free audit at <Link href="/">defacedworld.com</Link> checks many of these signals automatically and gives you a prioritised fix list in under 60 seconds.</p>

          <h2>Frequently asked questions</h2>
          <div className={styles.faq}>
            <div className={styles.faqItem}><h3>What is technical SEO?</h3><p>Technical SEO covers the behind-the-scenes factors that determine whether Google can find, crawl, and index your website correctly. It includes site speed, URL structure, XML sitemaps, robots.txt, schema markup, HTTPS, canonical tags, and mobile-friendliness.</p></div>
            <div className={styles.faqItem}><h3>How often should I run a technical SEO audit?</h3><p>For most small businesses, once per year is sufficient for a full technical audit. Run a lighter check any time you redesign your site, switch platforms, change hosting providers, or notice a sudden drop in traffic.</p></div>
            <div className={styles.faqItem}><h3>Can I do technical SEO myself?</h3><p>Many fixes are straightforward — submitting a sitemap, adding HTTPS, fixing broken links — and can be done without a developer. Schema markup and redirect fixes may require developer help.</p></div>
            <div className={styles.faqItem}><h3>What is the most important technical SEO factor?</h3><p>Crawlability and indexability — if Google cannot find and index your pages, nothing else matters. After that, page speed, HTTPS, and schema markup have the biggest impact for most small business websites.</p></div>
            <div className={styles.faqItem}><h3>Does technical SEO affect AI search visibility?</h3><p>Yes. Robots.txt settings for AI crawlers, schema markup, page speed, and structured content all influence GEO (AI search visibility) as well as traditional Google rankings.</p></div>
          </div>
        </div>
      </article>
    </>
  )
}
