import {
  configureStore,
  Action,
  createSlice,
  ThunkAction,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const INITIAL_STACKS = [
  'Java',
  '.NET',
  'Angular',
  'Docker',
  'JavaScript',
  'TypeScript',
  'C#',
  'Go lang',
  'Azure',
]

const especialidade = createSlice({
  name: 'especialidade',
  initialState: {
    list: ['Frontend', 'Backend', 'Fullstack', ...INITIAL_STACKS],
  },
  reducers: {},
})

const stacks = createSlice({
  name: 'stacks',
  initialState: {
    list: INITIAL_STACKS,
  },
  reducers: {},
})

// export const { } = stacks.actions
// export const { } = especialidade.actions

export const stacksReducer = stacks.reducer
export const especialidadeReducer = especialidade.reducer

const store = configureStore({
  reducer: {
    stack: stacksReducer,
    especialidade: especialidadeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
