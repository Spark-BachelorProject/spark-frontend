import React from 'react'

import { CounterWrapper, CounterNumber } from './Counter.styles'

export const Counter = ({ count, isRed, hasCounter }) => {
  return (
    <CounterWrapper>
      <CounterNumber isRed={isRed} hasCounter={hasCounter}>
        {count}
      </CounterNumber>
    </CounterWrapper>
  )
}
