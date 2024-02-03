import { Icon } from 'leaflet'

import { replacePolishChars } from '@/helpers/replacePolishChars'

const iconFiles = import.meta.glob('@assets/markers/*.{svg,jpg,jpeg,SVG,JPEG}', {
  eager: true,
  as: 'url',
})

const iconFilesInIcons = import.meta.glob('@assets/icons/*.{svg,jpg,jpeg,SVG,JPEG}', {
  eager: true,
  as: 'url',
})

export const getIcon = (name) => {
  const asciiName = replacePolishChars(name)
  const iconUrl = iconFiles[`/src/assets/markers/${asciiName}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${asciiName}`)
    return null
  }

  return new Icon({
    iconUrl: iconUrl,
    iconSize: [55, 55],
    iconAnchor: [26, 44], //controls the position of the icon while zoooming out [height, width]
  })
}

export const getIconUrl = (name) => {
  const asciiName = replacePolishChars(name)
  const iconUrl = iconFiles[`/src/assets/markers/${asciiName}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for activity: ${asciiName}`)
    return null
  }

  return iconUrl
}

export const getIconUrlInIconsFolder = (name) => {
  const asciiName = replacePolishChars(name)
  const iconUrl = iconFilesInIcons[`/src/assets/icons/${asciiName}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for: ${asciiName}`)
    return null
  }

  return iconUrl
}
