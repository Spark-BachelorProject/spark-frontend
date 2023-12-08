import { useEffect } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'

import { CloseButton } from '@/components/organism/MapPopup/MapPopup.styles'
import { getIcon } from '@/components/pages/Map/customIcons'

import './ModalMap.styles.css'

export const Wrapper = styled.div`
  padding: 7px 7px;
`

export const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.inputBg};
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 5px;
  top: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.modalBorder};
  }
`

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

export const ModalMap = ({ location, handleClose }) => {
  if (!location || !location.latitude || !location.longitude) {
    console.log('test')
  }

  const coordinates = [location.latitude, location.longitude]

  return (
    <Wrapper>
      <MapContainer
        center={coordinates}
        zoom={17}
        scrollWheelZoom={true}
        style={{ height: '50vh' }}
      >
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=aSetRCOQl0G3zH75uVIo4ZLmnMUgiP4uy5ss8IrkciB6DUwX8HUzf3he3SBU7Ppi"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={coordinates} icon={getIcon('pin')} />
        <UpdateCenter center={coordinates} />
        <MapUpdater center={coordinates} />
      </MapContainer>
      <StyledCloseButton onClick={handleClose}>X</StyledCloseButton>
    </Wrapper>
  )
}
