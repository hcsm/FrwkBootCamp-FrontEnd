import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '../types/cadastro'
import { BASE_URL } from './Enums'

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getProfessionals: builder.query<UserType[], void>({
      query: () => '/professional',
      providesTags: ['Users'],
      transformResponse: (response: UserType[]) => {
        return response
      },
    }),
  }),
})

export const { useGetProfessionalsQuery } = usersApi
