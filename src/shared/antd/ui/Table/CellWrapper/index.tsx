/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type FC, type HTMLAttributes, createElement } from 'react'

import { type Cell, cell } from './Cells'

export interface CellWrapperProps extends HTMLAttributes<HTMLTableCellElement> {
  type: Cell
  record: object
  index: number
  format: object

  shouldRender: boolean
}

const CellWrapper: FC<CellWrapperProps> = (props) => {
  const { children, type, shouldRender, ...restProps } = props

  if (shouldRender || !props.title) {
    return <td {...restProps}>{children}</td>
  }
  return (
    <td {...restProps}>
      {cell[type] &&
        createElement(
          // @ts-ignore
          cell[type],
          // @ts-ignore
          {
            ...restProps,
            type,
            shouldRender,
          },
          children,
        )}
    </td>
  )
}

export default CellWrapper
