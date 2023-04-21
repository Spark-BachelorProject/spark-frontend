import React from 'react'
import { Wrapper, InnerWrapper } from './PageContent.styles'
import { DekstopNavigationBar } from '@/components/organism/DekstopNavigationBar/DekstopNavigationBar'

import { DekstopRightBar } from '@/components/organism/DekstopRightBar/DekstopRightBar'

export const PageContent = ({ children, hasNavigation, hasRightBar }) => {
  return (
    <Wrapper>
      {hasNavigation ? <DekstopNavigationBar /> : null}
      <InnerWrapper>{children}</InnerWrapper>
      {hasRightBar ? <DekstopRightBar /> : null}
    </Wrapper>
  )
}
