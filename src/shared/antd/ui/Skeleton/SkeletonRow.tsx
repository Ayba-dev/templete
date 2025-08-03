import { Skeleton } from 'antd'
import type { SkeletonButtonProps } from 'antd/es/skeleton/Button'

type SkeletonRowProps = SkeletonButtonProps

export default function SkeletonRow({ ...props }: SkeletonRowProps) {
  return (
    <Skeleton.Button
      active
      shape="round"
      size="default"
      {...props}
    />
  )
}
