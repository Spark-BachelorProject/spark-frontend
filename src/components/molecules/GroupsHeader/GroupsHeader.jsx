import React from 'react'
import { Wrapper } from './GroupsHeader.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

const GroupsHeader = () => {
  return (
    <Wrapper>
      <Title isBold>Znajdź aktywne społeczności w Twoim mieście</Title>
      <Text>Poznawaj ludzi z podobnymi zainteresowaniami!</Text>
    </Wrapper>
  )
}

export default GroupsHeader
