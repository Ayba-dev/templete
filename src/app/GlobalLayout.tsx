import { Outlet } from 'react-router-dom'
import { StoreProvider } from '@app/providers'
import { AntProvider } from '@shared/antd/provider'
import {StyleProvider} from "@shared/config/styles";


export const GlobalLayout = () => (
  <StoreProvider>
      <StyleProvider>
          <AntProvider>
              <Outlet />
          </AntProvider>
      </StyleProvider>
  </StoreProvider>
)
