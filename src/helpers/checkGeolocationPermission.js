export const checkGeolocationPermission = async () => {
  const permission = await navigator.permissions.query({ name: 'geolocation' })
  return permission.state !== 'denied'
}
