import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_NAMES } from '@shared/model'


const initialState = {
  access: localStorage.getItem(STORAGE_NAMES.ACCESS_TOKEN),
  refresh: localStorage.getItem(STORAGE_NAMES.REFRESH_TOKEN),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.access = action.payload.access
      state.refresh = action.payload.refresh
    },
  },
})
