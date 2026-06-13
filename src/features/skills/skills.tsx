import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { SKILLS } from '@/data/skills'
import { SkillChip } from './skill-chip'
import styles from './skills.module.css'

export function Skills() {
  return (
    <Reveal as="section" id="skills" index={1} className={styles.col}>
      <div className={styles.card}>
        <SectionHeading icon={'</>'} title="Skills & Tools" mono iconFontSize={15} />
        <div className={styles.grid}>
          {SKILLS.map((skill, index) => (
            <Reveal key={skill.name} index={index}>
              <SkillChip skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
