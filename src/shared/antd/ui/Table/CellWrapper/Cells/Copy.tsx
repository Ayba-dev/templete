import type { CellWrapperProps } from '..'

import type { ChildrenProp } from './types'

export interface CopyProps extends CellWrapperProps {
  children: ChildrenProp
}

const Copy = ({ children }: CopyProps) => {
  // Ваш код для компонента Copy
  return children?.[1] || '-'
}

export default Copy
