import {
  type BaseQueryFn,
  type FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { toast } from 'react-toastify'

import { getApiError } from '../libs/api'
import { type ApiError } from '../model'
import { BaseApiDomain } from '@shared/config/base/base-url.ts'

const mutex = new Mutex()

const _baseQuery = fetchBaseQuery({
  baseUrl: BaseApiDomain,
  prepareHeaders: (headers) => {
    const token = '93fa0842ec8cd88e0846c7849b27996cfd98a56f'

    if (token)
      headers.set('Authorization', `Token ${token}`)

    return headers
  },
}) as BaseQueryFn<FetchArgs, unknown, ApiError, {}>

export const baseQueryWithRefresh: BaseQueryFn<
  FetchArgs,
  unknown,
  ApiError,
  {}
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  const result = await _baseQuery(args, api, extraOptions)

  // if (result.error && result.error.status === 401) {
  //   if (!mutex.isLocked()) {
  //     const release = await mutex.acquire()
  //     try {
  //       const res: any = await _baseQuery(
  //         {
  //           url: '/auth/refresh/',
  //           method: 'POST',
  //         },
  //         api,
  //         extraOptions,
  //       )
  //       // [NOTE]: very bad approach
  //       if (res?.data?.user) {
  //         result = await _baseQuery(args, api, extraOptions)
  //       } else {
  //         api.dispatch({ type: 'authState/logout' })
  //         // window.history.pushState(NAVIGATION_MAP.auth, '', NAVIGATION_MAP.auth)
  //         // window.location.href = NAVIGATION_MAP.auth
  //       }
  //       // needs optimization
  //     } finally {
  //       release()
  //     }
  //   } else {
  //     await mutex.waitForUnlock()
  //     result = await _baseQuery(args, api, extraOptions)
  //   }
  // }

  if (result.error?.data) {
    try {
      const detail = getApiError(result.error)
      if (detail) {
        toast.error(detail)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return result
}
