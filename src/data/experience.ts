import { experienceSchema } from '@/lib/validations'

export const EXPERIENCE = experienceSchema.array().parse([
  {
    role: 'Member',
    company: "ICT Students' Circle — University of Ruhuna",
    period: 'Jan 2024 — Present',
    mark: 'IC',
    bg: 'var(--navy)',
    fg: '#F0F0DB',
    detail:
      'Actively involved in ICT academic and student activities — supporting collaboration, teamwork, and knowledge-sharing among students.',
  },
  {
    role: 'Batch Representative',
    company: 'Ruhuna Tamil Union — University of Ruhuna',
    period: 'Apr 2025 — Present',
    mark: 'TU',
    bg: 'var(--slate)',
    fg: 'var(--navy)',
    detail:
      'Representing the batch in the Tamil Union — bridging students and the union, coordinating activities, and helping run academic, cultural, and community events.',
  },
  {
    role: 'Volunteer',
    company: 'Community English Program (CEP) — The Tea Leaf Centre',
    period: 'Jan 2023 — Dec 2023',
    mark: 'CEP',
    bg: 'var(--tan)',
    fg: 'var(--navy)',
    detail:
      'Supported English-language teaching sessions and helped students improve communication — gaining experience in teamwork, leadership, public speaking, and student support.',
  },
])
