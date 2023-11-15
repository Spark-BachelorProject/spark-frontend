import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './SocialItem.styles'

export const SocialItem = (props) => {
  const { name, activity, isWithoutTitle, average } = props

  return (
    <Wrapper>
      {isWithoutTitle ? null : <Title isBold>{name}</Title>}
      <div>
        <Text isBig isBold>
          {activity?.name}
        </Text>

        <Text>{average}</Text>
      </div>
    </Wrapper>
  )
}
