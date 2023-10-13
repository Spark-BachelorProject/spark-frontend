import { useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { Input } from '@/components/atoms/Input/Input.styles'

import { Suggestion, SuggestionWrapper } from './PlaceAutocomplete.styles'

const PlaceAutocomplete = ({ onSelectCoordinates, onSelectPlace }) => {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  })

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value)
      const latLng = await getLatLng(results[0])
      setAddress(value)
      setCoordinates(latLng)
      onSelectCoordinates(latLng)
      onSelectPlace(value)
    } catch (error) {
      console.error('Error selecting place:', error)
    }
  }

  const searchOptions = {
    componentRestrictions: { country: 'pl' },
  }

  return (
    <PlacesAutocomplete
      style={{ position: 'relative' }}
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <Input required {...getInputProps({ placeholder: 'Podaj adres:' })} />
          <SuggestionWrapper>
            {suggestions.slice(0, 3).map((suggestion, index) => (
              <Suggestion key={index} {...getSuggestionItemProps(suggestion)}>
                {suggestion.description}
              </Suggestion>
            ))}
          </SuggestionWrapper>
        </>
      )}
    </PlacesAutocomplete>
  )
}

export default PlaceAutocomplete
