import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'

import { OpenStreetMapProvider } from 'leaflet-geosearch'

import { ReactComponent as AlertCircle } from '@/assets/icons/alert-circle.svg'
import { Error } from '@/components/atoms/Error/Error.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import { debounce } from '@/helpers/debounce'

import {
  InputWrapper,
  StyledSuggestion,
  StyledSuggestionWrapper,
  Wrapper,
} from './CityAutocomplete.styles'

export const CityAutocomplete = forwardRef(({ onSelectCity, selectedCity, error, id }, ref) => {
  const [searchResults, setSearchResults] = useState([])
  const [selectedPlace, setSelectedPlace] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const provider = useMemo(
    () =>
      new OpenStreetMapProvider({
        params: {
          countrycodes: 'pl',
          'accept-language': 'pl',
          addressdetails: 2,
        },
      }),
    []
  )

  const debouncedSearch = useCallback(
    debounce((place) => {
      if (place) {
        provider.search({ query: place.toLowerCase() }).then((results) => {
          const uniqueResults = results.reduce((unique, o) => {
            if (!unique.some((obj) => obj.label === o.label)) {
              unique.push(o)
            }
            return unique
          }, [])
          setSearchResults(uniqueResults.slice(0, 3))
        })
      }
    }, 500),
    [provider]
  )

  useEffect(() => {
    debouncedSearch(selectedPlace)
  }, [selectedPlace, debouncedSearch])

  useEffect(() => {
    setSelectedPlace(selectedCity || '')
  }, [selectedCity])

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
    <Wrapper ref={ref}>
      <Label htmlFor={id}>Miasto</Label>
      <InputWrapper>
        <Input
          id={id}
          type="text"
          value={selectedPlace}
          onChange={handleChange}
          placeholder="Szukaj miasta"
          error={error}
        />
        {!!error && <AlertCircle />}
      </InputWrapper>
      {error && <Error>{error}</Error>}

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
})
