import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Badge.styles'

const Badge = ({ children, Icon }) => {
  return (
    <StyledButton>
      <Icon />
      {children}
    </StyledButton>
  )
}

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  Icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
    PropTypes.elementType,
    PropTypes.string,
  ]).isRequired,
}

export default Badge
