import React, { useEffect, useState } from 'react'

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import Select from '@/components/atoms/Select/Select'
import Filters from '@/components/organism/Filters/Filters'
import { formatDate } from '@/helpers/dateAndTime'
import useModal from '@/hooks/useModal'
import { useGetActivitiesQuery } from '@/store/api/activities'

import {
  Wrapper,
  ButtonsWrapper,
  SelectButtonsWrapper,
  StyledIconBorder,
  SecondaryButton,
} from './Dropdown.styles'

const initialState = {
  activity: '',
  sort: '',
}

const firstData = {
  value: 'Wszystkie',
  text: 'Wszystkie',
  name: 'Wszystkie',
  id: 0,
}
// TODO: search about useMemo and useCallback and spearate this to Dropdown
// DO NOT CHANGE ID FIRST DATA TO ANYTHING ELSE THAN 0
export const Dropdown = ({ setFilterOptions, filterOptions }) => {
  const { data: activitiesApi, isLoading } = useGetActivitiesQuery()
  const [state, setState] = useState(initialState)
  const [activities, setActivities] = useState([])

  useEffect(() => {
    if (!isLoading) {
      const activitiesWithValue = [firstData, ...activitiesApi].map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesWithValue)

      initialState.activity = activitiesWithValue[0].value
    }
  }, [activitiesApi, isLoading])

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    // using this to filter
    if (name === 'activity') {
      const selectedActivityId = activities.find((activity) => activity.value === value).id
      setFilterOptions((prev) => ({ ...prev, activity: selectedActivityId }))
    }
  }

  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()

  const positioning = 'right'

  const handleOpenFilterPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseFilterPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

  const handleResetFilters = () => {
    setFilterOptions((prev) => ({ ...prev, start: '', end: '' }))
  }

  return (
    <Wrapper>
      <ButtonsWrapper>
        <SelectButtonsWrapper>
          {!isLoading && (
            <>
              <Select name="activity" id="activity" value={state.activity} onChange={handleChange}>
                {activities}
              </Select>
            </>
          )}

          {filterOptions.start && (
            <SecondaryButton onClick={handleResetFilters}>
              {formatDate(filterOptions.start.split('T')[0])}
              {', '}
              {`${filterOptions.start.split('T')[1]} - ${filterOptions.end.split('T')[1]}`}{' '}
              <XIcon />
            </SecondaryButton>
          )}
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
        <Modal handleClose={handleCloseModal} position={position}>
          <Filters handleClose={handleCloseModal} setFilterOptions={setFilterOptions} />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
