import React, { useState } from 'react'
import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import { Wrapper, ButtonsWrapper, SelectButtonsWrapper, StyledIconBorder } from './Dropdown.styled'
import Select from '@/components/atoms/Select/Select'
import useModal from '@/hooks/useModal'
import FormField from '../FormField/FormField'

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

export const Dropdown = () => {
  const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal()
  const [activitySelect, setActivitySelect] = useState(activity[0].value)
  const [sortSelect, setSortSelect] = useState(sort[0].value)

  const activityHandle = (e) => {
    setActivitySelect(e.target.value)
  }

  const sortHandle = (e) => {
    setSortSelect(e.target.value)
  }

  const handleOpenFilterPopup = () => {
    console.log('piwo')
    handleOpenModal()
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
        <StyledIconBorder tabIndex="0" onClick={handleOpenFilterPopup}>
          <FilterIcon />
        </StyledIconBorder>
      </ButtonsWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal} textOnClose="Zapisz">
          {/* <label htmlFor="hours">Godziny</label>
          <div>
            <Input type="time" id="hours" />
            <Input type="time" id="hours" />
          </div> */}
          {/* <FormField id={'hours'} type={'time'}>
            Godziny
          </FormField> */}
          <FormField id={'date'} type={'date'} labelText={'Data'} />
          <FormField id={'distance'} type={'number'} labelText={'Odległość'} />
          <FormField id={'friendsOnly'} type={'checkbox'} labelText={'Tylko posty znajomych'} />
          <FormField id={'freeOnly'} type={'checkbox'} labelText={'Tylko darmowe'} />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
