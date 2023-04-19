import { Button } from '@/components/atoms/Button/Button.styles'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalBackground, ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')

const Modal = ({
  textOnClose,
  handleClose,
  children,
  position,
  hasCloseButton,
  width,
  isFixed,
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

  return ReactDOM.createPortal(
    <>
      <ModalBackground onClick={handleClose} modalNum={modalNum} isFixed={isFixed} />
      <ModalWrapper position={position} width={width} modalNum={modalNum} isFixed={isFixed}>
        {children}
        {hasCloseButton ? <Button onClick={handleClose}>{textOnClose}</Button> : null}
      </ModalWrapper>
    </>,
    modalNode
  )
}

export default Modal
