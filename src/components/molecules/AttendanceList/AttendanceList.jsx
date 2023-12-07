import React from 'react'

import Avvvatars from 'avvvatars-react'

import { Title } from '@/components/atoms/Title/Title.styles'
import { getInitials } from '@/helpers/stringOperations'

import { AttendingCounter, StyledAvatar, Wrapper } from './AttendanceList.styles'

const FOUR = 4

const AttendanceList = ({ participants }) => {
  if (participants.length === 0) {
    return <Title>Brak uczestników</Title>
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
