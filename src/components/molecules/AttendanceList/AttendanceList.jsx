import React from 'react'

import Avvvatars from 'avvvatars-react'

import { Title } from '@/components/atoms/Title/Title.styles'
import { getInitials } from '@/helpers/stringOperations'

import { AttendingCounter, StyledAvatar, Wrapper } from './AttendanceList.styles'

const AttendanceList = ({ participants }) => {
  console.log('participants', participants.length)

  if (participants.length === 0) {
    return <Title>Brak uczestników</Title>
  }
  return (
    <Wrapper numOfParticipants={participants.length}>
      {participants.map(({ firstName, lastName, id }, index) => (
        <StyledAvatar key={id} index={index} numOfParticipants={participants.length}>
          <Avvvatars value={getInitials(firstName, lastName)} />
        </StyledAvatar>
      ))}
      {participants.length > 3 && (
        <AttendingCounter numOfAttender={participants.length}>
          +{participants.length}
        </AttendingCounter>
      )}
    </Wrapper>
  )
}

export default AttendanceList
