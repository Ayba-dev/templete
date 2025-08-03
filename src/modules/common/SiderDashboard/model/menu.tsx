import { UsergroupAddOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import {
  FeeLine,
  HomeWithDoor,
  IncreaseMoney,
  SearchlocationLine,
  WorkingtimeOutlined,
} from 'md-glyphs'

import { Icon } from '@shared/icons/iconpack'

const titleSClass =
  'font-inter text-[14px] font-medium leading-[17.5px] text-text_gray'

type ItemType = Required<MenuProps>['items'][number]

export const dashboardMenu: ItemType[] = [
  {
    label: <p className={titleSClass}>Заявки</p>,
    key: '',

    icon: <HomeWithDoor size={20} />,
  },

  {
    label: <p className={titleSClass}>Пользователи</p>,
    key: 'users',

    icon: <UsergroupAddOutlined size={20} />,
  },
  {
    label: <p className={titleSClass}>Супервайзеры</p>,
    key: 'supervisor',

    icon: <HomeWithDoor size={20} />,
  },
  {
    label: <p className={titleSClass}>Калькулятор</p>,
    key: 'calculator',

    icon: <FeeLine size={20} />,
  },
  {
    label: <p className={titleSClass}>Логистика</p>,
    key: 'logistics',

    icon: <SearchlocationLine size={20} />,
  },
  {
    label: <p className={titleSClass}>Диспетчер</p>,
    key: 'dispatcher',

    icon: <WorkingtimeOutlined size={20} />,
  },
  {
    label: <p className={titleSClass}>КЦ</p>,
    key: 'cc',

    icon: <UsergroupAddOutlined size={20} />,
  },
  {
    label: <p className={titleSClass}>Филиалы</p>,
    key: 'branches',

    icon: <IncreaseMoney size={20} />,
  },
]

export const contactsMenu = [
  {
    label: <p className={titleSClass}>Позвонить 4444</p>,
    key: 'home',

    icon: (
      <Icon
        size={20}
        name={'number'}
      />
    ),
  },
  {
    label: <p className={titleSClass}>Написать в Whats App</p>,
    key: 'home',

    icon: (
      <Icon
        size={20}
        name={'whatsapp'}
      />
    ),
  },
  {
    label: <p className={titleSClass}>Написать в Telegram</p>,
    key: 'home',

    icon: (
      <Icon
        size={20}
        name={'telegram'}
      />
    ),
  },
]
