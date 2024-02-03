import { replacePolishChars } from './replacePolishChars'

const iconFiles = import.meta.glob('@assets/activityIcons/*.{svg,jpg,jpeg,SVG,JPEG}', {
  eager: true,
  as: 'url',
})

export const getActivityIcon = (name) => {
  const asciiName = replacePolishChars(name)

  const iconUrl = iconFiles[`/src/assets/activityIcons/${asciiName}.svg`]

  if (!iconUrl) {
    console.warn(`Icon not found for: ${asciiName}`)
    return null
  }
  return iconUrl
}
