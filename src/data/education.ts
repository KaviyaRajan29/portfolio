import { educationSchema } from '@/lib/validations'

export const EDUCATION = educationSchema.array().parse([
  {
    institution: 'University of Ruhuna',
    qualification: "Bachelor's Degree in ICT",
    period: 'Aug 2023 — Dec 2027',
    mark: 'UR',
    bg: 'var(--navy)',
    fg: '#F0F0DB',
    detail:
      'Pursuing Information & Communication Technology with a focus on web development, software development, programming, and database management — alongside IT-business subjects. Building knowledge in Java, C, MySQL, DBMS, HRM, Business Analytics, Accounting, and Economics.',
  },
  {
    institution: 'The Tea Leaf Centre — Bogawantalawa',
    qualification: 'Diploma in Professional English & IT',
    period: 'Jan 2023 — Dec 2023',
    mark: 'TLC',
    bg: 'var(--slate)',
    fg: 'var(--navy)',
    detail:
      'A foundation in communication and IT — career development, enterprise awareness, public speaking, success principles, and professional ethics, plus core IT concepts and English proficiency. Took part in a business fair, social service, and the CEP teaching program.',
  },
])
