import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as Link } from '@/assets/icons/send-vector.svg'
import { usePutOneBookmarkedPostMutation } from '@/store/api/user'

import { StyledText, Wrapper } from './MoreInfoPost.styles'

export const MoreInfoPost = ({ postId, handleClosePopup, location }) => {
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
    try {
      const permission = await navigator.permissions.query({ name: 'geolocation' })
      if (permission.state === 'denied') {
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates = [position.coords.latitude, position.coords.longitude]
          window.open(
            `https://www.google.com/maps/dir/?api=1&origin=${userCoordinates[0]},${userCoordinates[1]}&destination=${location.latitude},${location.longitude}`
          )
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    } catch (error) {
      console.error('Error opening Google Maps:', error)
    }
  }

  return (
    <Wrapper>
      {/* <StyledText>
        <CopyIcon />
        Skopiuj link
      </StyledText> */}
      <StyledText onClick={handleSavePost}>
        <BookmarkIcon />
        Zapisz post
      </StyledText>
      <StyledText onClick={handleOpenGoogleMapsRoute}>
        <Link style={{ width: '17px' }} />
        Pokaż trasę do spotkania
      </StyledText>
      {/* <StyledText>
        <BellIcon />
        Włącz powiadomienia
      </StyledText> */}
      {/* <StyledText>
        <DeleteIcon />
        Ukryj post
      </StyledText>
      <StyledText>
        <ReportIcon />
        Zgłoś administratorom
      </StyledText> */}
    </Wrapper>
  )
}
