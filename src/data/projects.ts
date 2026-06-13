import { projectSchema, type Project } from '@/lib/validations'
import eventhubImg from '@/assets/eventhub.png'
import ledgerproImg from '@/assets/leadgerpro.png'
import portfolioImg from '@/assets/kaviya-portfolio.png'

// Kaviya's real work: two full-stack group projects built with the Byte Squad team
// (repos live under teammate Anpu21) plus her own portfolio. `liveUrl` is omitted where
// no public demo is deployed — the detail page then shows only a "View code" button.
export const PROJECTS = projectSchema.array().parse([
  {
    slug: 'eventhub',
    title: 'EventHub',
    glyph: '⊞',
    accent: '#7C8CF8',
    category: 'Team Project · Event Platform',
    year: '2026',
    desc: 'A full-stack collaborative event-management platform with JWT auth, role-based coordination, task tracking, and real-time messaging.',
    longDescription:
      'EventHub is a collaborative event-management platform built with the Byte Squad team. A Java + Spring Boot backend and a React + TypeScript frontend power an event-collaboration system where people create and coordinate events with privacy controls, assign and track tasks, and chat in real time — all secured with JWT and role-based access.',
    highlights: [
      'JWT-authenticated user management with role-based access (Owner, Organizer, Member)',
      'Event creation, updates, and deletion with privacy controls',
      'Task management with status and priority tracking',
      'Real-time event messaging between collaborators',
      'Dockerized with a GitHub Actions CI/CD pipeline and Nginx',
    ],
    tags: ['Full-Stack', 'React', 'Team Project'],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/Anpu21/eventhub',
    image: eventhubImg,
    featured: true,
  },
  {
    slug: 'ledgerpro',
    title: 'LedgerPro',
    glyph: '$',
    accent: '#48C68C',
    category: 'Team Project · POS & Inventory',
    year: '2026',
    desc: 'A multi-branch supermarket POS, inventory, and accounting platform with real-time notifications and rich reporting.',
    longDescription:
      'LedgerPro is a modern point-of-sale and inventory platform for multi-branch supermarkets, built with the Byte Squad team. Cashiers process sales, managers oversee stock and inter-branch transfers, and admins manage everything across locations — with real-time socket.io notifications and full profit-and-loss, ledger, and expense reporting.',
    highlights: [
      'Multi-branch POS with barcode scanning and multiple payment options',
      'Inventory management with category low-stock thresholds and inter-branch stock transfers (admin approval + transactional locking)',
      'Role-based access for Admin, Manager, and Cashier with real-time socket.io notifications',
      'Profit & loss, ledger, and expense reporting with PDF and Excel export',
    ],
    tags: ['Full-Stack', 'React', 'Team Project'],
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    repoUrl: 'https://github.com/Anpu21/Byte_squad',
    image: ledgerproImg,
    featured: true,
  },
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    glyph: '◆',
    accent: '#E0A95F',
    category: 'Personal · Frontend',
    year: '2026',
    desc: 'This site — a routed, animated, fully type-safe personal portfolio built with React and Framer Motion.',
    longDescription:
      'The portfolio you are viewing: a React + TypeScript application with a React Router data router that still feels like a single-page app, Framer Motion page transitions and scroll reveals, and Zod-validated content as a single source of truth.',
    highlights: [
      'Route-per-section data router that still feels like a single-page app',
      'Framer Motion page transitions and scroll reveals, code-split via LazyMotion',
      'Zod-validated content as a single, type-safe source of truth',
      'Accessible, responsive UI with light and dark themes',
    ],
    tags: ['Frontend', 'React'],
    tech: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'React Router', 'Zod'],
    repoUrl: 'https://github.com/KaviyaRajan29/portfolio',
    image: portfolioImg,
    featured: true,
  },
])

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
