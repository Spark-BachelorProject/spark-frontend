import { useEffect, useRef } from 'react'

const CreatePostMap = ({ lat, lng }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    const google = window.google
    if (lat === null || lng === null) return
    const map = new google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 15,
      options: {
        mapId: 'f8fb0c825bce9444',
        mapTypeControl: false,
        streetViewControl: false,
      },
    })

    new google.maps.Marker({
      position: { lat, lng },
      map,
    })
  }, [lat, lng])

  return <div ref={mapRef} style={{ borderRadius: '10px', width: '100%', height: '100%' }} />
}

export default CreatePostMap
