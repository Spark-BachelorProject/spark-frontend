import React from 'react'

import styled from 'styled-components'

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import {
  GroupsActionSection,
  IconAndLabel,
  IconBackground,
  StyledIconBorder,
  StyledSearchIcon,
  Wrapper,
} from './GroupsActionBar.styles'

const GroupsActionBar = () => {
  return (
    <Wrapper>
      <IconAndLabel>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig>Grupy</Title>
          <Text>124 grupy</Text>
        </div>
      </IconAndLabel>
      <GroupsActionSection>
        <StyledIconBorder tabIndex="0">
          <StyledSearchIcon />
        </StyledIconBorder>
        <StyledIconBorder tabIndex="0">
          <FilterIcon />
        </StyledIconBorder>
        <Button>Stwórz grupę</Button>
      </GroupsActionSection>
    </Wrapper>
  )
}

export default GroupsActionBar
