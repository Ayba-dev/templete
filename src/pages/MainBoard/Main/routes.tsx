import { Suspense } from 'react'

import { createRouteObject } from '@shared/libs/react-router-dom'

import { templateUuidRoutes } from './Detail'
import { MainLayout, MainTemplateLazy } from './ui'
import { SupervisorLazy } from './Supervisor'
import { CalculatorLazy } from '@pages/MainBoard/Main/Calculator'
import { LogisticsLazy } from '@pages/MainBoard/Main/Logistics'
import { CcLazy } from '@pages/MainBoard/Main/Cc'
import { BranchesLazy } from '@pages/MainBoard/Main/Branches'


export const mainRoutesPages = createRouteObject([
  {
    path: '',
    children: [
      {
        element: (
          <Suspense>
            <MainLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <MainTemplateLazy />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'users',
        element: (
          <Suspense>
            users
          </Suspense>
        ),
      },
      {
        path: 'supervisor',
        element: (
          <Suspense>
            <SupervisorLazy />
          </Suspense>
        ),
      },
      {
        path: 'calculator',
        element: (
          <Suspense>
            <CalculatorLazy />
          </Suspense>
        ),
      },
      {
        path: 'logistics',
        element: (
          <Suspense>
            <LogisticsLazy />
          </Suspense>
        ),
      },
      {
        path: 'cc',
        element: (
          <Suspense>
            <CcLazy />
          </Suspense>
        ),
      },
      {
        path: 'branches',
        element: (
          <Suspense>
            <BranchesLazy />
          </Suspense>
        ),
      },
      ...templateUuidRoutes,
    ],
  },
])
