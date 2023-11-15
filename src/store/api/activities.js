import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const activitiesApi = createApi({
  reducerPath: 'activitiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  endpoints: (builder) => ({
    getActivities: builder.query({
      query: () => 'activities',
    }),
    getRecommendedActivities: builder.query({
      query: () => 'activities/recommended',
    }),
  }),
})

export const { useGetActivitiesQuery, useGetRecommendedActivitiesQuery } = activitiesApi
