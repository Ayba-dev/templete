import { Layout } from 'antd'

import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { SiderDashboard } from '@modules/common/SiderDashboard'
import { Header } from '@shared/ui'


const { Content, Header: AntHeader } = Layout

export const MainWrapper: React.FC = () => (
  <Layout className="min-h-screen">
    {/* Левый сайдбар и правая часть */}
    <Layout hasSider>
      <SiderDashboard />

      {/* Правая часть: Header + Outlet */}
      <Layout>
        <AntHeader className="bg-white shadow-sm px-6 py-4">
          <Header />
        </AntHeader>
        <div className={'border-b border-[#E0E5E8]'}></div>
        <Content className="p-6 bg-[#FAFAFA] min-h-[calc(100vh-64px)]">
          <Suspense fallback={'Loading...'}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  </Layout>
)
