import { createBrowserRouter } from 'react-router-dom'
import { RouteError } from '@/components/errors/route-error'
import { RootLayout } from './root-layout'

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          // Pathless layout route: keeps nav + footer mounted when an error renders.
          errorElement: <RouteError />,
          children: [
            { index: true, lazy: () => import('@/pages/home') },
            { path: 'about', lazy: () => import('@/pages/about') },
            { path: 'skills', lazy: () => import('@/pages/skills') },
            { path: 'projects', lazy: () => import('@/pages/projects') },
            { path: 'projects/:slug', lazy: () => import('@/pages/project-detail') },
            { path: 'experience', lazy: () => import('@/pages/experience') },
            { path: 'education', lazy: () => import('@/pages/education') },
            { path: 'contact', lazy: () => import('@/pages/contact') },
            { path: '*', lazy: () => import('@/pages/not-found') },
          ],
        },
      ],
    },
  ],
  // Matches Vite's base so routes resolve under the GitHub Pages "/portfolio" subpath.
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' },
)
