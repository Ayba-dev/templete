import type { TableProps } from '../Table'

export const createTableColumns = <T extends Record<string, unknown>>(
  array: TableProps<T>['columns'],
) => {
  return array
}
