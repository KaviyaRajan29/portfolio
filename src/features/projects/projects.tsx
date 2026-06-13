import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { PROJECTS } from '@/data/projects'
import { ProjectCard } from './project-card'
import styles from './projects.module.css'

export function Projects() {
  return (
    <section id="projects" className={cn('container', styles.section)}>
      <Reveal index={0}>
        <SectionHeading
          icon="▦"
          title="Featured Projects"
          size="lg"
          iconFontSize={18}
          action={
            <a href="#" className={styles.viewAll}>
              View all projects <span aria-hidden="true">→</span>
            </a>
          }
        />
      </Reveal>

      <div className={styles.grid}>
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} index={index}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
