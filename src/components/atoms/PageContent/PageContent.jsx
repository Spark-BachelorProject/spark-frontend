import React from 'react'
import { Wrapper, InnerWrapper } from './PageContent.style'
import { DekstopNavigationBar } from '@/components/organism/DekstopNavigationBar/DekstopNavigationBar'
import styled from 'styled-components'

export const DesktopRightBar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: none;
  }
`

export const PageContent = ({ children }) => {
  return (
    <Wrapper>
      <DekstopNavigationBar />
      <InnerWrapper>{children}</InnerWrapper>
      <DesktopRightBar />
    </Wrapper>
  )
}
