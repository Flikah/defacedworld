import styles from './page.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — defacedworld',
  description: 'Spencer Wilkinson — SEO analyst and digital growth strategist. defacedworld finds and fixes every problem hiding in your website.',
}

export default function About() {
  return (
    <div className={styles.wrap}>

      <div className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />The person behind it<span className={styles.line} />
        </div>
        <h1 className={styles.h1}>
          Most agencies sell you<br />
          a black box.<br />
          <span className={styles.red}>We show our work.</span>
        </h1>
      </div>

      <div className={styles.content}>
        <div className={styles.bio}>
          <div className={styles.avatar}>SW</div>
          <div>
            <div className={styles.name}>Spencer Wilkinson</div>
            <div className={styles.role}>Founder · defacedworld</div>
            <div className={styles.location}>Greenville, SC · Nationwide remote</div>
          </div>
        </div>

        <div className={styles.story}>
          <p>
            I started defacedworld after watching business after business — good ones, with real customers and real reputations — lose leads every single day because their website was invisible on Google. Not because the business was bad. Because the site was <em>defaced</em> by the kind of invisible problems most owners don&apos;t know to look for.
          </p>
          <p>
            Missing meta descriptions. Generic title tags. No structured data. No physical address on the site. Services crammed into one page instead of ranking independently. The Inland Port of Greer buried in a customer testimonial instead of headlining a page.
          </p>
          <p>
            These aren&apos;t complicated problems. But they compound. A site that&apos;s invisible at the top of the funnel loses customers before it ever gets a chance to compete on service, price, or reputation.
          </p>
          <p>
            defacedworld is my answer to that. A full-service SEO and digital growth agency that does two things well: finds everything that&apos;s broken, and fixes it. No retainers you&apos;ll forget you&apos;re paying. No vague deliverables. Just a clear report, a clear plan, and clear results.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {[
            { title: 'Specific, not generic', body: 'Every report is written for that business, that industry, those keywords. Not a template with your name swapped in.' },
            { title: 'Transparent pricing', body: 'You see the price before you see the proposal. No discovery calls that are really sales calls. No surprise quotes.' },
            { title: 'We show our work', body: 'Every fix comes with documentation. You understand what was done and why — so you own it, not just rent it.' },
            { title: 'Results that compound', body: 'SEO isn\'t a campaign. It\'s infrastructure. We build things that keep working after we\'re done.' },
          ].map((v, i) => (
            <div key={i} className={styles.value}>
              <div className={styles.valueTitle}>{v.title}</div>
              <div className={styles.valueBody}>{v.body}</div>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/" className={styles.btnPrimary}>Try the free audit →</Link>
          <Link href="/contact" className={styles.btnGhost}>Get in touch</Link>
        </div>
      </div>

    </div>
  )
}
