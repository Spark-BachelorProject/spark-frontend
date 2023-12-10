import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../Buttons/Button.styles'
import { StyledTags } from './Tags.styles'

const Tags = ({ children, className }) => {
  return (
    <StyledTags className={className}>
      {children.map((tag, i) => (
        <Button key={i}>{tag.name}</Button>
      ))}
    </StyledTags>
  )
}

Tags.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
}

export default Tags
