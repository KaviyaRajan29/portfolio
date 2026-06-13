import { LuCode, LuSparkles } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { Counter } from '@/components/motion/counter'
import { CATEGORIES, EXPLORING, SKILLS, skillsByCategory } from '@/data/skills'
import { SKILL_ICONS } from '@/lib/icons'
import { SkillBar } from './skill-bar'
import { SkillMarquee } from './skill-marquee'
import styles from './skills.module.css'

const STATS = [
  { to: SKILLS.length, suffix: '', label: 'Technologies' },
  { to: CATEGORIES.length, suffix: '', label: 'Disciplines' },
  { to: 4, suffix: '+', label: 'Years' },
  { to: 30, suffix: '+', label: 'Projects' },
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
          The stack I reach for to ship fast, accessible products end-to-end — from typed React
          frontends to Node APIs, databases, and the tooling that ties it all together.
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

      <Reveal className={styles.exploring}>
        <div className={styles.exploringHead}>
          <span className={styles.exploringIcon} aria-hidden>
            <LuSparkles />
          </span>
          <div>
            <div className={styles.exploringTitle}>Currently exploring</div>
            <div className={styles.exploringSub}>
              Always leveling up — here's what's on my desk right now.
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
