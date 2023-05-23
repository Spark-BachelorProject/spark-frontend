import React from 'react'

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

const GroupsActionBar = ({
  hasFilters = true,
  groupName = 'Grupy',
  numOfPosts = 0,
  buttonText = 'Stwórz grupę',
}) => {
  return (
    <Wrapper>
      <IconAndLabel>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig>{groupName}</Title>
          <Text>{numOfPosts ? `${numOfPosts} aktualnych postów` : `124 grupy`}</Text>
        </div>
      </IconAndLabel>
      <GroupsActionSection>
        {hasFilters ? (
          <StyledIconBorder tabIndex="0">
            <FilterIcon />
          </StyledIconBorder>
        ) : null}
        <StyledIconBorder tabIndex="0">
          <StyledSearchIcon />
        </StyledIconBorder>

        <Button>{buttonText}</Button>
      </GroupsActionSection>
    </Wrapper>
  )
}

export default GroupsActionBar
