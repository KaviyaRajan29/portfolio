import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { ButtonLink } from '@/components/ui/button-link'
import { PROFILE } from '@/data/profile'
import styles from './about.module.css'

export function About() {
  return (
    <Reveal as="section" id="about" index={0} className={styles.col}>
      <div className={styles.card}>
        <SectionHeading icon="◍" title="About Me" iconFontSize={19} />
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
          Download Résumé <span aria-hidden="true">↓</span>
        </ButtonLink>
      </div>
    </Reveal>
  )
}
