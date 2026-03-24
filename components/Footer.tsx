import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.wordmark}>DEFACED<span>WORLD</span></div>
        <div className={styles.links}>
          {[['/', 'Audit'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
            <Link key={href} href={href} className={styles.link}>{label}</Link>
          ))}
        </div>
        <a href="mailto:spencer@defacedworld.com" className={styles.email}>spencer@defacedworld.com</a>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} DEFACEDWORLD</span>
        <span className={styles.mono}>// WE FIX WHAT OTHERS MISS</span>
      </div>
    </footer>
  )
}
