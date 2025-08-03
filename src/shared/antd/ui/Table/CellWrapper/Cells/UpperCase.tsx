import type { CellWrapperProps } from '..'

import type { ReactNode } from 'react'

interface UpperCaseProps extends CellWrapperProps {
  children: [ReactNode, string?]
}

export default function UpperCase({ children }: UpperCaseProps) {
  const value = children?.[1]

  return <div className="uppercase">{value}</div>
}
