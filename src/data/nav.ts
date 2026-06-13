import { navItemSchema } from '@/lib/validations'

export const NAV_ITEMS = navItemSchema.array().parse([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
])

export const SECTION_IDS = NAV_ITEMS.map((item) => item.to)
