import React from 'react'

import { Button } from '@/components/atoms/Button/Button.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import useModal from '@/hooks/useModal'

import { Wrapper, InputDummy } from './AddPostDummy.styles'

export const AddPostDummy = () => {
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
        <InputDummy>Zaproś znajomych do gry</InputDummy>
        <Button>Dodaj</Button>
      </Wrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal} position={position} isFixed>
          Dodaj post
        </Modal>
      ) : null}
    </>
  )
}
