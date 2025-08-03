import { Alert as _Alert, type AlertProps as _AlertProps } from 'antd'

type AlertProps = _AlertProps

export function Alert(props: AlertProps) {
  return <_Alert {...props} />
}
