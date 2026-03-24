import styles from './page.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — defacedworld',
  description: 'SEO audit, implementation, and ongoing growth retainer packages for businesses of all sizes. Transparent pricing, real results.',
}

const packages = [
  {
    id: 'audit',
    name: 'Audit Report',
    price: '$497',
    period: 'one-time',
    desc: 'A complete SEO and business opportunity analysis delivered as a professional report within 5 business days. Everything you need to know, prioritised and ready to act on.',
    items: [
      'Full SEO health scores across 4 dimensions',
      'Complete metadata audit (every page)',
      'Keyword opportunity map (12+ terms)',
      'Local SEO assessment',
      'Technical SEO findings',
      'Business growth opportunities',
      'Priority fix plan with hour + cost estimates',
      '30-min walkthrough call included',
    ],
    cta: 'Get the Report',
    href: '/contact?pkg=audit',
    featured: false,
  },
  {
    id: 'fix',
    name: 'Audit + Fix',
    price: '$1,497',
    period: 'one-time',
    desc: 'The full audit, plus we implement every critical and high-priority fix for you. You hand over access, we do the work — fully documented handoff when complete.',
    items: [
      'Everything in Audit Report',
      'Title tag rewrites (all pages)',
      'Meta description copywriting (all pages)',
      'LocalBusiness JSON-LD schema',
      'Google Business Profile setup & optimisation',
      'Footer NAP + address implementation',
      'Service/collection page copy (up to 5 pages)',
      'Technical fixes (redirects, canonicals)',
      '60-min strategy call included',
    ],
    cta: 'Get Started',
    href: '/contact?pkg=fix',
    featured: true,
  },
  {
    id: 'retainer',
    name: 'Growth Retainer',
    price: '$997',
    period: '/month',
    desc: 'Ongoing SEO management, content creation, and continuous improvement. Your site gets better every single month — tracked, reported, and explained in plain English.',
    items: [
      'Monthly SEO performance report',
      '2 blog posts or landing pages per month',
      'Google Business Profile management',
      'Ongoing technical fixes',
      'Keyword ranking tracking',
      'Competitor monitoring',
      'Quarterly strategy session',
      'Priority Slack/email access',
    ],
    cta: 'Start Retainer',
    href: '/contact?pkg=retainer',
    featured: false,
  },
]

const addons = [
  { name: 'Additional service/location pages', price: '$150/page' },
  { name: 'Review schema implementation', price: '$99' },
  { name: 'Google Ads account audit', price: '$297' },
  { name: 'Competitor deep-dive analysis', price: '$397' },
  { name: 'Email newsletter setup (Klaviyo/Mailchimp)', price: '$297' },
  { name: 'Social commerce setup (Instagram/TikTok Shop)', price: '$397' },
]

export default function Services() {
  return (
    <div className={styles.wrap}>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />Transparent pricing<span className={styles.line} />
        </div>
        <h1 className={styles.h1}>
          No retainers you&apos;ll forget.<br />
          No vague deliverables.<br />
          <span className={styles.red}>Just results.</span>
        </h1>
        <p className={styles.sub}>
          Every package starts with a free audit tool on our homepage.
          See the problems yourself before you spend a dollar.
        </p>
      </div>

      {/* Packages */}
      <div className={styles.packageGrid}>
        {packages.map(p => (
          <div key={p.id} className={`${styles.package} ${p.featured ? styles.featured : ''}`} id={p.id}>
            {p.featured && <div className={styles.badge}>Most popular</div>}
            <div className={styles.pkgName}>{p.name}</div>
            <div className={styles.pkgPrice}>
              {p.price}<span className={styles.pkgPeriod}> {p.period}</span>
            </div>
            <p className={styles.pkgDesc}>{p.desc}</p>
            <ul className={styles.pkgList}>
              {p.items.map((item, i) => (
                <li key={i} className={styles.pkgItem}>
                  <span className={styles.check}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href={p.href} className={p.featured ? styles.btnPrimary : styles.btnSecondary}>
              {p.cta} →
            </Link>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className={styles.addonsWrap}>
        <div className={styles.sectionLabel}>Add-ons — available with any package</div>
        <div className={styles.addonGrid}>
          {addons.map((a, i) => (
            <div key={i} className={styles.addon}>
              <span className={styles.addonName}>{a.name}</span>
              <span className={styles.addonPrice}>{a.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className={styles.faqWrap}>
        <div className={styles.sectionLabel}>Common questions</div>
        <div className={styles.faqGrid}>
          {[
            { q: 'How long does the audit take?', a: 'Full reports are delivered within 5 business days. The Audit + Fix package typically takes 2–3 weeks depending on site complexity.' },
            { q: 'Do I need to give you access to my website?', a: 'For the Audit Report, no — we analyze from the outside. For the Audit + Fix, we\'ll need CMS access (WordPress, Shopify, etc.) to implement changes.' },
            { q: 'What CMS platforms do you work with?', a: 'WordPress, Shopify, Squarespace, Wix, Webflow, and most custom-built sites. If you\'re not sure, just ask.' },
            { q: 'Can I upgrade from Audit to Audit + Fix?', a: 'Yes — the $497 audit cost is credited against the Audit + Fix price if you upgrade within 30 days.' },
            { q: 'Do you work with enterprise companies?', a: 'Yes. For enterprise engagements (Sitecore, custom CMS, multi-location), we quote custom projects. Contact us to discuss.' },
            { q: 'Is there a contract for the retainer?', a: 'No long-term contracts. Retainers are month-to-month with 30 days notice to cancel. We prefer to earn your business every month.' },
          ].map((faq, i) => (
            <div key={i} className={styles.faq}>
              <div className={styles.faqQ}>{faq.q}</div>
              <div className={styles.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaRow}>
        <Link href="/" className={styles.btnPrimary}>Try the free audit first →</Link>
        <Link href="/contact" className={styles.btnGhost}>Or get in touch</Link>
      </div>
    </div>
  )
}
