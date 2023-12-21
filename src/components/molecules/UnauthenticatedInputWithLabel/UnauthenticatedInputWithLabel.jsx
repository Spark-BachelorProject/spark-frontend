import React, { forwardRef } from 'react'

import { StyledInputWithLabel } from './UnauthenticatedInputWithLabel.styles'

const UnauthenticatedInputWithLabel = forwardRef((props, ref) => {
  return <StyledInputWithLabel {...props} ref={ref} />
})

export default UnauthenticatedInputWithLabel
