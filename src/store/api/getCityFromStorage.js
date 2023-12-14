export const getCityFromStorage = () => {
  const city = localStorage.getItem('city')
  if (city) {
    return city
  }
}
