import { useState } from 'react'

import { Alert } from '@/components/atoms/Alert/Alert'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
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
      <Title isBold>Twoja opinia się dla nas liczy</Title>
      <Text>Daj nam znać co możemy poprawić!</Text>
      <StyledButton
        isGray
        borderOnly
        onClick={(e) => handleOpenFeedbackPopup(e)}
        ref={modalOpenElementRef}
        tabIndex={0}
      >
        Napisz feedback
      </StyledButton>
      {isOpen ? (
        <Modal
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
      <Alert message="Dziękujemy za oddanie opinii!" show={showAlert} hasIcon />
    </Wrapper>
  )
}
