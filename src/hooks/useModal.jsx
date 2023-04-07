import { useEffect, useRef, useState } from 'react'
import Modal from '@/components/organism/Modal/Modal'

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [position, setPosition] = useState({ x: 0, y: 0, positioning: 'center' })
  const modalOpenElementRef = useRef(null)

  const handleOpenAndPositionModal = ({ x, y, height }, positioning) => {
    setPosition({ x, y: y + height + 10, positioning })
    setIsOpen(true)
  }

  const handleCloseModal = () => setIsOpen(false)

  useEffect(() => {
    const handleResize = () => {
      const { x, y, height } = modalOpenElementRef.current.getBoundingClientRect()
      setPosition((prev) => ({ ...prev, x, y: y + height + 10 }))
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
