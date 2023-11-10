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
  onSelectCity,
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

  //address from coordinates
  useEffect(() => {
    if (coordinates && isMarkerMoved) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates[0]}&lon=${coordinates[1]}`
        )
        .then((response) => {
          const { address } = response.data
          const name =
            address.leisure ||
            address.building ||
            address.shop ||
            address.amenity ||
            address.historic ||
            address.natural ||
            address.landuse ||
            address.square ||
            address.place ||
            ''
          const number = address.house_number ? address.house_number : address.postcode
          const formattedAddress = `${name ? name + ', ' : ''}${address.road} ${number}, ${
            address.city || address.town || address.village
          }`
          setSeletedPlace(formattedAddress)
          onSelectAdress(formattedAddress)
          onSelectCity(address.city || address.town || address.village)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [coordinates, isMarkerMoved])

  //address from search
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
        place = '',
        leisure = '',
        building = '',
        shop = '',
        amenity = '',
        natural = '',
        landuse = '',
        square = '',
        suburb = '',
      } = result.raw.address

      const cityName = city || town || village
      const street = road || pedestrian
      const number = house_number || postcode || ''

      //reated so that the places without a number or postcodes show suburb instead
      const area = number ? number : suburb
      const name =
        place || leisure || building || amenity || natural || landuse || shop || square || ''

      const formattedPlace = name
        ? `${name}, ${street} ${area}, ${cityName}`
        : `${street} ${number}, ${cityName}`

      onSelectCoordinates([result.y, result.x])
      onSelectAdress(formattedPlace)
      onSelectPlace(true)
      onSelectCity(cityName)

      setSeletedPlace(formattedPlace)
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
