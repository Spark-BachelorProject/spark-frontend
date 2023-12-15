import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '@/store/config'

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery(baseQueryConfig()),
  tagTypes: ['Groups'],
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
      providesTags: ['Groups'],
    }),
    getOneGroup: builder.query({
      query: (groupId) => `groups/${groupId}`,
      providesTags: ['Groups'],
    }),
    addGroup: builder.mutation({
      query: (body) => ({
        url: 'groups',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Groups'],
    }),
    getOwnedGroups: builder.query({
      query: () => 'groups/owned',
      providesTags: ['Groups'],
    }),
    getGroupsRecommended: builder.query({
      query: () => 'groups/recommended',
      providesTags: ['Groups'],
    }),
    joinGroup: builder.mutation({
      query: (groupId) => ({
        url: `groups/join/${groupId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Groups'],
    }),
    leaveGroup: builder.mutation({
      query: (groupId) => ({
        url: `groups/leave/${groupId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Groups'],
    }),
  }),
})

export const {
  useGetGroupsQuery,
  useAddGroupMutation,
  useGetOneGroupQuery,
  useGetGroupsRecommendedQuery,
  useGetOwnedGroupsQuery,
  useJoinGroupMutation,
  useLeaveGroupMutation,
} = groupsApi
