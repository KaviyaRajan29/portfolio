import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LuLayoutGrid, LuSparkles } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { PROJECTS } from '@/data/projects'
import btn from '@/components/ui/button.module.css'
import { ProjectGrid } from './project-grid'
import styles from './all-projects.module.css'

const ALL = 'All'

export function AllProjects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('tag') ?? ALL

  const tags = useMemo(() => {
    const set = new Set<string>()
    PROJECTS.forEach((project) => project.tags.forEach((tag) => set.add(tag)))
    return [ALL, ...Array.from(set)]
  }, [])

  const filtered = active === ALL ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(active))
  const selectTag = (tag: string) => setSearchParams(tag === ALL ? {} : { tag }, { replace: true })

  return (
    <section className={cn('container', styles.section)}>
      <Reveal>
        <SectionHeading
          icon={<LuLayoutGrid aria-hidden />}
          title="Projects"
          size="lg"
          iconFontSize={20}
        />
      </Reveal>

      {PROJECTS.length === 0 ? (
        <Reveal className={styles.comingSoon}>
          <span className={styles.comingSoonIcon} aria-hidden>
            <LuSparkles />
          </span>
          <h3 className={styles.comingSoonTitle}>Projects coming soon</h3>
          <p className={styles.comingSoonText}>
            I'm currently building and documenting my work. In the meantime, take a look at my skills
            and education — or get in touch and let's create something together.
          </p>
          <div className={styles.comingSoonActions}>
            <Link to="/skills" className={cn(btn.btn, btn.primary, btn.md)}>
              View skills
            </Link>
            <Link to="/contact" className={cn(btn.btn, btn.secondary, btn.md)}>
              Get in touch
            </Link>
          </div>
        </Reveal>
      ) : (
        <>
          <p className={styles.lead}>A selection of things I&apos;ve designed and built.</p>
          <div className={styles.filters} role="group" aria-label="Filter projects by tag">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => selectTag(tag)}
                aria-pressed={active === tag}
                className={cn(styles.filter, active === tag && styles.filterActive)}
              >
                {tag}
              </button>
            ))}
          </div>
          <ProjectGrid key={active} projects={filtered} />
        </>
      )}
    </section>
  )
}
