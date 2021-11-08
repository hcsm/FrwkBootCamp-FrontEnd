import { createEntityAdapter } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'
import { StacksType } from '../types/cadastro'
import { BASE_URL, JSON_SERVER_URL, orderData } from './Enums'

export const especialidadeApi = createApi({
  reducerPath: 'especialidades',
  baseQuery: fetchBaseQuery({ baseUrl: JSON_SERVER_URL }),
  tagTypes: ['Especialidades'],
  endpoints: builder => ({
    getEspecialidades: builder.query<StacksType[], void>({
      query: () => '/especialidades',
      providesTags: ['Especialidades'],
      transformResponse: (response: StacksType[]) => {
        return response.sort((a, b) => orderData(a.label, b.label))
      },
    }),
    createEspecialidades: builder.mutation({
      query: payload => ({
        url: '/especialidades',
        method: 'POST',
        body: payload,
      }),
      transformResponse: response => {
        toast.success('Criado com sucesso')
        return response
      },
      invalidatesTags: ['Especialidades'],
    }),
    updateEspecialidades: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/especialidades/${id}`,
        method: 'PUT',
        body: payload,
      }),
      transformResponse: response => {
        return response
      },
      invalidatesTags: ['Especialidades'],
    }),
    removeEspecialidades: builder.mutation({
      query: id => ({
        url: `/especialidades/${id}`,
        method: 'DELETE',
      }),
      transformResponse: response => {
        toast.success('Deletado com sucesso')
        return response
      },
      invalidatesTags: ['Especialidades'],
    }),
  }),
})

export const {
  useGetEspecialidadesQuery,
  useCreateEspecialidadesMutation,
  useUpdateEspecialidadesMutation,
  useRemoveEspecialidadesMutation,
} = especialidadeApi
export const selectEspecialidades =
  especialidadeApi.endpoints.getEspecialidades.useQueryState
