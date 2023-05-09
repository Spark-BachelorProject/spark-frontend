import React from 'react'

import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './TitleBar.styles'

export const TitleBar = ({ city }) => {
  return (
    <Wrapper>
      <Title isBig>
        To dzieje się w <span>{city}</span>!
      </Title>
    </Wrapper>
  )
}
