import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '@/store/config'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'authenticate',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
