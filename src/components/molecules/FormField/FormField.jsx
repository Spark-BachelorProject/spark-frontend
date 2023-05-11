import React from 'react'
import { useState } from 'react'

import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

import { Wrapper } from './FormField.styles'

const FormField = ({ id, type, labelText, isBiggerThanZero, placeholder, hasLabel = true }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Wrapper>
      {hasLabel ? <Label htmlFor={id}>{labelText}</Label> : null}
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
