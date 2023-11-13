import axios from 'axios'

export function getUserCity() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
        .then((response) => {
          let city =
            response.data.address.city ||
            response.data.address.town ||
            response.data.address.village
          resolve(city)
        })
        .catch((error) => {
          console.error('Error:', error)
          reject(error)
        })
    })
  })
}
