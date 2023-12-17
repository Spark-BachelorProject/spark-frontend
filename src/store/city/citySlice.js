import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
  name: 'city',
  initialState: { selectedCity: localStorage.getItem('city') || '' },
  reducers: {
    setCity: (state, action) => {
      state.selectedCity = action.payload
      localStorage.setItem('city', action.payload)
    },
  },
})

export const { setCity } = citySlice.actions
export const selectCity = (state) => state.city.selectedCity
export default citySlice.reducer
