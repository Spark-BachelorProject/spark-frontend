import React from 'react'

import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './PersonListItem.styles'

export const PersonListItem = ({ firstName, lastName, profilePictureURL }) => {
  return (
    <Wrapper>
      <Thumbnail url={profilePictureURL} alt={`${firstName} ${lastName} avatar`} />
      <Title isBold>
        {firstName} {lastName}
      </Title>
    </Wrapper>
  )
}
