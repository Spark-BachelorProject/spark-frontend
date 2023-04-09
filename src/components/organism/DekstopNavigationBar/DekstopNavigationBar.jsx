import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;

  //this is done so its able to be displayed in full width ->  width of the post  (684px) + navbar width (330px)
  @media screen and (max-width: 1028px) {
    display: none;
  }
`

export const DekstopNavigationBar = () => {
  return <Wrapper></Wrapper>
}
