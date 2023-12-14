import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '../config'

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery(baseQueryConfig()),
  endpoints: (builder) => ({
    postFeedback: builder.mutation({
      query: (body) => ({
        url: 'feedback',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { usePostFeedbackMutation } = feedbackApi
