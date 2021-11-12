import {
  Action,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { DEFAULT_PHOTO } from '../services/Enums'
import { especialidadeApi } from '../services/especialidades'
import { stacksApi } from '../services/stacks'
import { usersApi } from '../services/users'
import { CadastroType, UserType } from '../types/cadastro'

interface IUser {
  data: CadastroType
}

const initial_user = <IUser>{ data: { foto: { value: DEFAULT_PHOTO } } }
export const AuthUserSlice = createSlice({
  name: 'authUser',
  initialState: initial_user,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserType>>) => {
      state.data = { ...state.data, ...action.payload }
    },
  },
})

const store = configureStore({
  reducer: {
    [stacksApi.reducerPath]: stacksApi.reducer,
    [especialidadeApi.reducerPath]: especialidadeApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [AuthUserSlice.name]: AuthUserSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      stacksApi.middleware,
      especialidadeApi.middleware,
      usersApi.middleware
    ]),
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)

export const { setUser } = AuthUserSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
