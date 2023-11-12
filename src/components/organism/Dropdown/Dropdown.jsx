import React, { useEffect, useState } from 'react'

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import Select from '@/components/atoms/Select/Select'
import Filters from '@/components/organism/Filters/Filters'
import { formatDate } from '@/helpers/dateAndTime'
import usePopup from '@/hooks/usePopup'
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
    Popup,
    isOpen,
    position,
    handleClosePopup,
    handleOpenAndPositionPopup,
    popupOpenElementRef,
  } = usePopup()

  const positioning = 'right'

  const handleOpenFilterPopup = () => {
    handleOpenAndPositionPopup(popupOpenElementRef, positioning)
  }

  const handleCloseFilterPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionPopup(popupOpenElementRef, positioning)
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
          ref={popupOpenElementRef}
        >
          <FilterIcon />
        </StyledIconBorder>
      </ButtonsWrapper>
      {isOpen ? (
        <Popup handleClose={handleClosePopup} position={position}>
          <Filters handleClose={handleClosePopup} setFilterOptions={setFilterOptions} />
        </Popup>
      ) : null}
    </Wrapper>
  )
}
