import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { sortTagsByType } from '@/helpers/sortTagsByType'

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
    getTagsByActivityId: builder.query({
      query: (id) => `activities/${id}/tags`,
      transformResponse: (response) => sortTagsByType(response),
    }),
  }),
})

export const { useGetTagsQuery, useGetTagsByActivityIdQuery } = tagsApi
