import { projectSchema, type Project } from '@/lib/validations'

export const PROJECTS = projectSchema.array().parse([
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    glyph: '✓',
    accent: '#7C8CF8',
    category: 'SaaS · Productivity',
    year: '2024',
    desc: 'A modern task-management app with real-time collaboration, kanban boards, and analytics.',
    longDescription:
      'TaskFlow is a real-time team workspace where projects, boards, and analytics live in one place. It pairs an optimistic, drag-and-drop kanban with live presence so teams always see the latest state without refreshing.',
    highlights: [
      'Real-time collaboration with live cursors and optimistic updates',
      'Drag-and-drop kanban boards with keyboard support',
      'Per-project analytics: velocity, cycle time, and burndown',
      'Role-based access control and shareable invite links',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    slug: 'finmate',
    title: 'Finmate',
    glyph: '$',
    accent: '#48C68C',
    category: 'Fintech',
    year: '2023',
    desc: 'Personal finance dashboard with spending insights, budgets, and goal tracking.',
    longDescription:
      'Finmate turns raw transactions into clear, actionable insight. It categorizes spending automatically, surfaces trends, and helps people set budgets and savings goals they actually hit.',
    highlights: [
      'Automatic transaction categorization and trend detection',
      'Budgets and savings goals with progress nudges',
      'Interactive charts for cash flow and net worth',
      'Secure, read-only bank connections',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    slug: 'pixelscape',
    title: 'PixelScape',
    glyph: '◎',
    accent: '#E0A95F',
    category: 'Marketplace',
    year: '2023',
    desc: 'A full-stack photography platform for discovering, sharing, and selling prints.',
    longDescription:
      'PixelScape is a marketplace for photographers to showcase and sell their work. It handles high-resolution delivery, licensing, and payouts while keeping discovery fast and visual.',
    highlights: [
      'Image-optimized galleries with responsive delivery',
      'Licensing and checkout with instant downloads',
      'Creator payouts and sales dashboards',
      'Full-text and color-based search',
    ],
    tags: ['Next.js', 'PostgreSQL', 'Cloudinary'],
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    slug: 'nimbus',
    title: 'Nimbus',
    glyph: '☁',
    accent: '#5BA8D4',
    category: 'Developer Tools',
    year: '2022',
    desc: 'A real-time weather and analytics dashboard with beautiful, glanceable data viz.',
    longDescription:
      'Nimbus is a configurable dashboard that aggregates live weather and operational metrics into one calm, glanceable view — built for teams who watch numbers all day.',
    highlights: [
      'Composable widget grid with saved layouts',
      'Live-updating charts over a WebSocket feed',
      'Dark-first, accessible data visualization',
      'Shareable read-only dashboard links',
    ],
    tags: ['React', 'TypeScript', 'Charts'],
    tech: ['React', 'TypeScript', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    slug: 'forge',
    title: 'Forge',
    glyph: '⚒',
    accent: '#C77DB0',
    category: 'Dev Platform',
    year: '2022',
    desc: 'A CI/CD pipeline visualizer that makes complex builds easy to reason about.',
    longDescription:
      'Forge visualizes build and deploy pipelines as living graphs, so engineers can see exactly where a release is, what failed, and why — without digging through log soup.',
    highlights: [
      'Live pipeline graph with stage-level status',
      'Log streaming with smart error highlighting',
      'One-click re-runs and rollbacks',
      'Container-aware build caching',
    ],
    tags: ['Next.js', 'Docker', 'Node.js'],
    tech: ['Next.js', 'Docker', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    slug: 'bloom',
    title: 'Bloom',
    glyph: '✿',
    accent: '#6FC18E',
    category: 'E-commerce',
    year: '2021',
    desc: 'A headless storefront for boutique brands with a delightful, fast checkout.',
    longDescription:
      'Bloom is a headless commerce starter for small brands — a fast, content-driven storefront with a frictionless checkout and an editor-friendly catalog.',
    highlights: [
      'Headless catalog with instant search',
      'Single-page, address-aware checkout',
      'CMS-driven landing pages',
      'Stripe payments and order webhooks',
    ],
    tags: ['Next.js', 'Tailwind', 'MongoDB'],
    tech: ['Next.js', 'Tailwind', 'MongoDB', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
])

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
