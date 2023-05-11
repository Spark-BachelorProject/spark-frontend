import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100vh - 70px * 2);
  display: flex;
  align-items: center;
  justify-content: center;
`

const UnauthenticatedContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

UnauthenticatedContent.propTypes = {}

export default UnauthenticatedContent
