import React from 'react'

import { Wrapper, CounterWrapper, CounterNumber } from './Counter.style'

export const Counter = ({ count, isRed, hasCounter }) => {
  return (
    <Wrapper>
      <CounterWrapper>
        {count > 0 && (
          <CounterNumber isRed={isRed} hasCounter={hasCounter}>
            {count}
          </CounterNumber>
        )}
      </CounterWrapper>
    </Wrapper>
  )
}
