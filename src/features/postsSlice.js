import { createSlice } from '@reduxjs/toolkit'

/**
 * {
    content: '',
    visibilitySelect: visibility[0].value,
    activitySelect: activity[0].value,
    placesSelect: places[0].value,
    date: dateNowYYYYMMDD,
    time: timeNow,
    tags: [],
  }
 */

// Create a slice for your post data
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
