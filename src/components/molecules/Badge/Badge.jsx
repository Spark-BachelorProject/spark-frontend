import React from 'react'

import PropTypes from 'prop-types'

import { StyledButton } from './Badge.styles'

const Badge = (props) => {
  const { Icon, children } = props
  return (
    <StyledButton {...props}>
      <Icon />
    </StyledButton>
  )
}

Badge.propTypes = {
  Icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
    PropTypes.elementType,
    PropTypes.string,
  ]).isRequired,
}

export default Badge
