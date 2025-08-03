import { Outlet } from 'react-router-dom'
import { StoreProvider } from '@app/providers'
import { AntProvider } from '@shared/antd/provider'


export const GlobalLayout = () => (
  <StoreProvider>
    <AntProvider>
      <Outlet />
    </AntProvider>
  </StoreProvider>
)
