import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './GroupsHeader.styles'

const GroupsHeader = () => {
  return (
    <Wrapper>
      <Title isBold>Znajdź aktywne społeczności w Twoim mieście</Title>
      <Text>Poznawaj ludzi z podobnymi zainteresowaniami!</Text>
    </Wrapper>
  )
}

export default GroupsHeader
