import { skillSchema } from '@/lib/validations'

/** name = key into SKILL_ICONS; bg/fg style the tile; level (0–100) drives the bar. */
export const SKILLS = skillSchema.array().parse([
  // Programming
  { name: 'Java', bg: '#E76F00', fg: '#fff', category: 'Programming', level: 85 },
  { name: 'C', bg: '#283593', fg: '#fff', category: 'Programming', level: 75 },
  // Web Development
  { name: 'HTML5', bg: '#E34F26', fg: '#fff', category: 'Web Development', level: 85 },
  { name: 'CSS3', bg: '#1572B6', fg: '#fff', category: 'Web Development', level: 80 },
  { name: 'JavaScript', bg: '#F0DB4F', fg: '#1A1A1A', category: 'Web Development', level: 72 },
  // Database
  { name: 'MySQL', bg: '#4479A1', fg: '#fff', category: 'Database', level: 82 },
  { name: 'DBMS', bg: '#30364F', fg: '#fff', category: 'Database', level: 78 },
])

export const CATEGORIES = ['Programming', 'Web Development', 'Database'] as const
export type Category = (typeof CATEGORIES)[number]

export function skillsByCategory(category: string) {
  return SKILLS.filter((skill) => skill.category === category)
}

/** Tech currently being learned (names resolve via SKILL_ICONS). */
export const EXPLORING = ['React', 'Node.js', 'Git', 'Spring Boot']

/** Professional / soft skills (rendered as chips via PROFESSIONAL_ICONS). */
export const PROFESSIONAL_SKILLS = [
  'Communication',
  'Leadership',
  'Public Speaking',
  'Teamwork',
  'Customer Service',
  'Teacher Training',
  'Business Strategy',
  'Social Services',
]
