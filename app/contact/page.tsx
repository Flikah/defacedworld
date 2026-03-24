'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import styles from './page.module.css'

const packages = [
  { value: 'audit', label: 'Audit Report — $497' },
  { value: 'fix', label: 'Audit + Fix — $1,497' },
  { value: 'retainer', label: 'Growth Retainer — $997/mo' },
  { value: 'enterprise', label: 'Enterprise / Custom project' },
  { value: 'other', label: 'Not sure yet — just want to talk' },
]

function ContactForm() {
  const params = useSearchParams()
  const [pkg, setPkg] = useState(params.get('pkg') || 'fix')
  const [form, setForm] = useState({ name: '', email: '', url: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const p = params.get('pkg')
    if (p) setPkg(p)
  }, [params])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, pkg }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successTitle}>Got it, {form.name.split(' ')[0]}.</h2>
        <p className={styles.successDesc}>
          I&apos;ll be in touch within 24 hours. If you included your URL I&apos;ll
          take a first look before we even speak.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.label}>Your name</label>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email address</label>
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Your website URL</label>
        <input
          className={styles.input}
          name="url"
          type="text"
          placeholder="yourwebsite.com"
          value={form.url}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>I&apos;m interested in</label>
        <select className={styles.select} value={pkg} onChange={e => setPkg(e.target.value)}>
          {packages.map(p => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Anything else I should know? <span className={styles.optional}>(optional)</span></label>
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Tell me about your business, your goals, or what's frustrating you about your current site..."
          value={form.message}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <button className={styles.submit} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
      <p className={styles.note}>// I respond to every inquiry within 24 hours</p>
    </form>
  )
}

export default function Contact() {
  return (
    <div className={styles.wrap}>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />Let&apos;s talk<span className={styles.line} />
        </div>
        <h1 className={styles.h1}>Get in touch.</h1>
        <p className={styles.sub}>
          Not sure which package is right? Start with the free audit on the homepage —
          then reach out once you&apos;ve seen the results.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.formWrap}>
          <Suspense fallback={<div className={styles.loading}>Loading…</div>}>
            <ContactForm />
          </Suspense>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>Direct email</div>
            <a href="mailto:spencer@defacedworld.com" className={styles.sideLink}>
              spencer@defacedworld.com
            </a>
          </div>
          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>Response time</div>
            <div className={styles.sideMeta}>Within 24 hours, usually faster.</div>
          </div>
          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>Based in</div>
            <div className={styles.sideMeta}>Greenville, SC · Working nationwide remotely.</div>
          </div>
          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>Not sure where to start?</div>
            <div className={styles.sideMeta} style={{ marginBottom: '12px' }}>
              Run the free audit on our homepage first. It takes 30 seconds and shows you exactly what&apos;s wrong.
            </div>
            <a href="/" className={styles.sideBtn}>Try the free audit →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
