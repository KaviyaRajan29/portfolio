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
              View all projects <LuArrowRight aria-hidden />
            </Link>
          }
        />
      </Reveal>
      <div className={styles.grid}>
        <ProjectGrid projects={FEATURED_PROJECTS} />
      </div>
    </section>
  )
}
