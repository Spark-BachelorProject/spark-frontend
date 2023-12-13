import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '@/store/config'

export const activitiesApi = createApi({
  reducerPath: 'activitiesApi',
  baseQuery: fetchBaseQuery(baseQueryConfig()),
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
