import Title from '@/components/atoms/Title/Title'
import React from 'react'
import { Wrapper } from './TitleBar.styles'

export const TitleBar = ({ city }) => {
  return (
    <Wrapper>
      <Title>
        Aktualne aktywności w <span>{city}</span>
      </Title>
    </Wrapper>
  )
}
