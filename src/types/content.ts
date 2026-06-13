/** Shapes for the portfolio's static content. Hand-written at the data edge so
 *  inference carries the types into every component that consumes them. */

export type NavItem = {
  label: string
  id: string
}

export type Stat = {
  value: string
  label: string
}

export type Profile = {
  name: string
  brand: string
  badge: string
  roles: string[]
  heroBlurb: string
  aboutBlurb: string
  stats: Stat[]
  email: string
  year: number
}

export type Skill = {
  name: string
  mark: string
  bg: string
  fg: string
}

export type Project = {
  title: string
  glyph: string
  accent: string
  desc: string
  tags: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  mark: string
  bg: string
  fg: string
  detail: string
}

export type Social = {
  label: string
  icon: string
  handle: string
  href: string
}
