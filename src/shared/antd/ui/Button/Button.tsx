import { Button as _Button, type ButtonProps as _ButtonProps } from 'antd'

export type ButtonProps = _ButtonProps

export function Button(props: ButtonProps) {
  return <_Button {...props} />
}
