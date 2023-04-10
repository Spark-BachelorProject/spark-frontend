import { Title } from '@/components/atoms/Title/Title.styles'
import React from 'react'
import { Wrapper } from './TitleBar.styles'

export const TitleBar = ({ city }) => {
  return (
    <Wrapper>
      <Title isBig>
        Aktualne aktywności w <span>{city}</span>
      </Title>
    </Wrapper>
  )
}
