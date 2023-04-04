import { useState } from 'react'
import Modal from '@/components/organism/Modal/Modal'

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [position, setPosition] = useState({ x: 0, y: 0, positioning: 'center' })

  const handleOpenAndPositionModal = ({ x, y, height }, positioning) => {
    setPosition({ x, y: y + height + 10, positioning })
    setIsOpen(true)
  }

  const handleCloseModal = () => setIsOpen(false)

  return {
    Modal,
    position,
    isOpen,
    handleCloseModal,
    handleOpenAndPositionModal,
  }
}

export default useModal
