import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

import 'leaflet/dist/leaflet.css'

import { LublinCoordinates } from '@/assets/constants/coordinates'
import Select from '@/components/atoms/Select/Select'
import { Text } from '@/components/atoms/Text/Text.styles'
import { MapPopup } from '@/components/organism/MapPopup/MapPopup'
import { useGetActivitiesQuery } from '@/store/api/activities'
import { useGetPostsQuery } from '@/store/api/posts'

import { Filters, MapLegend, MapLegendItem, OverlayRight, Wrapper } from './Map.styles'
import './Map.styles.css'
import { getIcon, getIconUrl } from './customIcons'

const UpdateCenter = ({ center }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center)
  }, [center, map])
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
//TODO: select one marker when there are no results
export const Map = () => {
  const { data: posts, isLoading: isLoadingPosts, isSuccess: isSuccessPosts } = useGetPostsQuery()
  const {
    data: activitiesApi,
    isLoading: isLoadingActivities,
    isSuccess: isSuccessActivities,
  } = useGetActivitiesQuery()
  const [activities, setActivities] = useState([])
  const [center, setCenter] = useState([LublinCoordinates.lat, LublinCoordinates.lng])
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [activitySelect, setActivitySelect] = useState(null)
  const [allowedGeoLocation, setAllowedGeoLocation] = useState(false)

  const onActivityChange = (e) => {
    setActivitySelect(e.target.value)
  }

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker)
  }

  const onMapClick = () => {
    setSelectedMarker(null)
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
        setCenter([position.coords.latitude, position.coords.longitude])
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
        zoom={13}
        zoomControl={false}
        eventHandlers={{ click: onMapClick }}
      >
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=aSetRCOQl0G3zH75uVIo4ZLmnMUgiP4uy5ss8IrkciB6DUwX8HUzf3he3SBU7Ppi"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <MarkerClusterGroup
          chunkedLoading
          showCoverageOnHover={false}
          removeOutsideVisibleBounds
          disableClusteringAtZoom={14}
          maxClusterRadius={35}
          spiderfyOnMaxZoom={false}
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
        {allowedGeoLocation && <Marker position={center} icon={getIcon('user')} />}
        <UpdateCenter center={center} />
      </MapContainer>

      <OverlayRight>
        <Filters>
          {!isLoadingActivities && isSuccessActivities && (
            <Select
              name="activitySelect"
              id="activitySelect"
              value={activitySelect}
              onChange={onActivityChange}
            >
              {activities}
            </Select>
          )}
        </Filters>
      </OverlayRight>
      <MapLegend>
        {!isLoadingActivities &&
          isSuccessActivities &&
          activities.map((activity, index) =>
            activity.name !== 'Wszystkie' ? (
              <MapLegendItem key={index}>
                <img src={getIconUrl(activity.name)} height={30} alt={`${activity.name} Marker`} />
                <Text isBold key={index}>
                  {activity.name}
                </Text>
              </MapLegendItem>
            ) : null
          )}
        {allowedGeoLocation && (
          <MapLegendItem>
            <img src={getIconUrl('user')} height={30} alt="User Marker" />
            <Text isBold>Ty</Text>
          </MapLegendItem>
        )}
      </MapLegend>

      {selectedMarker && <MapPopup onCloseClick={onMapClick} selectedMarker={selectedMarker} />}
    </Wrapper>
  )
}

export default Map
