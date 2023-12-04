import { Icon } from 'leaflet'

const iconFiles = import.meta.glob('@assets/markers/*.{svg,jpg,jpeg,SVG,JPEG}', {
  eager: true,
  as: 'url',
})

export const getIcon = (activityId) => {
  const iconUrl = iconFiles[`/src/assets/markers/${activityId}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${activityId}`)
    return null
  }

  return new Icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [22, 40],
  })
}

export const getIconUrl = (activityId) => {
  const iconUrl = iconFiles[`/src/assets/markers/${activityId}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${activityId}`)
    return null
  }

  return iconUrl
}
