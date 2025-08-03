import { ConfigProvider, Empty, type GetProp } from 'antd'

export const renderEmpty: GetProp<typeof ConfigProvider, 'renderEmpty'> = (
  componentName,
) => {
  if (componentName === 'Table.filter' /** 👈 5.20.0+ */) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="No Filter(Custom)"
      />
    )
  }
}
