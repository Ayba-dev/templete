import type { RcFile } from 'antd/es/upload'

export const normUploadFile = (e: { file: RcFile; fileList: RcFile[] }) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.file
}
