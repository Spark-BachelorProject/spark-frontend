//this is stupid but does the job
function replacePolishChars(str) {
  const polishToAscii = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
    Ą: 'A',
    Ć: 'C',
    Ę: 'E',
    Ł: 'L',
    Ń: 'N',
    Ó: 'O',
    Ś: 'S',
    Ź: 'Z',
    Ż: 'Z',
  }

  return str.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, (match) => polishToAscii[match])
}

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
