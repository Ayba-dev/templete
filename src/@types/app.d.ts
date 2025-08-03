declare global {
  type Brand<K, T> = K & { __brand: T }

  type UserId = Brand<number, 'UserId'>

  // fsd required
  declare type RootState = import('@app/providers/StoreProvider/config/store.ts').RootState
  declare type AppDispatch = import('@app/providers/StoreProvider/config/store.ts').AppDispatch

  export interface PaginationResponse<T> {
    count: number
    previous?: string
    next?: string
    results: Array<T>
  }

  export interface PaginationParams {
    search?: string
    limit?: number
    offset?: number
  }
}

export {}
