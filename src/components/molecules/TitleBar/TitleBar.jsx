import { useState } from 'react'

import PropTypes from 'prop-types'

import { Alert } from '@/components/atoms/Alert/Alert'
import { Title } from '@/components/atoms/Title/Title.styles'
import useModal from '@/hooks/useModal'

import { CitySelect } from '../CitySelect/CitySelect'
import { Wrapper } from './TitleBar.styles'

export const TitleBar = ({ children, className, isBold, hasCityChanged }) => {
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'center'

  const handleOpenSelectCityModal = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const [showAlert, setShowAlert] = useState(false)

  const handleCitySelected = () => {
    hasCityChanged(true)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
      hasCityChanged(false)
    }, 3000)
  }

  return (
    <Wrapper className={className}>
      <Title
        isBig
        isBold
        onClick={(e) => handleOpenSelectCityModal(e)}
        ref={modalOpenElementRef}
        tabIndex={0}
      >
        {children}
      </Title>
      {isOpen ? (
        <Modal
          handleClose={handleCloseModal}
          position={position}
          isModal
          hasBackgroundColor
          isFixed
        >
          <CitySelect handleClose={handleCloseModal} handleSubmit={handleCitySelected} />
        </Modal>
      ) : null}
      <Alert message="Twoje miasto zostało zaktualizowane" show={showAlert} />
    </Wrapper>
  )
}

TitleBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
}
