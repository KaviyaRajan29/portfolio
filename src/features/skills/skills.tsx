import { LuCode, LuSparkles, LuUsers } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { Counter } from '@/components/motion/counter'
import {
  CATEGORIES,
  EXPLORING,
  PROFESSIONAL_SKILLS,
  SKILLS,
  skillsByCategory,
} from '@/data/skills'
import { PROFESSIONAL_ICONS, SKILL_ICONS } from '@/lib/icons'
import { SkillBar } from './skill-bar'
import { SkillMarquee } from './skill-marquee'
import styles from './skills.module.css'

const STATS = [
  { to: SKILLS.length, suffix: '', label: 'Technical skills' },
  { to: PROFESSIONAL_SKILLS.length, suffix: '', label: 'Soft skills' },
  { to: CATEGORIES.length, suffix: '', label: 'Disciplines' },
]

export function Skills() {
  return (
    <section className={cn('container', styles.section)}>
      <Reveal className={styles.intro}>
        <SectionHeading
          icon={<LuCode aria-hidden />}
          title="Skills & Tools"
          size="lg"
          iconFontSize={20}
        />
        <p className={styles.lead}>
          The tools I work with — from Java and databases to frontend and backend web development —
          alongside the people skills I've built through teaching, leadership, and community work.
        </p>
        <div className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>
                <Counter to={stat.to} format={(v) => `${Math.round(v)}${stat.suffix}`} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={styles.categoryGrid}>
        {CATEGORIES.map((category, index) => {
          const skills = skillsByCategory(category)
          return (
            <Reveal key={category} index={index} className={styles.categoryCard}>
              <div className={styles.categoryHead}>
                <h3 className={styles.categoryName}>{category}</h3>
                <span className={styles.categoryCount}>{skills.length}</span>
              </div>
              <div className={styles.bars}>
                {skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal className={styles.professional}>
        <SectionHeading
          icon={<LuUsers aria-hidden />}
          title="Professional Skills"
          iconFontSize={20}
        />
        <div className={styles.professionalChips}>
          {PROFESSIONAL_SKILLS.map((name) => {
            const Icon = PROFESSIONAL_ICONS[name] ?? LuSparkles
            return (
              <span key={name} className={styles.professionalChip}>
                <span className={styles.professionalIcon} aria-hidden>
                  <Icon />
                </span>
                {name}
              </span>
            )
          })}
        </div>
      </Reveal>

      <Reveal className={styles.exploring}>
        <div className={styles.exploringHead}>
          <span className={styles.exploringIcon} aria-hidden>
            <LuSparkles />
          </span>
          <div>
            <div className={styles.exploringTitle}>Currently exploring</div>
            <div className={styles.exploringSub}>
              Always leveling up — what I'm learning as I grow into full-stack development.
            </div>
          </div>
        </div>
        <div className={styles.exploringChips}>
          {EXPLORING.map((name) => {
            const Icon = SKILL_ICONS[name] ?? LuSparkles
            return (
              <span key={name} className={styles.exploringChip}>
                <Icon aria-hidden /> {name}
              </span>
            )
          })}
        </div>
      </Reveal>

      <Reveal className={styles.marquee}>
        <SkillMarquee />
      </Reveal>
    </section>
  )
}
