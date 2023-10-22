import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { Button } from '@/components/atoms/Button/Button.styles'

import { ModalBackground, ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')

// TODO: consider replacing isModal to isCenter, and refactor code to popUp instead of Modal
const Modal = ({
  textOnClose,
  handleClose,
  children,
  position,
  hasCloseButton,
  width,
  isFixed,
  hasNoPadding,
  hasNoBackground,
  isModal,
  hasBackgroundColor,
}) => {
  const modalNode = document.createElement('div')
  const [modalNum, setModalNum] = useState(
    document.querySelectorAll('#modal-container > div').length
  )

  useEffect(() => {
    modalContainer.appendChild(modalNode)
    setModalNum((prev) => ++prev)

    return () => {
      modalContainer.removeChild(modalNode)
      setModalNum((prev) => --prev)
    }
  }, [modalNode])

  // hasNoBackground prevents rendering element, hasBackgroundColor refers to color
  return ReactDOM.createPortal(
    <>
      {hasNoBackground ? null : (
        <ModalBackground
          hasBackgroundColor={hasBackgroundColor}
          onClick={handleClose}
          modalNum={modalNum}
          isFixed={isFixed}
        />
      )}
      <ModalWrapper
        position={position || { x: 0, y: 0, positioning: 'center' }}
        width={width}
        modalNum={modalNum}
        isFixed={isFixed}
        hasNoPadding={hasNoPadding}
        isModal={isModal}
      >
        {children}
        {hasCloseButton ? <Button onClick={handleClose}>{textOnClose}</Button> : null}
      </ModalWrapper>
    </>,
    modalNode
  )
}

export default Modal
