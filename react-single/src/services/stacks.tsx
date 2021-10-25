import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'
import { StacksType } from '../types/cadastro'
import { BASE_URL, orderData } from './Enums'

export const stacksApi = createApi({
  reducerPath: 'stacks',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Stacks'],
  endpoints: builder => ({
    getStacks: builder.query<StacksType[], void>({
      query: () => '/stacks',
      providesTags: ['Stacks'],
      transformResponse: (response: StacksType[]) => {
        return response.sort((a, b) => orderData(a.label, b.label))
      },
    }),
    createStacks: builder.mutation({
      query: payload => ({
        url: '/stacks',
        method: 'POST',
        body: payload,
      }),
      transformResponse: response => {
        toast.success('Criado com sucesso')
        return response
      },
      invalidatesTags: ['Stacks'],
    }),
    updateStacks: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/stacks/${id}`,
        method: 'PUT',
        body: payload,
      }),
      transformResponse: response => {
        toast.success('Alterado com sucesso')
        return response
      },
      invalidatesTags: ['Stacks'],
    }),
    removeStacks: builder.mutation({
      query: id => ({
        url: `/stacks/${id}`,
        method: 'DELETE',
      }),
      transformResponse: response => {
        toast.success('Deletado com sucesso')
        return response
      },
      invalidatesTags: ['Stacks'],
    }),
  }),
})

export const {
  useGetStacksQuery,
  useUpdateStacksMutation,
  useCreateStacksMutation,
  useRemoveStacksMutation,
} = stacksApi
export const selectStacks = stacksApi.endpoints.getStacks.useQueryState
