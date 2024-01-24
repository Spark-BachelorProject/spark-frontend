import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SecondaryButton } from '@/components/atoms/Buttons/SecondaryButton.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { getCityFromCoordinates } from '@/helpers/getCityFromCoordinates'
import { selectCity, setCity } from '@/store/city/citySlice'

import { CityAutocomplete } from '../CityAutocomplete/CityAutocomplete'
import { StyledBlueText, StyledButton, Wrapper } from './CitySelect.styles'

export const CitySelect = ({ handleClose, handleSubmit, shouldBeSelected = false }) => {
  const dispatch = useDispatch()
  const selectedCity = useSelector(selectCity)

  const [localCity, setLocalCity] = useState(selectedCity || '')

  const handleSelectCity = useCallback((city) => {
    setLocalCity(city)
  }, [])

  const handleGeolocateCity = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      getCityFromCoordinates(latitude, longitude).then((city) => {
        if (city === localCity) {
          handleClose()
          return
        }

        setLocalCity(city)
        handleSubmit()
        dispatch(setCity(city))
        handleClose()
      })
    })
  }, [dispatch, handleClose, localCity])

  const handleConfirm = useCallback(() => {
    if (localCity === selectedCity || !localCity) {
      handleClose()
      return
    }

    dispatch(setCity(localCity))
    handleSubmit()
    handleClose()
  }, [dispatch, handleClose, localCity, selectedCity, handleSubmit])

  return (
    <Wrapper>
      <Title isBig isBold>
        Wybierz miasto
      </Title>
      <CityAutocomplete onSelectCity={handleSelectCity} />
      <StyledBlueText onClick={handleGeolocateCity}>
        Znajdź moje miasto automatycznie
      </StyledBlueText>
      {!shouldBeSelected && (
        <StyledButton isGray onClick={handleClose}>
          Anuluj
        </StyledButton>
      )}
      <SecondaryButton onClick={handleConfirm} disabled={!localCity}>
        Potwierdź
      </SecondaryButton>
    </Wrapper>
  )
}
