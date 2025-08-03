import type { CellWrapperProps } from '..'

import { displayDate } from '../../libs/displayDate'

import type { ChildrenProp } from './types'

export interface DateProps extends CellWrapperProps {
  children: ChildrenProp
  dateFormat?: string
}

const Date = ({ children, dateFormat }: DateProps) => {
  const value = children?.[1]

  if (!value) return '-'

  return displayDate(value, dateFormat)
}

export default Date
