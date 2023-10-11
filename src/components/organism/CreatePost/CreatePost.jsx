import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Title } from '@/components/atoms/Title/Title.styles'
import CreatePostMap from '@/components/molecules/CreatePostMap/CreatePostMap.jsx'
import PlaceAutocomplete from '@/components/molecules/PlaceAutocomplete/PlaceAutocomplete.jsx'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'
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

const initialState = {
  content: '',
  visibility: visibility[0].value,
  activity: activity[0].value,
  place: places[0].value,
}

const CreatePost = ({ handleClose }) => {
  const dispatch = useDispatch()

  const [date, setDate] = useState(dateNowYYYYMMDD)
  const [time, setTime] = useState(timeNow)

  const [state, setState] = useState(initialState)
  const [tags, setTags] = useState([])

  const [selectedCoordinates, setSelectedCoordinates] = useState({
    lat: null,
    lng: null,
  })

  const handleSelectCoordinates = (coordinates) => {
    setSelectedCoordinates(coordinates)
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
          min={isToday(date) ? timeNow : '00:00'}
          onChange={(e) => setTime(e.target.value)}
        />
        <div
          style={{
            gridArea: 'map',
            backgroundColor: 'transparent',
            borderRadius: '7px',
            border: '1px solid #E2E8F0',
          }}
        ></div>
      </InputsWrapper>
      <TagAutocomplete tags={tags} setTags={setTags} />
      <PlaceAutocomplete onSelectCoordinates={handleSelectCoordinates} />
      {selectedCoordinates.lat && selectedCoordinates.lng && (
        <CreatePostMap lat={selectedCoordinates.lat} lng={selectedCoordinates.lng} />
      )}

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
