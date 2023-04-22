import React from 'react'
import { Wrapper } from './PersonListItem.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const PersonListItem = ({ name, imageSrc }) => {
  return (
    <Wrapper>
      <Thumbnail />
      <Title>{name}</Title>
    </Wrapper>
  )
}
