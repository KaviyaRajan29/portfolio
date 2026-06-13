import { z } from 'zod'

/**
 * Single source of truth for every shape that enters the app — content data,
 * the contact form, and untrusted edges (theme storage, route slug). Types are
 * inferred from these schemas (see `@/types/content`), so the schema and the
 * type can never drift.
 */

// ---------------------------------------------------------------- content
export const statSchema = z.object({
  value: z.string(),
  label: z.string(),
})

export const profileSchema = z.object({
  name: z.string(),
  brand: z.string(),
  badge: z.string(),
  roles: z.array(z.string()).min(1),
  heroBlurb: z.string(),
  aboutBlurb: z.string(),
  stats: z.array(statSchema),
  email: z.email(),
  year: z.number(),
})

export const skillSchema = z.object({
  name: z.string(),
  bg: z.string(),
  fg: z.string(),
})

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  glyph: z.string(),
  accent: z.string(),
  category: z.string(),
  year: z.string(),
  desc: z.string(),
  longDescription: z.string(),
  highlights: z.array(z.string()),
  tags: z.array(z.string()),
  tech: z.array(z.string()),
  liveUrl: z.string(),
  repoUrl: z.string(),
  featured: z.boolean(),
})

export const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  period: z.string(),
  mark: z.string(),
  bg: z.string(),
  fg: z.string(),
  detail: z.string(),
})

export const socialSchema = z.object({
  label: z.string(),
  handle: z.string(),
  href: z.string(),
})

export const navItemSchema = z.object({
  label: z.string(),
  to: z.string(),
})

// ---------------------------------------------------------------- edges
export const themeSchema = z.enum(['light', 'dark'])

export const slugSchema = z.string().min(1)

// ---------------------------------------------------------------- contact form
export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: 'Please enter your name' }),
  email: z.email({ message: 'Enter a valid email address' }),
  message: z.string().trim().min(10, { message: 'A little more detail, please (10+ chars)' }),
})

// ---------------------------------------------------------------- inferred types
export type Stat = z.infer<typeof statSchema>
export type Profile = z.infer<typeof profileSchema>
export type Skill = z.infer<typeof skillSchema>
export type Project = z.infer<typeof projectSchema>
export type ExperienceItem = z.infer<typeof experienceSchema>
export type Social = z.infer<typeof socialSchema>
export type NavItem = z.infer<typeof navItemSchema>
export type Theme = z.infer<typeof themeSchema>
export type ContactValues = z.infer<typeof contactSchema>
