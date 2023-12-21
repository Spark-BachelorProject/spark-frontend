import { forwardRef } from 'react'

import { ReactComponent as AlertCircle } from '@/assets/icons/alert-circle.svg'
import { Error } from '@/components/atoms/Error/Error.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

import { InputWrapper, Wrapper } from './InputWithLabel.styles'

// This component works properly only with react-hook-form
const InputWithLabel = forwardRef((props, ref) => {
  const { id, labelText, type, placeholder, error, style, className, ...rest } = props
  return (
    <Wrapper style={style} ref={ref} className={className}>
      <Label htmlFor={id}>{labelText}</Label>
      <InputWrapper>
        <Input type={type || 'text'} id={id} placeholder={placeholder} error={!!error} {...rest} />
        {!!error && <AlertCircle />}
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
})

export default InputWithLabel
