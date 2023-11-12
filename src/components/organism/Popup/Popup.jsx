import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { PopupBackground, PopupWrapper } from './Popup.styles'

const popupContainer = document.getElementById('popup-container')

const Popup = ({ handleClose, children, position, isFixed, hasNoPadding, hasNoBackground }) => {
  const popupNode = document.createElement('div')
  const [popupNum, setPopupNum] = useState(
    document.querySelectorAll('#popup-container > div').length
  )

  useEffect(() => {
    popupContainer.appendChild(popupNode)
    setPopupNum((prev) => ++prev)

    return () => {
      popupContainer.removeChild(popupNode)
      setPopupNum((prev) => --prev)
    }
  }, [popupNode])

  return ReactDOM.createPortal(
    <>
      {hasNoBackground ? null : <PopupBackground onClick={handleClose} popupNum={popupNum} />}
      <PopupWrapper
        position={position || { x: 0, y: 0, positioning: 'center' }}
        popupNum={popupNum}
        isFixed={isFixed}
        hasNoPadding={hasNoPadding}
      >
        {children}
      </PopupWrapper>
    </>,
    popupNode
  )
}

export default Popup
