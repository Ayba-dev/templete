import { HolderOutlined } from '@ant-design/icons'
import { DndContext, type DragEndEvent, type UniqueIdentifier } from '@dnd-kit/core'
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Button, type TableProps } from 'antd'
import type { ColumnType } from 'antd/lib/table'
import type { GetComponentProps } from 'rc-table/lib/interface'

import React, {
  type CSSProperties,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'

import { Skeleton } from '../Skeleton'

import { Table } from './Table'
import type { ColumnTypeTable } from './types'

export interface OnDragEndProps<T> {
  activeRecordId: UniqueIdentifier
  array: T[]
  overIndex: number
}

export type TableDragRowProps<T extends { id: UniqueIdentifier }> = {
  error?: unknown
  onDragEnd?: (data: OnDragEndProps<T>) => void
  column?: ColumnTypeTable<T>
} & TableProps<T>

const TableDragRow = <T extends { id: UniqueIdentifier }>({
  dataSource = [],
  onDragEnd,
  columns,
  ...props
}: TableDragRowProps<T>) => {
  const [data, setData] = useState<T[]>((dataSource as T[]) || [])

  const onDragEndFunction = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setData((previous) => {
        const activeIndex = previous.findIndex((item) => item.id === active.id)
        const overIndex = previous.findIndex((item) => item.id === over?.id)

        const result = arrayMove(previous, activeIndex, overIndex)

        if (active?.id) {
          onDragEnd?.({
            activeRecordId: active?.id,
            array: result,
            overIndex: overIndex,
          })
        }

        return result
      })
    }
  }

  if (props?.loading) {
    return <Skeleton />
  }
  if (!dataSource) {
    return null
  }

  return (
    <DndContext onDragEnd={onDragEndFunction}>
      <SortableContext
        items={data.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <Table<T>
          components={{
            body: {
              row: Row as unknown as React.FC<GetComponentProps<T>>,
            },
          }}
          dataSource={data}
          columns={[...(dragColumns as ColumnType<T>[]), ...(columns || [])]}
          {...props}
        />
      </SortableContext>
    </DndContext>
  )
}
export default TableDragRow

interface RowProps {
  children: ReactNode[]
  'data-row-key': UniqueIdentifier
  style?: CSSProperties
}

const dragColumns: ColumnType<unknown>[] = [
  {
    key: 'sort',
    align: 'center',
    width: 80,
    render: () => <DragHandle />,
  },
]

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void
  listeners?: SyntheticListenerMap
}

const RowContext = React.createContext<RowContextProps>({})

const Row: React.FC<RowProps> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props['data-row-key'] })

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 999 } : {}),
  }

  const contextValue = useMemo<RowContextProps>(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners],
  )

  return (
    <RowContext.Provider value={contextValue}>
      <tr
        {...props}
        ref={setNodeRef}
        style={style}
        {...attributes}
      />
    </RowContext.Provider>
  )
}

const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext)
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{ cursor: 'move' }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  )
}
