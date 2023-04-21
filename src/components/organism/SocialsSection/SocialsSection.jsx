import React from 'react'
import { Title } from '@/components/atoms/Title/Title.styles'
// import { Text } from '@/components/atoms/Text/Text.styles'
// import Dot from '@/components/atoms/Dot/Dot'
// import { SocialItem, Wrapper } from './SocialSection.styles'
import { Wrapper } from './SocialSection.styles'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'

const SocialsSection = () => {
  return (
    <Wrapper>
      <Title isBig isBold>
        Twoje Grupy
      </Title>
      <SocialItem TitleText="Pollub Hala" ActivityName="Futsal" Members={32} />
      <SocialItem TitleText="Węglin Nordic Walking" ActivityName="Nordic Walking" Members={8} />
      <SocialItem TitleText="Squash Po Piwie" ActivityName="Squash" Members={4} />
      <span>Wszystkie</span>
    </Wrapper>
  )
}

export default SocialsSection
