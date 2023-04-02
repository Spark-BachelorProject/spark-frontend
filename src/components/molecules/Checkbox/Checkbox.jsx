import React, { useState } from 'react'
import { CheckboxBackground, CheckboxCheckmark, CheckboxInput, Wrapper } from './Checkbox.style'
import { Label } from '../../atoms/Label/Label.styles'

const Checkbox = ({ label, checked = false, onChange, id }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = (e) => {
    const { checked } = e.target
    setIsChecked(checked)
    if (onChange) {
      onChange(checked)
    }
  }

  return (
    <Wrapper tabIndex="0" htmlFor={id}>
      <CheckboxInput type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <Label as="span">{label}</Label>
      <CheckboxBackground checked={isChecked} id={id}>
        <CheckboxCheckmark checked={isChecked} />
      </CheckboxBackground>
    </Wrapper>
  )
}

export default Checkbox
