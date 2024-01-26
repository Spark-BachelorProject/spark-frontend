export function formatPlace(area, name, street, number, cityName) {
  let formattedPlace = ''

  if (name) {
    formattedPlace =
      street && number
        ? `${area ? area + ',' : ''} ${name}, ${street},  ${cityName}`
        : ` ${area ? area + ',' : ''} ${name}, ${cityName}`
  } else {
    formattedPlace = street
      ? `${area ? area + ',' : ''} ${street} ${number},  ${cityName}`
      : number
      ? `${number}, ${cityName}`
      : cityName
  }

  return formattedPlace
}
