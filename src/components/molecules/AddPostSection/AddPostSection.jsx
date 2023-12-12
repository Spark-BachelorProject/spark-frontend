import Avvvatars from 'avvvatars-react'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import CreatePost from '@/components/organism/CreatePost/CreatePost'
import { getInitials } from '@/helpers/stringOperations'
import useModal from '@/hooks/useModal'
import { useGetUserQuery } from '@/store/api/user'

import { StyledInput, Wrapper } from './AddPostSection.styles'

export const AddPostSection = () => {
  const {
    data: { firstName, lastName },
  } = useGetUserQuery()
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
        <Avvvatars value={getInitials(firstName, lastName)} size={30} />
        <StyledInput>Zaproś znajomych do gry!</StyledInput>
        <Button isGray>Dodaj</Button>
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
