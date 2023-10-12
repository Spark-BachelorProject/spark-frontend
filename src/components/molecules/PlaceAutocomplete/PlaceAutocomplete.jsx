import { useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import styled from 'styled-components'

import { Input } from '@/components/atoms/Input/Input.styles'

export const Wrapper = styled.div`
  margin-top: 1em;
  position: relative;
`

//TODO: make suggestions appear on top, so they wont move other elements down

export const Suggestion = styled.div`
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.inputFont};
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

const PlaceAutocomplete = ({ onSelectCoordinates, onSelectPlace }) => {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  })

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
    onSelectCoordinates(latLng)
    onSelectPlace(value)
  }

  const searchOptions = {
    componentRestrictions: { country: 'pl' },
  }

  return (
    <Wrapper>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Input {...getInputProps({ placeholder: 'Podaj adres:' })} />

            <div>
              {suggestions.slice(0, 3).map((suggestion, index) => {
                return (
                  <Suggestion key={index} {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </Suggestion>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </Wrapper>
  )
}

export default PlaceAutocomplete
