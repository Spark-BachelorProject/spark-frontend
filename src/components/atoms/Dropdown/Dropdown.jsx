import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  padding: 0 20px;
  justify-content: center;
`

export const ButtonsWrapper = styled.div`
  width: ${({ theme }) => theme.breakPoints.mobile};
  display: flex;
  justify-content: space-between;
`

export const SelectButtonsWrapper = styled.div`
  display: flex;
`

export const Select = styled.select`
  height: 35px;
  width: auto;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.selectFont};
  padding: 5px 15px;
  margin-right: 5px;
  font-size: 13px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px 0px;
  }
`

export const Dropdown = () => {
  return (
    <>
      <Wrapper>
        <ButtonsWrapper>
          <SelectButtonsWrapper>
            <Select name="activitySelect" id="activitySelect">
              <option value="football">Piłka Nożna</option>
              <option value="volleyball">Siatkówka</option>
              <option value="squash">Squash</option>
            </Select>
            <Select name="sortSelect" id="sortSelect">
              <option value="new">Najnowsze</option>
              <option value="hot">Gorące</option>
              <option value="nearest">Najbliżej</option>
            </Select>
          </SelectButtonsWrapper>
          {/*miejsce na filtr*/}
        </ButtonsWrapper>
      </Wrapper>
    </>
  )
}
