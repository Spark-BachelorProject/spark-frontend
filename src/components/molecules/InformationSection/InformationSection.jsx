import React from 'react'

import Tags from '@/components/atoms/Tags/Tags'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './InformationSection.styles'

const InformationSection = () => {
  return (
    <Wrapper>
      <Title isBig isBold>
        Informacje
      </Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas voluptatibus
        sequi, odit aut error vero modi natus odio quibusdam corporis doloribus fugit quas
        dignissimos expedita earum velit deserunt nesciunt.
      </Text>
      <Tags>{['Piłka Nożna', 'Hala']}</Tags>
    </Wrapper>
  )
}

export default InformationSection
