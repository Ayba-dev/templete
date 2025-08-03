import type { ColumnType } from 'antd/es/table'

import type { TdHTMLAttributes } from 'react'

import type { ColumnTypeTable, ExtendedColumnType } from '../types'

export const renderCell = <T extends Record<string, unknown>>(
  col: ColumnTypeTable<T>[number],
): ColumnType<T> => {
  // Проверяем наличие children, чтобы определить, является ли это группой колонок
  if ('children' in col) {
    return col as ColumnType<T>
  }

  const extendedCol = col as ExtendedColumnType<T>

  if (extendedCol.render) {
    return {
      ...extendedCol,
      onCell: (record: T) => {
        // Store custom properties in a data attribute
        return {
          'data-record': JSON.stringify(record),
          'data-column': JSON.stringify({
            title: extendedCol.title,
            dataIndex: extendedCol.dataIndex,
          }),
          'data-should-render': 'true',
          className: extendedCol.className,
        } as TdHTMLAttributes<HTMLTableCellElement>
      },
    }
  }

  return {
    ...extendedCol,
    onCell: (record: T) => {
      // Store custom properties in a data attribute
      return {
        'data-record': JSON.stringify(record),
        'data-column': JSON.stringify({
          title: extendedCol.title,
          dataIndex: extendedCol.dataIndex,
          type: extendedCol.type || 'text',
          format: extendedCol.format || {},
        }),
        className: extendedCol.className,
      } as TdHTMLAttributes<HTMLTableCellElement>
    },
  }
}
