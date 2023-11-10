import React from 'react'

import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

import { Wrapper } from './FormField.styles'

const FormField = (props) => {
  const { id, labelText, hasLabel = true, ...rest } = props
  return (
    <Wrapper>
      {hasLabel ? <Label htmlFor={id}>{labelText}</Label> : null}
      <Input {...rest} />
      {id === 'distance' ? <span>km</span> : null}
    </Wrapper>
  )
}

export default FormField
