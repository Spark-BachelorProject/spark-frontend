//TODO: change the name as I didn't bother to came up with a good one
import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 250px;
  height: 100vh;
  position: fixed;
  opacity: 0.5;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: none;
  }
`

export const DesktopRightBar = () => {
  return <Wrapper>:)</Wrapper>
}
