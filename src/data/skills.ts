import { skillSchema, type Skill } from '@/lib/validations'

/** name = key into SKILL_ICONS; bg/fg style the tile; level (0–100) drives the bar. */
export const SKILLS = skillSchema.array().parse([
  // Frontend
  { name: 'TypeScript', bg: '#3178C6', fg: '#fff', category: 'Frontend', level: 95 },
  { name: 'React', bg: '#1B2330', fg: '#61DAFB', category: 'Frontend', level: 95 },
  { name: 'JavaScript', bg: '#F0DB4F', fg: '#1A1A1A', category: 'Frontend', level: 92 },
  { name: 'HTML5', bg: '#E34F26', fg: '#fff', category: 'Frontend', level: 92 },
  { name: 'Tailwind', bg: '#0EA5E9', fg: '#fff', category: 'Frontend', level: 90 },
  { name: 'Next.js', bg: '#111', fg: '#fff', category: 'Frontend', level: 88 },
  // Backend
  { name: 'Node.js', bg: '#3C873A', fg: '#fff', category: 'Backend', level: 90 },
  { name: 'Express', bg: '#444', fg: '#fff', category: 'Backend', level: 88 },
  { name: 'GraphQL', bg: '#E10098', fg: '#fff', category: 'Backend', level: 80 },
  { name: 'Python', bg: '#3776AB', fg: '#fff', category: 'Backend', level: 78 },
  // Database
  { name: 'MongoDB', bg: '#47A248', fg: '#fff', category: 'Database', level: 88 },
  { name: 'PostgreSQL', bg: '#336791', fg: '#fff', category: 'Database', level: 85 },
  { name: 'Prisma', bg: '#1B222D', fg: '#fff', category: 'Database', level: 82 },
  { name: 'Firebase', bg: '#FFA000', fg: '#fff', category: 'Database', level: 80 },
  { name: 'Redis', bg: '#DC382D', fg: '#fff', category: 'Database', level: 75 },
  // DevOps & Tools
  { name: 'Git', bg: '#F05133', fg: '#fff', category: 'DevOps & Tools', level: 92 },
  { name: 'Vite', bg: '#646CFF', fg: '#fff', category: 'DevOps & Tools', level: 85 },
  { name: 'Docker', bg: '#2496ED', fg: '#fff', category: 'DevOps & Tools', level: 82 },
  { name: 'Jest', bg: '#C21325', fg: '#fff', category: 'DevOps & Tools', level: 80 },
  { name: 'Figma', bg: '#1E1E1E', fg: '#fff', category: 'DevOps & Tools', level: 78 },
])

export const CATEGORIES = ['Frontend', 'Backend', 'Database', 'DevOps & Tools'] as const
export type Category = (typeof CATEGORIES)[number]

export function skillsByCategory(category: string): Skill[] {
  return SKILLS.filter((skill) => skill.category === category)
}

/** Tech currently being learned (names resolve via SKILL_ICONS, with a fallback). */
export const EXPLORING = ['Rust', 'Go', 'Kubernetes', 'Three.js', 'AI / LLMs']
