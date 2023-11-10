import React from 'react'

import styled from 'styled-components'

import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const InputWithLabel = (props) => {
  const { id, labelText, type, placeholder, value, onChange, error, style, ...rest } = props
  return (
    <Wrapper style={style}>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        type={type || 'text'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </Wrapper>
  )
}

export default InputWithLabel
