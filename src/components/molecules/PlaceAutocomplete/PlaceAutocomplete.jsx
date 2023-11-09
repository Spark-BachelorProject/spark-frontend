import { useCallback, useEffect, useRef, useState } from 'react'

import axios from 'axios'
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

export const PlaceAutocomplete = ({
  onSelectCoordinates,
  onSelectPlace,
  onSelectAdress,
  coordinates,
  isMarkerMoved,
  setMarkerMoved,
}) => {
  const [searchResults, setSearchResults] = useState([])
  const [SeletedPlace, setSeletedPlace] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchTimeout = useRef(null)

  const search = useCallback(async () => {
    if (SeletedPlace) {
      const results = await provider.search({ query: SeletedPlace.toLocaleLowerCase() })
      setSearchResults(results.slice(0, 3))
    }
  }, [SeletedPlace])

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(search, 500)

    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
    }
  }, [search])

  useEffect(() => {
    if (coordinates && isMarkerMoved) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates[0]}&lon=${coordinates[1]}`
        )
        .then((response) => {
          console.log(response.data.display_name)
          const { address } = response.data
          const number = address.house_number ? address.house_number : address.postcode
          const formattedAddress = `${address.road}, ${number} ${
            address.city || address.town || address.village
          }`
          setSeletedPlace(formattedAddress)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [coordinates])

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

      setSeletedPlace(place)
      setShowSuggestions(false)
      setMarkerMoved(false)
    },
    [onSelectCoordinates, onSelectPlace]
  )

  const handleChange = useCallback((e) => {
    setSeletedPlace(e.target.value)
    setShowSuggestions(true)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => setSeletedPlace(e.target.value), 500)
  }, [])

  return (
    <Wrapper>
      <Input type="text" value={SeletedPlace} onChange={handleChange} placeholder="Podaj adres" />
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
