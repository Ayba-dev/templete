import type { CellWrapperProps } from '..'

import NumberFormat from '../../components/NumberFormat'

import type { ChildrenProp } from './types'

export interface SumProps extends CellWrapperProps {
  children: ChildrenProp
  minimumFractionDigits?: number
  maximumFractionDigits?: number
}

const Sum = ({
  children,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
}: SumProps) => {
  const value = children?.[1]

  if (value === null || value === undefined) return '-'

  if (typeof value === 'number') {
    return (
      <p className="text-nowrap">
        <NumberFormat
          value={value}
          minimumFractionDigits={minimumFractionDigits}
          maximumFractionDigits={maximumFractionDigits}
          suffix=" KGS"
        />
      </p>
    )
  }

  return <p>{value} KGS</p>
}

export default Sum
