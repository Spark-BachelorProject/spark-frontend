import React from 'react'
import { useState } from 'react'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import styled from 'styled-components'

import Select from '@/components/atoms/Select/Select'
import { Text } from '@/components/atoms/Text/Text.styles'

import './Map.styles.css'
import { cities, markers, chosenCity } from './data'

export const Map = styled.div`
  width: 100%;
  height: 100%;
`

export const OverlayRight = styled.div`
  position: absolute;
  top: calc(70px + 20px);
  right: 60px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 10px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`

export const OverlayLeft = styled.div`
  position: absolute;
  top: calc(70px + 20px);
  left: 60px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 10px;
  padding: 20px 20px;
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    right: 0;
    height: 150px;
    width: 100%;
    padding: 20px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.selectFont};
`

export const Filters = styled.div`
  display: flex;
  gap: 10px;
`

const activity = [
  {
    value: 'all',
    text: 'Wszystkie',
  },
  {
    value: 'favorites',
    text: 'Ulubione sporty',
  },
  {
    value: 'football',
    text: 'Piłka Nożna',
  },
  {
    value: 'squash',
    text: 'Squash',
  },
  {
    value: 'bouldering',
    text: 'Bouldering',
  },
]

export const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 70px)',
}

export const MyComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCMaXLjekb4rUF0iWANm4jlttgjRzgGLas',
  })

  const [map, setMap] = React.useState(null)
  const [center, setCenter] = React.useState(null)
  const [activitySelect, setactivitySelect] = useState(activity[0].value)
  const [selectedMarker, setSelectedMarker] = useState(null) // add state variable to keep track of selected marker
  const [showOverlay, setShowOverlay] = useState(false) // add state variable to keep track of whether overlay should be shown

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const icons = Object.values(
    import.meta.glob('@assets/markers/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })
  )

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const activityHandle = (e) => {
    setactivitySelect(e.target.value)
  }

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker)
    setShowOverlay(true)
  }

  const onMapClick = () => {
    setSelectedMarker(null)
    setShowOverlay(false)
  }

  const onCloseClick = () => {
    setSelectedMarker(null)
    setShowOverlay(false)
  }

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      })
    }
  }, [])

  return isLoaded ? (
    <Map>
      {selectedMarker && showOverlay && (
        <OverlayLeft>
          <CloseButton onClick={onCloseClick}>×</CloseButton>
          <Text isBold>{selectedMarker.id}</Text>
          <Text>{selectedMarker.activity}</Text>
        </OverlayLeft>
      )}
      <OverlayRight>
        <Text isBold>Filtruj wyniki: </Text>
        <Filters>
          <Select
            name="activitySelect"
            id="activitySelect"
            value={activitySelect}
            onChange={activityHandle}
          >
            {activity}
          </Select>
        </Filters>
      </OverlayRight>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center || cities.find((city) => city.name === chosenCity).cordinates}
        zoom={12.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick} // hide left overlay and deselect marker on map click
        options={{ mapId: 'f8fb0c825bce9444', mapTypeControl: false }}
      >
        <>
          {markers.map((marker, index) => {
            if (marker.activity === activitySelect || activitySelect === 'all') {
              return (
                <Marker
                  key={index}
                  position={{ lat: marker.cordinates.lat, lng: marker.cordinates.lng }}
                  onClick={() => onMarkerClick(marker)}
                  icon={{
                    url: `${icons[marker.activity_id - 1]}`,
                    scaledSize: new window.google.maps.Size(33, 33),
                  }}
                />
              )
            }
          })}
        </>
      </GoogleMap>
    </Map>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
