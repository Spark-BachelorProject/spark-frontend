import { useEffect, useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { LublinCoordinates } from '@/assets/constants/coordinates.js'
import { createPostSchema } from '@/assets/schemas/createPostSchema.js'
import { Button } from '@/components/atoms/Buttons/Button.styles.js'
import { Text } from '@/components/atoms/Text/Text.styles.js'
import { Title } from '@/components/atoms/Title/Title.styles'
import CreatePostMap from '@/components/molecules/CreatePostMap/CreatePostMap.jsx'
import InputWithLabel from '@/components/molecules/InputWithLabel/InputWithLabel.jsx'
import PlaceAutocomplete from '@/components/molecules/PlaceAutocomplete/PlaceAutocomplete.jsx'
import SelectWithLabel from '@/components/molecules/SelectWithLabel/SelectWithLabel.jsx'
import TagAutocomplete from '@/components/molecules/TagAutocomplete/TagAutocomplete.jsx'
import { ButtonsWrapper } from '@/components/organism/CreateGroup/CreateGroup.styles.js'
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
import { useGetGroupsQuery, useGetOneGroupQuery } from '@/store/api/groups.js'
import { useAddPostMutation } from '@/store/api/posts'
import { useGetTagsByActivityIdQuery } from '@/store/api/tags.js'
import { useGetUserQuery } from '@/store/api/user.js'

import { CloseButton } from '@/components/atoms/CloseButton/CloseButton.jsx'
import {
  FooterWrapper,
  HeaderWrapper,
  InputsWrapper,
  NextArrowIcon,
  StyledText,
  TitleWrapper,
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
  description: '',
  hourStart: timeNow,
  dateStart: dateNowYYYYMMDD,
  privacy: PRIVACYSETTINGS[0].value,
}

const CreatePost = ({ handleClose, handlePostAdded, groupId = 0 }) => {
  const [addPost] = useAddPostMutation()
  const { data: activitiesApi, isLoading: isLoadingActivitiesApi } = useGetActivitiesQuery()
  const [activities, setActivities] = useState([])
  const [groups, setGroups] = useState([])
  const [tags, setTags] = useState([])
  const {
    data: groupOneApi,
    isLoading: isLoadingGroupOneApi,
    isSuccess: isSuccessGroupOneApi,
  } = useGetOneGroupQuery(groupId, { skip: !groupId })

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    resolver: yupResolver(createPostSchema),
  })

  //TODO: refactor this
  const [selectedActivityId, setSelectedActivityId] = useState(1)
  const { data: tagsApi, isLoading: isLoadingTagsApi } =
    useGetTagsByActivityIdQuery(selectedActivityId)

  const [state, setState] = useState(initialState)
  const { data: user } = useGetUserQuery()
  const { data: groupsApi, isLoading: isLoadingGroupsApi } = useGetGroupsQuery()

  // TODO: create for this some hook/abstraction
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

  useEffect(() => {
    if (groupId && !isLoadingGroupOneApi && isSuccessGroupOneApi) {
      const selectedActivity = groupOneApi.activity.name
      setState((prevState) => ({
        ...prevState,
        privacy: PRIVACYSETTINGS[1].value,
        groups: groupsApi[0].name,
        activity: selectedActivity,
      }))
    }
  }, [groupId, groupsApi, isLoadingGroupOneApi, isSuccessGroupOneApi, activitiesApi])

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
    setValue('address', address)
    setSelectedAddress(address)
    if (address) {
      errors.address = null
    }
  }

  // Watch the value of the "privacy" field to dynamically enable/disable other fields
  const privacyValue = useWatch({
    control,
    name: 'privacy',
  })

  const onSubmit = (data) => {
    const dateStart = formatTimeAndDate(data.dateStart, data.hourStart)
    const selectedActivityId = activitiesApi.find((activity) => activity.name === data.activity).id
    const selectedGroupId =
      privacyValue === 'PUBLIC' ? null : groupsApi.find((group) => group.name === data.groups)?.id

    const getTagsIds = () => data.tags.map((tag) => tag.id)

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
      description: data.description,
      privacySetting: data.privacy,
      tags: getTagsIds(),
      groupId: selectedGroupId,
    }

    handlePostAdded()
    addPost(newPost)
    handleClose()
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <HeaderWrapper>
        <TitleWrapper>
          <Title isBig isBold>
            Dodawanie postu
          </Title>
          <Text >Dzieli Cię jeden krok od znalezienia partnerów do gry!</Text>
        </TitleWrapper>
        <CloseButton onClick={handleClose} />
      </HeaderWrapper>
      <InputsWrapper>
        <InputWithLabel
          style={{ gridArea: 'input1' }}
          placeholder="Dodaj opis spotkania"
          labelText="Opis"
          id="description"
          name="description"
          {...register('description')}
          error={errors?.description?.message}
        />
        <SelectWithLabel
          style={{ gridArea: 'select1' }}
          labelText="Widoczność"
          name="privacy"
          id="privacy"
          isDisabled={!!groupId}
          {...register('privacy')}
          error={errors?.privacy?.message}
        >
          {PRIVACYSETTINGS}
        </SelectWithLabel>
        <SelectWithLabel
          style={{ gridArea: 'select2' }}
          labelText="Grupy"
          name="groups"
          id="groups"
          isDisabled={privacyValue === 'PUBLIC' || !groups.length || !!groupId}
          {...register('groups')}
          error={errors?.groups?.message}
        >
          {groups.length
            ? groups
            : [
                {
                  value: 'Nie ma żadnych grup',
                  text: 'Nie ma żadnych grup',
                  name: 'Nie ma żadnych grup',
                },
              ]}
        </SelectWithLabel>
        <SelectWithLabel
          style={{ gridArea: 'select3' }}
          labelText="Aktywność"
          name="activity"
          id="activity"
          isDisabled={!!groupId}
          {...register('activity')}
          error={errors?.activity?.message}
        >
          {activities}
        </SelectWithLabel>
        <InputWithLabel
          style={{ gridArea: 'input2' }}
          labelText="Data rozpoczęcia"
          type="date"
          name="dateStart"
          id="dateStart"
          min={dateNowYYYYMMDD}
          {...register('dateStart')}
          error={errors?.dateStart?.message}
        />
        <InputWithLabel
          style={{ gridArea: 'input3' }}
          labelText="Godzina rozpoczęcia"
          type="time"
          name="hourStart"
          id="hourStart"
          min={isToday(state.dateStart) ? timeNow : '00:00'}
          {...register('hourStart')}
          error={errors?.hourStart?.message}
        />
        <PlaceAutocomplete
          onSelectCoordinates={handleSelectCoordinates}
          isPlaceSelected={handleSelectedPlace}
          onSelectAdress={handleSelectAddress}
          coordinates={selectedCoordinates}
          isMarkerMoved={isMarkerMoved}
          setMarkerMoved={handleMarkerMoved}
          onSelectCity={handleSelectedCity}
          style={{ gridArea: 'input4', }}
          {...register('address')}
          error={errors?.address?.message}
        />

        <CreatePostMap
          center={selectedCoordinates}
          isPlaceSelected={isPlaceSelected}
          onMarkerMoved={handleSelectCoordinates}
          isMarkedMoved={handleMarkerMovedDebounced}
          style={{ gridArea: 'map' }}
        />
      </InputsWrapper>

      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <TagAutocomplete
            tags={field.value}
            setTags={field.onChange}
            data={tagsApi}
            id="tags"
            error={errors?.tags?.message}
          />
        )}
      />

      <FooterWrapper>
        <StyledText as={'a'}>Wiecej szczegółów</StyledText>
        <ButtonsWrapper>
          <Button isGray onClick={handleClose}>
            Anuluj
          </Button>
          <Button>
            Dalej <NextArrowIcon />
          </Button>
        </ButtonsWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default CreatePost
