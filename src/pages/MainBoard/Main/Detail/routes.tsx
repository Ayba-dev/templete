import { Outlet } from 'react-router-dom'


import { createRouteObject } from '@shared/libs/react-router-dom'


import { EditLazy } from './Edit'
import { TemplateDetailLazy } from './ui'


export const templateUuidRoutes = createRouteObject([
  {
    element: <Outlet />,
    path: ':templateUuid',
    children: [
      {
        element: <TemplateDetailLazy />,
        index: true,
      },
      {
        path: 'edit',
        element: <EditLazy />,
      },
    ],
  },
] as const)