import React from 'react'

import PropTypes from 'prop-types'

import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Content, Header, IconBackground, StyledTags, Wrapper } from './GroupCard.styles'

const GroupCard = ({ name, numOfPeople = 0, text, tags }) => {
  return (
    <Wrapper>
      <Header>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig>{name}</Title>
          <Text>{numOfPeople} członków</Text>
        </div>
      </Header>
      <Content>
        <Text as="p">{text}</Text>
        <StyledTags>{tags}</StyledTags>
      </Content>
    </Wrapper>
  )
}

GroupCard.propTypes = {
  name: PropTypes.string.isRequired,
  numOfPeople: PropTypes.number,
  text: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default GroupCard
