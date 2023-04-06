import { Button } from '@/components/atoms/Button/Button.styles'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalBackground, ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')

//TODO: Second  enter click on opening button  should close modal
const Modal = ({ textOnClose, handleClose, children, position, hasCloseButton, width }) => {
  const modalNode = document.createElement('div')

  useEffect(() => {
    modalContainer.appendChild(modalNode)
    return () => {
      modalContainer.removeChild(modalNode)
    }
  }, [modalNode])

  return ReactDOM.createPortal(
    <>
      <ModalBackground onClick={handleClose} />
      <ModalWrapper position={position} width={width}>
        {children}
        {hasCloseButton ? <Button onClick={handleClose}>{textOnClose}</Button> : null}
      </ModalWrapper>
    </>,
    modalNode
  )
}

export default Modal
