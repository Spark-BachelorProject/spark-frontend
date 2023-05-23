import React from 'react'

import { Title } from '@/components/atoms/Title/Title.styles'
import IconAndLabel from '@/components/molecules/IconAndLabel/IconAndLabel'

import { Wrapper } from './SimilarGroups.styles'

const SimilarGroups = () => {
  return (
    <Wrapper>
      <Title isBig isBold>
        Podobne grupy
      </Title>
      <IconAndLabel title="Węglin Spacery" subTitle="12 członków" />
      <IconAndLabel title="UMCS flanki" subTitle="37 członków" />
    </Wrapper>
  )
}

export default SimilarGroups
