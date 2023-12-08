import { useEffect } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { getIcon } from '@/components/pages/Map/customIcons'

import './ModalMap.styles.css'

const UpdateCenter = ({ center }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, 14.5)
  }, [center, map])
  return null
}

const MapUpdater = ({ center }) => {
  const map = useMap()

  useEffect(() => {
    map.invalidateSize()
  }, [map])

  useEffect(() => {
    map.flyTo(center, 14.5)
  }, [center, map])

  return null
}

export const ModalMap = ({ location }) => {
  if (!location || !location.latitude || !location.longitude) {
    console.log('test')
  }

  const coordinates = [location.latitude, location.longitude]

  return (
    <MapContainer center={coordinates} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=aSetRCOQl0G3zH75uVIo4ZLmnMUgiP4uy5ss8IrkciB6DUwX8HUzf3he3SBU7Ppi"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={coordinates} icon={getIcon('pin')} />
      <UpdateCenter center={coordinates} />
      <MapUpdater center={coordinates} />
    </MapContainer>
  )
}
