import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const CounterWrapper = styled.div`
  position: relative;
`

export const CounterNumber = styled.span`
  position: absolute;
  top: ${({ hasCounter }) => (hasCounter ? '-14px' : '-11px')};
  right: ${({ hasCounter }) => (hasCounter ? '-5px' : '-1px')};

  /* top: -14px; */
  /* right: -5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ hasCounter }) => (hasCounter ? '15px' : '10px')};
  height: ${({ hasCounter }) => (hasCounter ? '15px' : '10px')};

  font-size: 7px;
  font-weight: 600;
  color: ${({ theme, hasCounter }) => (hasCounter ? theme.colors.white : 'rgba(0, 0, 0, 0)')};
  background-color: ${({ isRed, theme }) => (isRed ? theme.colors.redFont : theme.colors.accent)};

  border: 2px solid ${({ theme }) => theme.colors.counterBorder};
  border-radius: 50%;
  box-shadow: none;
`

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
