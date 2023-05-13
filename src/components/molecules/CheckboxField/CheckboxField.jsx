import React from 'react'
import { useState } from 'react'

import { Checkbox } from '@/components/atoms/Checkbox/Checkbox.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

import { Wrapper } from './CheckboxField.styles'

const CheckboxField = ({ labelText, checked = false, id, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsChecked((prev) => !prev)
    }
  }

  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        onKeyDown={handleKeyDown}
        id={id}
        {...props}
      />
    </Wrapper>
  )
}

export default CheckboxField
