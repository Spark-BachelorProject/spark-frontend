import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '@/store/config'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery(baseQueryConfig),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (postId) => `comments/${postId}`,
      providesTags: ['Comments'],
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: 'comments',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
})

export const { useGetCommentsQuery, useAddCommentMutation } = commentsApi
