import { useNavigate } from 'react-router'

import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { StyledText, Wrapper } from './SocialItem.styles'

export const SocialItem = (props) => {
  const { name, activity, isWithoutTitle, average } = props
  const navigate = useNavigate()

  const navigateToGroupPage = () => {
    navigate(`/groups/${props.id}`)
  }

  return (
    <Wrapper onClick={navigateToGroupPage}>
      {isWithoutTitle ? null : <Title isBold>{name}</Title>}
      <div>
        <Text isBig>{activity?.name}</Text>
        <StyledText>{average}</StyledText>
        <Dot />
        <StyledText>Popularna</StyledText>
      </div>
    </Wrapper>
  )
}
