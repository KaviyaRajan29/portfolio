import { LuArrowUpRight } from 'react-icons/lu'
import type { Social } from '@/types/content'
import { SOCIAL_ICONS } from '@/lib/icons'
import styles from './social-link.module.css'

export function SocialLink({ social }: { social: Social }) {
  const Icon = SOCIAL_ICONS[social.label]
  const external = social.href.startsWith('http')

  return (
    <a
      href={social.href}
      className={styles.link}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span className={styles.icon} aria-hidden>
        {Icon ? <Icon /> : null}
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{social.label}</span>
        <span className={styles.handle}>{social.handle}</span>
      </span>
      <span className={styles.arrow} aria-hidden>
        <LuArrowUpRight />
      </span>
    </a>
  )
}
