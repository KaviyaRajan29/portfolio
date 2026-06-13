import { LuCode } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { SKILLS } from '@/data/skills'
import { SkillChip } from './skill-chip'
import styles from './skills.module.css'

export function Skills() {
  return (
    <section className={cn('container', styles.section)}>
      <Reveal className={styles.card}>
        <SectionHeading icon={<LuCode aria-hidden />} title="Skills & Tools" iconFontSize={20} />
        <div className={styles.grid}>
          {SKILLS.map((skill, index) => (
            <Reveal key={skill.name} index={index}>
              <SkillChip skill={skill} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
