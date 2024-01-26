import { useState } from 'react'

import Avvvatars from 'avvvatars-react'

import { Alert } from '@/components/atoms/Alert/Alert'
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

  const [showAlert, setShowAlert] = useState(false)

  const handlePostAdded = () => {
    setTimeout(() => {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 3000)
    }, 250)
  }

  return (
    <>
      <Wrapper
        onClick={(e) => handleOpenAddPostPopup(e)}
        onKeyDown={handleCloseAddPostPopup}
        ref={modalOpenElementRef}
      >
        <Avvvatars value={getInitials(firstName, lastName)} size={30} />
        <StyledInput>Znajdź partnerów na spotkanie...</StyledInput>
        <Alert message="Twój post został pomyślnie dodany!" show={showAlert} />
      </Wrapper>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          handleClose={handleCloseModal}
          position={position}
          isFixed
          isModal
          hasBackgroundColor
        >
          <CreatePost handleClose={handleCloseModal} handlePostAdded={handlePostAdded} />
        </Modal>
      ) : null}
    </>
  )
}
