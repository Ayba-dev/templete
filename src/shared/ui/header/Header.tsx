import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full h-full">
      {/* Слева */}
      <div className={'flex items-center gap-2'}>
        <h2 className="text-lg not-italic text-[#40474F] text-[14px]">
          Диспетчер
        </h2>
      </div>
      {/* Справа */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-90">
        <div className={'relative inline-block '}>
          <Avatar
            className="bg-[#EAEEF0]"
            shape="square"
            size={44}
            icon={<BellOutlined className="text-[#40474F]" />}
          />
          <span className="absolute bottom-4 flex items-center justify-center text-white text-[12px] right-1 w-[16px] h-[16px] rounded-full bg-[#E11D48] border-2 border-white">
            1
          </span>
        </div>
        <div className="relative inline-block ">
          <Avatar
            className="bg-[#EAEEF0]"
            shape="square"
            size={44}
            icon={<UserOutlined className="text-white" />}
          />
          <span className="absolute bottom-3 right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white" />
        </div>
        <span>ИП Кириллов Василий Константинович</span>
        <DownOutlined className={'text-[#40474F]'} />
      </div>
    </header>
  )
}

