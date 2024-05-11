import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '@/store/config'

// TODO: check if can i use postsAdapter
const sortDescByDate = (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery(baseQueryConfig()),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),
    getPostsByCity: builder.query({
      query: (cityName) => `posts/city/${cityName}`,
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
        url: `posts`,
        method: 'GET',
        params: params, // params should be a map { filter: 'location.id=0;...', page=0, ... }
      }),
      transformResponse: (response) => response.content.sort(sortDescByDate),

      providesTags: ['Posts'],
    }),
    putParticipate: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}/participate`,
        method: 'PUT',
      }),
      invalidatesTags: ['Posts'],
    }),
    deleteParticipation: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}/unparticipate`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
    // this query should be with Posts tags
    getPostsByGroup: builder.query({
      query: (groupId) => `groups/${groupId}/posts`,
      providesTags: ['Posts'],
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
  useGetPostsByGroupQuery,
  useGetPostsByCityQuery,
} = postsApi
