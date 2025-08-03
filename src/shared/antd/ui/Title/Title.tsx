import { Typography } from 'antd'
import type { TitleProps as _TitleProps } from 'antd/es/typography/Title'

const { Title: AntTitle } = Typography

type TitleProps = _TitleProps
export function Title(props: TitleProps) {
  return <AntTitle {...props} />
}
