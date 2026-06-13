import { navItemSchema } from '@/lib/validations'

export const NAV_ITEMS = navItemSchema.array().parse([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
])
