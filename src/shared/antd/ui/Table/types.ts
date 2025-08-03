import type {
  ColumnGroupType as AntColumnGroupType,
  ColumnType as AntColumnType,
  ColumnsType,
} from 'antd/es/table'

import { cell } from './CellWrapper/Cells'

export interface ExtendedColumnType<RecordType = unknown>
  extends AntColumnType<RecordType> {
  format?: Record<string, unknown>
  type?: TableCellTypes
}

export interface ExtendedColumnGroupType<RecordType = unknown>
  extends AntColumnGroupType<RecordType> {
  type?: TableCellTypes
}

export type TableCellTypes = keyof typeof cell

export type ColumnTypeTable<RecordType = unknown> = (
  | ExtendedColumnGroupType<RecordType>
  | ExtendedColumnType<RecordType>
)[]

export type ColumnType<T> = ColumnsType<T>
