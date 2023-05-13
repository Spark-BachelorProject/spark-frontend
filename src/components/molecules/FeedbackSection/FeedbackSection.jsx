import React from 'react'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper, StyledButton } from './FeedbackSection.styles'

export const FeedbackSection = () => {
  return (
    <Wrapper>
      <Title isBold>Twoja opinia się dla nas liczy</Title>
      <Text isBig>Daj nam znać co możemy poprawić!</Text>
      <StyledButton borderOnly>Napisz feedback</StyledButton>
    </Wrapper>
  )
}
