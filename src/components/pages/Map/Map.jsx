import React from 'react'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import styled from 'styled-components'

import './Map.styles.css'
import { cities, markers, chosenCity } from './temp'

export const Map = styled.div`
  width: 100%;
  height: 100%;
`

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

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center)
    // map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <Map>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={cities.find((city) => city.name === chosenCity).cordinates}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ mapId: 'f8fb0c825bce9444', mapTypeControl: false }}
      >
        <>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.cordinates.lat, lng: marker.cordinates.lng }}
            />
          ))}
        </>
      </GoogleMap>
    </Map>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
