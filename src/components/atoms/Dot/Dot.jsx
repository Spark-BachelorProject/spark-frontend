import React from 'react'

import PropTypes from 'prop-types'

import { StyledDot } from './Dot.styles'

const Dot = ({ className }) => {
  return <StyledDot className={className}>•</StyledDot>
}

Dot.propTypes = {
  className: PropTypes.string,
}

export default Dot
