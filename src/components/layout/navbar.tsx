import type { MouseEvent } from 'react'
import { cn } from '@/lib/cn'
import { NAV_ITEMS } from '@/data/nav'
import { PROFILE } from '@/data/profile'
import { scrollToSection } from '@/lib/scroll'
import { ThemeToggle } from './theme-toggle'
import styles from './navbar.module.css'

type NavbarProps = {
  activeId: string
}

export function Navbar({ activeId }: NavbarProps) {
  const [brandName, brandTld] = PROFILE.brand.split('.')

  const handleNav = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <nav className={styles.nav}>
      <div className={cn('container', styles.inner)}>
        <a href="#home" onClick={handleNav('home')} className={styles.logo}>
          <span className={styles.logoMark}>K</span>
          <span className={styles.logoText}>
            {brandName}
            <span className={styles.logoTld}>.{brandTld}</span>
          </span>
        </a>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNav(item.id)}
                aria-current={active ? 'page' : undefined}
                className={cn(styles.link, active && styles.linkActive)}
              >
                {item.label}
                <span className={styles.dot} aria-hidden="true" />
              </a>
            )
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
