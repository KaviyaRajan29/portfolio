import type { Project } from '@/types/content'
import { Tag } from '@/components/ui/tag'
import styles from './project-card.module.css'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        <div
          className={styles.previewGlow}
          style={{ background: `radial-gradient(circle, ${project.accent}, transparent 68%)` }}
          aria-hidden="true"
        />
        <div className={styles.previewHead}>
          <span className={styles.previewGlyph} style={{ background: project.accent }} aria-hidden="true">
            {project.glyph}
          </span>
          {project.title}
        </div>
        <div className={styles.previewBody} aria-hidden="true">
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
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.footer}>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <a href="#" aria-label={`Open ${project.title}`} className={styles.open}>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}
