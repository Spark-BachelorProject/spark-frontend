import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as BusIcon } from '@/assets/icons/bus.svg'
import { checkGeolocationPermission } from '@/helpers/checkGeolocationPermission'
import { formatDateAndTimeJakdojadeFormat } from '@/helpers/dateAndTime'
import { getUserCoordinates } from '@/helpers/getUserCoordinates'
import { usePutOneBookmarkedPostMutation } from '@/store/api/user'

import { StyledGoogleIcon, StyledText, Wrapper } from './MoreInfoPost.styles'

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
      const { formattedDate, formattedTime } = formatDateAndTimeJakdojadeFormat(dateStart)

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
