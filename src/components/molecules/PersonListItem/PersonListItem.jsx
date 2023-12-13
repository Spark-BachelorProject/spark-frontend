import Avvvatars from 'avvvatars-react'

import { Text } from '@/components/atoms/Text/Text.styles'

import { Wrapper } from './PersonListItem.styles'

export const PersonListItem = ({ firstName, lastName, initials }) => {
  return (
    <Wrapper>
      <Avvvatars value={initials} />
      <Text isBold>
        {firstName} {lastName}
      </Text>
    </Wrapper>
  )
}
