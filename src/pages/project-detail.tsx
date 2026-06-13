import type { LoaderFunctionArgs } from 'react-router-dom'
import { Link, useLoaderData } from 'react-router-dom'
import { m, useReducedMotion } from 'motion/react'
import { LuArrowLeft, LuArrowUpRight, LuCheck, LuExternalLink } from 'react-icons/lu'
import { SiGithub } from 'react-icons/si'
import type { Project } from '@/types/content'
import { PROJECTS, getProjectBySlug } from '@/data/projects'
import { slugSchema } from '@/lib/validations'
import { SKILL_ICONS } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'
import { Tag } from '@/components/ui/tag'
import btn from '@/components/ui/button.module.css'
import styles from './project-detail.module.css'

const EASE = [0.22, 1, 0.36, 1] as const

type LoaderData = { project: Project; next: Project }

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderData> {
  const parsed = slugSchema.safeParse(params.slug)
  const project = parsed.success ? getProjectBySlug(parsed.data) : undefined
  if (!project) throw new Response('Not Found', { status: 404 })
  const index = PROJECTS.findIndex((p) => p.slug === project.slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]
  return { project, next }
}

export function Component() {
  const { project, next } = useLoaderData() as LoaderData
  const reduced = useReducedMotion()

  // Variants (not initial/animate) so the parent <Reveal>'s hidden→show drives
  // the hero art too; under reduced motion we omit them (the parent still fades).
  const artVariants = reduced
    ? undefined
    : {
        hidden: { scale: 0.95 },
        show: {
          scale: 1,
          y: [0, -10, 0],
          transition: {
            scale: { duration: 0.7, ease: EASE },
            y: { duration: 7, ease: 'easeInOut' as const, repeat: Infinity, delay: 0.9 },
          },
        },
      }

  return (
    <article className={cn('container', styles.wrap)}>
      <Reveal>
        <Link to="/projects" className={styles.back}>
          <LuArrowLeft aria-hidden /> All projects
        </Link>
      </Reveal>

      <Reveal className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.metaRow}>
            <span className={styles.category}>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lead}>{project.longDescription}</p>
          <div className={styles.actions}>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                className={cn(btn.btn, btn.primary, btn.md)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo <LuExternalLink aria-hidden />
              </a>
            ) : null}
            <a
              href={project.repoUrl}
              className={cn(btn.btn, btn.secondary, btn.md)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View code <SiGithub aria-hidden />
            </a>
          </div>
        </div>
        <m.div className={styles.heroArt} variants={artVariants}>
          {project.image ? (
            <img
              className={styles.heroImg}
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
            />
          ) : (
            <>
              <div
                className={styles.heroGlow}
                style={{ background: `radial-gradient(circle, ${project.accent}, transparent 70%)` }}
                aria-hidden
              />
              <span className={styles.heroGlyph} style={{ background: project.accent }} aria-hidden>
                {project.glyph}
              </span>
            </>
          )}
        </m.div>
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={styles.panel}>
          <h2 className={styles.h2}>Highlights</h2>
          <ul className={styles.highlights}>
            {project.highlights.map((item) => (
              <li key={item}>
                <span className={styles.check} aria-hidden>
                  <LuCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal index={1} className={styles.panel}>
          <h2 className={styles.h2}>Tech stack</h2>
          <div className={styles.tech}>
            {project.tech.map((name) => {
              const Icon = SKILL_ICONS[name]
              return (
                <span key={name} className={styles.techItem}>
                  {Icon ? <Icon aria-hidden /> : null}
                  {name}
                </span>
              )
            })}
          </div>
          <div className={styles.tagRow}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Link to={`/projects/${next.slug}`} className={styles.nextCard}>
          <span className={styles.nextLabel}>Next project</span>
          <span className={styles.nextTitle}>
            {next.title} <LuArrowUpRight aria-hidden />
          </span>
        </Link>
      </Reveal>
    </article>
  )
}
