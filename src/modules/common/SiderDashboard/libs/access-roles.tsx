import type { MenuProps } from 'antd'

type ItemType = Required<MenuProps>['items'][number]

interface AccessRolesProps {
  menu: ItemType[]
}

export const accessRoles = ({ menu }: AccessRolesProps): ItemType[] => {
  return menu as ItemType[]
}
