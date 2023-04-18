import React from 'react'
import { Wrapper } from './SocialItem.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import Dot from '@/components/atoms/Dot/Dot'

export const SocialItem = ({ TitleText, ActivityName, Members }) => {
  return (
    <Wrapper>
      <Title isBold>{TitleText}</Title>
      <div>
        <Text>{ActivityName}</Text>
        <Dot />
        <Text>{Members} członków</Text>
      </div>
    </Wrapper>
  )
}
