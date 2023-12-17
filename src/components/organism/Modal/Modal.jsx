import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { useRef } from 'react'
import { ModalBackground, ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')

//TODO: Scroll the modal even if the mouse is not over it
const Modal = ({
  isOpen,
  handleClose,
  children,
  position,
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
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    modalContainer.appendChild(modalNode)
    setModalNum((prev) => ++prev)

    return () => {
      modalContainer.removeChild(modalNode)
      setModalNum((prev) => --prev)
    }
  }, [modalNode])

  const modalContentRef = useRef(null)

  // hasNoBackground prevents rendering element, hasBackgroundColor refers to color
  return ReactDOM.createPortal(
    <>
      {hasNoBackground ? null : (
        <ModalBackground
          hasBackgroundColor={hasBackgroundColor}
          onClick={handleClose}
          modalNum={modalNum}
        />
      )}
      <ModalWrapper
        ref={modalContentRef}
        position={position || { x: 0, y: 0, positioning: 'center' }}
        modalNum={modalNum}
        isFixed={isFixed}
        hasNoPadding={hasNoPadding}
        isModal={isModal}
      >
        {children}
      </ModalWrapper>
    </>,
    modalNode
  )
}

export default Modal
