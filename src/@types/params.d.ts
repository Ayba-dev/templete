import 'react-router-dom'

import { type CallReportsParams } from '@modules/CallReports/model/types'
import { type UserParams } from '@modules/common'
import { type DashboardFiltersParams } from '@modules/common/components/Filters'

import { DateQuery } from '@shared/types/QueryModel'

declare global {
  export interface GlobalParams {
    limit?: number | string
    offset?: number | string
    page?: number | string
  }

  export type FilterParams = DashboardFiltersParams & UserParams

  export type CommonQuery = Partial<Record<AllPageParams, string>> &
    GlobalParams &
    FilterParams &
    CallReportsParams &
    DateQuery
  export type ParamKey = keyof CommonQuery
}

// Переопределяем типы для React Router
declare module 'react-router-dom' {
  // Переопределение функции useParams для возврата нашего типа
  export function useParams(): Partial<Record<AllPageParams, string>>
}

export {}
