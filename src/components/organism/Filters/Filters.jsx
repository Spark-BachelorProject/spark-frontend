import Checkbox from '@/components/atoms/Checkbox/Checkbox'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import FormField from '@/components/molecules/FormField/FormField'
import React from 'react'
import { InputWrapper, TimeFromToWrapper, Wrapper } from './Filters.styles'

const Filters = () => {
  const today = new Date().toISOString().split('T')[0]
  return (
    <Wrapper>
      <TimeFromToWrapper>
        <Label htmlFor="hours1">Godziny</Label>
        <InputWrapper>
          <Input type="time" id="hours1" />
          <span> - </span>
          <Input type="time" id="hours2" />
        </InputWrapper>
      </TimeFromToWrapper>

      <FormField id={'date'} type={'date'} min={today} labelText={'Data'} />
      <FormField
        id={'distance'}
        type={'number'}
        labelText={'Odległość'}
        placeholder="3 km"
        isBiggerThanZero
      />
      <Checkbox id={'friendsOnly'} label={'Tylko posty znajomych'} />
      <Checkbox id={'freeOnly'} label={'Tylko darmowe'} />
    </Wrapper>
  )
}

export default Filters
