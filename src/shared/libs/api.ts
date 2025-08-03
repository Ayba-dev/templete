import { type SerializedError } from '@reduxjs/toolkit'

import { type ApiError } from '../model'

export const getApiError = (error: ApiError | SerializedError) => {
  const defaultError = 'Произошла ошибка'

  if ('data' in error) {
    return error.data?.errors?.[0].detail || defaultError
  }
  return defaultError
}
