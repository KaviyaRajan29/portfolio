import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'
import type { Project } from '@/types/content'
import { Tag } from '@/components/ui/tag'
import styles from './project-card.module.css'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={styles.card}
      aria-label={`${project.title} — view details`}
    >
      <div className={styles.preview}>
        <div
          className={styles.previewGlow}
          style={{ background: `radial-gradient(circle, ${project.accent}, transparent 68%)` }}
          aria-hidden
        />
        <div className={styles.previewHead}>
          <span className={styles.previewGlyph} style={{ background: project.accent }} aria-hidden>
            {project.glyph}
          </span>
          {project.title}
        </div>
        <div className={styles.previewBody} aria-hidden>
          <div className={styles.barWide} />
          <div className={styles.barNarrow} />
          <div className={styles.previewRow}>
            <div className={styles.previewTile} />
            <div className={styles.previewTile} />
            <div className={styles.previewTileAccent} style={{ background: project.accent }} />
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.footer}>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <span className={styles.open} aria-hidden>
            <LuArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  )
}
