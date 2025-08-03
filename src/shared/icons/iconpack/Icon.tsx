import { iconMap } from './model/icon'
import { sizeMap } from './model/size'
import type { IconProps } from './model/types'
import { cn } from '@shared/libs'


export const Icon = (
  {
    name,
    color = 'var(--color-muted)',
    size = 'sm',
    className,
    ...props
  }: IconProps) =>
  iconMap[name] &&
  iconMap[name]({
    size: typeof size === 'string' ? sizeMap[size] : size,
    color,
    className: cn('align-middle', className),
    ...props,
  })
