import { Table as AntTable, type TableProps as _TableProps } from 'antd'

import type { FC, ReactNode } from 'react'

import { cn } from '@shared/libs/cn'

import CellWrapper, { type CellWrapperProps } from './CellWrapper'
import './Table.css'
import { renderCell } from './libs/renderCell'
import type { ColumnTypeTable } from './types'

const pageSizeOptions = [10, 20, 50, 100]

export interface TableProps<RecordType extends Record<string, unknown>>
  extends Omit<_TableProps<RecordType>, 'columns'> {
  error?: unknown
  columns: ColumnTypeTable<RecordType>
  header?: ReactNode
}

export function Table<RecordType extends Record<string, unknown>>({
  columns,
  error,
  pagination,
  dataSource,
  components,
  header,
  className,
  ...restProps
}: TableProps<RecordType>) {
  const columnsWrapper = columns?.map(renderCell)

  const isWithHeader = !!header

  const Header = isWithHeader && <div>{header}</div>

  if (error) {
    console.error(error)
  }

  return (
    <div className={cn('myTable', className)}>
      {Header}
      <AntTable<RecordType>
        bordered
        columns={columnsWrapper}
        dataSource={dataSource}
        components={
          dataSource && dataSource.length
            ? {
                body: {
                  ...components?.body,
                  cell: CellWrapper as FC<CellWrapperProps>,
                },
              }
            : undefined
        }
        rowKey={(record) => {
          const rec = record as { id?: string | number }
          return rec.id ? rec.id : Math.random()
        }}
        pagination={
          pagination
            ? {
                ...pagination,
                pageSizeOptions,
              }
            : false
        }
        {...restProps}
      />
    </div>
  )
}
