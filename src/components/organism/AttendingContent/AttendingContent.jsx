import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { getInitials } from '@/helpers/stringOperations'

import { StyledTitle, Wrapper } from './AttendingCounter.styles'

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
        <StyledTitle isBold>Weź udział jako pierwszy, przygoda czeka!</StyledTitle>
      )}
    </Wrapper>
  )
}
