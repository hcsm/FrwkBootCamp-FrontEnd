import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './Enums'

export const especialidadeApi = createApi({
  reducerPath: 'especialidades',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getEspecialidades: builder.query({
      query: () => '/especialidades',
    }),
  }),
})

export const { useGetEspecialidadesQuery } = especialidadeApi
export const selectEspecialidades =
  especialidadeApi.endpoints.getEspecialidades.useQueryState
