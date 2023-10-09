import React from 'react'

import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'

import { Wrapper, StyledTitle } from './AttendingCounter.styles'

export const AttendingContent = () => {
  return (
    <Wrapper>
      <StyledTitle isBold>Wezmą udział</StyledTitle>
      <PersonListItem name="Daniel Lawson" />
      <PersonListItem name="Austin Williams" />
      <PersonListItem name="Brandon Hughes" />
      <PersonListItem name="Marvin Newman" />
      <PersonListItem name="Shawn Ortiz" />
      <PersonListItem name="Louise Weaver" />
    </Wrapper>
  )
}
