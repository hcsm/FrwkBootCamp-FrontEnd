import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './Enums';

export const stacksApi = createApi({
  reducerPath: 'stacks',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getStacks: builder.query({
      query: () => "/stacks",
    }),
  }),
})

export const { useGetStacksQuery } = stacksApi ;
