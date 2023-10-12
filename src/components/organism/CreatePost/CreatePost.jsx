import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Title } from '@/components/atoms/Title/Title.styles'
import PlaceAutocomplete from '@/components/molecules/PlaceAutocomplete/PlaceAutocomplete.jsx'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'
import { cities } from '@/components/pages/Map/data.jsx'
import { addPost } from '@/features/postsSlice.js'
import { dateNowYYYYMMDD, isToday, timeNow } from '@/helpers/dateAndTime.js'

import {
  FooterWrapper,
  HeaderWrapper,
  InputsWrapper,
  NextArrowIcon,
  StyledInput1,
  StyledText,
  Wrapper,
} from './CreatePost.styles.js'

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
    value: 'Piłka Nożna',
    text: 'Piłka Nożna',
  },
  {
    value: 'Siatkówka',
    text: 'Siatkówka',
  },
  {
    value: 'Squash',
    text: 'Squash',
  },
]

const initialState = {
  content: '',
  visibility: visibility[0].value,
  activity: activity[0].value,
  // place: places[0].value,
}

const CreatePost = ({ handleClose }) => {
  const dispatch = useDispatch()

  const [date, setDate] = useState(dateNowYYYYMMDD)
  const [time, setTime] = useState(timeNow)

  const [state, setState] = useState(initialState)
  const [tags, setTags] = useState([])

  const [selectedCoordinates, setSelectedCoordinates] = useState({
    lat: cities[0].cordinates.lat,
    lng: cities[0].cordinates.lng,
  })

  const [selectedPlace, setSelectedPlace] = useState(null)

  const handleSelectCoordinates = (coordinates) => {
    setSelectedCoordinates(coordinates)
  }

  const handleSelectPlace = (place) => {
    setSelectedPlace(place)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const tagsOnlyLables = tags.map((tag) => tag.value)

    const finalData = {
      ...state,
      tags: tagsOnlyLables,
      date,
      time,
      place: selectedPlace,
    }

    dispatch(addPost(finalData))

    handleClose()
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
          name="content"
          value={state.content}
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

        <div style={{ gridArea: 'input2' }}>
          <PlaceAutocomplete
            onSelectCoordinates={handleSelectCoordinates}
            onSelectPlace={handleSelectPlace}
          />
        </div>

        <Input
          style={{ gridArea: 'input3' }}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={dateNowYYYYMMDD}
        />
        <Input
          style={{ gridArea: 'input4' }}
          type="time"
          value={time}
          min={isToday(date) ? timeNow : '00:00'}
          onChange={(e) => setTime(e.target.value)}
        />

        <div
          style={{
            gridArea: 'map',
            backgroundColor: '#233045',
          }}
        >
          {/* <CreatePostMap
            lat={selectedCoordinates.lat}
            lng={selectedCoordinates.lng}
            selectedPlace={selectedPlace}
          /> */}
        </div>
        <div style={{ gridArea: 'tags' }}>
          <TagAutocomplete tags={tags} setTags={setTags} />
        </div>
      </InputsWrapper>

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
