import React from 'react'

import PropTypes from 'prop-types'

import UnauthenticatedFooter from '@/components/molecules/UnauthenticatedFooter/UnauthenticatedFooter'

import {
  ContentWrapper,
  LogoSubtitle,
  LogoTitle,
  LogoTitlesWrapper,
  Wrapper,
} from './UnauthenticatedContent.styles'

const UnauthenticatedContent = ({ children }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoTitlesWrapper>
          <LogoTitle>Spark</LogoTitle>
          <LogoSubtitle>Odkryj aktywne społeczności w Twoim mieście</LogoSubtitle>
        </LogoTitlesWrapper>
        {children}
      </ContentWrapper>
      <UnauthenticatedFooter />
    </Wrapper>
  )
}

UnauthenticatedContent.propTypes = {
  children: PropTypes.node,
}

export default UnauthenticatedContent
