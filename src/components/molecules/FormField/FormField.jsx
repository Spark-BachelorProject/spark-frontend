import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import React from 'react'
import { Wrapper } from './FormField.styles'
import { useState } from 'react'

const FormField = ({ id, type, labelText, isBiggerThanZero, placeholder }) => {
  const [value, setValue] = useState('')

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which
    const keyValue = String.fromCharCode(keyCode)
    const regex = /^[0-9\b]+$/ // allow only numbers and backspace

    if (!regex.test(keyValue)) {
      event.preventDefault()
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Wrapper isCheckbox={type === 'checkbox'}>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        type={type}
        id={id}
        isCheckbox={type === 'checkbox'}
        min={isBiggerThanZero && 0}
        placeholder={placeholder}
        value={value}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      {id === 'distance' ? <input type="text" id="kmLabel" value="km" disabled /> : ''}
    </Wrapper>
  )
}

export default FormField
