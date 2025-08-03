import { Menu as _Menu, type MenuProps as _MenuProps } from 'antd'

export type MenuProps = _MenuProps
export type MenuItem = Required<MenuProps>['items'][number]

export function Menu(props: MenuProps) {
  return <_Menu {...props} />
}
