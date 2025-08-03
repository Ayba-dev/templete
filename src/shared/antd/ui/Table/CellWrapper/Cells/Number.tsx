import type { CellWrapperProps } from '..'

import NumberFormat from '../../components/NumberFormat'
import isNull from '../../libs/isNull'

import type { ChildrenProp } from './types'

export interface NumberProps extends CellWrapperProps {
  children: ChildrenProp
  maximumFractionDigits?: number
  minimumFractionDigits?: number
}

const Number = ({
  children,
  maximumFractionDigits = 2,
  minimumFractionDigits = 2,
}: NumberProps) => {
  const value = children?.[1] ?? ''

  if (isNaN(+value) || isNull(value)) return '-'

  return (
    <NumberFormat
      value={value}
      minimumFractionDigits={minimumFractionDigits}
      maximumFractionDigits={maximumFractionDigits}
    />
  )
}

export default Number
