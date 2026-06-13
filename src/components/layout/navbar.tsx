import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { LuMenu, LuX } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { NAV_ITEMS } from '@/data/nav'
import { PROFILE } from '@/data/profile'
import { ThemeToggle } from './theme-toggle'
import styles from './navbar.module.css'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [brandName, brandTld] = PROFILE.brand.split('.')
  const close = () => setOpen(false)

  return (
    <nav className={styles.nav}>
      <div className={cn('container', styles.inner)}>
        <Link to="/" className={styles.logo} onClick={close}>
          <span className={styles.logoMark}>K</span>
          <span className={styles.logoText}>
            {brandName}
            <span className={styles.logoTld}>.{brandTld}</span>
          </span>
        </Link>

        <div className={cn(styles.links, open && styles.linksOpen)}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={close}
              className={({ isActive }) => cn(styles.link, isActive && styles.linkActive)}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className={styles.activeDot}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <LuX aria-hidden /> : <LuMenu aria-hidden />}
          </button>
        </div>
      </div>
    </nav>
  )
}
