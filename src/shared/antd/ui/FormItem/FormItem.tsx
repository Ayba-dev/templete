import { Form, type FormItemProps } from 'antd'

import type {ReactNode} from 'react'

type Props<T> = FormItemProps<T> & {
  children: ReactNode
}

export const FormItem = <T,>({ children, className, ...props }: Props<T>) => {
  return (
    <Form.Item
      className={`customFormItem ${className}`}
      {...props}
    >
      {children}
    </Form.Item>
  )
}
