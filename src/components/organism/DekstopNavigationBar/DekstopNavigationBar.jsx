import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 250px;
  height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.m}) {
    display: none;
  }
`

export const DekstopNavigationBar = () => {
  return <Wrapper>:)</Wrapper>
}
