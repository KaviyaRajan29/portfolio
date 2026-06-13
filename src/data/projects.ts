import { projectSchema, type Project } from '@/lib/validations'

// No projects yet — the Projects pages render a "coming soon" state while this is empty.
// Add entries here (same shape) and the grid + detail pages light up automatically.
export const PROJECTS = projectSchema.array().parse([])

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
