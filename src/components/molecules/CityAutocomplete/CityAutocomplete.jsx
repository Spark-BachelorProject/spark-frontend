import { useCallback, useEffect, useMemo, useState } from 'react'

import { OpenStreetMapProvider } from 'leaflet-geosearch'

import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import { debounce } from '@/helpers/debounce'

import { StyledSuggestion, StyledSuggestionWrapper, Wrapper } from './CityAutocomplete.styles'

export const CityAutocomplete = ({ onSelectCity }) => {
  const [searchResults, setSearchResults] = useState([])
  const [selectedPlace, setSelectedPlace] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const provider = useMemo(
    () =>
      new OpenStreetMapProvider({
        params: {
          countrycodes: 'pl',
          'accept-language': 'pl',
          addressdetails: 10,
        },
      }),
    []
  )

  const debouncedSearch = useCallback(
    debounce(async (place) => {
      if (place) {
        const results = await provider.search({ query: place.toLowerCase() })
        setSearchResults(results.slice(0, 3))
      }
    }, 500),
    [provider]
  )

  useEffect(() => {
    debouncedSearch(selectedPlace)
  }, [selectedPlace, debouncedSearch])

  const handleResultClick = useCallback(
    (result) => {
      let city = ''

      city =
        result.raw.address.town ||
        result.raw.address.city ||
        result.raw.address.village ||
        result.raw.address.administrative

      if (!city) {
        setSelectedPlace('')
      } else {
        onSelectCity(city)
        setSelectedPlace(city)
      }

      setShowSuggestions(false)
    },
    [onSelectCity]
  )

  const handleChange = useCallback(
    (e) => {
      const place = e.target.value
      setSelectedPlace(place)
      setShowSuggestions(true)
      if (place === '') {
        onSelectCity(null)
        setShowSuggestions(false)
      } else {
        debouncedSearch(place)
      }
    },
    [debouncedSearch, onSelectCity]
  )

  return (
    <Wrapper>
      <Label>Miasto</Label>
      <Input
        type="text"
        value={selectedPlace}
        onChange={handleChange}
        placeholder="Szukaj miasta"
      />
      <StyledSuggestionWrapper>
        {showSuggestions &&
          searchResults.map((result, index) => (
            <StyledSuggestion key={index} onClick={() => handleResultClick(result)}>
              {result.label}
            </StyledSuggestion>
          ))}
      </StyledSuggestionWrapper>
    </Wrapper>
  )
}
