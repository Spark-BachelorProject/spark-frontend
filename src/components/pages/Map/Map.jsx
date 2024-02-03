import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

import 'leaflet/dist/leaflet.css'

import { LublinCoordinates } from '@/assets/constants/coordinates'
import Select from '@/components/atoms/Select/Select'
import { MapPopup } from '@/components/organism/MapPopup/MapPopup'
import { useGetActivitiesQuery } from '@/store/api/activities'
import { useGetPostsQuery } from '@/store/api/posts'

import { Filters, OverlayRight, Wrapper } from './Map.styles'
import './Map.styles.css'
import { getIcon } from './customIcons'

const UpdateCenter = ({ center, zoom, setPrevCenter, setPrevZoom }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, zoom)
    setPrevCenter(map.getCenter())
    setPrevZoom(map.getZoom())
  }, [center, zoom, map, setPrevCenter, setPrevZoom])
  return null
}

const initialState = {
  activity: '',
  sort: '',
}

const firstData = {
  value: 'Wszystkie',
  text: 'Wszystkie',
  name: 'Wszystkie',
  id: 0,
}

export const Map = () => {
  const { data: posts, isLoading: isLoadingPosts, isSuccess: isSuccessPosts } = useGetPostsQuery()
  const {
    data: activitiesApi,
    isLoading: isLoadingActivities,
    isSuccess: isSuccessActivities,
  } = useGetActivitiesQuery()
  const [activities, setActivities] = useState([])
  const [center, setCenter] = useState([LublinCoordinates.lat, LublinCoordinates.lng])
  const [userLocation, setUserLocation] = useState(null)
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [activitySelect, setActivitySelect] = useState(null)
  const [allowedGeoLocation, setAllowedGeoLocation] = useState(false)
  const [zoom, setZoom] = useState(13)
  const [prevCenter, setPrevCenter] = useState([null, null])
  const [prevZoom, setPrevZoom] = useState(null)

  const onActivityChange = (e) => {
    setActivitySelect(e.target.value)
  }

  const onMarkerClick = (marker) => {
    setPrevCenter(center)
    setPrevZoom(zoom)
    setSelectedMarker(marker)
    setCenter([marker.location.latitude, marker.location.longitude])
    setZoom(16.5)
  }

  const onMapClick = () => {
    setSelectedMarker(null)

    setCenter(prevCenter)
    setZoom(prevZoom)
  }

  useEffect(() => {
    if (!isLoadingActivities) {
      const activitiesWithValue = [firstData, ...activitiesApi].map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesWithValue)

      initialState.activity = activitiesWithValue[0].value
      setActivitySelect(initialState.activity)
    }
  }, [activitiesApi, isLoadingActivities])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const userCoords = [position.coords.latitude, position.coords.longitude]
        setUserLocation(userCoords)
        setCenter(userCoords) // Set center to user's location
        setAllowedGeoLocation(true)
      },
      function (error) {
        console.error('Error Code = ' + error.code + ' - ' + error.message)
      },
      {
        enableHighAccuracy: true,
      }
    )
  }, [])

  return (
    <Wrapper>
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={false}
        eventHandlers={{ click: onMapClick }}
        style={{ width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=aSetRCOQl0G3zH75uVIo4ZLmnMUgiP4uy5ss8IrkciB6DUwX8HUzf3he3SBU7Ppi"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <MarkerClusterGroup
          // chunkedLoading
          // removeOutsideVisibleBounds
          // showCoverageOnHover
          // maxClusterRadius={30}

          chunkedLoading
          removeOutsideVisibleBounds
        >
          {!isLoadingPosts &&
            isSuccessPosts &&
            posts
              .filter(
                (marker) =>
                  activitySelect === 'Wszystkie' || marker.activity.name === activitySelect
              )
              .map((marker, key) => (
                <Marker
                  key={key}
                  position={[marker.location.latitude, marker.location.longitude]}
                  icon={getIcon(marker.activity.name)}
                  eventHandlers={{ click: () => onMarkerClick(marker) }}
                />
              ))}
        </MarkerClusterGroup>
        {allowedGeoLocation && userLocation && (
          <Marker position={userLocation} icon={getIcon('user')} />
        )}{' '}
        <UpdateCenter
          center={center}
          zoom={zoom}
          setPrevCenter={setPrevCenter}
          setPrevZoom={setPrevZoom}
        />
      </MapContainer>

      <OverlayRight>
        <Filters>
          {!isLoadingActivities && isSuccessActivities && (
            <Select
              name="activitySelect"
              id="activitySelect"
              value={activitySelect || ''}
              onChange={onActivityChange}
            >
              {activities}
            </Select>
          )}
        </Filters>
      </OverlayRight>

      {selectedMarker && <MapPopup onCloseClick={onMapClick} selectedMarker={selectedMarker} />}
    </Wrapper>
  )
}

export default Map
