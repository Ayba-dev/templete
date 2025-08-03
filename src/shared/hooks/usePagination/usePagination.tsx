import { useSearchParams } from 'react-router-dom'

export const usePagination = (defaultPageSize = 10) => {
  const [params, setParams] = useSearchParams()

  const page = parseInt(params.get('page') || '1')

  const pageSize = parseInt(params.get('pageSize') || String(defaultPageSize), 10)

  const setPage = (newPage: number) => {
    params.set('page', String(newPage))
    setParams(params)
  }

  const setPageSize = (newSize: number) => {
    params.set('pageSize', String(newSize))
    params.set('page', '1') // сбрасываем на первую страницу
    setParams(params)
  }

  const offset = (page - 1) * pageSize

  return {
    page,
    pageSize,
    offset,
    setPage,
    setPageSize,
  }
}
