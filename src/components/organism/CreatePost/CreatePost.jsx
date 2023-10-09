import React, { useState } from 'react'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Title } from '@/components/atoms/Title/Title.styles'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'
import { dateNowYYYYMMDD, timeNow } from '@/helpers/dateAndTime.js'

import {
  Wrapper,
  HeaderWrapper,
  FooterWrapper,
  InputsWrapper,
  StyledInput1,
  StyledText,
  NextArrowIcon,
} from './CreatePost.styles.js'

//TODO: add map

const visibility = [
  {
    value: 'public',
    text: 'Public',
  },
  {
    value: 'onlyFriends',
    text: 'Tylko znajomi',
  },
  {
    value: 'group',
    text: 'Grupa',
  },
]

const activity = [
  {
    value: 'football',
    text: 'Piłka Nożna',
  },
  {
    value: 'volleyball',
    text: 'Siatkówka',
  },
  {
    value: 'squash',
    text: 'Squash',
  },
]

const places = [
  {
    value: 'Lublin',
    text: 'Lublin',
  },
  {
    value: 'Swidnik',
    text: 'Świdnik',
  },
  {
    value: 'Konopnica',
    text: 'Konopnica',
  },
]

const CreatePost = ({ handleClose }) => {
  const initialState = {
    title: '',
    visibilitySelect: visibility[0].value,
    activitySelect: activity[0].value,
    placesSelect: places[0].value,
  }

  const [date, setDate] = useState(dateNowYYYYMMDD)
  const [time, setTime] = useState(timeNow)

  const [state, setState] = useState(initialState)
  const [tags, setTags] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const finalData = {
      ...state,
      tags,
      date,
      time,
    }
    console.log('submit', finalData)
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <HeaderWrapper>
        <div>
          <Title isBig>Dodawanie postu</Title>
        </div>
        <XIcon onClick={handleClose} />
      </HeaderWrapper>
      <InputsWrapper>
        <StyledInput1
          style={{ gridArea: 'input1' }}
          placeholder="Tytuł spotkania"
          maxLength="120"
          name="title"
          value={state.title}
          onChange={handleChange}
          required
        />
        <Select
          style={{ gridArea: 'select1' }}
          name="visibilitySelect"
          id="visibilitySelect"
          value={state.visibilitySelect}
          onChange={handleChange}
        >
          {visibility}
        </Select>
        <Select
          style={{ gridArea: 'select2' }}
          name="activitySelect"
          id="activitySelect"
          value={state.activitySelect}
          onChange={handleChange}
        >
          {activity}
        </Select>

        <Select
          style={{ gridArea: 'select3' }}
          name="placesSelect"
          id="placesSelect"
          value={state.placesSelect}
          onChange={handleChange}
        >
          {places}
        </Select>
        <Input
          style={{ gridArea: 'input2' }}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={dateNowYYYYMMDD}
        />
        <Input
          style={{ gridArea: 'input3' }}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <div style={{ gridArea: 'map', backgroundColor: '#233045', borderRadius: '7px' }}></div>
      </InputsWrapper>
      <TagAutocomplete tags={tags} setTags={setTags} />
      <FooterWrapper>
        <StyledText as={'a'}>Wiecej szczegółów</StyledText>
        <Button>
          Dalej <NextArrowIcon />
        </Button>
      </FooterWrapper>
    </Wrapper>
  )
}

export default CreatePost
