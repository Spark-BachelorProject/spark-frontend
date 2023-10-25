import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNjk4MjI0NjA3LCJleHAiOjE2OTgyMjYwNDd9.wo3olsEUP6CYwe25ZdeOfvYuk4LGDM9x8bno5o3LSBc`}
  }),
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
