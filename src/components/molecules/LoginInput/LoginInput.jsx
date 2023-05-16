import React from 'react'

import { ReactComponent as AlertCircle } from '@/assets/icons/alert-circle.svg'
import { Error } from '@/components/atoms/Error/Error.styles'
import { Input } from '@/components/atoms/Input/Input.styles'

import { InputWrapper } from './LoginInput.styles'

const LoginInput = React.forwardRef((props, ref) => {
  const { error } = props
  return (
    <>
      {error && <Error>{error}</Error>}
      <InputWrapper ref={ref}>
        <Input {...props} />
        {!!error && <AlertCircle />}
      </InputWrapper>
    </>
  )
})

export default LoginInput
