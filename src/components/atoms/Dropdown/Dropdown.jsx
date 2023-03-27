import React from 'react'
import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import {
  Wrapper,
  ButtonsWrapper,
  SelectButtonsWrapper,
  Select,
  StyledIconBorder,
} from './Dropdown.styled'

export const Dropdown = () => {
  const handleSelectChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <Wrapper>
        <ButtonsWrapper>
          <SelectButtonsWrapper>
            <Select name="activitySelect" id="activitySelect" onChange={handleSelectChange}>
              <option value="football">Piłka Nożna</option>
              <option value="volleyball">Siatkówka</option>
              <option value="squash">Squash</option>
            </Select>
            <Select name="sortSelect" id="sortSelect" onChange={handleSelectChange}>
              <option value="new">Najnowsze</option>
              <option value="hot">Gorące</option>
              <option value="nearest">Najbliżej</option>
            </Select>
          </SelectButtonsWrapper>
          <StyledIconBorder tabIndex="0">
            <FilterIcon />
          </StyledIconBorder>
        </ButtonsWrapper>
      </Wrapper>
    </>
  )
}
