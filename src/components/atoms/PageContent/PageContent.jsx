import React from 'react'
import { Wrapper, InnerWrapper } from './PageContent.style'

export const PageContent = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  )
}
