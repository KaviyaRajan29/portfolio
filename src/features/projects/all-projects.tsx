import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LuLayoutGrid } from 'react-icons/lu'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { PROJECTS } from '@/data/projects'
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

  const selectTag = (tag: string) => {
    setSearchParams(tag === ALL ? {} : { tag }, { replace: true })
  }

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
      <p className={styles.lead}>
        A selection of things I&apos;ve designed and built — from SaaS dashboards to marketplaces.
      </p>

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
    </section>
  )
}
