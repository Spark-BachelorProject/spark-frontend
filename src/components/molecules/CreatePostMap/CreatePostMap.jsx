import { useCallback, useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { getIcon } from '@/components/pages/Map/customIcons'

import { MarkerInstructionPopup } from '../MarkerInstructionPopup/MarkerInstructionPopup'
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

export const CreatePostMap = ({ center, isPlaceSelected, onMarkerMoved, isMarkedMoved, style }) => {
  const [markerPosition, setMarkerPosition] = useState(center)
  const [hasMarkerMoved, setHasMarkerMoved] = useState(false)

  const updatePosition = useCallback(
    (event) => {
      const newPosition = event.target.getLatLng()
      setMarkerPosition({ lat: newPosition.lat, lng: newPosition.lng })
      setHasMarkerMoved(true)
      onMarkerMoved({ lat: newPosition.lat, lng: newPosition.lng })

      isMarkedMoved(true)
    },
    [isMarkedMoved, onMarkerMoved]
  )

  useEffect(() => {
    setMarkerPosition(center)
  }, [center])

  return (
    <MapContainer
      center={center}
      style={{
        height: '100%',
        width: '100%',
        ...style,
      }}
      zoom={15}
      zoomControl={true}
    >
      <MapUpdater center={markerPosition} isPlaceSelected={isPlaceSelected} />
      <TileLayer url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=aSetRCOQl0G3zH75uVIo4ZLmnMUgiP4uy5ss8IrkciB6DUwX8HUzf3he3SBU7Ppi" />
      <Marker
        position={markerPosition}
        draggable={true}
        eventHandlers={{ dragend: updatePosition }}
        icon={getIcon('pin')}
      ></Marker>
      {!hasMarkerMoved && <MarkerInstructionPopup />}
    </MapContainer>
  )
}

export default CreatePostMap
