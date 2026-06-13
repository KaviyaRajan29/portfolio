import { LuDownload, LuUser } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { ButtonLink } from '@/components/ui/button-link'
import { PROFILE } from '@/data/profile'
import styles from './about.module.css'

export function About() {
  return (
    <section className={cn('container', styles.section)}>
      <Reveal className={styles.card}>
        <SectionHeading icon={<LuUser aria-hidden />} title="About Me" iconFontSize={20} />
        <p className={styles.blurb}>{PROFILE.aboutBlurb}</p>
        <div className={styles.stats}>
          {PROFILE.stats.map((stat) => (
            <div key={stat.label}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
        <ButtonLink variant="navy" size="sm" href="#">
          Download Résumé <LuDownload aria-hidden />
        </ButtonLink>
      </Reveal>
    </section>
  )
}
