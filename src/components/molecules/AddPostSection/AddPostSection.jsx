import React from 'react'

import { Button } from '@/components/atoms/Button/Button.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import CreatePost from '@/components/organism/CreatePost/CreatePost'
import useModal from '@/hooks/useModal'

import { Wrapper, StyledInput } from './AddPostSection.styles'

export const AddPostSection = () => {
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()

  const positioning = 'center'

  const handleOpenAddPostPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseAddPostPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }
  return (
    <>
      <Wrapper
        onClick={(e) => handleOpenAddPostPopup(e)}
        onKeyDown={handleCloseAddPostPopup}
        ref={modalOpenElementRef}
      >
        <Thumbnail />
        <StyledInput>Zaproś znajomych do gry!</StyledInput>
        <Button>Dodaj</Button>
      </Wrapper>
      {isOpen ? (
        <Modal
          handleClose={handleCloseModal}
          position={position}
          isFixed
          isModal
          hasBackgroundColor
        >
          <CreatePost handleClose={handleCloseModal} />
        </Modal>
      ) : null}
    </>
  )
}
