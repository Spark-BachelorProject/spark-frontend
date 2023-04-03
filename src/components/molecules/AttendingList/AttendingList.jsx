import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.style'
import React from 'react'
import { AttendingCounter, Wrapper } from './AttendingList.styles'
import { consecutiveNumbers } from '@/helpers/consecutiveNumbers'

const AttendingList = ({ numOfAttender }) => {
  return (
    <Wrapper numOfAttender={numOfAttender}>
      {consecutiveNumbers(numOfAttender).map((num, idx) => (
        <Thumbnail num={num} idx={idx} key={idx} />
      ))}
      <AttendingCounter numOfAttender={numOfAttender}>+3</AttendingCounter>
    </Wrapper>
  )
}

export default AttendingList
