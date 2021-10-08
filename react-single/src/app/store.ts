import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { useDispatch } from 'react-redux'
import { especialidadeApi } from '../services/especialidades'
import { stacksApi } from '../services/stacks'

const store = configureStore({
  reducer: {
    [stacksApi.reducerPath]: stacksApi.reducer,
    [especialidadeApi.reducerPath]: especialidadeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      stacksApi.middleware,
      especialidadeApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
