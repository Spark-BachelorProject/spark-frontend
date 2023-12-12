import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as BusIcon } from '@/assets/icons/bus.svg'
import { usePutOneBookmarkedPostMutation } from '@/store/api/user'

import { StyledText, Wrapper, StyledGoogleIcon } from './MoreInfoPost.styles'

const getUserCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve([position.coords.latitude, position.coords.longitude])
      },
      (error) => {
        reject(error)
      }
    )
  })
}

const checkGeolocationPermission = async () => {
  const permission = await navigator.permissions.query({ name: 'geolocation' })
  return permission.state !== 'denied'
}

const formatDateAndTime = (dateStart) => {
  const date = new Date(dateStart)
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear().toString().slice(-2)
  const formattedDate = `${day}.${month}.${year}`

  const hour = ('0' + date.getHours()).slice(-2)
  const minute = ('0' + date.getMinutes()).slice(-2)
  const formattedTime = `${hour}:${minute}`

  return { formattedDate, formattedTime }
}

export const MoreInfoPost = ({ postId, handleClosePopup, location, dateStart }) => {
  const [putOneBookmarkedPost] = usePutOneBookmarkedPostMutation()

  const handleSavePost = async () => {
    try {
      await putOneBookmarkedPost(postId)
      handleClosePopup()
    } catch (error) {
      console.error('Error saving post:', error)
    }
  }

  const handleOpenGoogleMapsRoute = async () => {
    if (!(await checkGeolocationPermission())) return

    try {
      const userCoordinates = await getUserCoordinates()
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${userCoordinates[0]},${userCoordinates[1]}&destination=${location.latitude},${location.longitude}`
      )
    } catch (error) {
      console.error('Error opening Google Maps:', error)
    }
  }

  const handleOpenJakdojadeRoute = async () => {
    if (!(await checkGeolocationPermission())) return

    try {
      const userCoordinates = await getUserCoordinates()
      const { formattedDate, formattedTime } = formatDateAndTime(dateStart)

      const url = new URL('https://jakdojade.pl/lublin')
      url.searchParams.append('fc', `${userCoordinates[0]}:${userCoordinates[1]}`)
      url.searchParams.append('tc', `${location.latitude}:${location.longitude}`)
      url.searchParams.append('d', formattedDate)
      url.searchParams.append('h', formattedTime)
      url.searchParams.append('ia', 'true')

      window.open(url.toString())
    } catch (error) {
      console.error('Error opening Jakdojade:', error)
    }
  }

  return (
    <Wrapper>
      <StyledText onClick={handleSavePost}>
        <BookmarkIcon style={{ width: '17px' }} />
        Zapisz post
      </StyledText>
      <StyledText onClick={handleOpenJakdojadeRoute}>
        <BusIcon style={{ width: '15px', height: '15px' }} />
        Pokaż trasę w Jakdojadę
      </StyledText>
      <StyledText onClick={handleOpenGoogleMapsRoute}>
        <StyledGoogleIcon style={{ width: '17px' }} />
        Pokaż trasę w Google
      </StyledText>
    </Wrapper>
  )
}
