import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Title } from '@/components/atoms/Title/Title.styles'
import PlaceAutocomplete from '@/components/molecules/PlaceAutocomplete/PlaceAutocomplete.jsx'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'
import { cities } from '@/components/pages/Map/data.jsx'
import {
  dateNowYYYYMMDD,
  formatTimeAndDateToUnix,
  isToday,
  timeNow,
} from '@/helpers/dateAndTime.js'
import { useGetActivitiesQuery } from '@/store/api/activities.js'
import { useAddPostMutation } from '@/store/api/posts'
import { addPost } from '@/store/posts/postsSlice.js'

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

// const defaultActivities = [
//   {
//     id: 1,
//     name: 'Piłka nożna',
//     description: 'Gra w piłkę nożną',
//     category: {
//       id: 1,
//       name: 'Sport',
//     },
//     tags: [],
//     attributes: [],
//   },
//   {
//     id: 2,
//     name: 'Siatkówka',
//     description: 'Gra w siatkówkę',
//     category: {
//       id: 1,
//       name: 'Sport',
//     },
//     tags: [],
//     attributes: [],
//   },
//   {
//     id: 3,
//     name: 'Koszykówka',
//     description: 'Gra w koszykówkę',
//     category: {
//       id: 1,
//       name: 'Sport',
//     },
//     tags: [],
//     attributes: [],
//   },
//   {
//     id: 4,
//     name: 'Kino',
//     description: 'Wyjście do kina',
//     category: {
//       id: 2,
//       name: 'Rekreacja',
//     },
//     tags: [],
//     attributes: [],
//   },
// ]

const PRIVACYSETTINGS = [
  {
    value: 'PUBLIC',
    text: 'Publiczny',
  },
  {
    value: 'PRIVATE_TEAM',
    text: 'Drużyna',
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

const CreatePost = ({ handleClose }) => {
  const [addPost] = useAddPostMutation()
  const { data: activitiesApi, isLoading } = useGetActivitiesQuery()
  const [activities, setActivities] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    if (!isLoading) {
      const activitiesApiWithValue = activitiesApi.map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesApiWithValue)
      initialState.activity = activitiesApiWithValue[0].value
    }
  }, [activitiesApi])

  const [state, setState] = useState(initialState)

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

    const dateStart = formatTimeAndDateToUnix(state.dateStart, state.hourStart)

    const selectedActivityId = activitiesApi.find((activity) => activity.name === state.activity).id

    /*
{
    "activityId": 1,
    "userId": 1,
    "location": {
    "googleId": "",
    "name": "",
    "city": "Lublin",
    "lng": 54,
    "lat": 45,
    "isPlace": false
    },
    "dateCreated": 1682019863000,
    "dateStart": 1682012863000,
    "dateEnd": 1692019863000,
    "description": "blagam",
    "privacySetting": "PUBLIC",
    "tags": [2]
}
*/
    const data = {
      activityId: 1,
      userId: 1,
      location: {
        googleId: '',
        name: '',
        city: 'Lublin',
        lng: 54,
        lat: 45,
        isPlace: false,
      },
      dateCreated: 1682019863000,
      dateStart: 1682012863000,
      dateEnd: 1692019863000,
      description: 'blagam3',
      privacySetting: 'PUBLIC',
      tags: [2],
    }

    const newPost = {
      activityId: selectedActivityId, // git
      userId: 1, // nie git
      location: {
        // nie git
        googleId: selectedPlace ? selectedPlace.googleId : '',
        name: selectedPlace ? selectedPlace.name : '',
        city: selectedPlace ? selectedPlace.city : 'Lublin',
        lng: selectedCoordinates.lng,
        lat: selectedCoordinates.lat,
        isPlace: false,
      },
      dateCreated: Date.now(), // git
      dateStart: dateStart, // git
      dateEnd: Date.now() + 800000, // TODO: ask ??????????
      description: state.content,
      privacySetting: state.privacy, // git
      tags: [
        {
          id: 1,
          name: 'Luźna gierka',
          type: 'Poziom',
        },
      ],
    }
    console.log(newPost, 'newPost')
    addPost(data)
    // handleClose()
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
            onSelectPlace={handleSelectPlace}
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
          {/* <CreatePostMap
            lat={selectedCoordinates.lat}
            lng={selectedCoordinates.lng}
            selectedPlace={selectedPlace}
          /> */}
        </div>
      </InputsWrapper>

      {/* FIXME: Tags, i dont know what i should place there */}
      <TagAutocomplete tags={tags} setTags={setTags} data={activitiesApi} />

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
