import React from 'react'

import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './PersonListItem.styles'

export const PersonListItem = ({ name, imageSrc, isBold }) => {
  return (
    <Wrapper>
      <Thumbnail />
      <Title isBold={isBold}>{name}</Title>
    </Wrapper>
  )
}
