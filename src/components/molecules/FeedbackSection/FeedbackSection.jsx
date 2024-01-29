import { useState } from 'react'

import { Alert } from '@/components/atoms/Alert/Alert'
import { Text } from '@/components/atoms/Text/Text.styles'
import { FeedbackContent } from '@/components/organism/FeedbackContent/FeedbackContent'
import useModal from '@/hooks/useModal'

import { StyledButton, Wrapper } from './FeedbackSection.styles'

export const FeedbackSection = () => {
  const [showAlert, setShowAlert] = useState(false)

  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'center'

  const handleFeedbackSubmitted = () => {
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  const handleOpenFeedbackPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  return (
    <Wrapper>
      <Text>Twoja opinia się dla nas liczy</Text>
      <Text>Daj nam znać co możemy poprawić!</Text>
      <StyledButton
        isGray
        isBig
        borderOnly
        onClick={(e) => handleOpenFeedbackPopup(e)}
        ref={modalOpenElementRef}
        tabIndex={0}
      >
        Napisz feedback
      </StyledButton>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          handleClose={handleCloseModal}
          position={position}
          isModal
          hasBackgroundColor
          isFixed
        >
          <FeedbackContent
            handleClose={handleCloseModal}
            handleFeedbackSubmitted={handleFeedbackSubmitted}
          />
        </Modal>
      ) : null}
      <Alert message="Dziękujemy za oddanie opinii" show={showAlert} />
    </Wrapper>
  )
}
