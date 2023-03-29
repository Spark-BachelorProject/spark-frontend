import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import React from 'react'
import { Wrapper } from './FormField.styles'

const FormField = ({ id, type, labelText, isBiggerThanZero, placeholder }) => {
  return (
    <Wrapper isCheckbox={type === 'checkbox'}>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        type={type}
        id={id}
        isCheckbox={type === 'checkbox'}
        min={isBiggerThanZero && 0}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default FormField
