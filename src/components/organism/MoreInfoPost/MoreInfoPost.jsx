import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MapIcon } from '@/assets/icons/map.svg'
import { ReactComponent as Link } from '@/assets/icons/send-vector.svg'
import { ModalMap } from '@/components/molecules/ModalMap/ModalMap'
import useModal from '@/hooks/useModal'
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

  const handleOpenGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`
    )
  }

  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'center'

  const handleOpenMapModal = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseMapModal = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
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
      <StyledText onClick={(e) => handleOpenMapModal(e)} ref={modalOpenElementRef} tabIndex={0}>
        <MapIcon style={{ width: '17px' }} />
        Pokaż na mapie
      </StyledText>
      <StyledText onClick={handleOpenGoogleMaps}>
        <Link style={{ width: '17px' }} />
        Przejdź do Google Maps
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
      {isOpen ? (
        <Modal
          handleClose={handleCloseModal}
          position={position}
          isModal
          hasBackgroundColor
          isFixed
        >
          <ModalMap location={location} />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
