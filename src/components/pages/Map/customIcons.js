import { Icon } from 'leaflet'

const iconFiles = import.meta.glob('@assets/markers/*.{svg,jpg,jpeg,SVG,JPEG}', {
  eager: true,
  as: 'url',
})

const iconFilesInIcons = import.meta.glob('@assets/icons/*.{svg,jpg,jpeg,SVG,JPEG}', {
  eager: true,
  as: 'url',
})

export const getIcon = (name) => {
  const iconUrl = iconFiles[`/src/assets/markers/${name}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${name}`)
    return null
  }

  return new Icon({
    iconUrl: iconUrl,
    iconSize: [55, 55],
    iconAnchor: [26, 44], //controls the position of the icon while zoooming out [height, width]
  })
}

export const getIconUrl = (name) => {
  const iconUrl = iconFiles[`/src/assets/markers/${name}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${name}`)
    return null
  }

  return iconUrl
}

export const getIconUrlInIconsFolder = (name) => {
  const iconUrl = iconFilesInIcons[`/src/assets/icons/${name}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for: ${name}`)
    return null
  }

  return iconUrl
}
