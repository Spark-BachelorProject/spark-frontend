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

//generate form me some posts
const initialState = [
  {
    id: 1,
    content: 'I am a post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-01',
    time: '12:00',
    tags: ['tag1', 'tag2'],
    author: 'user1',
    place: 'place1',
  },
  {
    id: 2,
    content: 'I am another post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-02',
    time: '13:00',
    tags: ['tag1', 'tag3'],
    author: 'user2',
    place: 'place2',
  },
  {
    id: 3,
    content: 'I am a third post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-03',
    time: '14:00',
    tags: ['tag2', 'tag4'],
    author: 'user3',
    place: 'place3',
  },
  {
    id: 4,
    content: 'I am a fourth post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-04',
    time: '15:00',
    tags: ['tag3', 'tag4'],
    author: 'user1',
    place: 'place4',
  },
]

// Create a slice for your post data
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
