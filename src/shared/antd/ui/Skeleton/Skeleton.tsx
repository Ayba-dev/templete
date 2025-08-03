import { Skeleton as _Skeleton, type SkeletonProps as _SkeletonProps } from 'antd'

type SkeletonProps = _SkeletonProps

export function Skeleton(props: SkeletonProps) {
  return (
    <_Skeleton
      active
      {...props}
    />
  )
}
