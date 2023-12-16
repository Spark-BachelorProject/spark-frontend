import { useCallback, useState } from 'react'

import { SecondaryButton } from '@/components/atoms/Buttons/SecondaryButton.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { getCityFromCoordinates } from '@/helpers/getCityFromCoordinates'

import { CityAutocomplete } from '../CityAutocomplete/CityAutocomplete'
import { StyledBlueText, StyledButton, Wrapper } from './CitySelect.styles'

export const CitySelect = ({ handleClose, handleSubmit }) => {
  const [selectedCity, setSelectedCity] = useState('')

  const handleSelectCity = useCallback((city) => {
    setSelectedCity(city)
  }, [])

  const handleGeolocateCity = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      getCityFromCoordinates(latitude, longitude).then((city) => {
        if (selectedCity === localStorage.getItem('city')) {
          handleClose()
          return
        }

        setSelectedCity(city)
        localStorage.setItem('city', city)
        handleSubmit()
        handleClose()
      })
    })
  }, [handleClose, handleSubmit, selectedCity])

  const handleConfirm = useCallback(() => {
    if (selectedCity === localStorage.getItem('city') || !selectedCity) {
      handleClose()
      return
    }

    localStorage.setItem('city', selectedCity)
    handleSubmit()
    handleClose()
  }, [selectedCity, handleClose, handleSubmit])

  return (
    <Wrapper>
      <Title isBig isBold>
        Wybierz miasto
      </Title>
      <CityAutocomplete onSelectCity={handleSelectCity} selectedCity={selectedCity} />
      <StyledBlueText onClick={handleGeolocateCity}>
        Znajdź moje miasto automatycznie
      </StyledBlueText>
      <StyledButton isGray onClick={handleClose}>
        Anuluj
      </StyledButton>
      <SecondaryButton onClick={handleConfirm} disabled={!selectedCity}>
        Potwierdź
      </SecondaryButton>
    </Wrapper>
  )
}
