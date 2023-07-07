import React from 'react'

import { ReactComponent as AlertCircle } from '@/assets/icons/alert-circle.svg'

import { Input as StyledInput } from './Input.styles'

const Input = (props) => {
  return (
    <>
      <StyledInput {...props} />
      {props.isError && <AlertCircle />}
    </>
  )
}

export default Input
