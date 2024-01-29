import { useNavigate } from 'react-router'

import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { getActivityIcon } from '@/helpers/getActivityIcon'

import { GroupIconDiv, RightWrapper, StyledText, Wrapper } from './SocialItem.styles'

export const SocialItem = (props) => {
  const { name, activity, isWithoutTitle } = props
  const navigate = useNavigate()

  const navigateToGroupPage = () => {
    navigate(`/groups/${props.id}`)
  }

  return (
    <Wrapper>
      <GroupIconDiv>
        <img src={getActivityIcon(activity?.name)} alt="activity" />
      </GroupIconDiv>
      <RightWrapper onClick={navigateToGroupPage}>
        {isWithoutTitle ? null : <Text isBold>{name}</Text>}
        <div>
          <StyledText>{activity?.name}</StyledText>
          <Dot />
          <StyledText>Popularna</StyledText>
        </div>
      </RightWrapper>
    </Wrapper>
  )
}
