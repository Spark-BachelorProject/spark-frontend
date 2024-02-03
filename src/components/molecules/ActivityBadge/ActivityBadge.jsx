import { getActivityIcon } from '@/helpers/getActivityIcon'

import { Wrapper } from './ActivityBadge.styles'

export const ActivityBadge = ({ name }) => {
  return (
    <Wrapper>
      <img src={getActivityIcon(name)} alt={name} />
      {/* <StyledText>{name}</StyledText> */}
    </Wrapper>
  )
}
