import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  align-items: ${({ isCheckbox }) => (isCheckbox ? 'center' : 'flex-start')};
  justify-content: space-between;
  flex-direction: ${({ isCheckbox }) => (isCheckbox ? 'row' : 'column')};

  ${Label} {
    margin: 5px 0;
  }
  ${Input} {
    max-width: ${({ isCheckbox }) => (isCheckbox ? '20px' : 'auto')};
    padding: ${({ isCheckbox }) => (isCheckbox ? '10px' : 'auto')};
  }
`

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
