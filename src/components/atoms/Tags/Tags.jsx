import React from 'react'
import { Button } from '../Button/Button.styles'
import { StyledTags } from './Tags.styles'

const Tags = ({ children }) => {
  return (
    <StyledTags>
      {children.map((tag, i) => (
        <Button key={i}>{tag}</Button>
      ))}
    </StyledTags>
  )
}

export default Tags
