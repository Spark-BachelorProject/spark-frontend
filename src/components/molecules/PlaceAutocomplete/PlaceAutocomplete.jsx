import { useEffect, useRef, useState } from 'react'

import { OpenStreetMapProvider } from 'leaflet-geosearch'
import styled from 'styled-components'

import { Input } from '@/components/atoms/Input/Input.styles'

const Wrapper = styled.div`
  position: relative;
`

const Results = styled.div`
  position: absolute;
  top: 3em;
  width: 100%;
  background: white;
  z-index: 1;
`

export const PlaceAutocomplete = (onSelectCoordinates, onSelectPlace) => {
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const searchTimeout = useRef(null)

  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: {
        countrycodes: 'pl',
        acceptLanguage: 'pl',
        addressdetails: 10,
      },
    })

    const search = async () => {
      if (searchTerm) {
        const results = await provider.search({ query: searchTerm })
        setSearchResults(results.slice(0, 3))
      }
    }

    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(search, 500)

    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
    }
  }, [searchTerm])

  const handleResultClick = (result) => {
    setSearchTerm(result.label)
    onSelectCoordinates([result.y, result.x])
    onSelectPlace(result.label)
    setSearchResults([])
  }

  return (
    <Wrapper>
      <Input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Results>
        {searchResults.map((result, index) => (
          <div key={index} onClick={() => handleResultClick(result)}>
            {result.label}
          </div>
        ))}
      </Results>
    </Wrapper>
  )
}

export default PlaceAutocomplete
