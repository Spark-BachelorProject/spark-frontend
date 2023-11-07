import { Icon } from 'leaflet'

const iconFiles = import.meta.glob('@assets/markers/*.{svg,jpg,jpeg,SVG,JPEG}', {
  eager: true,
  as: 'url',
})

export const getIcon = (activity) => {
  const iconUrl = iconFiles[`/src/assets/markers/${activity}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${activity}`)
    return null
  }

  return new Icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [22, 40],
  })
}

export const getIconUrl = (activity) => {
  const iconUrl = iconFiles[`/src/assets/markers/${activity}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${activity}`)
    return null
  }

  return iconUrl
}
