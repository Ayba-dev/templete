import type { CellWrapperProps } from '..'

import type { ChildrenProp } from './types'

export interface TextProps extends CellWrapperProps {
  children: ChildrenProp
}

const Text = ({ children }: TextProps) => {
  return children?.[1] || '-'
}

export default Text
