import React from 'react'
import { Title } from '@/components/atoms/Title/Title.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import Dot from '@/components/atoms/Dot/Dot'
import { SocialItem, Wrapper } from './SocialSection.styles'

const SocialsSection = () => {
  return (
    <Wrapper>
      <Title isBig isBold>
        Twoje Społeczności
      </Title>
      <SocialItem>
        <Title isBold>UMCS Futsal</Title>
        <div>
          <Text>Piłka halowa</Text>
          <Dot />
          <Text>13 członków</Text>
        </div>
      </SocialItem>
      <SocialItem>
        <Title isBold>UMCS Futsal</Title>
        <div>
          <Text>Piłka halowa</Text>
          <Dot />
          <Text>13 członków</Text>
        </div>
      </SocialItem>
      <SocialItem>
        <Title isBold>UMCS Futsal</Title>
        <div>
          <Text>Piłka halowa</Text>
          <Dot />
          <Text>13 członków</Text>
        </div>
      </SocialItem>
      <span isBold>Wszystkie</span>
    </Wrapper>
  )
}

export default SocialsSection
