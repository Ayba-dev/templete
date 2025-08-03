import { StyleProvider } from '@ant-design/cssinjs'
import { App, ConfigProvider } from 'antd'
import { ConfigProvider as ConfigProviderMobile } from 'antd-mobile'
import ruRUMobile from 'antd-mobile/es/locales/ru-RU'
import ru_RU from 'antd/lib/locale/ru_RU'

import type { PropsWithChildren } from 'react'

import { renderEmpty } from '../../libs/renderEmpty'
import { useTheme } from '../../libs/useTheme'

import './styles.css'

export function AntProvider({ children }: PropsWithChildren) {
  const { getTheme } = useTheme()
  return (
    <StyleProvider layer>
      <ConfigProvider
        wave={{ disabled: true }}
        renderEmpty={renderEmpty}
        theme={{
          token: {
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.42857,
            borderRadius: 8,
          },
          components: {
            Form: {
              marginLG: 0,
            },
            Table: {
              headerBorderRadius: 3,
            },
            Input: {
              controlHeight: 44,
              controlHeightLG: 48,
              controlHeightSM: 36,
              borderRadius: 16,
              borderRadiusSM: 16,
              borderRadiusLG: 16,
              fontSize: 16,
            },

            Menu: {},
            Segmented: {
              controlHeight: 36,
              borderRadius: 12,
              borderRadiusSM: 10,
            },
            Typography: {
              lineHeightHeading5: 1.4,
              fontWeightStrong: 700,
              titleMarginBottom: 0,
            },
            Card: {
              borderRadiusLG: 16,
            },
            DatePicker: {
              controlHeight: 44,
              controlHeightLG: 48,
              controlHeightSM: 36,
              borderRadius: 12,
              borderRadiusSM: 16,
              borderRadiusLG: 16,
              fontSize: 13,
            },
            Button: {
              controlHeightSM: 36,
              controlHeight: 44,
              controlHeightLG: 56,

              borderRadius: 12,
              borderRadiusLG: 16,
              borderRadiusSM: 12,

              fontWeight: 500,

              defaultBg: 'rgb(219,234,254)',
              defaultColor: 'rgb(37,99,235)',
              defaultBorderColor: 'rgb(219,234,254)',

              yellow1: 'red',
            },
            Modal: {
              titleFontSize: 20,
              titleLineHeight: 1.4,
            },
            Select: {
              controlHeight: 44,
              borderRadius: 12,
              fontSizeIcon: 20,
              controlHeightSM: 32,
              borderRadiusSM: 12,
            },
          },
        }}
        locale={ru_RU}
      >
        <ConfigProviderMobile locale={ruRUMobile}>
          <App className={getTheme()}>{children}</App>
        </ConfigProviderMobile>
      </ConfigProvider>
    </StyleProvider>
  )
}
