import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetPostsQuery, useAddPostMutation } = postsApi
