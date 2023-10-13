import { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.accent};
`

const CreatePostMap = ({ lat, lng, selectedPlace }) => {
  const mapRef = useRef(null)
  const [zoom, setZoom] = useState(11)

  useEffect(() => {
    if (selectedPlace) {
      setZoom(15)
    }

    const google = window.google
    if (lat === null || lng === null) return
    const map = new google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: zoom,
      options: {
        mapId: 'f8fb0c825bce9444',
        mapTypeControl: false,
        streetViewControl: false,
      },
    })

    if (selectedPlace) {
      new google.maps.Marker({
        position: { lat, lng },
        map,
      })
      return
    }
  }, [lat, lng, zoom, selectedPlace])

  return <Wrapper ref={mapRef} style={{ borderRadius: '10px', width: '100%', height: '100%' }} />
}

export default CreatePostMap
