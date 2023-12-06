import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

// TODO: check if can i use postsAdapter
const sortDescByDate = (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => 'user',
      providesTags: ['User'],
    }),
    getUserFriends: builder.query({
      query: () => 'user/friends',
      providesTags: ['User'],
    }),
    getBookmarkedPosts: builder.query({
      query: () => `user/posts/bookmarked`,
      providesTags: ['User', 'Posts'],
      transformResponse: (response) => response.sort(sortDescByDate),
    }),
    //TODO: CLAIM PUT OR POST
    getOneBookmarkedPost: builder.query({
      query: (postId) => `user/posts/bookmark/${postId}`,
      providesTags: ['User', 'Posts'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUserFriendsQuery,
  useGetBookmarkedPostsQuery,
  useLazyGetOneBookmarkedPostQuery,
} = userApi
