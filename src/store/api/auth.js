import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { baseQueryConfig } from '../config'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(baseQueryConfig(true)),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'auth/authenticate',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
