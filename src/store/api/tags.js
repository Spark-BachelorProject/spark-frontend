import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  endpoints: (builder) => ({
    getTags: builder.query({
      query: () => 'tags',
    }),
  }),
})

export const { useGetTagsQuery } = tagsApi
