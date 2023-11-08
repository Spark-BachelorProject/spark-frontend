import React, { useEffect, useMemo, useState } from 'react'

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import Select from '@/components/atoms/Select/Select'
import Filters from '@/components/organism/Filters/Filters'
import useModal from '@/hooks/useModal'
import { useGetActivitiesQuery } from '@/store/api/activities'
import { useLazyGetFilteredPostsQuery } from '@/store/api/posts'

import { Wrapper, ButtonsWrapper, SelectButtonsWrapper, StyledIconBorder } from './Dropdown.styles'

// TODO: Seperate to redux
// TODO: After adding filter seperate this to molecule

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
// DO NOT CHANGE ID FIRST DATA TO ANYTHING ELSE THAN 0
export const Dropdown = ({ data, setPosts }) => {
  const { data: activitiesApi, isLoading } = useGetActivitiesQuery()
  const [state, setState] = useState(initialState)
  const [activities, setActivities] = useState([])

  // TODO: search about useMemo and useCallback and spearate this to Dropdown
  const [filteredString, setFilteredString] = useState('')
  const [trigger, result] = useLazyGetFilteredPostsQuery()

  const memoizedResult = useMemo(() => result, [result.data, result.isSuccess])

  useEffect(() => {
    // its return everything
    if (filteredString === 'activity=0') {
      setPosts(data)
      return
    } else {
      // filter data
      trigger(filteredString)
    }
    if (memoizedResult.isSuccess) {
      setPosts(memoizedResult.data)
    } else if (filteredString !== 'activity=0') {
      setPosts(data)
    }
  }, [filteredString, memoizedResult, data, trigger, setPosts])

  // add activity to filter
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
      setFilteredString(`activity=${selectedActivityId}`)
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
