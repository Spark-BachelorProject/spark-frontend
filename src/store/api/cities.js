import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '@/store/config'

export const citiesApi = createApi({
  reducerPath: 'citiesApi',
  baseQuery: fetchBaseQuery(baseQueryConfig()),
  tagTypes: ['Cities'],
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => 'cities',
      providesTags: ['Cities'],
    }),
  }),
})

export const { useGetCitiesQuery } = citiesApi
