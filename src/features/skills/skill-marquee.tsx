import { SKILLS } from '@/data/skills'
import { SKILL_ICONS } from '@/lib/icons'
import styles from './skill-marquee.module.css'

/** Infinite auto-scrolling band of tech logos (decorative). Pauses on hover;
 *  the global prefers-reduced-motion rule freezes it. */
export function SkillMarquee() {
  const items = [...SKILLS, ...SKILLS] // duplicated for a seamless −50% loop

  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.track}>
        {items.map((skill, index) => {
          const Icon = SKILL_ICONS[skill.name]
          return (
            <span key={`${skill.name}-${index}`} className={styles.item}>
              <span className={styles.icon} style={{ color: skill.bg }}>
                {Icon ? <Icon /> : null}
              </span>
              {skill.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}
