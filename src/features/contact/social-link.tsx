import type { Social } from '@/types/content'
import styles from './social-link.module.css'

export function SocialLink({ social }: { social: Social }) {
  const external = social.href.startsWith('http')

  return (
    <a
      href={social.href}
      className={styles.link}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span className={styles.icon} aria-hidden="true">
        {social.icon}
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{social.label}</span>
        <span className={styles.handle}>{social.handle}</span>
      </span>
      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
