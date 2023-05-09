import React from 'react'

import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { consecutiveNumbers } from '@/helpers/consecutiveNumbers'

import { AttendingCounter, Wrapper } from './AttendanceList.styles'

// in the future we will pass array people
const AttendanceList = ({ numOfAttender }) => {
  return (
    <Wrapper numOfAttender={numOfAttender}>
      {consecutiveNumbers(numOfAttender).map((num, idx) => (
        <Thumbnail num={num} idx={idx} key={idx} />
      ))}
      <AttendingCounter numOfAttender={numOfAttender}>+3</AttendingCounter>
    </Wrapper>
  )
}

export default AttendanceList
