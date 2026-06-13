import type { Skill } from '@/types/content'
import styles from './skill-chip.module.css'

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className={styles.chip}>
      <span
        className={styles.mark}
        style={{ background: skill.bg, color: skill.fg }}
        aria-hidden="true"
      >
        {skill.mark}
      </span>
      <span className={styles.name}>{skill.name}</span>
    </div>
  )
}
