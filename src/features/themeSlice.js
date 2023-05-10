import { createSlice } from '@reduxjs/toolkit'

const initialState = { theme: localStorage.getItem('theme') || 'light' }

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)
      state.theme = newTheme
    },
  },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer
