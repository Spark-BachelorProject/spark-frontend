import React from 'react'

import Avvvatars from 'avvvatars-react'

import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './PersonListItem.styles'

export const PersonListItem = ({ firstName, lastName, initials }) => {
  return (
    <Wrapper>
      <Avvvatars value={initials} />
      <Title isBold>
        {firstName} {lastName}
      </Title>
    </Wrapper>
  )
}
