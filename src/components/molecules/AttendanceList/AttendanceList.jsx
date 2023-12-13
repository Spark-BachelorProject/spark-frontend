import Avvvatars from 'avvvatars-react'

import { getInitials } from '@/helpers/stringOperations'

import { AttendingCounter, StyledAvatar, StyledTitle, Wrapper } from './AttendanceList.styles'

const FOUR = 4

const AttendanceList = ({ participants }) => {
  if (participants.length === 0) {
    return <StyledTitle>Weź udział jako pierwszy!</StyledTitle>
  }

  const firstFourParticipants = participants.slice(0, FOUR)

  return (
    <Wrapper numOfParticipants={participants.length}>
      {firstFourParticipants.map(({ firstName, lastName, id }, index) => (
        <StyledAvatar key={id} index={index} numOfParticipants={participants.length}>
          <Avvvatars value={getInitials(firstName, lastName)} />
        </StyledAvatar>
      ))}
      {participants.length > FOUR && (
        <AttendingCounter maxNumOfParticipants={FOUR}>
          +{participants.length - FOUR}
        </AttendingCounter>
      )}
    </Wrapper>
  )
}

export default AttendanceList
