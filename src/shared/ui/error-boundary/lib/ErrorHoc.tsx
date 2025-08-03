// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Divider } from 'antd'

import { Component, ErrorInfo, ReactNode } from 'react'

import { Alert, Space, Title } from '@shared/antd'

interface Props {
  children?: ReactNode
  path?: string
}

interface State {
  errorText: string
  crashData: string
  isOpenDetail: boolean
}

export class ErrorHoc extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      errorText: null,
      crashData: null,
      isOpenDetail: false,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      errorText: error.message,
      crashData: errorInfo.componentStack,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.setState({
        errorText: null,
        crashData: null,
        isOpenDetail: false,
      })
    }
  }

  toggleIsOpenDetail = () => {
    this.setState((prev) => ({
      ...prev,
      isOpenDetail: !this.state.isOpenDetail,
    }))
  }

  onReload = () => {
    window.location.reload()
  }

  render() {
    const { errorText, crashData } = this.state

    const { path } = this.props

    if (errorText) {
      return (
        <div className="p-[25px]">
          <div>
            <Title
              level={3}
              className="!m-[0px]"
            >
              Все в порядке! Баги происходят очень редко
            </Title>
            <Title
              className="!m-[0px]"
              level={5}
            >
              Раз уж это произошло отправьте скрин разработчикам
            </Title>
            <Divider />
          </div>
          <Alert
            showIcon
            message={errorText}
            description={
              <Space direction="vertical">
                Браузери и ОС: {navigator.appVersion}
                <br />
                Разрешение экрана: {window.screen.width} на{' '}
                {window.screen.height}
                <br />
                Путь: {path}
                <br />
                Отладка: {crashData}
              </Space>
            }
            type="error"
          />
        </div>
      )
    }

    return this.props.children
  }
}
