import type { TablePaginationConfig } from 'antd'

import { useSearchParams } from 'react-router-dom'

import { getOffset } from '@shared/libs/pagination'

const pageParam = 'page'
const limitParam = 'limit'

export const usePaginationQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get(pageParam) || '1'
  const limit = searchParams.get(limitParam) || '10'

  const set = (key: string, value: string) => {
    searchParams.set(key, value)
    setSearchParams(searchParams)
  }

  const setPage = (value: string) => {
    set(pageParam, value)
  }
  const setView = (value: string) => {
    if (limit === value) {
      return
    }
    set(limitParam, value)
  }

  const onChangeConfig = (config: TablePaginationConfig) => {
    setPage(String(config.current || 1))

    setView(String(config.pageSize || 1))
  }

  const paginationConfig: TablePaginationConfig & { offset: number } = {
    current: Number(page),
    showSizeChanger: true,
    pageSize: Number(limit),
    offset: Number(getOffset(Number(page), Number(limit))),
  }

  return { setPage, setView, paginationConfig, onChangeConfig }
}
