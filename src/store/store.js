import { configureStore } from '@reduxjs/toolkit'

import { postsApi } from '@/store/api/posts'
import postsReducer from '@/store/posts/postsSlice'
import themeReducer from '@/store/theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})
