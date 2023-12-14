import axios from 'axios'

const NOMINATIM_API = 'https://nominatim.openstreetmap.org/reverse?format=json&lat='

export async function getCityFromCoordinates(latitude, longitude) {
  const response = await axios.get(
    `${NOMINATIM_API}${latitude}&lon=${longitude}&accept-language=pl`
  )

  return response.data.address.city || response.data.address.town || response.data.address.village
}
