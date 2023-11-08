import { useCallback, useEffect, useRef, useState } from 'react'

import { OpenStreetMapProvider } from 'leaflet-geosearch'
import styled from 'styled-components'

import { Input } from '@/components/atoms/Input/Input.styles'

import { Suggestion, SuggestionWrapper } from './PlaceAutocomplete.styles'

const Wrapper = styled.div`
  position: relative;
`

const provider = new OpenStreetMapProvider({
  params: {
    countrycodes: 'pl',
    acceptLanguage: 'pl',
    addressdetails: 10,
  },
})

export const PlaceAutocomplete = ({ onSelectCoordinates, onSelectPlace, onSelectAdress }) => {
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchTimeout = useRef(null)

  const search = useCallback(async () => {
    if (searchTerm) {
      const results = await provider.search({ query: searchTerm.toLocaleLowerCase() })
      setSearchResults(results.slice(0, 3))
    }
  }, [searchTerm])

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(search, 500)

    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
    }
  }, [search])

  const handleResultClick = useCallback(
    (result) => {
      const {
        city = '',
        town = '',
        village = '',
        road = '',
        pedestrian = '',
        house_number = '',
        postcode = '',
        leisure = '',
        building = '',
        amenity = '',
        natural = '',
      } = result.raw.address

      const cityPart = city || town || village
      const street = road || pedestrian
      const number = house_number || postcode || ''
      const name = leisure || building || amenity || natural || ''

      const place = name
        ? `${name}, ${street} ${number}, ${cityPart}`
        : `${street} ${number}, ${cityPart}`

      onSelectCoordinates([result.y, result.x])
      onSelectAdress(place)
      onSelectPlace(true)

      setSearchTerm(place)
      setShowSuggestions(false)
    },
    [onSelectCoordinates, onSelectPlace]
  )

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value)
    setShowSuggestions(true)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => setSearchTerm(e.target.value), 500)
  }, [])

  return (
    <Wrapper>
      <Input type="text" value={searchTerm} onChange={handleChange} placeholder="Podaj adres" />
      {showSuggestions && (
        <SuggestionWrapper>
          {searchResults.map((result, index) => (
            <Suggestion key={index} onClick={() => handleResultClick(result)}>
              {result.label}
            </Suggestion>
          ))}
        </SuggestionWrapper>
      )}
    </Wrapper>
  )
}

export default PlaceAutocomplete
