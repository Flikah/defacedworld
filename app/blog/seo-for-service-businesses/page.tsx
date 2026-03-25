import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: "SEO for Service Businesses: Why You're Invisible (And How to Fix It)",
  description: "Plumbers, lawyers, cleaners, consultants — service businesses get ignored by Google for the same fixable reasons. The complete guide to ranking.",
  alternates: { canonical: 'https://defacedworld.com/blog/seo-for-service-businesses' },
  openGraph: {
    title: "SEO for Service Businesses: Why You're Invisible (And How to Fix It)",
    description: "The complete SEO guide for service businesses. Fix these issues and start generating inbound leads.",
    url: 'https://defacedworld.com/blog/seo-for-service-businesses',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "SEO for Service Businesses: Why You're Invisible (And How to Fix It)",
  description: 'Service businesses get ignored by Google for the same fixable reasons.',
  author: { '@type': 'Person', name: 'Spencer Wilkinson', url: 'https://defacedworld.com/about' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://defacedworld.com/blog/seo-for-service-businesses',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does SEO work for small service businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Service businesses are often the biggest winners from SEO because local search intent is high. Someone searching "plumber near me" is ready to hire. Ranking for these terms converts directly into booked jobs.' } },
    { '@type': 'Question', name: 'How long does SEO take for a service business?', acceptedAnswer: { '@type': 'Answer', text: 'Most service businesses see meaningful movement within 3-6 months of fixing technical issues and building location pages. Google Business Profile improvements often show results within 2-4 weeks.' } },
    { '@type': 'Question', name: 'What is the most important SEO factor for service businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Local SEO signals — specifically your Google Business Profile, LocalBusiness schema markup, and location-specific landing pages. These three things drive the majority of service business leads from search.' } },
    { '@type': 'Question', name: 'Should a service business use a blog for SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but focus on answering questions your customers actually ask. How much does a roof replacement cost in [city]? One well-written post on this topic can generate leads for years.' } },
    { '@type': 'Question', name: 'How is SEO different for service businesses vs product businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Service businesses rely heavily on local search, trust signals, and review velocity. Service SEO is about showing up in the right city at the right moment — and being trusted when you do.' } },
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
          <div className={styles.meta}><span className={styles.tag}>LOCAL SEO</span><span className={styles.readTime}>10 MIN READ</span></div>
          <h1 className={styles.h1}>SEO FOR<br /><span className={styles.red}>SERVICE BUSINESSES</span></h1>
          <p className={styles.intro}>Plumbers, lawyers, cleaners, consultants — service businesses are some of the biggest winners from SEO. They are also the most likely to be completely invisible on Google. Here is why, and exactly what to fix.</p>
        </div>
        <div className={styles.body}>
          <h2>Why service businesses fail at SEO</h2>
          <p>A product business sells things people search for by name. A service business sells outcomes people search for by problem. When someone's toilet is leaking at 10pm, they search "emergency plumber [city]" — not the name of any specific company. The intent is immediate, the value of that click is enormous, and most service businesses are not showing up for it.</p>
          <p>The reasons are consistent across every service category: generic websites that do not mention the city, no Google Business Profile, zero schema markup, service pages with 50 words of copy Google cannot make sense of, and no review generation strategy. Every single one is fixable. None requires a rebuild.</p>

          <h2>Step 1: Build location into every page</h2>
          <p>Google connects businesses to geographic searches using signals across the entire site. If your website never mentions your city or service area, Google does not know where you operate. Every page title should include your primary location. Your homepage H1 should reference what you do and where. Your contact page should have your full address in text — not just embedded in a map widget.</p>
          <p><strong>Example:</strong> Instead of "Residential Cleaning Services," your title tag should read "Residential Cleaning Services in Greenville, SC | [Business Name]." This alone moves many service businesses from invisible to page one within weeks.</p>

          <h2>Step 2: Build service and location landing pages</h2>
          <p>The fastest way to dominate local search is a dedicated page for each service in each location you serve. If you are a cleaning company serving five neighborhoods, you need five location pages. If you are a lawyer handling three practice areas, you need three service pages. Each one should be at least 400 words, include the service keyword and location in the H1 and title tag, mention neighborhood names naturally, have a clear call to action, and include at least one customer quote or testimonial.</p>
          <p>These pages compound over time. Build them once, and they will generate leads for years.</p>

          <h2>Step 3: Fully optimize your Google Business Profile</h2>
          <p>For service businesses, Google Business Profile is often more valuable than your website — it is what shows up in the map pack above organic results. A fully optimized profile includes complete name, address, and phone; correct primary and secondary categories; all services listed with descriptions; at least 10 photos; accurate hours; and a keyword-rich description. Most businesses leave half these fields empty. Completing them is a significant competitive advantage.</p>

          <h2>Step 4: Add LocalBusiness schema markup</h2>
          <p>Schema markup tells Google exactly what your business is, where it is, and how to contact it. For service businesses, LocalBusiness schema (or a specific type like Plumber or LegalService) should include your business type, name, address, phone, opening hours, price range, and service area. Added as JSON-LD in your site head, it gives Google more confidence in your business and directly improves local rankings.</p>

          <h2>Step 5: Build a review generation system</h2>
          <p>Reviews are one of the most powerful ranking signals for local search. The fix: send every customer a follow-up within 24 hours of completing a job with a direct link to your Google review page.</p>
          <p><strong>"Hi [Name], thanks for choosing us today. If you have 60 seconds, an honest Google review means the world to a small business — here is a direct link: [link]"</strong></p>
          <p>Businesses that implement this consistently see 10–15x more reviews within three months. Review velocity — the rate of new reviews — is a stronger signal than total review count.</p>

          <h2>Step 6: Answer the questions your customers ask</h2>
          <p>Every service business has questions that come up on every sales call: "How much does it cost?" "How long does it take?" "Do you serve [area]?" These are also what people search before ever contacting a business. Create FAQ sections on each service page that answer these questions directly, then add FAQPage schema markup. This ranks your pages for question-based searches and builds trust before a visitor has even clicked through.</p>

          <h2>Step 7: Fix the technical issues killing your rankings</h2>
          <p>The most common problems: slow page speed (5+ seconds on mobile tanks rankings and conversion), missing HTTPS (Google marks non-HTTPS sites as insecure), no XML sitemap, broken internal links, and duplicate content from www and non-www versions of the same URL. All fixable in an afternoon.</p>

          <h2>How AI search changes the game</h2>
          <p>Beyond Google, there is a growing channel most service businesses have never heard of: AI search. When someone asks ChatGPT "who are the best plumbers in Greenville SC?" — that system pulls answers from websites. The businesses that get cited are the ones with clear, structured, authoritative content. Getting ahead of this now is one of the highest-leverage things a service business can do. Most competitors are not thinking about it yet.</p>
          <p>Run the free audit at <Link href="/">defacedworld.com</Link> — see exactly where you stand in under 60 seconds.</p>

          <h2>Frequently asked questions</h2>
          <div className={styles.faq}>
            <div className={styles.faqItem}><h3>Does SEO work for small service businesses?</h3><p>Yes. Service businesses are often the biggest winners from SEO because local search intent is high. Someone searching "plumber near me" is ready to hire. Ranking for these terms converts directly into booked jobs.</p></div>
            <div className={styles.faqItem}><h3>How long does SEO take for a service business?</h3><p>Most service businesses see meaningful movement within 3–6 months of fixing technical issues and building location pages. Google Business Profile improvements often show results within 2–4 weeks.</p></div>
            <div className={styles.faqItem}><h3>What is the most important SEO factor for service businesses?</h3><p>Local SEO signals — specifically your Google Business Profile, LocalBusiness schema markup, and location-specific landing pages. These three things drive the majority of service business leads from search.</p></div>
            <div className={styles.faqItem}><h3>Should a service business use a blog for SEO?</h3><p>Yes. Focus on answering questions your customers actually ask. "How much does a roof replacement cost in [city]?" gets searched thousands of times per month. One well-written post can generate leads for years.</p></div>
            <div className={styles.faqItem}><h3>How is SEO different for service businesses vs product businesses?</h3><p>Service businesses rely heavily on local search, trust signals, and review velocity. Service SEO is about showing up in the right city at the right moment — and being trusted when you do.</p></div>
          </div>
        </div>
      </article>
    </>
  )
}
