import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { ModalBackground, ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')

const Modal = ({
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
        />
      )}
      <ModalWrapper
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
