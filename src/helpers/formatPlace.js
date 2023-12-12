export function formatPlace(name, street, number, area, cityName) {
  let formattedPlace = ''

  if (name) {
    formattedPlace =
      street && number
        ? `${name}, ${street}, ${area ? area + ',' : ''} ${cityName}`
        : `${name}, ${area ? area + ',' : ''} ${cityName}`
  } else {
    formattedPlace = street
      ? `${street} ${number}, ${area ? area + ',' : ''} ${cityName}`
      : number
      ? `${number}, ${cityName}`
      : cityName
  }

  return formattedPlace
}
