import { useEffect, useRef, useState } from 'react'
import Modal from '@/components/organism/Modal/Modal'

const useModal = (initialValue = false, isHeaderSearchBar = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [position, setPosition] = useState({ x: 0, y: 0, positioning: 'center' })
  const [marginTop, setMarginTop] = useState(0)
  const modalOpenElementRef = useRef(null)

  const handleOpenAndPositionModal = (ref, positioning, margin = 70) => {
    // 10 because its space between element and modal, 70 because its height of HeaderSearchBar
    const { x, height } = ref.current.getBoundingClientRect()
    const { offsetTop } = ref.current
    setMarginTop(margin)
    isHeaderSearchBar
      ? setPosition({ x, y: offsetTop + height + 10, positioning })
      : setPosition({ x, y: offsetTop + height + 10 + marginTop, positioning })

    setIsOpen(true)
  }

  const handleCloseModal = (e) => {
    setIsOpen(false)
  }

  useEffect(() => {
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
            y: offsetTop + height + 10 + marginTop,
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
