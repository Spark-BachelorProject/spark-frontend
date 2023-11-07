import { useEffect } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import './CreatePostMap.styles.css'

function MapUpdater({ center, isPlaceSelected }) {
  const map = useMap()

  useEffect(() => {
    map.invalidateSize()
  }, [map])

  useEffect(() => {
    map.flyTo(center, isPlaceSelected ? 15.5 : 13)
  }, [center, isPlaceSelected, map])

  return null
}

export const CreatePostMap = ({ center, isPlaceSelected }) => {
  return (
    <MapContainer center={center} style={{ height: '100%' }} zoom={15} zoomControl={false}>
      <MapUpdater center={center} isPlaceSelected={isPlaceSelected} />
      <TileLayer url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=aSetRCOQl0G3zH75uVIo4ZLmnMUgiP4uy5ss8IrkciB6DUwX8HUzf3he3SBU7Ppi" />
      {isPlaceSelected && <Marker position={center}></Marker>}
    </MapContainer>
  )
}

export default CreatePostMap
