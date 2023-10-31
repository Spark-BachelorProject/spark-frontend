import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1/auth',
  }),
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
