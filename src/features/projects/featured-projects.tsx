import { Link } from 'react-router-dom'
import { LuArrowRight, LuLayoutGrid } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { FEATURED_PROJECTS } from '@/data/projects'
import { ProjectGrid } from './project-grid'
import styles from './featured-projects.module.css'

export function FeaturedProjects() {
  return (
    <section className={cn('container', styles.section)}>
      <Reveal>
        <SectionHeading
          icon={<LuLayoutGrid aria-hidden />}
          title="Featured Work"
          size="lg"
          iconFontSize={20}
          action={
            <Link to="/projects" className={styles.viewAll}>
              All projects <LuArrowRight aria-hidden />
            </Link>
          }
        />
      </Reveal>

      {FEATURED_PROJECTS.length === 0 ? (
        <Reveal className={styles.comingSoon}>
          <p className={styles.comingSoonText}>
            Projects are on the way — I'm building and documenting my work. Meanwhile, explore my{' '}
            <Link to="/skills" className={styles.comingSoonLink}>
              skills
            </Link>{' '}
            and{' '}
            <Link to="/education" className={styles.comingSoonLink}>
              education
            </Link>
            .
          </p>
        </Reveal>
      ) : (
        <div className={styles.grid}>
          <ProjectGrid projects={FEATURED_PROJECTS} />
        </div>
      )}
    </section>
  )
}
