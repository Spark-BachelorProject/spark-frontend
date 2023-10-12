import { useState } from 'react'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { FeedbackContent } from '@/components/organism/FeedbackContent/FeedbackContent'
import useModal from '@/hooks/useModal'

import { StyledAlert, StyledButton, Wrapper } from './FeedbackSection.styles'

export const FeedbackSection = () => {
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'center'

  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const handleOpenFeedbackPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseFeedbackPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

  return (
    <Wrapper>
      <Title isBold>Twoja opinia się dla nas liczy</Title>
      <Text isBig>Daj nam znać co możemy poprawić!</Text>
      <StyledButton
        borderOnly
        onClick={(e) => handleOpenFeedbackPopup(e)}
        onKeyDown={handleCloseFeedbackPopup}
        ref={modalOpenElementRef}
        tabIndex={0}
      >
        Napisz feedback
      </StyledButton>
      <div
        onClick={(e) => handleOpenFeedbackPopup(e)}
        onKeyDown={handleCloseFeedbackPopup}
        ref={modalOpenElementRef}
        tabIndex={0}
      ></div>
      {isOpen ? (
        <Modal handleClose={handleCloseModal} position={position} isModal hasBackgroundColor>
          <FeedbackContent
            handleClose={handleCloseModal}
            setFeedbackSubmitted={setFeedbackSubmitted}
          />
        </Modal>
      ) : null}
      {feedbackSubmitted ? (
        <StyledAlert message="Twoja opinia została przesłana pomyślnie. Dziękujemy!" />
      ) : null}
    </Wrapper>
  )
}
