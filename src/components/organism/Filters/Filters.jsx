import { useState } from 'react'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Error } from '@/components/atoms/Error/Error.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import FormField from '@/components/molecules/FormField/FormField'
import { dateNowYYYYMMDD, timeNow } from '@/helpers/dateAndTime'

import { ButtonsWrapper, InputWrapper, TimeFromToWrapper, Wrapper } from './Filters.styles'

const Filters = ({ handleClose, setFilterOptions }) => {
  const hourEnd = new Date();
  hourEnd.setHours(hourEnd.getHours() + 2);
  const formattedHourEnd = hourEnd.toISOString().substr(11, 5);



  const [state, setState] = useState({
    hourStart: timeNow,
    hourEnd: formattedHourEnd,
    date: dateNowYYYYMMDD,
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    if (
      (name === 'hourStart' && value >= state.hourEnd) ||
      (name === 'hourEnd' && value <= state.hourStart)
    ) {
      setError('Czas rozpoczenia nie może być później niż zakończenia')
    } else {
      setError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (state.hourStart >= state.hourEnd) {
      setError('Czas rozpoczenia nie może być później niż zakończenia')
      return
    } else {
      setError('')
    }

    const start = `${state.date}T${state.hourStart}`
    const end = `${state.date}T${state.hourEnd}`

    setFilterOptions((prev) => ({
      ...prev,
      start,
      end,
    }))

    handleClose()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <TimeFromToWrapper>
        <Label htmlFor="hourStart">W godzinach</Label>
        <InputWrapper>
          <Input
            type="time"
            name="hourStart"
            aria-label="hour-start"
            id="hourStart"
            value={state.hourStart}
            onChange={handleChange}
          />
          <span> - </span>
          <Input
            type="time"
            name="hourEnd"
            aria-label="hour-end"
            id="hourEnd"
            value={state.hourEnd}
            onChange={handleChange}
          />
        </InputWrapper>
      </TimeFromToWrapper>

      <FormField
        value={state.date}
        onChange={handleChange}
        id="date"
        type="date"
        name="date"
        labelText={'Data'}
      />
      {/* <InputWithLabel
        value={state.date}
        isCustomOnChange
        id="date"
        type="date"
        name="date"
        labelText={'Data'}
      /> */}
      {/* <FormField
        id={'distance'}
        type={'number'}
        labelText={'W odległości'}
        placeholder="3"
        isBiggerThanZero
      /> */}
      {/* <CheckboxField labelText={'Tylko posty znajomych'} id={'onlyFriends'} /> */}
      {/* <CheckboxField labelText={'Tylko darmowe'} id={'onlyFree'} /> */}
      {error && <Error>{error}</Error>}
      <ButtonsWrapper>
        <Button isGray isBig onClick={handleClose}>
          Anuluj
        </Button>
        <Button isBig type="submit">Zapisz</Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default Filters
