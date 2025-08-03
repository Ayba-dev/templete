import type { FC, ReactNode } from 'react'

interface NumberFormatProps {
  value: number | string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  prefix?: ReactNode
  suffix?: ReactNode
}

const NumberFormat: FC<NumberFormatProps> = (props) => {
  const {
    value,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    prefix,
    suffix,
    ...restProps
  } = props

  const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits,
    maximumFractionDigits,
    ...restProps,
  })

  return (
    <>
      {prefix}
      {numberFormatter.format(+value)}
      {suffix}
    </>
  )
}

export default NumberFormat
