import React, { useState } from 'react'
import styled from 'styled-components'

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 25px 0 0 0;
`

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
`

const CheckboxBackground = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.checked ? '#2196f3' : `${({ theme }) => theme.colors.checkboxBg}`};

  border: 1.5px solid ${({ theme }) => theme.colors.checkboxBorder};
  border-radius: 4px;
  transition: 100ms linear;
`

const CheckboxCheckmark = styled.span`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(+45deg);
  width: 6px;
  height: 11px;

  border-bottom: ${(props) =>
    props.checked ? '2px solid white' : `1px solid ${({ theme }) => theme.colors.inputBg}`};

  border-right: ${(props) =>
    props.checked ? '2px solid white' : `1px solid ${({ theme }) => theme.colors.inputBg}`};
`

const CheckboxLabel = styled.span`
  color: ${({ theme }) => theme.colors.labelFont};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
`

const Checkbox = ({ label, checked, onChange, id }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = (event) => {
    const { checked } = event.target
    setIsChecked(checked)
    if (onChange) {
      onChange(checked)
    }
  }

  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <CheckboxLabel>{label}</CheckboxLabel>
      <CheckboxBackground checked={isChecked} id={id}>
        <CheckboxCheckmark checked={isChecked} />
      </CheckboxBackground>
    </CheckboxWrapper>
  )
}

export default Checkbox
