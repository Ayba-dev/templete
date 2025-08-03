import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { Layout, type MenuProps } from 'antd'
import type { SiderProps as _SiderProps } from 'antd/lib'

import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Menu, Title } from '@shared/antd'
import Flex from '@shared/antd/ui/Flex'
import { Icon } from '@shared/icons/iconpack'
import { cn } from '@shared/libs/cn'

import { accessRoles } from '../libs/access-roles'
import { contactsMenu, dashboardMenu } from '../model/menu'

import './Sider.css'

const { Sider: AntSider } = Layout

const fullWidth = 286
const minWidth = 60

export type SiderProps = _SiderProps

export function SiderDashboard(props: SiderProps) {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(true)

  const selectHandler: MenuProps['onClick'] = (item) => {
    navigate(`/new/${item.key}`)
  }

  const { pathname } = useLocation()

  const rootPath = useMemo(() => pathname.split('/')?.[2], [pathname])

  return (
    <AntSider
      trigger={null}
      width={fullWidth}
      collapsedWidth={minWidth}
      collapsed={collapsed}
      collapsible
      theme="light"
      onCollapse={(value) => setCollapsed(value)}
      className="navWrapper sticky top-0 h-screen  bg-[#F4F6F7] flex-col gap-1"
      {...props}
    >
      <div className="flex mt-2 justify-between items-center h-[60px] px-5">
        <div className="flex items-center gap-2">
          {!collapsed && (
            <div className="bg-[#0D9488] w-[36px] h-[36px] rounded-[8px] flex items-center justify-center">
              <Icon
                name={'logo'}
                size={20}
              />
            </div>
          )}
          {!collapsed && (
            <Title
              level={5}
              className="!mb-0 text-[#0E0F11] font-bold text-[20px] whitespace-nowrap"
            >
              MAgent
            </Title>
          )}
        </div>
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <DoubleRightOutlined className="text-[18px] cursor-pointer" />
          ) : (
            <DoubleLeftOutlined className="text-[18px] cursor-pointer" />
          )}
        </button>
      </div>
      <Flex
        vertical
        className={'flex flex-col justify-between h-full'}
      >
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={accessRoles({
            menu: dashboardMenu,
          })}
          onClick={selectHandler}
          selectedKeys={[`${rootPath}`]}
          className="menuWrapper bg-[#F4F6F7] pb-[12px]"
        />
        <div className={'border-t border-[#E0E5E8] pt-[15px] pb-[12px]'}>
          {!collapsed && (
            <Title
              className={cn(
                ' transition-all text-[#768793] mb-1 text-[12px] ml-[30px]  duration-300',
                collapsed
                  ? 'opacity-0 translate-x-[-10px]'
                  : 'opacity-100 translate-x-0',
              )}
            >
              ПОМОЩЬ
            </Title>
          )}
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={accessRoles({
              menu: contactsMenu,
            })}
            onClick={selectHandler}
            selectedKeys={[`${rootPath}`]}
            className="menuWrapper bg-[#F4F6F7]"
          />
        </div>
      </Flex>
    </AntSider>
  )
}
