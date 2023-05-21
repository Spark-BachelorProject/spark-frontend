import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../Button/Button.styles'
import { StyledTags } from './Tags.styles'

const Tags = ({ children, className }) => {
  return (
    <StyledTags className={className}>
      {children.map((tag, i) => (
        <Button key={i}>{tag}</Button>
      ))}
    </StyledTags>
  )
}

Tags.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
}

export default Tags
