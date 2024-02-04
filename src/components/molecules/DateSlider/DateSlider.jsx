import { useState } from 'react'

import 'rc-slider/assets/index.css'

import { StyledSlider, Wrapper } from './DateSlider.styles'

export const DateSlider = () => {
  //THIS
  const hours = [24, 4, 8, 12, 16, 20]
  const days = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd']

  const now = new Date()
  const currentHour = now.getHours()
  const nextHourIndex = hours.findIndex((hour) => hour > currentHour)
  const nextHour = hours[nextHourIndex]

  const marks = {}
  for (let i = 0; i < hours.length * 2; i++) {
    const hour = hours[i % hours.length]
    const day = days[Math.floor((now.getDay() + Math.floor(i / hours.length)) % 7)]
    const markKey = nextHour + 4 * i
    marks[markKey] = hour === 24 ? day : hour
  }

  // Ensure the last mark is always 24 of the last day
  const lastMarkKey = nextHour + 4 * hours.length * 2
  marks[lastMarkKey] = days[(now.getDay() + 2) % 7]

  const [value, setValue] = useState([currentHour, nextHour])

  console.log('value', value)

  return (
    <Wrapper>
      <StyledSlider
        range
        step={marks}
        min={currentHour}
        max={lastMarkKey}
        marks={marks}
        value={value}
        onChange={setValue}
      />
    </Wrapper>
  )
}
