import React from 'react'

import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'

import { Wrapper, StyledTitle } from './AttendingCounter.styles'

export const AttendingContent = () => {
  return (
    <Wrapper>
      <StyledTitle isBold>Wezmą udział</StyledTitle>
      <PersonListItem name="Andrzej Kowal" />
      <PersonListItem name="Andrzej Kowal" />
      <PersonListItem name="Andrzej Kowal" />
      <PersonListItem name="Andrzej Kowal" />
      <PersonListItem name="Andrzej Kowal" />
      <PersonListItem name="Andrzej Kowal" />
      <PersonListItem name="Andrzej Kowal" />
    </Wrapper>
  )
}
