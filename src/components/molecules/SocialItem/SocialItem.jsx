import React from 'react'

import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './SocialItem.styles'

export const SocialItem = (props) => {
  const { name, activity, members, description, isWithoutTitle } = props

  const WeeklyPostCount = 5
  return (
    <Wrapper>
      {isWithoutTitle ? null : <Title isBold>{name}</Title>}
      <div>
        <Text isBig isBold>
          {activity?.name}
        </Text>
        <Dot />
        {description ? (
          <Text>{description}</Text>
        ) : members ? (
          <Text>{members.length} członków</Text>
        ) : (
          <Text>{WeeklyPostCount} postów tygodniowo</Text>
        )}
      </div>
    </Wrapper>
  )
}
