import { skillSchema } from '@/lib/validations'

/** name = key into SKILL_ICONS (brand logo); bg/fg style the tile. */
export const SKILLS = skillSchema.array().parse([
  { name: 'JavaScript', bg: '#F0DB4F', fg: '#1A1A1A' },
  { name: 'TypeScript', bg: '#3178C6', fg: '#fff' },
  { name: 'React', bg: '#1B2330', fg: '#61DAFB' },
  { name: 'Next.js', bg: '#111', fg: '#fff' },
  { name: 'Node.js', bg: '#3C873A', fg: '#fff' },
  { name: 'Express', bg: '#444', fg: '#fff' },
  { name: 'Tailwind', bg: '#0EA5E9', fg: '#fff' },
  { name: 'MongoDB', bg: '#47A248', fg: '#fff' },
  { name: 'PostgreSQL', bg: '#336791', fg: '#fff' },
  { name: 'Firebase', bg: '#FFA000', fg: '#fff' },
  { name: 'Docker', bg: '#2496ED', fg: '#fff' },
  { name: 'Git', bg: '#F05133', fg: '#fff' },
])
