import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '@/features/postsSlice'
import themeReducer from '@/features/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
  },
})
