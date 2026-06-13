/**
 * Content types are inferred from the Zod schemas in `@/lib/validations` so the
 * schema stays the single source of truth. Re-exported here so feature code can
 * keep importing from `@/types/content`.
 */
export type {
  Stat,
  Profile,
  Skill,
  Project,
  ExperienceItem,
  Social,
  NavItem,
  Theme,
  ContactValues,
} from '@/lib/validations'
