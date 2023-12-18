import React, { forwardRef } from 'react'

import { Label } from '@/components/atoms/Label/Label.styles'
import Select from '@/components/atoms/Select/Select'

import { Wrapper } from './SelectWithLabel.styles'

const SelectWithLabel = forwardRef((props, ref) => {
  const { id, labelText, value, onChange, style, ...rest } = props
  return (
    <Wrapper ref={ref} style={style}>
      <Label htmlFor={id}>{labelText}</Label>
      <Select id={id} value={value} onChange={onChange} {...rest} />
    </Wrapper>
  )
})

export default SelectWithLabel
