import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const citiesApi = createApi({
  reducerPath: 'citiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  tagTypes: ['Cities'],
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => 'cities',
      providesTags: ['Cities'],
    }),
  }),
})

export const { useGetCitiesQuery } = citiesApi
