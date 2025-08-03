import { lazy } from 'react'

export * from './MainLayout.tsx'
export * from './MainTemplate.tsx'

export const MainTemplateLazy = lazy(() => import('./MainTemplate'))
