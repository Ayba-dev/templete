import { createRouteObject } from '@shared/libs/react-router-dom'
import { MainWrapper } from '@pages/MainBoard/ui'
import { mainRoutesPages } from '@pages/MainBoard/Main'


export const mainRoutes = createRouteObject([
  {
    path: '',
    element: (<MainWrapper />),
    children: [...mainRoutesPages],
  },
])
