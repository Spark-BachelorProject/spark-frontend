import React, { useEffect, useState } from 'react'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import InputWithLabel from '@/components/molecules/InputWithLabel/InputWithLabel'
import SelectWithLabel from '@/components/molecules/SelectWithLabel/SelectWithLabel'
import { useGetActivitiesQuery } from '@/store/api/activities'
import { useGetCitiesQuery } from '@/store/api/cities'
import { useAddGroupMutation } from '@/store/api/groups'

import {
  FooterWrapper,
  HeaderWrapper,
  InputsWrapper,
  Wrapper,
  TitleWrapper,
  ButtonsWrapper,
  CancelButton,
  StyledText,
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
  const { data: citiesApi, isLoading: isLoadingCities } = useGetCitiesQuery()
  const { data: activitiesApi, isLoading: isLoadingActivities } = useGetActivitiesQuery()
  const [cities, setCities] = useState([])
  const [activities, setActivities] = useState([])

  useEffect(() => {
    if (!isLoadingCities) {
      const citiesWithValue = citiesApi.map((city) => ({
        ...city,
        value: city.name,
      }))

      setCities(citiesWithValue)
      initialState.city = citiesWithValue[0].value
    }
  }, [citiesApi, isLoadingCities])
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
      !state.city.trim() ||
      !state.description.trim() ||
      !state.activity.trim() ||
      !state.privacy.trim()
    ) {
      console.log('nie wypełniono wszystkich pól')
      return
    }

    const selectedCityId = citiesApi.find((city) => city.name === state.city).id
    const selectedActivityId = activitiesApi.find((activity) => activity.name === state.activity).id

    const data = {
      name: state.name, // git
      description: state.description, // git
      privacySetting: state.privacy,
      cityId: selectedCityId,
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
        <SelectWithLabel
          style={{ gridArea: 'select1' }}
          value={state.city}
          onChange={handleChange}
          labelText="Miasto"
          name="city"
          id="city"
          selected="Miasto"
          required
        >
          {cities}
        </SelectWithLabel>
        {/* <div style={{ gridArea: 'input2' }}> */}
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
        {/* </div> */}

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

        {/* <Input
          style={{ gridArea: 'input1' }}
          placeholder="Nazwa"
          maxLength="100"
          name="name"
          required
        />
        <Select style={{ gridArea: 'select1' }} name="citySelect" id="citySelect">
          {cities}
        </Select> */}

        {/* <Input
          style={{ gridArea: 'input2' }}
          placeholder="Opis"
          maxLength="150"
          name="description"
          required
        /> */}
        {/* <Select style={{ gridArea: 'select2' }} name="activitySelect" id="activitySelect">
          {activity}
        </Select>
        <Select style={{ gridArea: 'select3' }} name="visibilitySelect" id="visibilitySelect">
          {visibility}
        </Select> */}
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
