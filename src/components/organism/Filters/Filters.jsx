import React, { useState } from 'react'

import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import CheckboxField from '@/components/molecules/CheckboxField/CheckboxField'
import FormField from '@/components/molecules/FormField/FormField'
import { timeNow } from '@/helpers/dateAndTime'

import { InputWrapper, TimeFromToWrapper, Wrapper } from './Filters.styles'

const Filters = () => {
  const [time1, setTime1] = useState(timeNow)
  const [time2, setTime2] = useState(timeNow)

  return (
    <Wrapper>
      <TimeFromToWrapper>
        <Label htmlFor="hours1">W godzinach</Label>
        <InputWrapper>
          <Input type="time" id="hours1" value={time1} onChange={(e) => setTime1(e.target.value)} />
          <span> - </span>
          <Input type="time" id="hours2" value={time2} onChange={(e) => setTime2(e.target.value)} />
        </InputWrapper>
      </TimeFromToWrapper>

      <FormField id={'date'} type={'date'} labelText={'Data'} />
      <FormField
        id={'distance'}
        type={'number'}
        labelText={'W odległości'}
        placeholder="3"
        isBiggerThanZero
      />
      {/* <CheckboxField labelText={'Tylko posty znajomych'} id={'onlyFriends'} /> */}
      {/* <CheckboxField labelText={'Tylko darmowe'} id={'onlyFree'} /> */}
    </Wrapper>
  )
}

export default Filters
