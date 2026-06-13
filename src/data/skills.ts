import { skillSchema } from '@/lib/validations'

/** name = key into SKILL_ICONS; bg/fg style the tile; level (0–100) drives the bar. */
export const SKILLS = skillSchema.array().parse([
  // Languages
  { name: 'Java', bg: '#E76F00', fg: '#fff', category: 'Languages', level: 85 },
  { name: 'JavaScript', bg: '#F0DB4F', fg: '#1A1A1A', category: 'Languages', level: 78 },
  { name: 'TypeScript', bg: '#3178C6', fg: '#fff', category: 'Languages', level: 68 },
  { name: 'C', bg: '#283593', fg: '#fff', category: 'Languages', level: 72 },
  // Frontend
  { name: 'React', bg: '#61DAFB', fg: '#20232A', category: 'Frontend', level: 75 },
  { name: 'HTML5', bg: '#E34F26', fg: '#fff', category: 'Frontend', level: 85 },
  { name: 'CSS3', bg: '#1572B6', fg: '#fff', category: 'Frontend', level: 82 },
  { name: 'Tailwind CSS', bg: '#06B6D4', fg: '#fff', category: 'Frontend', level: 70 },
  // Backend
  { name: 'Spring Boot', bg: '#6DB33F', fg: '#fff', category: 'Backend', level: 70 },
  { name: 'NestJS', bg: '#E0234E', fg: '#fff', category: 'Backend', level: 64 },
  { name: 'Node.js', bg: '#5FA04E', fg: '#fff', category: 'Backend', level: 66 },
  // Database
  { name: 'MySQL', bg: '#4479A1', fg: '#fff', category: 'Database', level: 82 },
  { name: 'PostgreSQL', bg: '#336791', fg: '#fff', category: 'Database', level: 70 },
  { name: 'DBMS', bg: '#30364F', fg: '#fff', category: 'Database', level: 78 },
  // Tools
  { name: 'Git', bg: '#F05032', fg: '#fff', category: 'Tools', level: 80 },
  { name: 'Docker', bg: '#2496ED', fg: '#fff', category: 'Tools', level: 60 },
])

export const CATEGORIES = ['Languages', 'Frontend', 'Backend', 'Database', 'Tools'] as const
export type Category = (typeof CATEGORIES)[number]

export function skillsByCategory(category: string) {
  return SKILLS.filter((skill) => skill.category === category)
}

/** Supporting libraries I'm getting hands-on with (names resolve via SKILL_ICONS). */
export const EXPLORING = ['Redux', 'Framer Motion', 'Vite', 'Zod']

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
