import type { Project } from '@/types/content'

export const PROJECTS: Project[] = [
  {
    title: 'TaskFlow',
    glyph: '✓',
    accent: '#7C8CF8',
    desc: 'A modern task-management app with real-time collaboration, kanban boards, and analytics.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Finmate',
    glyph: '$',
    accent: '#48C68C',
    desc: 'Personal finance dashboard with spending insights, budgets, and goal tracking.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'PixelScape',
    glyph: '◎',
    accent: '#E0A95F',
    desc: 'A full-stack photography platform for discovering, sharing, and selling prints.',
    tags: ['Next.js', 'PostgreSQL', 'Cloudinary'],
  },
]
