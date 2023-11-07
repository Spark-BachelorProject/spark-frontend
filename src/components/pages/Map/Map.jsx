import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

import 'leaflet/dist/leaflet.css'

import Select from '@/components/atoms/Select/Select'
import { Text } from '@/components/atoms/Text/Text.styles'
import { MapPopup } from '@/components/organism/MapPopup/MapPopup'

import { Filters, MapLegend, MapLegendItem, OverlayRight, Wrapper } from './Map.styles'
import './Map.styles.css'
import { getIcon, getIconUrl } from './customIcons'
import { activities, cities, markers, translations } from './data'

const UpdateCenter = ({ center }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center)
  }, [center, map])
  return null
}

export const Map = () => {
  const chosenCity = 'Lublin'
  const chosenCityCoordinates = cities.find((city) => city.name === chosenCity).cordinates
  const [center, setCenter] = useState([chosenCityCoordinates.lat, chosenCityCoordinates.lng])
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [showOverlay, setShowOverlay] = useState(false)
  const [activitySelect, setActivitySelect] = useState(activities[0].value)
  const [activitiesAddedToLegend, setActivitiesAddedToLegend] = useState([])

  const activityHandle = (e) => {
    setActivitySelect(e.target.value)
  }

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker)
    setShowOverlay(true)
  }

  const onMapClick = () => {
    setSelectedMarker(null)
    setShowOverlay(false)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCenter([position.coords.latitude, position.coords.longitude])
      },
      function (error) {
        console.error('Error Code = ' + error.code + ' - ' + error.message)
      },
      {
        enableHighAccuracy: true,
      }
    )
    const uniqueActivities = [...new Set(markers.map((marker) => marker.activity))]
    setActivitiesAddedToLegend(uniqueActivities)
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
          {markers
            .filter((marker) => activitySelect === 'all' || marker.activity === activitySelect)
            .map((marker, key) => (
              <Marker
                key={key}
                position={[marker.cordinates.lat, marker.cordinates.lng]}
                icon={getIcon(marker.activity)}
                eventHandlers={{ click: () => onMarkerClick(marker) }}
                style
              ></Marker>
            ))}
        </MarkerClusterGroup>
        <UpdateCenter center={center} />
      </MapContainer>

      <OverlayRight>
        <Filters>
          <Select
            name="activitySelect"
            id="activitySelect"
            value={activitySelect}
            onChange={activityHandle}
          >
            {activities}
          </Select>
        </Filters>
      </OverlayRight>

      <MapLegend>
        {activitiesAddedToLegend.map((activity, index) => (
          <MapLegendItem key={index}>
            <img src={getIconUrl(activity)} height={30} alt="Activity Marker" />
            {translations.map((translation) => {
              if (translation.original === activity) {
                return (
                  <Text isBold key={index}>
                    {translation.polish}
                  </Text>
                )
              }
              return null
            })}
          </MapLegendItem>
        ))}
      </MapLegend>

      {selectedMarker && showOverlay && (
        <MapPopup
          onCloseClick={onMapClick}
          author={selectedMarker.author}
          createdAt={selectedMarker.createdAt}
          activity={selectedMarker.activity}
          date={selectedMarker.date}
          time={selectedMarker.time}
          tags={selectedMarker.tags}
          title={selectedMarker.title}
        />
      )}
    </Wrapper>
  )
}

export default Map
