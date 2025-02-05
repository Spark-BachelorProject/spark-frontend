import { useEffect, useRef, useState } from 'react'

import Modal from '@/components/organism/Modal/Modal'

const useModal = (initialValue = false, isHeaderSearchBar = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [position, setPosition] = useState({ x: 0, y: 0, positioning: 'center' })
  const modalOpenElementRef = useRef(null)

  const handleOpenAndPositionModal = (ref, positioning) => {
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

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!modalOpenElementRef.current) return
    const handleResize = () => {
      const { x, height } = modalOpenElementRef.current.getBoundingClientRect()
      const { offsetTop } = modalOpenElementRef.current
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
    Modal,
    position,
    isOpen,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  }
}

export default useModal
