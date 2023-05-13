import React from 'react'

import { DekstopNavigationBar } from '@/components/organism/DekstopNavigationBar/DekstopNavigationBar'
import { DekstopRightBar } from '@/components/organism/DekstopRightBar/DekstopRightBar'

import { Wrapper, InnerWrapper } from './PageContent.styles'

export const PageContent = ({ children, hasNavigation, hasRightBar, className }) => {
  return (
    <Wrapper className={className}>
      {hasNavigation ? <DekstopNavigationBar /> : null}
      <InnerWrapper>{children}</InnerWrapper>
      {hasRightBar ? <DekstopRightBar /> : null}
    </Wrapper>
  )
}
