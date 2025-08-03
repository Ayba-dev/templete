import { createBrowserRouter } from 'react-router-dom'

import { GlobalLayout } from '@app/GlobalLayout'

import { AppRoutes } from '@pages/routes'

export const Routing = createBrowserRouter([
  {
    path: '/new',
    shouldRevalidate: () => false,
    element: <GlobalLayout />,
    children: [...AppRoutes],
  },
])
