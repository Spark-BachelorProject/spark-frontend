import { useEffect, useState } from 'react'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { CityAutocomplete } from '@/components/molecules/CityAutocomplete/CityAutocomplete'
import InputWithLabel from '@/components/molecules/InputWithLabel/InputWithLabel'
import SelectWithLabel from '@/components/molecules/SelectWithLabel/SelectWithLabel'
import { useGetActivitiesQuery } from '@/store/api/activities'
import { useAddGroupMutation } from '@/store/api/groups'

import {
  ButtonsWrapper,
  CancelButton,
  FooterWrapper,
  HeaderWrapper,
  InputsWrapper,
  StyledText,
  TitleWrapper,
  Wrapper,
} from './CreateGroup.styles'

const PRIVACYSETTINGS = [
  {
    value: 'PUBLIC',
    text: 'Publiczna',
  },
  {
    value: 'PRIVATE',
    text: 'Prywatna',
  },
  {
    value: 'SECRET',
    text: 'Tajna',
  },
]

const initialState = {
  name: '',
  city: '',
  description: '',
  activity: '',
  privacy: PRIVACYSETTINGS[0].value,
}

const CreateGroup = ({ handleClose }) => {
  const [addGroup] = useAddGroupMutation()
  const [selectedCity, setSelectedCity] = useState('')
  const { data: activitiesApi, isLoading: isLoadingActivities } = useGetActivitiesQuery()
  const [geolocatedCity, setGeolocatedCity] = useState('')
  const [activities, setActivities] = useState([])

  const handleCityChange = (city) => {
    setSelectedCity(city)
  }

  // useEffect(() => {
  //   getUserCity().then((city) => setGeolocatedCity(city))
  // }, [])

  useEffect(() => {
    if (!isLoadingActivities) {
      const activitiesWithValue = activitiesApi.map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesWithValue)
      initialState.activity = activitiesWithValue[0].value
    }
  }, [activitiesApi, isLoadingActivities])

  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  //FIXME: when you click enter on empty input data is sent
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !state.name.trim() ||
      !selectedCity ||
      !state.description.trim() ||
      !state.activity.trim() ||
      !state.privacy.trim()
    ) {
      console.log('nie wypełniono wszystkich pól')
      return
    }

    const selectedActivityId = activitiesApi.find((activity) => activity.name === state.activity).id

    const data = {
      name: state.name,
      description: state.description,
      privacySetting: state.privacy,
      cityId: selectedCity,
      activityId: selectedActivityId,
    }

    addGroup(data)
    handleClose()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <HeaderWrapper>
        <TitleWrapper>
          <Title isBig isBold>
            Tworzenie Grupy
          </Title>
          <Text>Stworzenie grupy pozwoli Ci na dotarcie do wybranego grona osób</Text>
        </TitleWrapper>
        <XIcon onClick={handleClose} />
      </HeaderWrapper>
      <InputsWrapper>
        <InputWithLabel
          style={{ gridArea: 'input1' }}
          name="name"
          value={state.name}
          onChange={handleChange}
          id="name"
          labelText="Nazwa"
          placeholder="Nazwa"
          required
        />

        <CityAutocomplete style={{ gridArea: 'select1' }} onSelectCity={handleCityChange} />
        <InputWithLabel
          style={{ gridArea: 'input2' }}
          value={state.description}
          onChange={handleChange}
          name="description"
          id="description"
          labelText="Opis"
          placeholder="Opis"
          required
        />

        <SelectWithLabel
          style={{ gridArea: 'select2' }}
          value={state.activity}
          onChange={handleChange}
          labelText="Aktywność"
          name="activity"
          id="activity"
          required
        >
          {activities}
        </SelectWithLabel>
        <SelectWithLabel
          style={{ gridArea: 'select3' }}
          value={state.privacy}
          onChange={handleChange}
          labelText="Widoczność"
          name="privacy"
          id="privacy"
          required
        >
          {PRIVACYSETTINGS}
        </SelectWithLabel>
      </InputsWrapper>
      <FooterWrapper>
        {/* TODO: handle invite friends */}
        <StyledText as={'a'}>Zaproś znajomych</StyledText>

        <ButtonsWrapper>
          <CancelButton onClick={handleClose}>Anuluj</CancelButton>
          <Button type="submit">Dodaj</Button>
        </ButtonsWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default CreateGroup
