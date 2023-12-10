import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

// TODO: check if can i use postsAdapter
const sortDescByDate = (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    getOnePost: builder.query({
      query: (postId) => `posts/${postId}`,
      providesTags: ['Posts'],
    }),
    getFilteredPosts: builder.query({
      query: (params) => ({
        url: `posts/filter?`,
        method: 'GET',
        params,
      }),
      transformResponse: (response) => response.sort(sortDescByDate),

      providesTags: ['Posts'],
    }),
    putParticipate: builder.mutation({
      query: (postId) => ({
        url: `posts/post/${postId}/participate`,
        method: 'PUT',
      }),
      invalidatesTags: ['Posts'],
    }),
    deleteParticipation: builder.mutation({
      query: (postId) => ({
        url: `posts/post/${postId}/unparticipate`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetOnePostQuery,
  useLazyGetFilteredPostsQuery,
  usePutParticipateMutation,
  useDeleteParticipationMutation,
} = postsApi
