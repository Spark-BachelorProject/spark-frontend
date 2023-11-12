import { useEffect, useRef, useState } from 'react'

import Popup from '@/components/organism/Popup/Popup'

const usePopup = (initialValue = false, isHeaderSearchBar = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [position, setPosition] = useState({ x: 0, y: 0, positioning: 'center' })
  const popupOpenElementRef = useRef(null)

  const handleOpenAndPositionPopup = (ref, positioning) => {
    // 10 because its space between element and modal, 70 because its height of HeaderSearchBar
    // to element which show and disappear on hover, pass as ref e.target!!!
    let x, height, offsetTop
    if (ref.current) {
      ;({ x, height } = ref.current.getBoundingClientRect())
      offsetTop = ref.current.offsetTop
    } else {
      ;({ x, height } = ref.getBoundingClientRect())
      offsetTop = ref.offsetTop
    }

    isHeaderSearchBar
      ? setPosition({ x, y: offsetTop + height + 10, positioning })
      : setPosition({ x, y: offsetTop + height + 10 + 70, positioning })

    setIsOpen(true)
  }

  const handleClosePopup = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!popupOpenElementRef.current) return
    const handleResize = () => {
      const { x, height } = popupOpenElementRef.current.getBoundingClientRect()
      const { offsetTop } = popupOpenElementRef.current
      // 10 because its space between element and modal, 70 because its height of HeaderSearchBar
      isHeaderSearchBar
        ? setPosition((prev) => ({
            ...prev,
            x,
            y: offsetTop + height + 10,
          }))
        : setPosition((prev) => ({
            ...prev,
            x,
            y: offsetTop + height + 10 + 70,
          }))
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [isHeaderSearchBar])
  return {
    Popup,
    position,
    isOpen,
    handleClosePopup,
    handleOpenAndPositionPopup,
    popupOpenElementRef,
  }
}

export default usePopup
