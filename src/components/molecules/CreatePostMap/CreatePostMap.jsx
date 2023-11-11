import { useCallback, useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { getIcon } from '@/components/pages/Map/customIcons'

import './CreatePostMap.styles.css'

function MapUpdater({ center, isPlaceSelected }) {
  const map = useMap()

  useEffect(() => {
    map.invalidateSize()
  }, [map])

  useEffect(() => {
    map.flyTo(center, isPlaceSelected ? 17 : 12.5)
  }, [center, isPlaceSelected, map])

  return null
}

export const CreatePostMap = ({ center, isPlaceSelected, onMarkerMoved, isMarkedMoved }) => {
  const [markerPosition, setMarkerPosition] = useState(center)

  const updatePosition = useCallback((event) => {
    const newPosition = event.target.getLatLng()
    setMarkerPosition([newPosition.lat, newPosition.lng])
    onMarkerMoved([newPosition.lat, newPosition.lng])
    isMarkedMoved(true)
  }, [])

  useEffect(() => {
    setMarkerPosition(center)
  }, [center])

  return (
    <MapContainer center={center} style={{ height: '100%' }} zoom={15} zoomControl={false}>
      <MapUpdater center={markerPosition} isPlaceSelected={isPlaceSelected} />
      <TileLayer url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=aSetRCOQl0G3zH75uVIo4ZLmnMUgiP4uy5ss8IrkciB6DUwX8HUzf3he3SBU7Ppi" />
      {isPlaceSelected && (
        <Marker
          position={markerPosition}
          draggable={true}
          eventHandlers={{ dragend: updatePosition }}
          icon={getIcon('pin')}
        ></Marker>
      )}
    </MapContainer>
  )
}

export default CreatePostMap
