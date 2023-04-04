import React, { useState } from 'react'
import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import { Wrapper, ButtonsWrapper, SelectButtonsWrapper, StyledIconBorder } from './Dropdown.styled'
import Select from '@/components/atoms/Select/Select'
import useModal from '@/hooks/useModal'
import Filters from '@/components/organism/Filters/Filters'

// TODO: Seperate to redux
// TODO: After adding filter seperate this to molecule
const activity = [
  {
    value: 'football',
    text: 'Piłka Nożna',
  },
  {
    value: 'volleyball',
    text: 'Siatkówka',
  },
  {
    value: 'squash',
    text: 'Squash',
  },
]

const sort = [
  {
    value: 'new',
    text: 'Najnowsze',
  },
  {
    value: 'hot',
    text: 'Gorące',
  },
  {
    value: 'nearest',
    text: 'Najbliżej',
  },
]

// TODO: On Esc close modal

export const Dropdown = () => {
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const [activitySelect, setActivitySelect] = useState(activity[0].value)
  const [sortSelect, setSortSelect] = useState(sort[0].value)
  const positioning = 'right'

  const activityHandle = (e) => {
    setActivitySelect(e.target.value)
  }

  const sortHandle = (e) => {
    setSortSelect(e.target.value)
  }

  const handleOpenFilterPopup = () => {
    const { x, y, height } = modalOpenElementRef.current.getBoundingClientRect()
    handleOpenAndPositionModal({ x, y, height }, positioning)
  }

  const handleCloseFilterPopup = (e) => {
    if (e.key !== 'Tab') {
      const { x, y, height } = modalOpenElementRef.current.getBoundingClientRect()
      handleOpenAndPositionModal({ x, y, height }, positioning)
    }
  }

  return (
    <Wrapper>
      <ButtonsWrapper>
        <SelectButtonsWrapper>
          <Select
            name="activitySelect"
            id="activitySelect"
            value={activitySelect}
            onChange={activityHandle}
          >
            {activity}
          </Select>
          <Select name="sortSelect" id="sortSelect" value={sortSelect} onChange={sortHandle}>
            {sort}
          </Select>
        </SelectButtonsWrapper>
        <StyledIconBorder
          tabIndex="0"
          onClick={handleOpenFilterPopup}
          onKeyDown={handleCloseFilterPopup}
          ref={modalOpenElementRef}
        >
          <FilterIcon />
        </StyledIconBorder>
      </ButtonsWrapper>
      {isOpen ? (
        <Modal
          handleClose={handleCloseModal}
          position={position}
          textOnClose="Zapisz"
          hasSaveButton
        >
          <Filters />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
