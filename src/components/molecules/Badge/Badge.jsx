import React from 'react'

import PropTypes from 'prop-types'

import { StyledButton } from './Badge.styles'

const Badge = React.forwardRef((props, ref) => {
  const { Icon } = props
  return (
    <StyledButton {...props} ref={ref}>
      <Icon />
    </StyledButton>
  )
})

Badge.propTypes = {
  Icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
    PropTypes.elementType,
    PropTypes.string,
  ]).isRequired,
}

export default Badge
