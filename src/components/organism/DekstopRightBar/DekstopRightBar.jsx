import React from 'react'
import { Wrapper } from './DekstopRightBar.style'
import styled from 'styled-components'

export const Container = styled.div`
  height: 220px;
  width: auto;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`

export const SmallContainer = styled(Container)`
  height: 180px;
`

export const HighContainer = styled(Container)`
  height: 287px;
`

export const DekstopRightBar = () => {
  return (
    <Wrapper>
      <Container />
      <SmallContainer />
      <HighContainer />
    </Wrapper>
  )
}
