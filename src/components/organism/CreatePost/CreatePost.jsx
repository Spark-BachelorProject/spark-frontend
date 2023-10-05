import React, { useState } from 'react'

import styled from 'styled-components'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

//TODO: add map

export const NextArrowIcon = styled(ExpandVectorIcon)`
  transform: rotate(-90deg);
  scale: 1.5;
  margin: 0 0 2px 4px;

  & > path {
    top: -10px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-width: 50vw;
  /* min-height: 40vh; */
  padding: 16px 28px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.postBorder};

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > svg {
    cursor: pointer;
    scale: 1.5;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  // the same line
  justify-content: space-between;
  padding-top: 16px;
`

export const ProgressSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.colors.buttonBg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
`

export const InputsWrapper = styled.div`
  display: grid;
  margin-top: 16px;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  grid-template-areas:
    'input1 input1'
    'select1 map'
    'select2 map'
    'select3 map'
    'input5 map'
    'input6 input6';

  & > select {
    background-color: ${({ theme }) => theme.colors.inputBg};
    margin: 0;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.inputFont};
  }
`

export const StyledInput1 = styled(Input)`
  grid-area: input1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 30px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.redFont};
    top: 10px;
    z-index: 2;
  }
`

export const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonBg};
`

const visibility = [
  {
    value: 'public',
    text: 'Public',
  },
  {
    value: 'onlyFriends',
    text: 'Tylko znajomi',
  },
  {
    value: 'group',
    text: 'Grupa',
  },
]

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

const places = [
  {
    value: 'Lublin',
    text: 'Lublin',
  },
  {
    value: 'Swidnik',
    text: 'Świdnik',
  },
  {
    value: 'Konopnica',
    text: 'Konopnica',
  },
]

const CreatePost = ({ handleClose }) => {
  const [visibilitySelect, setVisibilitySelect] = useState(visibility[0].value)
  const [activitySelect, setActivitySelect] = useState(activity[0].value)
  const [placesSelect, setPlacesSelect] = useState(places[0].value)

  const visibilityHandle = (e) => {
    setVisibilitySelect(e.target.value)
  }
  const activityHandle = (e) => {
    setActivitySelect(e.target.value)
  }

  const placesHandle = (e) => {
    setPlacesSelect(e.target.value)
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <div>
          <Title isBig>Dodawanie postu</Title>
          <ProgressSpan>16%</ProgressSpan>
        </div>
        <XIcon onClick={handleClose} />
      </HeaderWrapper>
      <InputsWrapper>
        <StyledInput1
          style={{ gridArea: 'input1' }}
          placeholder="Tytuł spotkania"
          maxLength="120"
        />
        <Select
          style={{ gridArea: 'select1' }}
          name="visibilitySelect"
          id="visibilitySelect"
          value={visibilitySelect}
          onChange={visibilityHandle}
        >
          {visibility}
        </Select>
        <Select
          style={{ gridArea: 'select2' }}
          name="activitySelect"
          id="activitySelect"
          value={activitySelect}
          onChange={activityHandle}
        >
          {activity}
        </Select>

        <Select
          style={{ gridArea: 'select3' }}
          name="placesSelect"
          id="placesSelect"
          value={placesSelect}
          onChange={placesHandle}
        >
          {places}
        </Select>
        <Input style={{ gridArea: 'input5' }} placeholder="Data" type="date" />
        <Input style={{ gridArea: 'input6' }} />
        <div style={{ gridArea: 'map', backgroundColor: 'pink' }}></div>
      </InputsWrapper>
      <FooterWrapper>
        <StyledText as={'a'}>Wiecej szczegółów</StyledText>
        <Button>
          Dalej <NextArrowIcon />
        </Button>
      </FooterWrapper>
    </Wrapper>
  )
}

export default CreatePost
