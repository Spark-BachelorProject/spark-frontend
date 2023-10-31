import React from 'react'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import InputWithLabel from '@/components/molecules/InputWithLabel/InputWithLabel'
import SelectWithLabel from '@/components/molecules/SelectWithLabel/SelectWithLabel'

import {
  FooterWrapper,
  HeaderWrapper,
  InputsWrapper,
  Wrapper,
  TitleWrapper,
  ButtonsWrapper,
  CancelButton,
  StyledText,
} from './CreateGroup.styles'

const visibility = [
  {
    value: 'public',
    text: 'Publiczna',
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

const cities = [
  { text: 'Warszawa', value: 'Warszawa' },
  { text: 'Kraków', value: 'Kraków' },
  { text: 'Łódź', value: 'Łódź' },
  { text: 'Wrocław', value: 'Wrocław' },
  { text: 'Poznań', value: 'Poznań' },
  { text: 'Gdańsk', value: 'Gdańsk' },
  { text: 'Lublin', value: 'Lublin' },
  { text: 'Głusk', value: 'Głusk' },
]

const activity = [
  {
    value: 'Piłka Nożna',
    text: 'Piłka Nożna',
  },
  {
    value: 'Siatkówka',
    text: 'Siatkówka',
  },
  {
    value: 'Squash',
    text: 'Squash',
  },
]

const CreateGroup = ({ handleClose }) => {
  const handleSubmit = (e) => {
    handleClose()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <HeaderWrapper>
        <TitleWrapper>
          <Title isBig isBold>
            Tworzenie Grupy
          </Title>
          <Text>Stworzenie grupy pozwoli Ci na dotarcie do wybranego grona osób</Text>
        </TitleWrapper>
        <XIcon onClick={handleClose} />
      </HeaderWrapper>
      <InputsWrapper>
        <InputWithLabel
          style={{ gridArea: 'input1' }}
          id="name"
          labelText="Nazwa"
          placeholder="Nazwa"
          required
        />
        <SelectWithLabel
          style={{ gridArea: 'select1' }}
          labelText="Miasto"
          name="citySelect"
          id="citySelect"
          selected="Miasto"
          required
        >
          {cities}
        </SelectWithLabel>
        <div style={{ gridArea: 'input2' }}>
          <InputWithLabel id="description" labelText="Opis" placeholder="Opis" required />
        </div>

        <SelectWithLabel
          style={{ gridArea: 'select2' }}
          labelText="Aktywność"
          name="activitySelect"
          id="activitySelect"
          required
        >
          {activity}
        </SelectWithLabel>
        <SelectWithLabel
          style={{ gridArea: 'select3' }}
          labelText="Widoczność"
          name="visibilitySelect"
          id="visibilitySelect"
          required
        >
          {visibility}
        </SelectWithLabel>

        {/* <Input
          style={{ gridArea: 'input1' }}
          placeholder="Nazwa"
          maxLength="100"
          name="name"
          required
        />
        <Select style={{ gridArea: 'select1' }} name="citySelect" id="citySelect">
          {cities}
        </Select> */}

        {/* <Input
          style={{ gridArea: 'input2' }}
          placeholder="Opis"
          maxLength="150"
          name="description"
          required
        /> */}
        {/* <Select style={{ gridArea: 'select2' }} name="activitySelect" id="activitySelect">
          {activity}
        </Select>
        <Select style={{ gridArea: 'select3' }} name="visibilitySelect" id="visibilitySelect">
          {visibility}
        </Select> */}
      </InputsWrapper>
      <FooterWrapper>
        {/* TODO: handle invite friends */}
        <StyledText as={'a'}>Zaproś znajomych</StyledText>

        <ButtonsWrapper>
          <CancelButton onClick={handleClose}>Anuluj</CancelButton>
          <Button>Dodaj</Button>
        </ButtonsWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default CreateGroup
