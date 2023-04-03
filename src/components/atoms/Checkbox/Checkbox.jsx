import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Label } from '../Label/Label.styles'

export const Wrapper = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  width: 90%;
`

export const CustomCheckbox = styled.label`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 17px;
    height: 17px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.checkboxBorder};
    background-color: ${({ theme }) => theme.colors.checkboxBg};
    outline: none;
    cursor: pointer;
    position: relative;
  }

  input.checked {
    background-color: ${({ theme }) => theme.colors.checkboxBg};
    position: relative;
    transition: 0.1s linear;
  }

  input.checked::before {
    content: '\\2713';
    font-size: 10px;
    width: 17px;
    height: 17px;
    color: ${({ theme }) => theme.colors.checkboxTick};
    position: absolute;
    left: 80%;
    top: 64%;
    transform: translate(-50%, -50%);
    transition: 0.1s linear;
  }
`

export const Checkbox = ({ label, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked)
  return (
    <Wrapper>
      <Label>{label}</Label>
      <CustomCheckbox>
        <input
          className={isChecked ? 'checked' : ''}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
        />
      </CustomCheckbox>
    </Wrapper>
  )
}
