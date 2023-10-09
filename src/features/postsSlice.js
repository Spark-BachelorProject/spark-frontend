// Create a Redux store and reducers
import { createSlice } from '@reduxjs/toolkit'

import { dateNowYYYYMMDD, timeNow } from '@/helpers/dateAndTime'

const visibility = [
  {
    value: 'public',
    text: 'Public',
  },
  {
    value: 'onlyFriends',
    text: 'Tylko znajomi',
  },
  {
    value: 'group',
    text: 'Grupa',
  },
]

const activity = [
  {
    value: 'football',
    text: 'Piłka Nożna',
  },
  {
    value: 'volleyball',
    text: 'Siatkówka',
  },
  {
    value: 'squash',
    text: 'Squash',
  },
]

const places = [
  {
    value: 'Lublin',
    text: 'Lublin',
  },
  {
    value: 'Swidnik',
    text: 'Świdnik',
  },
  {
    value: 'Konopnica',
    text: 'Konopnica',
  },
]

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
