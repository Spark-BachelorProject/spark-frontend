import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import React from 'react'
import { Wrapper } from './FormField.styles'
import { useState } from 'react'

const FormField = ({ id, type, labelText, isBiggerThanZero, placeholder }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        type={type}
        id={id}
        min={isBiggerThanZero && 0}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {id === 'distance' ? <span>km</span> : null}
    </Wrapper>
  )
}

export default FormField
