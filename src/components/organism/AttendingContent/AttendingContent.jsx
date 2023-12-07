import React from 'react'

import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { getInitials } from '@/helpers/stringOperations'

import { Wrapper, StyledTitle } from './AttendingCounter.styles'

export const AttendingContent = ({ participants }) => {
  return (
    <Wrapper>
      {participants.length ? (
        <>
          <StyledTitle isBold>Wezmą udział</StyledTitle>
          {participants.map(({ firstName, lastName, id }) => (
            <PersonListItem
              key={id}
              firstName={firstName}
              lastName={lastName}
              initials={getInitials(firstName, lastName)}
            />
          ))}
        </>
      ) : (
        <StyledTitle isBold>Bądź pierwszym uczestnikiem!</StyledTitle>
      )}
    </Wrapper>
  )
}
