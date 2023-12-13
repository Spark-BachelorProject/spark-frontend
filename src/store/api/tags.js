import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { sortTagsByType } from '@/helpers/sortTagsByType'
import { baseQueryConfig } from '@/store/config'

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery(baseQueryConfig),
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
