import React, { useState } from 'react'
import { ReactTags } from 'react-tag-autocomplete'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Title } from '@/components/atoms/Title/Title.styles'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'

import {
  Wrapper,
  HeaderWrapper,
  FooterWrapper,
  ProgressSpan,
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
  const [visibilitySelect, setVisibilitySelect] = useState(visibility[0].value)
  const [activitySelect, setActivitySelect] = useState(activity[0].value)
  const [placesSelect, setPlacesSelect] = useState(places[0].value)
  const [progress, setProgress] = useState(0)

  const visibilityHandle = (e) => {
    setVisibilitySelect(e.target.value)
  }
  const activityHandle = (e) => {
    setActivitySelect(e.target.value)
  }

  const placesHandle = (e) => {
    setPlacesSelect(e.target.value)
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <div>
          <Title isBig>Dodawanie postu</Title>
          <ProgressSpan>{progress}%</ProgressSpan>
        </div>
        <XIcon onClick={handleClose} />
      </HeaderWrapper>
      <InputsWrapper>
        <StyledInput1
          style={{ gridArea: 'input1' }}
          placeholder="Tytuł spotkania"
          maxLength="120"
        />
        <Select
          style={{ gridArea: 'select1' }}
          name="visibilitySelect"
          id="visibilitySelect"
          value={visibilitySelect}
          onChange={visibilityHandle}
        >
          {visibility}
        </Select>
        <Select
          style={{ gridArea: 'select2' }}
          name="activitySelect"
          id="activitySelect"
          value={activitySelect}
          onChange={activityHandle}
        >
          {activity}
        </Select>

        <Select
          style={{ gridArea: 'select3' }}
          name="placesSelect"
          id="placesSelect"
          value={placesSelect}
          onChange={placesHandle}
        >
          {places}
        </Select>
        <Input style={{ gridArea: 'input2' }} type="date" />
        <Input style={{ gridArea: 'input3' }} type="time" />
        <div style={{ gridArea: 'map', backgroundColor: '#233045', borderRadius: '7px' }}></div>
      </InputsWrapper>
      <TagAutocomplete />
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
