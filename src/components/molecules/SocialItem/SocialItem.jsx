import React from 'react'
import { Wrapper } from './SocialItem.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import Dot from '@/components/atoms/Dot/Dot'

export const SocialItem = ({ TitleText, ActivityName, Members, Comment, WeeklyPostCount }) => {
  return (
    <Wrapper>
      <Title isBold>{TitleText}</Title>
      <div>
        <Text isBig isBold>
          {ActivityName}
        </Text>
        <Dot />
        {Comment ? (
          <Text>{Comment}</Text>
        ) : Members ? (
          <Text>{Members} członków</Text>
        ) : (
          <Text>{WeeklyPostCount} postów tygodniowo</Text>
        )}
      </div>
    </Wrapper>
  )
}
