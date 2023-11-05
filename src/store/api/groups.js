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
  }),
})

export const { useGetGroupsQuery } = groupsApi
