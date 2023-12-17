import { configureStore } from '@reduxjs/toolkit'

import { postsApi } from '@/store/api/posts'
import cityReducer from '@/store/city/citySlice'
import postsReducer from '@/store/posts/postsSlice'
import themeReducer from '@/store/theme/themeSlice'

import { activitiesApi } from './api/activities'
import { authApi } from './api/auth'
import { citiesApi } from './api/cities'
import { commentsApi } from './api/comments'
import { feedbackApi } from './api/feedback'
import { groupsApi } from './api/groups'
import { tagsApi } from './api/tags'
import { userApi } from './api/user'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    city: cityReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [activitiesApi.reducerPath]: activitiesApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      authApi.middleware,
      activitiesApi.middleware,
      commentsApi.middleware,
      tagsApi.middleware,
      userApi.middleware,
      groupsApi.middleware,
      citiesApi.middleware,
      feedbackApi.middleware
    ),
})
