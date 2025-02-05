import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { getActivityIcon } from '@/helpers/getActivityIcon'

import { GroupIconDiv, StyledText, Wrapper } from './RecomendedActivity.styles'

export const RecomendedActivity = (props) => {
  let { name, average } = props
  average = Math.round(average)
  let postWord = 'postów tyg.'

  if (average === 1) {
    postWord = 'post tyg.'
  } else if (average > 1 && average < 5) {
    postWord = 'posty tyg.'
  }

  return (
    <Wrapper>
      <GroupIconDiv>
        <img src={getActivityIcon(name)} alt="activity" />
      </GroupIconDiv>
      <Text isBold>{name}</Text>
      <Dot />
      <StyledText>
        {average} {postWord}
      </StyledText>
    </Wrapper>
  )
}
