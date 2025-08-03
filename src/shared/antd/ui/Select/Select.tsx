import { Select as _Select, type SelectProps as _SelectProps } from 'antd'
import type { DefaultOptionType as _DefaultOptionType } from 'antd/es/select'

export type SelectProps = _SelectProps
export type DefaultOptionType = _DefaultOptionType

export function Select({ ...props }: SelectProps) {
  return (
    <_Select
      getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
      {...props}
    />
  )
}
