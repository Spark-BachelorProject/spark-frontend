import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

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
  }),
})

export const { useGetUserQuery, useGetUserFriendsQuery } = userApi
