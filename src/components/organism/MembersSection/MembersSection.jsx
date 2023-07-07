import React from 'react'

import { Title } from '@/components/atoms/Title/Title.styles'
import MembersList from '@/components/molecules/MembersList/MembersList'

import { StyledButton, Wrapper } from './MembersSection.styles'

const members = [
  { firstName: 'Kamil', lastName: 'Wrótny' },
  { firstName: 'Robert', lastName: 'Lewandowski' },
  { firstName: 'Julia', lastName: 'Wieniawa' },
  { firstName: 'Wojciech', lastName: 'Dzień' },
]

const MembersSection = () => {
  return (
    <Wrapper>
      <Title isBig isBold>
        Członkowie
      </Title>
      <MembersList members={members} />
      <StyledButton borderOnly>Zaproś znajomego</StyledButton>
    </Wrapper>
  )
}

export default MembersSection
