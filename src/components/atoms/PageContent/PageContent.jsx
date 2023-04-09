import React from 'react'
import { Wrapper, InnerWrapper } from './PageContent.style'
import { DekstopNavigationBar } from '@/components/organism/DekstopNavigationBar/DekstopNavigationBar'
import { DekstopRightBar } from '@/components/organism/DekstopRightBar/DekstopRightBar'

export const PageContent = ({ children }) => {
  return (
    <Wrapper>
      <DekstopNavigationBar />
      <InnerWrapper>{children}</InnerWrapper>
      <DekstopRightBar />
    </Wrapper>
  )
}
