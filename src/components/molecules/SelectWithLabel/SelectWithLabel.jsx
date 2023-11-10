import React from 'react'

import styled from 'styled-components'

import { Label } from '@/components/atoms/Label/Label.styles'
import Select from '@/components/atoms/Select/Select'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SelectWithLabel = (props) => {
  const { id, labelText, value, onChange, ...rest } = props
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Select id={id} value={value} onChange={onChange} {...rest} />
    </Wrapper>
  )
}

export default SelectWithLabel
