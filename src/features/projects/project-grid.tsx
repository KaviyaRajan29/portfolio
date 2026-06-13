import type { Project } from '@/types/content'
import { Reveal } from '@/components/ui/reveal'
import { ProjectCard } from './project-card'
import styles from './project-grid.module.css'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <Reveal key={project.slug} index={index}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  )
}
