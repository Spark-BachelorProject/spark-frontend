import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { StyledTags, Wrapper } from './GroupInfo.styles'

export const GroupInfo = () => {
  return (
    <Wrapper>
      <Title isBig isBold>
        O grupie
      </Title>
      <Text>Spotykamy się głównie w piątki i soboty na wieczorne granie</Text>
      <StyledTags>
        {[
          {
            id: 1,
            name: 'Kajaki',
            type: 'Sport',
          },
        ]}
      </StyledTags>
    </Wrapper>
  )
}
