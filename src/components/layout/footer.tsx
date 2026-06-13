import { Link } from 'react-router-dom'
import { LuMail, LuSend } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SOCIALS } from '@/data/socials'
import { SOCIAL_ICONS } from '@/lib/icons'
import { PROFILE } from '@/data/profile'
import btn from '@/components/ui/button.module.css'
import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={cn('container', styles.footer)}>
      <Reveal className={styles.banner}>
        <div className={styles.lead}>
          <span className={styles.icon} aria-hidden>
            <LuSend />
          </span>
          <div>
            <div className={styles.title}>Let's build something amazing together.</div>
            <div className={styles.subtitle}>
              I'm always open to discussing new projects and opportunities.
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/contact" className={cn(btn.btn, btn.cream, btn.sm)}>
            Contact Me <LuMail aria-hidden />
          </Link>
          <div className={styles.socials}>
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label]
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
                  {Icon ? <Icon aria-hidden /> : null}
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
