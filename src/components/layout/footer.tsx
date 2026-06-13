import type { MouseEvent } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { ButtonLink } from '@/components/ui/button-link'
import { SOCIALS } from '@/data/socials'
import { PROFILE } from '@/data/profile'
import { scrollToSection } from '@/lib/scroll'
import styles from './footer.module.css'

export function Footer() {
  const handleContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToSection('contact')
  }

  return (
    <footer className={cn('container', styles.footer)}>
      <Reveal className={styles.banner}>
        <div className={styles.lead}>
          <span className={styles.icon} aria-hidden="true">
            ✈
          </span>
          <div>
            <div className={styles.title}>Let's build something amazing together.</div>
            <div className={styles.subtitle}>
              I'm always open to discussing new projects and opportunities.
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <ButtonLink variant="cream" size="sm" href="#contact" onClick={handleContact}>
            Contact Me ✉
          </ButtonLink>
          <div className={styles.socials}>
            {SOCIALS.map((social) => {
              const external = social.href.startsWith('http')
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={styles.social}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              )
            })}
          </div>
        </div>
      </Reveal>

      <div className={styles.copyright}>
        © {PROFILE.year} {PROFILE.name}. Designed &amp; built with care.
      </div>
    </footer>
  )
}
