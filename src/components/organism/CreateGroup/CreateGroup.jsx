import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { CityAutocomplete } from '@/components/molecules/CityAutocomplete/CityAutocomplete'
import InputWithLabel from '@/components/molecules/InputWithLabel/InputWithLabel'
import SelectWithLabel from '@/components/molecules/SelectWithLabel/SelectWithLabel'
import { useGetActivitiesQuery } from '@/store/api/activities'
import { useAddGroupMutation } from '@/store/api/groups'

import {
  ButtonsWrapper,
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

const validationSchema = yup.object().shape({
  name: yup.string().trim().required('Nazwa grupy jest wymagana'),
  description: yup.string().trim().required('Opis jest wymagany'),
  city: yup.string().trim().required('Miasto jest wymagane'),
  activity: yup.string().trim(),
  privacy: yup.string().trim(),
})

const CreateGroup = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) })

  const [addGroup] = useAddGroupMutation()
  const { data: activitiesApi, isLoading: isLoadingActivities } = useGetActivitiesQuery()
  const [activities, setActivities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')

  //TODO: check how to enable showing error in this last stage:
  // after submit empty -> type something -> delete
  const handleCityChange = (city) => {
    setValue('city', city)
    setSelectedCity(city)
    if (city) {
      errors.city = null
    }
  }

  useEffect(() => {
    if (!isLoadingActivities) {
      const activitiesWithValue = activitiesApi.map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesWithValue)

      // Set the default activity value if it's not already set
      if (!register('activity').value) {
        setValue('activity', activitiesWithValue[0].value)
      }
    }
  }, [activitiesApi, isLoadingActivities, setValue, register])

  const onSubmit = (data) => {
    const selectedActivityId = activitiesApi.find((activity) => activity.name === data.activity).id

    const groupData = {
      name: data.name,
      description: data.description,
      privacySetting: data.privacy,
      city: data.city,
      activityId: selectedActivityId,
    }

    addGroup(groupData)
    handleClose()
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
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
          id="name"
          labelText="Nazwa"
          placeholder="Nazwa"
          {...register('name')}
          error={errors?.name?.message}
        />

        <CityAutocomplete
          style={{ gridArea: 'select1' }}
          onSelectCity={handleCityChange}
          selectedCity={selectedCity}
          {...register('city')}
          id="city"
          error={errors?.city?.message}
        />
        <InputWithLabel
          style={{ gridArea: 'input2' }}
          name="description"
          id="description"
          labelText="Opis"
          placeholder="Opis"
          {...register('description')}
          error={errors?.description?.message}
        />

        <SelectWithLabel
          style={{ gridArea: 'select2' }}
          labelText="Aktywność"
          name="activity"
          id="activity"
          required
          {...register('activity')}
          error={errors?.activity?.message}
        >
          {activities}
        </SelectWithLabel>
        <SelectWithLabel
          style={{ gridArea: 'select3' }}
          labelText="Widoczność"
          name="privacy"
          id="privacy"
          required
          {...register('privacy')}
        >
          {PRIVACYSETTINGS}
        </SelectWithLabel>
      </InputsWrapper>
      <FooterWrapper>
        <StyledText as={'a'}>Zaproś znajomych</StyledText>

        <ButtonsWrapper>
          <Button isGray onClick={handleClose}>
            Anuluj
          </Button>
          <Button type="submit">Dodaj</Button>
        </ButtonsWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default CreateGroup
