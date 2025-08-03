import { Card as _Card, type CardProps as _CardProps } from 'antd'

type CardProps = _CardProps

export function Card(props: CardProps) {
  return <_Card {...props} />
}
