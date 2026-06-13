import { m } from 'motion/react'
import type { Skill } from '@/types/content'
import { SKILL_ICONS } from '@/lib/icons'
import styles from './skill-bar.module.css'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function levelLabel(level: number): string {
  if (level >= 90) return 'Expert'
  if (level >= 78) return 'Advanced'
  if (level >= 65) return 'Proficient'
  return 'Familiar'
}

/** One skill row: brand icon + name + level label + a bar that fills in on scroll. */
export function SkillBar({ skill }: { skill: Skill }) {
  const Icon = SKILL_ICONS[skill.name]

  return (
    <div className={styles.row}>
      <span className={styles.mark} style={{ background: skill.bg, color: skill.fg }} aria-hidden>
        {Icon ? <Icon /> : skill.name.slice(0, 2)}
      </span>
      <div className={styles.body}>
        <div className={styles.head}>
          <span className={styles.name}>{skill.name}</span>
          <span className={styles.level}>{levelLabel(skill.level)}</span>
        </div>
        <div className={styles.track}>
          <m.div
            className={styles.fill}
            style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.9, ease: EASE }}
          />
        </div>
      </div>
    </div>
  )
}
