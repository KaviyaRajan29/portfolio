import type { Skill } from '@/types/content'
import { SKILL_ICONS } from '@/lib/icons'
import styles from './skill-chip.module.css'

export function SkillChip({ skill }: { skill: Skill }) {
  const Icon = SKILL_ICONS[skill.name]
  return (
    <div className={styles.chip}>
      <span className={styles.mark} style={{ background: skill.bg, color: skill.fg }} aria-hidden>
        {Icon ? <Icon /> : skill.name.slice(0, 2)}
      </span>
      <span className={styles.name}>{skill.name}</span>
    </div>
  )
}
