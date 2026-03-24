import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'How to Set Up Google Business Profile (Step by Step)',
  description: 'Google Business Profile is the most powerful free tool for local visibility. Step-by-step setup guide.',
  alternates: { canonical: 'https://defacedworld.com/blog/google-business-profile-setup' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Google Business Profile Setup',
  author: { '@type': 'Person', name: 'Spencer Wilkinson' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://defacedworld.com/blog/google-business-profile-setup',
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.back}>← ALL POSTS</Link>
          <div className={styles.meta}><span className={styles.tag}>LOCAL SEO</span><span className={styles.readTime}>9 MIN READ</span></div>
          <h1 className={styles.h1}>GOOGLE<br /><span className={styles.red}>BUSINESS</span><br />PROFILE.</h1>
          <p className={styles.intro}>Google Business Profile is the single most powerful free tool for local business visibility. If yours isn't set up correctly, you're leaving leads on the table every day. Here's how to fix it.</p>
        </div>
        <div className={styles.body}>
          <h2>What is Google Business Profile?</h2>
          <p>Google Business Profile (formerly Google My Business) is the free listing that appears on the right side of Google search results and in Google Maps. It shows your address, hours, phone number, reviews, photos, and more. For local businesses, it's often the first thing a potential customer sees.</p>
          <h2>Step 1: Claim or create your profile</h2>
          <p>Go to business.google.com and search for your business name. If it already exists, claim it. If not, create it from scratch. You'll need to verify it — Google usually sends a postcard to your physical address with a PIN, though phone and email verification are sometimes available.</p>
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
