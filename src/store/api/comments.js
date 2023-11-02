import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
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
