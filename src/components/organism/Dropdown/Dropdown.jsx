import React, { useEffect, useState } from 'react'

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import Select from '@/components/atoms/Select/Select'
import Filters from '@/components/organism/Filters/Filters'
import useModal from '@/hooks/useModal'
import { useGetActivitiesQuery } from '@/store/api/activities'

import { Wrapper, ButtonsWrapper, SelectButtonsWrapper, StyledIconBorder } from './Dropdown.styles'

// TODO: Seperate to redux
// TODO: After adding filter seperate this to molecule
const activity = [
  {
    value: 'favourite',
    text: 'Ulubione',
  },
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

const initialState = {
  activity: '',
  sort: '',
}

// TODO: On Esc close modal
//TODO: !!! Add all to filters
export const Dropdown = ({ filteredString, setFilteredString, onHandleFilters }) => {
  const { data: activitiesApi, isLoading } = useGetActivitiesQuery()
  const [state, setState] = useState(initialState)
  const [activities, setActivities] = useState([])

  const firstData = {
    value: 'Wszystkie',
    text: 'Wszystkie',
    name: 'Wszystkie',
    id: 0,
  }

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

  // useEffect(() => {
  //   if (!isLoading) {
  //     const selectedActivityId = activities.find((activity) => activity.name === state.activity)?.id

  //     setFilteredString(`activity=${selectedActivityId}`)
  //     // console.log('ciucie')
  //   }
  // }, [state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    if (name === 'activity') {
      const selectedActivityId = activities.find((activity) => activity.value === value).id
      setFilteredString(`activity=${selectedActivityId}`)

      // onHandleFilters()
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

  return (
    <Wrapper>
      <ButtonsWrapper>
        <SelectButtonsWrapper>
          {!isLoading && (
            <>
              <Select name="activity" id="activity" value={state.activity} onChange={handleChange}>
                {activities}
              </Select>
              {/* <Select name="sort" id="sort" value={sortSelect} onChange={handleChange}>
                {state.sort}
              </Select> */}
            </>
          )}
          {/* {!!filteredString ? <button onClick={onHandleFilters}>Zastosuj</button> : null} */}
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
          hasCloseButton
          width="medium"
        >
          <Filters />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
