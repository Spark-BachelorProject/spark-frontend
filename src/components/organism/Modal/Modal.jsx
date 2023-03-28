import { Button } from '@/components/atoms/Button/Button.styles'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')

const Modal = ({ textOnClose, handleClose, children }) => {
  const modalNode = document.createElement('div')

  useEffect(() => {
    modalContainer.appendChild(modalNode)
    return () => {
      modalContainer.removeChild(modalNode)
    }
  }, [modalNode])

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>{textOnClose}</Button>
    </ModalWrapper>,
    modalNode
  )
}

export default Modal
