import { useCallback, useEffect, useRef, useState } from 'react'

import axios from 'axios'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

import { Input } from '@/components/atoms/Input/Input.styles'

import { Suggestion, SuggestionWrapper, Wrapper } from './PlaceAutocomplete.styles'

const provider = new OpenStreetMapProvider({
  params: {
    countrycodes: 'pl',
    'accept-language': 'pl',
    addressdetails: 10,
  },
})

function formatPlace(name, street, number, area, cityName) {
  let formattedPlace = ''

  if (name) {
    formattedPlace =
      street && number ? `${name}, ${street} ${area}, ${cityName}` : `${name}, ${cityName}`
  } else {
    formattedPlace = `${street} ${area}, ${cityName}`
  }

  return formattedPlace
}

export const PlaceAutocomplete = ({
  onSelectCoordinates,
  isPlaceSelected,
  onSelectAdress,
  coordinates,
  isMarkerMoved,
  setMarkerMoved,
  onSelectCity,
}) => {
  const [searchResults, setSearchResults] = useState([])
  const [seletedPlace, setSeletedPlace] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchTimeout = useRef(null)

  const search = useCallback(async () => {
    if (seletedPlace) {
      const results = await provider.search({ query: seletedPlace.toLocaleLowerCase() })

      setSearchResults(results.slice(0, 3))
    }
  }, [seletedPlace])

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
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lng}`
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
          const formattedAddress = `${name ? name + ', ' : ''}${
            address.road ? address.road : ''
          } ${number}, ${address.city || address.town || address.village}`

          setSeletedPlace(formattedAddress)
          onSelectAdress(formattedAddress)
          onSelectCity(address.city || address.town || address.village)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [
    onSelectCoordinates,
    isPlaceSelected,
    isMarkerMoved,
    coordinates,
    onSelectAdress,
    onSelectCity,
  ])

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

      console.log(result)

      const cityName = city || town || village
      const street = road || pedestrian
      const number = house_number || postcode || ''

      //created so that the places without a number or postcodes show suburb instead
      const area = number ? number : suburb
      const name =
        place ||
        leisure ||
        building ||
        amenity ||
        natural ||
        landuse ||
        shop ||
        square ||
        landuse ||
        ''

      console.log(name)
      let formattedPlace = ''

      //check if the selected place isnt city
      if ((street && number) || area || name) {
        formattedPlace = formatPlace(name, street, number, area, cityName)
        isPlaceSelected(true)
      } else {
        isPlaceSelected(false)
      }

      onSelectCoordinates({
        lat: result.y,
        lng: result.x,
      })
      onSelectAdress(formattedPlace)
      onSelectCity(cityName)

      setSeletedPlace(formattedPlace)
      setShowSuggestions(false)
      setMarkerMoved(false)
    },
    [onSelectCoordinates, isPlaceSelected, onSelectAdress, onSelectCity, setMarkerMoved]
  )

  const handleChange = useCallback((e) => {
    setSeletedPlace(e.target.value)
    setShowSuggestions(true)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => setSeletedPlace(e.target.value), 500)
  }, [])

  return (
    <Wrapper>
      <Input
        type="text"
        data-testid="input-map"
        value={seletedPlace}
        onChange={handleChange}
        placeholder="Podaj adres"
      />
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
