import { useEffect, useState } from 'react'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Title } from '@/components/atoms/Title/Title.styles'
import CreatePostMap from '@/components/molecules/CreatePostMap/CreatePostMap.jsx'
import PlaceAutocomplete from '@/components/molecules/PlaceAutocomplete/PlaceAutocomplete.jsx'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'
import { cities } from '@/components/pages/Map/data.jsx'
import {
  dateNowYYYYMMDD,
  formatTimeAndDate,
  getCurrentTimeISOString,
  getShiftedTime,
  isToday,
  timeNow,
} from '@/helpers/dateAndTime.js'
import { useGetActivitiesQuery } from '@/store/api/activities.js'
import { useAddPostMutation } from '@/store/api/posts'
import { useGetTagsQuery } from '@/store/api/tags.js'
import { useGetUserQuery } from '@/store/api/user.js'

import {
  FooterWrapper,
  HeaderWrapper,
  InputsWrapper,
  NextArrowIcon,
  StyledInput1,
  StyledText,
  Wrapper,
} from './CreatePost.styles.js'

const PRIVACYSETTINGS = [
  {
    value: 'PUBLIC',
    text: 'Publiczny',
  },
  {
    value: 'PRIVATE_GROUP',
    text: 'Grupa',
  },
]

const initialState = {
  content: '',
  hourStart: timeNow,
  dateStart: dateNowYYYYMMDD,
  privacy: PRIVACYSETTINGS[0].value,
  // activity: activities[0].value,
}

// TODO: add memoization
const CreatePost = ({ handleClose }) => {
  const [addPost] = useAddPostMutation()
  const { data: activitiesApi, isLoading } = useGetActivitiesQuery()
  const { data: tagsApi } = useGetTagsQuery()
  const [activities, setActivities] = useState([])
  const [tags, setTags] = useState([])
  const { data: user, isLoadingUser } = useGetUserQuery()

  useEffect(() => {
    if (!isLoading) {
      if (activitiesApi.length === 0) return
      const activitiesApiWithValue = activitiesApi.map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesApiWithValue)
      initialState.activity = activitiesApiWithValue[0].value
    }
  }, [activitiesApi, isLoading])

  const [state, setState] = useState(initialState)

  const [isPlaceSelected, setIsPlaceSelected] = useState(false)
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [selectedCoordinates, setSelectedCoordinates] = useState([
    cities[0].cordinates.lat,
    cities[0].cordinates.lng,
  ])
  const [isMarkerMoved, setIsMarkerMoved] = useState(false)

  const handleMarkerMoved = (moved) => {
    setIsMarkerMoved(moved)
  }

  const handleSelectCoordinates = (coordinates) => {
    setSelectedCoordinates(coordinates)
  }

  const handleSelectedCity = (city) => {
    setSelectedCity(city)
  }

  const handleSelectedPlace = (selected) => {
    setIsPlaceSelected(selected)
  }

  const handleSelectAddress = (address) => {
    setSelectedAddress(address)
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

    const dateStart = formatTimeAndDate(state.dateStart, state.hourStart)

    const selectedActivityId = activitiesApi.find((activity) => activity.name === state.activity).id

    const getTagsIds = () => tags.map((tag) => tag.id)

    const newPost = {
      activityId: selectedActivityId,
      userId: user.id,
      location: {
        name: selectedAddress,
        city: selectedCity,
        lng: selectedCoordinates[0],
        lat: selectedCoordinates[1],
      },
      dateCreated: getCurrentTimeISOString(),
      dateStart: dateStart,
      dateEnd: getShiftedTime(dateStart, 2), // now is 2h
      description: state.content,
      privacySetting: state.privacy,
      tags: getTagsIds(),
    }
    console.log(newPost, 'newPost')

    if (!isPlaceSelected) {
      return
    }

    addPost(newPost)
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
          placeholder="Dodaj opis spotkania"
          maxLength="120"
          name="content"
          value={state.content}
          onChange={handleChange}
          required
        />
        <Select
          style={{ gridArea: 'select1' }}
          name="privacy"
          id="privacy"
          value={state.privacy}
          onChange={handleChange}
        >
          {PRIVACYSETTINGS}
        </Select>
        <Select
          style={{ gridArea: 'select2' }}
          name="activity"
          id="activity"
          value={state.activity}
          onChange={handleChange}
        >
          {activities}
        </Select>
        <div style={{ gridArea: 'input2' }}>
          <PlaceAutocomplete
            onSelectCoordinates={handleSelectCoordinates}
            isPlaceSelected={handleSelectedPlace}
            onSelectAdress={handleSelectAddress}
            coordinates={selectedCoordinates}
            isMarkerMoved={isMarkerMoved}
            setMarkerMoved={handleMarkerMoved}
            onSelectCity={handleSelectedCity}
          />
        </div>
        <Input
          style={{ gridArea: 'input3' }}
          type="date"
          name="dateStart"
          id="dateStart"
          value={state.dateStart}
          onChange={handleChange}
          min={dateNowYYYYMMDD}
        />
        <Input
          style={{ gridArea: 'input4' }}
          type="time"
          name="hourStart"
          id="hourStart"
          value={state.hourStart}
          min={isToday(state.dateStart) ? timeNow : '00:00'}
          onChange={handleChange}
        />
        <div
          style={{
            gridArea: 'map',
            backgroundColor: '#233045',
          }}
        >
          <CreatePostMap
            center={selectedCoordinates}
            isPlaceSelected={isPlaceSelected}
            onMarkerMoved={handleSelectCoordinates}
            isMarkedMoved={handleMarkerMoved}
          />
        </div>
      </InputsWrapper>

      <TagAutocomplete tags={tags} setTags={setTags} data={tagsApi} />

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
