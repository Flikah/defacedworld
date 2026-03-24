'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

export default function Nav() {
  const path = usePathname()
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>DEFACED<span>WORLD</span></Link>
      <div className={styles.links}>
        {([['/', 'Audit'], ['/services', 'Services'], ['/blog', 'Blog'], ['/about', 'About'], ['/contact', 'Contact']] as [string,string][]).map(([href, label]) => (
          <Link key={href} href={href} className={`${styles.link} ${path === href || (href !== '/' && path.startsWith(href)) ? styles.active : ''}`}>{label}</Link>
        ))}
        <Link href="/contact" className={styles.cta}>Get Started →</Link>
      </div>
    </nav>
  )
}
