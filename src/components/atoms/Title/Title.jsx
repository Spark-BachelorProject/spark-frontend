import React from 'react'
import { StyledTitle } from './Title.styles'

const Title = ({ children, isBig }) => {
  return <StyledTitle isBig={isBig}>{children}</StyledTitle>
}

export default Title
