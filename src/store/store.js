import { configureStore } from '@reduxjs/toolkit'

import { postsApi } from '@/store/api/posts'
import postsReducer from '@/store/posts/postsSlice'
import themeReducer from '@/store/theme/themeSlice'

import { authApi } from './api/auth'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware).concat(authApi.middleware),
})
