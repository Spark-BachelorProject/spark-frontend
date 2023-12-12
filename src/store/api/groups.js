import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
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
    getGroupsRecommended: builder.query({
      query: () => 'groups/recommended',
      providesTags: ['Groups'],
    }),
  }),
})

export const {
  useGetGroupsQuery,
  useAddGroupMutation,
  useGetOneGroupQuery,
  useGetGroupsRecommendedQuery,
} = groupsApi
