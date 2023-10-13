import React, { useState } from 'react'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

import Select from '@/components/atoms/Select/Select'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Wrapper } from '@/components/molecules/AttendanceList/AttendanceList.styles'
import { MapPopup } from '@/components/organism/MapPopup/MapPopup'

import { Filters, MapLegend, MapLegendItem, OverlayRight, containerStyle } from './Map.styles'
import './Map.styles.css'
import { activity, chosenCity, cities, markers, translations } from './data'

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCMaXLjekb4rUF0iWANm4jlttgjRzgGLas',
  })

  const [map, setMap] = React.useState(null)
  const [center, setCenter] = React.useState(null)
  const [activitySelect, setactivitySelect] = useState(activity[0].value)
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [showOverlay, setShowOverlay] = useState(false)
  const [markerLegend, setMarkerLegend] = useState([])

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const icons = Object.values(
    import.meta.glob('@assets/markers/*.{svg,jpg,jpeg,SVG,JPEG}', { eager: true, as: 'url' })
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

  React.useEffect(() => {
    const legend = []
    markers.forEach((marker) => {
      if (!legend.includes(marker.activity)) {
        legend.push(marker.activity)
      }
    })
    setMarkerLegend(legend)
  }, [])

  return isLoaded ? (
    <Wrapper>
      {selectedMarker && showOverlay && (
        <MapPopup
          onCloseClick={onCloseClick}
          author={selectedMarker.author}
          createdAt={selectedMarker.createdAt}
          activity={selectedMarker.activity}
          date={selectedMarker.date}
          time={selectedMarker.time}
          tags={selectedMarker.tags}
          title={selectedMarker.title}
        />
      )}
      <OverlayRight>
        {/* <Text isBold>Filtruj Aktywności: </Text> */}
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

      <MapLegend>
        {markerLegend.map((activity, index) => (
          <MapLegendItem key={index}>
            <img
              src={`${
                icons[markers.find((marker) => marker.activity === activity).activity_id - 1]
              }`}
              alt="marker"
              style={{ width: '20px', height: '20px' }}
            />
            {translations.map((translation) => {
              if (translation.original === activity) {
                return (
                  <Text isBold key={translation.original}>
                    {translation.polish}
                  </Text>
                )
              }
              return null
            })}
          </MapLegendItem>
        ))}
      </MapLegend>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center || cities.find((city) => city.name === chosenCity).cordinates}
        zoom={12.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
        options={{ mapId: 'f8fb0c825bce9444', mapTypeControl: false }}
      >
        {markers.map((marker, index) => {
          if (marker.activity === activitySelect || activitySelect === 'all') {
            return (
              <Marker
                key={index}
                position={{ lat: marker.cordinates.lat, lng: marker.cordinates.lng }}
                onClick={() => onMarkerClick(marker)}
                icon={{
                  url: `${icons[marker.activity_id - 1]}`,
                  scaledSize: new window.google.maps.Size(45, 45),
                }}
              />
            )
          }
          return null
        })}
      </GoogleMap>
    </Wrapper>
  ) : null
}

export default Map
