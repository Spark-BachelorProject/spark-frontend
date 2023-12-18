import { useCallback, useEffect, useRef, useState } from 'react'
import { forwardRef } from 'react'

import axios from 'axios'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

import InputWithLabel from '@/components/molecules/InputWithLabel/InputWithLabel.jsx'
import { formatPlace } from '@/helpers/formatPlace'

import { Suggestion, SuggestionWrapper, Wrapper } from './PlaceAutocomplete.styles'

const provider = new OpenStreetMapProvider({
  params: {
    countrycodes: 'pl',
    'accept-language': 'pl',
    addressdetails: 10,
  },
})

const NOMINATIM_API = 'https://nominatim.openstreetmap.org/reverse?format=json&lat='

async function fetchAddressFromCoordinates(coordinates) {
  const response = await axios.get(
    `${NOMINATIM_API}${coordinates.lat}&lon=${coordinates.lng}&accept-language=pl`
  )
  return response.data
}

export const PlaceAutocomplete = forwardRef(
  (
    {
      onSelectCoordinates,
      isPlaceSelected,
      onSelectAdress,
      coordinates,
      isMarkerMoved,
      setMarkerMoved,
      onSelectCity,
      style,
      error,
    },
    ref
  ) => {
    const [searchResults, setSearchResults] = useState([])
    const [selectedPlace, setSelectedPlace] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const searchTimeout = useRef(null)

    const search = useCallback(async () => {
      if (selectedPlace) {
        const results = await provider.search({ query: selectedPlace.toLocaleLowerCase() })
        setSearchResults(results.slice(0, 3))
      }
    }, [selectedPlace])

    useEffect(() => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
      searchTimeout.current = setTimeout(search, 500)

      return () => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current)
      }
    }, [search])

    // address from coordinates
    useEffect(() => {
      if (coordinates && isMarkerMoved) {
        fetchAddressFromCoordinates(coordinates)
          .then((data) => {
            const { address } = data
            const name =
              address.leisure ||
              address.building ||
              address.shop ||
              address.amenity ||
              address.historic ||
              address.natural ||
              address.landuse ||
              address.place ||
              address.industrial ||
              ''

            console.log(address)

            const cityName = address.city || address.town || address.village
            const street = address.road || address.pedestrian
            const number = address.house_number || address.postcode
            const area = address.suburb

            const formattedPlace = formatPlace(name, street, number, area, cityName)

            setSelectedPlace(formattedPlace)
            onSelectAdress(formattedPlace)
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

    // address from search results
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
          industrial = '',
        } = result.raw.address

        const cityName = city || town || village
        const street = road || pedestrian
        const number = house_number || postcode || ''

        const area = suburb
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
          industrial ||
          ''

        let formattedPlace = ''

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

        setSelectedPlace(formattedPlace)
        setShowSuggestions(false)
        setMarkerMoved(false)
      },
      [onSelectCoordinates, isPlaceSelected, onSelectAdress, onSelectCity, setMarkerMoved]
    )

    const handleChange = useCallback((e) => {
      setSelectedPlace(e.target.value)
      setShowSuggestions(true)
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
      searchTimeout.current = setTimeout(() => setSelectedPlace(e.target.value), 500)
    }, [])

    return (
      <Wrapper style={style} ref={ref}>
        <InputWithLabel
          name="address"
          id="address"
          labelText="Adres"
          placeholder="Podaj adres"
          value={selectedPlace}
          onChange={handleChange}
          error={error}
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
)

export default PlaceAutocomplete
