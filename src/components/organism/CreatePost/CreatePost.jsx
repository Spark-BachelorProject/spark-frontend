import { useEffect, useState } from 'react'

import { LublinCoordinates } from '@/assets/constants/coordinates.js'
import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Buttons/Button.styles.js'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Title } from '@/components/atoms/Title/Title.styles'
import CreatePostMap from '@/components/molecules/CreatePostMap/CreatePostMap.jsx'
import PlaceAutocomplete from '@/components/molecules/PlaceAutocomplete/PlaceAutocomplete.jsx'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'
import {
  dateNowYYYYMMDD,
  formatTimeAndDate,
  getCurrentTimeISOString,
  getShiftedTime,
  isToday,
  timeNow,
} from '@/helpers/dateAndTime.js'
import { debounce } from '@/helpers/debounce.js'
import { sortTagsByType } from '@/helpers/sortTagsByType.js'
import { useGetActivitiesQuery } from '@/store/api/activities.js'
import { useGetGroupsQuery } from '@/store/api/groups.js'
import { useAddPostMutation } from '@/store/api/posts'
import { useGetTagsByActivityIdQuery } from '@/store/api/tags.js'
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
}

// TODO: add memoization
const CreatePost = ({ handleClose }) => {
  const [addPost] = useAddPostMutation()
  const { data: activitiesApi, isLoading: isLoadingActivitiesApi } = useGetActivitiesQuery()
  const [activities, setActivities] = useState([])
  const [groups, setGroups] = useState([])
  const [tags, setTags] = useState([])

  const [selectedActivityId, setSelectedActivityId] = useState(1)
  const { data: tagsApi, isLoading: isLoadingTagsApi } =
    useGetTagsByActivityIdQuery(selectedActivityId)

  const [state, setState] = useState(initialState)
  const { data: user } = useGetUserQuery()
  const { data: groupsApi, isLoading: isLoadingGroupsApi } = useGetGroupsQuery()

  useEffect(() => {
    if (!isLoadingActivitiesApi) {
      if (activitiesApi.length === 0) return
      const activitiesApiWithValue = activitiesApi.map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesApiWithValue)
      initialState.activity = activitiesApiWithValue[0].value
    }
  }, [activitiesApi, isLoadingActivitiesApi])

  useEffect(() => {
    if (!isLoadingGroupsApi) {
      if (groupsApi.length === 0) return
      const groupsApiWithValue = groupsApi.map((group) => ({
        ...group,
        value: group.name,
      }))
      setGroups(groupsApiWithValue)
      initialState.groups = groupsApiWithValue[0].value
    }
  }, [groupsApi, isLoadingGroupsApi])

  useEffect(() => {
    if (!isLoadingTagsApi) {
      if (tagsApi.length === 0) return
      const tagsApiWithValue = tags.map((tag) => ({
        ...tag,
        value: tag.name,
      }))
      setTags(sortTagsByType(tagsApiWithValue))
    }
  }, [tagsApi, isLoadingTagsApi])

  const [isPlaceSelected, setIsPlaceSelected] = useState(false)
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    lat: LublinCoordinates.lat,
    lng: LublinCoordinates.lng,
  })

  const [isMarkerMoved, setIsMarkerMoved] = useState(false)

  const handleMarkerMoved = (moved) => {
    setIsMarkerMoved(moved)
  }

  const handleMarkerMovedDebounced = debounce(handleMarkerMoved, 200)

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

    if (name === 'activity') {
      const { value } = e.target
      const selectedActivity = activitiesApi.find((activity) => activity.name === value)
      if (selectedActivity) {
        setSelectedActivityId(selectedActivity.id)
      }
    }
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
        lng: selectedCoordinates.lng,
        lat: selectedCoordinates.lat,
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
          <Title isBig isBold>
            Dodawanie postu
          </Title>
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
          name="groups"
          id="groups"
          value={state.groups}
          onChange={handleChange}
          isDisabled={state.privacy !== 'PRIVATE_GROUP'}
        >
          {groups}
        </Select>
        <Select
          style={{ gridArea: 'select3' }}
          name="activity"
          id="activity"
          value={state.activity}
          onChange={handleChange}
        >
          {activities}
        </Select>
        <Input
          style={{ gridArea: 'input2' }}
          type="date"
          name="dateStart"
          id="dateStart"
          value={state.dateStart}
          onChange={handleChange}
          min={dateNowYYYYMMDD}
        />
        <Input
          style={{ gridArea: 'input3' }}
          type="time"
          name="hourStart"
          id="hourStart"
          value={state.hourStart}
          min={isToday(state.dateStart) ? timeNow : '00:00'}
          onChange={handleChange}
        />
        <div style={{ gridArea: 'input4' }}>
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
            isMarkedMoved={handleMarkerMovedDebounced}
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
